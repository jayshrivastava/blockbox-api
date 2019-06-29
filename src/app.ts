import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import swaggerUiExpress from 'swagger-ui-express';
import usersRoute from './routes/users.route';
import moviesRoute from './routes/movies.route';

import swaggerJson from './util/swagger.json';

class App {

    private app = express();

    constructor() {
        // allow CORs requests
        this.app.use((req: Request, res: Response, next: () => void) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            next();
        });

        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // parse application/json
        this.app.use(bodyParser.json());

        this.app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerJson));

        this.app.use('/users', usersRoute);
        this.app.use('/movies', moviesRoute);


        // Catch all errors and send 400
        this.app.use((error: any, req: Request, res: Response, next: () => void) => {
            console.error(error);
            res.status(400).send({
                error,
                message: 'Client side request error.',
                request: req.url,
                statusCode: 400,
            });
        });
    }

    public startServer(port: string) {
        this.app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    }

}

export default App;
