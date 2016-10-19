
import {Request, Response} from 'express';


export function onError(res:Response, message: string, err:any) {

    console.log('onError', err);

    console.error(message, err);
    res.status(500).send();

}
