import { NextFunction, Request, Response } from "express";
import ResponseHelper from "../utils/responseHelper";
import jwt, { JwtPayload } from "jsonwebtoken";
import mongoose from "mongoose";
import ClientError from "../utils/ClientError";
import UserModel from "../models/User";

async function getSelf(req: Request, res: Response, next: NextFunction) {
    try {
        const decodedToken: JwtPayload = jwt.decode(req.cookies.sessionToken) as JwtPayload;
        ResponseHelper.success(res, { id: decodedToken.id, username: decodedToken.username });
    } catch (err) {
        next(err)
    }
}

async function getOne(req: Request, res: Response, next: NextFunction) {
    try {
        const username = req.params.username;
        const user = await UserModel.find({ username: username });
        if (user.length === 0) {
            throw ClientError.userNotFound();
        } else {
            ResponseHelper.success(res, { id: user[0]._id, username: user[0].username });
        }
    } catch (err) {
        next(err)
    }
}

async function update(req: Request, res: Response, next: NextFunction) {}

async function remove(req: Request, res: Response, next: NextFunction) {}

export default { getSelf, getOne, update, remove };