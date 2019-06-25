import userRepository from '../repositories/user.repository';
import { IUser } from '../interfaces/user.interface'

class SimilarityService {

    public async generateUserSimilarity(users: IUser[], targetUser: any): Promise<object> {
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

}

export default new SimilarityService();
