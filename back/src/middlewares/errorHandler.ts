import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";

function errorHandler(err: ApiError, req: Request, res: Response, next: NextFunction) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    res.status(statusCode).json({
        success: false,
        message: message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}

export default errorHandler;