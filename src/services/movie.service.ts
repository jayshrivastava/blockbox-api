import movieRepository from '../repositories/movie.repository';
import { IMovie, IAllMoviesById } from '../interfaces/movie.interface';

class MovieService {

    public getMovieById = async (movieId: string) => {
        try {
            return await movieRepository.getMovieById(movieId);
        } catch (error) {
            throw error;
        }
    }

    public searchMovies = async (searchQuery: string) => {
        try {
            return await movieRepository.searchByTitle(searchQuery);
        } catch (error) {
            throw error;
        }
    }

    public getAll = async () => {
        try {
            let movies: IMovie[] = await movieRepository.getAll();
            let allMovies: IAllMoviesById = {};
            movies.forEach((movie: IMovie) => {
                allMovies[movie.movieId] = movie;
            });
            return allMovies;

        } catch (error) {
            throw error;
        }
    }
}

export default new MovieService();
