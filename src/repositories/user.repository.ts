import { UserModel } from '../database/models';
import { IUser, IUserModel, IRatingsIndexedByMovieId } from '../interfaces/user.interface';

class UserRepository {

    public async getUserById(_id: string) {
        try {
            return await UserModel.findOne({ _id });
        } catch (error) {
            throw error;
        }
    }

    public async createUser(userData: IUser) {
        try {
            return await UserModel.create(userData);
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

    public async updateRatings(userId: string, ratingsIndexedByMovieId: IRatingsIndexedByMovieId) {
        try {
            return await UserModel.update({
                _id: userId,
            },{
                $set: {
                    ratingsIndexedByMovieId
                }
            }
            );
        } catch (error) {
            throw error;
        }
    }

}

export default new UserRepository();
