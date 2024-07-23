import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";

function errorHandler(err: ApiError, req: Request, res: Response, next: NextFunction) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something unexpectedly went wrong on our side. Please report your issue";
    res.status(statusCode).json({
        success: false,
        message: process.env.NODE_ENV === 'development' ? message : "Something unexpectedly went wrong on our side. Please report your issue",
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
}

export default errorHandler;