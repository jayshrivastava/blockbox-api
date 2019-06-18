import { IUser } from '../interfaces/user.interface';
import userRepository from '../repositories/user.repository';

class ProductLogService {

    public async createUser(userData: IUser): Promise<void> {
        try {
            await userRepository.createUser(userData);
        } catch (error) {
            throw error;
        }
    }

}

export default new ProductLogService();
