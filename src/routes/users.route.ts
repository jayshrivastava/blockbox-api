import { Router } from 'express';
import usersController from '../controllers/productlog.controller';

const usersRouter = Router();

usersRouter.post('/users', usersController.createUser);

export default usersRouter;
