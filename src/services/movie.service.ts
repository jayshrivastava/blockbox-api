import movieRepository from '../repositories/movie.repository';

class MovieService {

    public async getMovieById(movieId: string) {
        try {
            return await movieRepository.getMovieById(movieId);
        } catch (error) {
            throw error;
        }
    }
}

export default new MovieService();
