import { MovieModel } from '../database/models';
import { IMovieModel, IMovie } from '../interfaces/movie.interface';

class MovieRepository {

    public async getMovieById(movieId: string) {
        try {
            return await MovieModel.findOne({ movieId });
        } catch (error) {
            throw error;
        }
    }

}

export default new MovieRepository();
