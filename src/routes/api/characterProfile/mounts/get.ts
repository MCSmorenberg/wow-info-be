import { Request, Response, NextFunction } from 'express';
import getMounts from '../../../../modules/mounts/getMounts';

const mountsGet = async (req: Request, res: Response, next: NextFunction) => {;
    try {
        const mounts: any = await getMounts();

        res.status(200).send(mounts);
    } catch (error) {

        return next(error);
    }
};

export default mountsGet;

