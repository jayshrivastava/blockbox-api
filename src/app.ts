import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import swaggerUiExpress from 'swagger-ui-express';
import usersRoute from './routes/users.route';
import loggerUtil from './util/logger.util';
import swaggerJson from './util/swagger.json';

class App {

    private app = express();
    private logger = new loggerUtil('server');

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

        this.app.use('/', usersRoute);

        // Catch all errors and send 400
        this.app.use((error: any, req: Request, res: Response, next: () => void) => {
            this.logger.error(error);
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
            this.logger.info(`Server started on port ${port}`);
        });
    }

}

export default App;
