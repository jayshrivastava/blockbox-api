import { Document } from "mongoose";

export interface IUser {
    name: string,
}

export interface IUserModel extends IUser, Document {}