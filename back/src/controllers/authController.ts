import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/User';
import ClientError from '../utils/ClientError';
import bcrypt from 'bcrypt';
import ResponseHelper from '../utils/responseHelper';

async function register(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    try {
        const doesExist = await UserModel.findOne({username: username});
        if (doesExist !== null) {
            throw ClientError.usernameTaken();
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await UserModel.create({username, password: hashedPassword});
        ResponseHelper.successRegister(res, newUser);
        
    } catch (err) {
        next(err);
    }
}

function login(){}

function logout(){}

export default { register, login, logout };