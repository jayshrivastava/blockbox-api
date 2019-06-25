import { Schema } from 'mongoose';

const movieSchema = new Schema({
    title: {
        required: true,
        type: String,
    },
    movieId: {
        required: true,
        type: String,
    },
    ratingsIndexedByUserId: {
        required: true,
        type: Object,
    },
    genres: {
        required: true,
        type: Array,
    }
}, { collection: 'movies_6' },

);

export default movieSchema;
