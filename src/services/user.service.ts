import { IUser } from '../interfaces/user.interface';
import userRepository from '../repositories/user.repository';

class UserService {

    public async createUser(userData: IUser): Promise<void> {
        try {
            await userRepository.createUser(userData);
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
