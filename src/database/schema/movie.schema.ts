import { Schema } from 'mongoose';

const movieSchema = new Schema({
    title: {
        required: true,
        type: String,
    },
    movie_id: {
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
}, { collection: 'movies_3' },

);

export default movieSchema;
