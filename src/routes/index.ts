import express from 'express';

import apiRoutes from './api';

const indexRoutes = () => {
    const router = express.Router();
    router.get('/', (req, res) => {
        res.render('index');
    });
    router.use('/api', apiRoutes());

    return router;
}

export default indexRoutes;
