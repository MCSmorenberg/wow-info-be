import express from 'express';

const indexRoutes = () => {
    const router = express.Router();
    router.get('/', (req, res) => {
        res.render('index');
    });

    return router;
}

export default indexRoutes;
