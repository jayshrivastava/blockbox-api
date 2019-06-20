import { Request, Response } from 'express';
import { IUser } from '../interfaces/user.interface';

import userService from '../services/user.service';
import similarityService from '../services/similarity.service';
import predictionsService from '../services/predictions.service';

import loggerUtil from '../util/logger.util';

class userController {

    private logger = new loggerUtil('controller');

    public createUser = async (req: Request, res: Response, next: (error: any) => void) => {
        try {
            const userData: IUser = req.body;
            await userService.createUser(userData);
            res.send({
                body: 'Successfully created user',
            });
        } catch (error) {
            next(error);
        }
    }

    public getRecommendationsForUser = async (req: Request, res: Response, next: (error: any) => void) => {
        try {
            const userId = req.params.id;

            const usersIndexedById = await userService.getAllUsersIndexedById();

            const userSimilarityObject = await similarityService.generateUserSimilarity(usersIndexedById, userId);

            const userItemRatingsPredictions = await predictionsService.generatePredictionsFromUserSimilarity(usersIndexedById, userSimilarityObject, userId);

            userItemRatingsPredictions.sort((a:any, b:any) => { return b.score - a.score});

            userItemRatingsPredictions.slice(0, 100);
            
            res.send({
                body: userItemRatingsPredictions,
            });
        } catch (error) {
            next(error);
        }
    }
 

}

export default new userController();
