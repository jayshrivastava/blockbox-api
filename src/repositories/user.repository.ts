import { UserModel } from '../database/models';
import { IUser, IUserModel } from '../interfaces/user.interface';

class UserRepository {

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
