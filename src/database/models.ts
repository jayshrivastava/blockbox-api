import { model } from 'mongoose';

// Users
import { IUserModel } from '../interfaces/user.interface';
import userSchema from './schema/user.schema';
export const UserModel = model<IUserModel>('User', userSchema);

// Movies
import { IMovieModel } from './../interfaces/movie.interface';
import movieSchema from './schema/movie.schema';
export const MovieModel = model<IMovieModel>('Movie', movieSchema);
