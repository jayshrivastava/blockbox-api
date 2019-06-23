import movieRepository from '../repositories/movie.repository';

class MovieService {

    public async getMovieById(movie_id: string) {
        try {
            return await movieRepository.getMovieById(movie_id);
        } catch (error) {
            throw error;
        }
    }
}

export default new MovieService();
