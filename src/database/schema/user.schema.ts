import { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    userId: {
        required: false,
        type: String,
    },
    ratingsIndexedByMovieId: {
        required: true,
        type: Object,
    },
}, { collection: 'users_6' },

);

export default userSchema;
