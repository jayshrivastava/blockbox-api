import { Document } from "mongoose";

export interface IMovie {
    movie_id: string;
    title: string;
    genres: IGenres;
    ratingsIndexedByUserId?: IRatingsIndexedByUserId;
}

// String Array
export interface IGenres {
    [index: number]: string
}
export interface IRatingsIndexedByUserId {
    [x: string]: number
}

export interface IMovieModel extends IMovie, Document {}