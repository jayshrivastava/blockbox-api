import { Request, Response } from 'express';
import { IMovie } from '../interfaces/movie.interface';
import movieService from '../services/movie.service';

class movieController {

    public searchMovies = async (req: Request, res: Response, next: (error: any) => void) => {
        try {
            const searchQuery = req.params.searchQuery ? decodeURIComponent(req.params.searchQuery).toLowerCase() : '';

            const movies: IMovie[] = await movieService.searchMovies(searchQuery);

            res.send({
                body: movies,
            });
        } catch (error) {
            next(error);
        }
    }


}

export default new movieController();
