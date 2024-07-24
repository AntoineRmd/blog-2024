import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/User';
import ClientError from '../utils/ClientError';
import ResponseHelper from '../utils/responseHelper';
import bcrypt from 'bcrypt';
import ApiError from '../utils/ApiError';
import jwt, { Secret } from 'jsonwebtoken';
import { Result } from 'express-validator';

async function doesExist(username: string) {
    const user = await UserModel.findOne({ username: username });
    if (user !== null) {
        return user;
    } else {
        return false;
    }
}

async function register(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    try {
        if (await doesExist(username)) {
            throw ClientError.usernameTaken();
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await UserModel.create({ username, password: hashedPassword });
        ResponseHelper.successRegister(res, newUser);
        
    } catch (err) {
        next(err);
    }
}

async function login(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    try {
        const user = await doesExist(username);
        if (!user) {
            throw ClientError.userNotFound();
        }
        if (!await bcrypt.compare(password, user.password)) {
            throw ClientError.passwordMatch();
        }
        jwt.sign({ username, id: user._id }, process.env.JWT_SECRET as Secret, (err: Error | null, token?: string) => {
            if (err) {
                throw ApiError.JWTGenerationFail();
            } else {
                ResponseHelper.successLogin(res, { username, id: user._id }, token);
            }
        })
    } catch (err) {
        next(err);
    }
}

async function logout() {}

export default { register, login, logout };