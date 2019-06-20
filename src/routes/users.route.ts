import { Router } from 'express';
import usersController from '../controllers/user.controller';

const usersRouter = Router();

usersRouter.post('/users', usersController.createUser);

// TODO: route should take in params to include rated items, the top N recommended items etc.
usersRouter.get('/users/recommendations/:id/:includeRated', usersController.getRecommendationsForUser);


export default usersRouter;
