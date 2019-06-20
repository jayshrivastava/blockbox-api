class SimilarityService {

    public async generatePredictionsFromUserSimilarity(usersIndexedById: any, userSimilarityObject: any, targetUserId: string): Promise<any[]> {
        try {

            const userRatingsPredictions: any[] = [];
            const targetUser = usersIndexedById[targetUserId];
            const similaritiesSum = Object.keys(userSimilarityObject).reduce((similaritiesSum:number, userId: string) => {
                return similaritiesSum + userSimilarityObject[userId];
            }, 0);

            for (const movieId in targetUser.ratingsIndexedByMovieId) {
                let movieScore = 0;
                for (const userId in usersIndexedById) {
                    if (userId !== targetUser._id) {
                        movieScore += userSimilarityObject[userId] * usersIndexedById[userId].ratingsIndexedByMovieId[movieId]
                    }
                }
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
