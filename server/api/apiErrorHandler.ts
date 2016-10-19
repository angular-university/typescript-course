
import {Request, Response, RequestHandler, ErrorRequestHandler, NextFunction} from 'express';





export const apiErrorHandler: ErrorRequestHandler =  (err: any, req: Request, res: Response, next: NextFunction) => {

    console.log('error handler triggered');

    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
    } else {
        console.log('not an ajax request, continuing....');
        next(err);
    }


};


