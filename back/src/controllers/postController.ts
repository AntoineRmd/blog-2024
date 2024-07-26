import { NextFunction, Request, Response } from "express";
import PostModel from "../models/Post";
import ResponseHelper from "../utils/responseHelper";
import ClientError from "../utils/ClientError";
import mongoose from "mongoose";

async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const posts = await PostModel.find().populate('author', ['username']).sort({createdAt: -1}).limit(20);
        if (posts.length === 0) {
            ResponseHelper.success(res, null, "No posts found");
        } else {
            ResponseHelper.success(res, posts);
        }
    } catch (err) {
        next(err);
    }
};

async function getOne(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw ClientError.postIDInvalid();
        }
        const post = await PostModel.findById(id).populate('author', ['username']);
        if (post === null) {
            throw ClientError.postNotFound();
        } else {
            ResponseHelper.success(res, post);
        }
    } catch (err) {
        next(err);
    }
}

export default { getAll, getOne }