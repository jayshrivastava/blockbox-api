import { Document } from "mongoose";

export interface IUser {
    userId: string;
    ratingsIndexedByMovieId: IRatingsIndexedByMovieId;
    name: string;
}

export interface IRatingsIndexedByMovieId {
    [index: string]: number
}
export interface IUserModel extends IUser, Document {}