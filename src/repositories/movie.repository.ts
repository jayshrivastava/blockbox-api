import { MovieModel } from '../database/models';
import { IMovieModel, IMovie } from '../interfaces/movie.interface';
import { MAX_NUMBER_OF_MOVIES_ON_NULL_SEARCH } from './../constants/constants'

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
            if (!searchQuery) {
                return await MovieModel.find({
                    title_lower:  { $regex: searchQuery} 
                }).limit(MAX_NUMBER_OF_MOVIES_SEARCHED);

            }
            return await MovieModel.find({
                title_lower:  { $regex: searchQuery} 
            });
        } catch (error) {
            throw error;
        }
    }
}

export default new MovieRepository();
