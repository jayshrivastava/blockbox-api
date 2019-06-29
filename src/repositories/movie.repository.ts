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

    public async getAll() {
        try {
            return await MovieModel.find().lean();
        } catch (error) {
            throw error;
        }
    }

    public async searchByTitle(searchQuery: string) {
        try {
            return await MovieModel.find({
                title_lower:  { $regex: searchQuery} 
            });
        } catch (error) {
            throw error;
        }
    }
}

export default new MovieRepository();
