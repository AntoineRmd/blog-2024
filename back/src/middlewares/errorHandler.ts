import { NextFunction, Request, Response } from "express";

// TS
interface ResponseError extends Error {
    statusCode?: number;
}

function errorHandler(err: ResponseError, req: Request, res: Response, next: NextFunction) {
    console.log("Middleware Error Handling: A server error occured.", err);
    const errStatus = err.statusCode || 500;
    const errMessage = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}

export default errorHandler;