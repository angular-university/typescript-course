

import {ErrorRequestHandler} from 'express';
import {NextFunction} from "express-serve-static-core";
import {Response} from "express-serve-static-core";
import {Request} from "express-serve-static-core";




export function fallbackErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {

    res.status(500).send();

}


