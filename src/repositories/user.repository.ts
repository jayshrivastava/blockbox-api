import { UserModel } from '../database/models';
import { IUser, IUserModel } from '../interfaces/user.interface';
import loggerUtil from '../util/logger.util';

class UserRepository {

    private logger = new loggerUtil('repository');

    public async createUser(userData: IUser) {
        try {
            await UserModel.create(userData);
        } catch (error) {
            throw error;
        }
    }

    public async getAllUsers(): Promise<any[]> {
        try {
            return await UserModel.find().lean();
        } catch (error) {
            throw error;
        }
    }

}

export default new UserRepository();
