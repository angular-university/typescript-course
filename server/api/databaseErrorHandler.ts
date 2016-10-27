

import {Response} from 'express';
const hri = require('human-readable-ids').hri;

export function databaseErrorHandler(res:Response, err: any) {
    const id = hri.random();
    console.error("Database error occurred ", id, err);
    res.status(500).json({code: 'ERR-002',
        message: `Error occurred error code ${id}`});
}