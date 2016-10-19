
import {Request, Response} from 'express';


export function onError(res:Response, message: string, err:any) {
    console.error(message, err);
    res.status(500).send();

}
