import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';

const createApp = () => {
    const app = express();

    app.use(cors());

    app.use(bodyParser.json());

    // app.set('view engine', 'html');

    app.use('/', routes());

    return app;
};

export default createApp;
