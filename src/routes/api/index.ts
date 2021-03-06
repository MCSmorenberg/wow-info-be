import express from 'express';

import characterProfileRoutes from './characterProfile';

const indexRoutes = () => {
    const router = express.Router();

    router.use('/character', characterProfileRoutes());

    return router;
};

export default indexRoutes;
