import { Router } from 'express';
import moviesController from '../controllers/movie.controller';

const moviesRouter = Router();

moviesRouter.get('/search/:searchQuery?', moviesController.searchMovies);


export default moviesRouter;
