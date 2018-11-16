import express from 'express';

import mountsRoutes from './mounts';

const indexRoutes = () => {
    const router = express.Router();

    router.use('/mounts', mountsRoutes());

    return router;
};

export default indexRoutes;