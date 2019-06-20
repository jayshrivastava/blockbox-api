import { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    user_id: {
        required: false,
        type: String,
    },
    ratingsIndexedByMovieId: {
        required: true,
        type: Object,
    },
    recommendations: {
        required: false,
        type: Object,
    },
}, { collection: 'users_3' },

);

export default userSchema;
