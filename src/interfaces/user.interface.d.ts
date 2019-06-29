import { Document } from "mongoose";

export interface IUser {
    [x: string]: any
}

export interface IRatingsIndexedByMovieId {
    [index: string]: number
}
export interface IUserModel extends IUser, Document {}