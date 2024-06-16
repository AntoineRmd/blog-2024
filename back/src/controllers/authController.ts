import { Request, Response, NextFunction } from 'express';

async function register(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ message: 'Register successful' });
}

function login(){}

function logout(){}

export default { register, login, logout };