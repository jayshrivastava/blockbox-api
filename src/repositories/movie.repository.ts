import { MovieModel } from '../database/models';
import { IMovieModel, IMovie } from '../interfaces/movie.interface';

class MovieRepository {

    public async getMovieById(movie_id: string) {
        try {
            return await MovieModel.findOne({ movie_id });
        } catch (error) {
            throw error;
        }
    }

}

export default new MovieRepository();
