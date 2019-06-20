class SimilarityService {

    public async generateUserSimilarity(usersIndexedById: any, targetUserId: string): Promise<object> {
        try {

            const similaritiesObj: any = {};
            const targetUser = usersIndexedById[targetUserId];

            for (const compareToUserId in usersIndexedById) {

                if (compareToUserId !== targetUser._id) {
                    const compareToUser = usersIndexedById[compareToUserId];

                    let targetSquareSum = 0.0;
                    let compareToSquareSum = 0.0;
                    let dotProductSum = 0.0;

                    for (const movieId in targetUser.ratingsIndexedByMovieId) {

                        const targetUserMovieRating = targetUser.ratingsIndexedByMovieId[movieId];
                        const compareUserMovieRating = compareToUser.ratingsIndexedByMovieId[movieId];

                        targetSquareSum += Math.pow(targetUserMovieRating, 2);
                        compareToSquareSum += Math.pow(compareUserMovieRating, 2);
                        dotProductSum += targetUserMovieRating * compareUserMovieRating;

                    }

                    const similarity = dotProductSum / (Math.pow(targetSquareSum, 0.5) * Math.pow(compareToSquareSum, 0.5));
                    similaritiesObj[compareToUserId] = similarity;
                }
            }

            return similaritiesObj;

        } catch (error) {
            throw error;
        }
    }

}

export default new SimilarityService();
