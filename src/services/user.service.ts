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

    public async getAllUsersIndexedById(): Promise<object> {
        try {

            const users: any[] =  await userRepository.getAllUsers();
            let usersObject: { [index:string] : any } = {};
            users.forEach((userObj: any) => {
                usersObject[userObj._id] = userObj
            })

            return usersObject;

        } catch (error) {
            throw error;
        }
    }

}

export default new UserService();
