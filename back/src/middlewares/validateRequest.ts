import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import ClientError from "../utils/ClientError";


function validateRequest(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        next();
    } else {
        const firstError = errors.array({ onlyFirstError: true })[0];
        if (firstError.msg === 'username-check') {
            next(ClientError.usernameInvalid());
        } else if (firstError.msg === 'password-check') {
            next(ClientError.passwordInvalid());
        } else {
            next(ClientError.genericInvalid(firstError.msg));
        }
    }
}

export default validateRequest;