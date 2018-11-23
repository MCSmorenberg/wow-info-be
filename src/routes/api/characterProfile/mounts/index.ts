import express from 'express';

import mountsGet from './get';

const indexRoutes = () => {
    const router = express.Router();

    router.get('/', mountsGet);

    return router;
};

export default indexRoutes;
