import userRepository from '../repositories/user.repository';
import { IUser, IRatingsIndexedByMovieId, IUserModel } from '../interfaces/user.interface'

class SimilarityService {

    public generateUserSimilarity = async (users: IUserModel[], targetUser: any): Promise<object> => {
        try {

            const similaritiesObj: any = {};

            users.forEach((user) => {
                    let targetSquareSum = 0.0;
                    let compareToSquareSum = 0.0;
                    let dotProductSum = 0.0;

                    for (const movieId in targetUser.ratingsIndexedByMovieId) {

                        const targetUserMovieRating = targetUser.ratingsIndexedByMovieId[movieId];
                        const compareUserMovieRating = user.ratingsIndexedByMovieId[movieId];

                        targetSquareSum += Math.pow(targetUserMovieRating, 2);
                        compareToSquareSum += Math.pow(compareUserMovieRating, 2);
                        dotProductSum += targetUserMovieRating * compareUserMovieRating;

                    }

                    const similarity = dotProductSum / (Math.pow(targetSquareSum, 0.5) * Math.pow(compareToSquareSum, 0.5));
                    similaritiesObj[user._id] = similarity;
            });

            return similaritiesObj;

        } catch (error) {
            throw error;
        }
    }

    public generateUserSimilarityV2 = async (users: IUserModel[], targetUser: any): Promise<object> => {
        try {

            const similaritiesObj: any = {};
            let movieIds: IRatingsIndexedByMovieId = {};
            Object.keys(targetUser.ratingsIndexedByMovieId).forEach((movieId: string) => {
                movieIds[movieId] = 1;
            });

            users.forEach((user: IUserModel) => {
                    let targetSquareSum = 0.0;
                    let compareToSquareSum = 0.0;
                    let dotProductSum = 0.0;

                    Object.keys(user.ratingsIndexedByMovieId).forEach((movieId: string) => {
                        movieIds[movieId] = 1;
                    });
                    
                    for (const movieId in Object.keys(movieIds)) {

                        const targetUserMovieRating = movieId in targetUser.ratingsIndexedByMovieId ? targetUser.ratingsIndexedByMovieId[movieId] : 0;
                        const compareUserMovieRating = movieId in user.ratingsIndexedByMovieId ? user.ratingsIndexedByMovieId[movieId] : 0;

                        targetSquareSum += Math.pow(targetUserMovieRating, 2);
                        compareToSquareSum += Math.pow(compareUserMovieRating, 2);
                        dotProductSum += targetUserMovieRating * compareUserMovieRating;

                    }

                    const similarity = dotProductSum ? dotProductSum / (Math.pow(targetSquareSum, 0.5) * Math.pow(compareToSquareSum, 0.5)) : 0;
                    similaritiesObj[user._id] = similarity;
            });

            return similaritiesObj;

        } catch (error) {
            throw error;
        }
    }
}

export default new SimilarityService();
