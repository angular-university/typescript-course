
import {Request, Response} from 'express';

export function onSuccess(res: Response, data:any) {

    console.log('OK');

    res.status(200).json(data);
}
