import { Router } from 'express';
import usersController from '../controllers/user.controller';

const usersRouter = Router();

usersRouter.post('/', usersController.createUser);
usersRouter.get('/:id', usersController.getUserById);
usersRouter.put('/ratings', usersController.updateRatings);
usersRouter.get('/recommendations/:id', usersController.getRecommendationsForUser);


export default usersRouter;
