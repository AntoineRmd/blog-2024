import { Request, Response, NextFunction } from "express";
import ClientError from "../utils/ClientError";
import jwt, { Secret } from 'jsonwebtoken';

function authCheck(req: Request, res: Response, next: NextFunction) {
    if (!req.cookies.sessionToken) {
        next(ClientError.disconnected());
    } else {
        const token = req.cookies.sessionToken;
        jwt.verify(token, process.env.JWT_SECRET as Secret, (err: Error | null, info?: any) => {
            if (err) {
                next(ClientError.unauthorized());
            } else {
                next();
            }
        });
    }
}

export default authCheck;