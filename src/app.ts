import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const createApp = () => {
    const app = express();

    app.use(cors());

    app.use(bodyParser.json());

    return app;
};

export default createApp;
