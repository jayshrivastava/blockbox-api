import { Request, Response } from 'express';
import { IUser, IUserModel, IRatingsIndexedByMovieId } from '../interfaces/user.interface';

import userService from '../services/user.service';
import similarityService from '../services/similarity.service';
import predictionsService from '../services/prediction.service';
import movieService from '../services/movie.service';
import { IAllMoviesById } from '../interfaces/movie.interface';

class userController {

    public createUser = async (req: Request, res: Response, next: (error: any) => void) => {
        try {
            const { name } = req.body;
            const response = await userService.createUser(name);
            res.send({
                body: response,
            });
        } catch (error) {
            next(error);
        }
    }

    public updateRatings = async (req: Request, res: Response, next: (error: any) => void) => {
        try {
            const { id, ratingsIndexedByMovieId  } : {id: string, ratingsIndexedByMovieId: IRatingsIndexedByMovieId} = req.body;
            if (!id || !ratingsIndexedByMovieId) { throw Error('Missing Id or ratingsIndexedByMovieId'); }
            const response = await userService.updateRatings(id, ratingsIndexedByMovieId);
            res.send({
                body: response,
            });
        } catch (error) {
            next(error);
        }
    }

    public getRecommendationsForUser = async (req: Request, res: Response, next: (error: any) => void) => {
        try {
            const userId = req.params.id;

            const { count } = req.query;

            const users: any[] = await userService.getAllUsersIndexedById();
            const allMovies: IAllMoviesById = await movieService.getAll();

            const targetUser: IUserModel= users.find(user => {
                return user._id == userId;
            })

            if (!Object.keys(targetUser.ratingsIndexedByMovieId).length) {
                throw Error('User has not rated any items!');
            }

            const userSimilarityObject = await similarityService.generateUserSimilarityV2(users, targetUser);

            let userMovieRatingsPredictions = await predictionsService.generatePredictionsFromUserSimilarityV2(users, userSimilarityObject, targetUser, allMovies);

            userMovieRatingsPredictions.sort((a: any, b: any) => { return b.score - a.score });

            let recommendationsToReturn: any[] = [];

            if (count) {
                let i = 0;
                let counter = 0;
                while (counter < count) {
                    while (targetUser.ratingsIndexedByMovieId[userMovieRatingsPredictions[i].movieId] === 0) {
                        i += 1
                    }
                    recommendationsToReturn.push(userMovieRatingsPredictions[i++])
                    counter += 1;
                }
            }

            const predictionResults = recommendationsToReturn.map(async (prediction: any) => {
                const movieObj = allMovies[prediction.movieId];
                return {
                    title: movieObj.title,
                    movieId: movieObj.movieId,
                    genres: movieObj.genres,
                    score: prediction.score
                }
            });

            let reponse = await Promise.all(predictionResults);

            res.send({
                body: reponse,
            });
        } catch (error) {
            next(error);
        }
    }


}

export default new userController();
