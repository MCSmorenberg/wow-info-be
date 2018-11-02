import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ejs from 'ejs';

import routes from './routes';

const createApp = () => {
    const app = express();

    app.use(cors());

    app.use(bodyParser.json());

    app.set('views', `${__dirname}/../public`);
    app.engine('html', ejs.renderFile);
    app.set('view engine', 'html');

    app.use('/', routes());

    console.log('4040 is the magic port');

    return app;
};

export default createApp;
