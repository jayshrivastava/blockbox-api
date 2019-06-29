import { IUser, IUserModel } from "../interfaces/user.interface";
import { IMovie, IAllMoviesById } from "../interfaces/movie.interface";

class SimilarityService {

    public generatePredictionsFromUserSimilarity = async (users: IUserModel[], userSimilarityObject: any, targetUser: IUser): Promise<any[]> => {
        try {

            const userRatingsPredictions: any[] = [];

            let similaritiesSum: number = 0;
            users.forEach((user: IUserModel) => {
                similaritiesSum += parseFloat(userSimilarityObject[user._id]);
            }, 0);

            for (const movieId in targetUser.ratingsIndexedByMovieId) {
                let movieScore = 0;
                users.forEach((user:IUserModel) => { 
                    movieScore += userSimilarityObject[user._id] * user.ratingsIndexedByMovieId[movieId];
                });
                userRatingsPredictions.push({
                    movieId: movieId,
                    score: movieScore/similaritiesSum
                });
            }

            return userRatingsPredictions;
        } catch (error) {
            throw error;
        }
    }

    public generatePredictionsFromUserSimilarityV2 = async (users: IUserModel[], userSimilarityObject: any, targetUser: IUser, allMovies: IAllMoviesById): Promise<any[]> => {
        try {

            const userRatingsPredictions: any[] = [];

            let similaritiesSum: number = 0;
            users.forEach((user: IUserModel) => {
                similaritiesSum += parseFloat(userSimilarityObject[user._id]);
            }, 0);

            Object.keys(allMovies).forEach((movieId: string) => {
                
                let movieScore = 0;
                users.forEach((user: IUserModel) => { 
                    const userMovieRating = movieId in user.ratingsIndexedByMovieId ? user.ratingsIndexedByMovieId[movieId] : 0;
                    movieScore += userSimilarityObject[user._id] * userMovieRating;
                });
                userRatingsPredictions.push({
                    movieId: movieId,
                    score: movieScore/similaritiesSum
                });
            });

            return userRatingsPredictions;
        } catch (error) {
            throw error;
        }
    }

}

export default new SimilarityService();
