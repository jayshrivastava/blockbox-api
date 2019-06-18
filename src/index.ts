import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from './app';
import loggerUtil from './util/logger.util';

const server = new app();
const logger = new loggerUtil('server');

try {
    if (!process.env.MONGO_DB_URI) throw new Error('ERROR: Missing MongoDB URI').stack;
    if (!process.env.PORT) throw new Error('ERROR: Missing Express Server Port').stack;
    mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true }, (error) => {
        if (error) throw error;
        logger.info(`Connected to mongodb at ${process.env.MONGO_DB_URI}`);
        server.startServer(process.env.PORT || '');
    });
} catch (error) {
    logger.error(error);
}
