import { Router } from 'express';
import usersController from '../controllers/user.controller';

const usersRouter = Router();

usersRouter.post('/users', usersController.createUser);

usersRouter.get('/users/recommendations/:id/:includeRated', usersController.getRecommendationsForUser);


export default usersRouter;
