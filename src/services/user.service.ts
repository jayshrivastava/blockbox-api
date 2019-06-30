import { IUser, IUserModel, IRatingsIndexedByMovieId } from '../interfaces/user.interface';
import userRepository from '../repositories/user.repository';

class UserService {

    public async createUser(name: string): Promise<IUserModel> {
        try {
            return await userRepository.createUser({
                name,
                userId: "",
                ratingsIndexedByMovieId: {}
            });
        } catch (error) {
            throw error;
        }
    }

    public async updateRatings (userId: string, ratingsIndexedByMovieId: IRatingsIndexedByMovieId): Promise<IUserModel> {
        try {
            const response = await userRepository.updateRatings(userId, ratingsIndexedByMovieId);
            return await userRepository.getUserById(userId);
        } catch (error) {
            throw error;
        }
    }

    public async getUserById (userId: string): Promise<IUserModel> {
        try {
            return await userRepository.getUserById(userId);
        } catch (error) {
            throw error;
        }
    }

    public async getAllUsersIndexedById(): Promise<any[]> {
        try {

            return await userRepository.getAllUsers();
        } catch (error) {
            throw error;
        }
    }

}

export default new UserService();
