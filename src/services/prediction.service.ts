import { IUser } from "../interfaces/user.interface";

class SimilarityService {

    public async generatePredictionsFromUserSimilarity(users: IUser[], userSimilarityObject: any, targetUser: IUser): Promise<any[]> {
        try {

            const userRatingsPredictions: any[] = [];

            let similaritiesSum: number = 0;
            users.forEach((user: IUser) => {
                similaritiesSum += parseFloat(userSimilarityObject[user._id]);
            }, 0);

            for (const movieId in targetUser.ratingsIndexedByMovieId) {
                let movieScore = 0;
                users.forEach((user:IUser) => { 
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

}

export default new SimilarityService();
