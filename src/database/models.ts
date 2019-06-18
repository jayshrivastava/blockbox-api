import { model } from 'mongoose';
import { IUserModel } from '../interfaces/user.interface';
import userSchema from './schema/user.schema';

export const UserModel = model<IUserModel>('User', userSchema);
