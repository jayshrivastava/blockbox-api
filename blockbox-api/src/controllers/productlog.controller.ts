import { Request, Response } from 'express';
import { IUser } from '../interfaces/user.interface';
import productlogService from '../services/productlog.service';
import loggerUtil from '../util/logger.util';

class userController {

    private logger = new loggerUtil('controller');

    public createUser = async (req: Request, res: Response, next: (error: any) => void) => {
        try {
            const productData: IUser = req.body;
            await productlogService.createUser(productData);
            res.send({
                body: 'Successfully created user',
            });
        } catch (error) {
            next(error);
        }
    }

}

export default new userController();
