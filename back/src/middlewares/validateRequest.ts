import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";


function validateRequest(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        next();
    } else {
        // Throw error: next(error);
        return res.status(400).json({ errors: errors.array() });
    }
}

export default validateRequest;