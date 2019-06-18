import { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {
        required: true,
        type: String,
    },

}, { collection: 'users' },

);

export default userSchema;
