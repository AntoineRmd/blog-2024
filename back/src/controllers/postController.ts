import { NextFunction, Request, Response } from "express";
import PostModel from "../models/Post";
import ResponseHelper from "../utils/responseHelper";
import ClientError from "../utils/ClientError";
import mongoose from "mongoose";
import fs from "fs";
import jwt, { JwtPayload } from "jsonwebtoken";

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

async function create(req: Request, res: Response, next: NextFunction) {
    try {
        let newPath = null;
        if (req.file) {
            const { originalname, path } = req.file;
            const extension = originalname.split('.').pop();
            newPath = `${path}.${extension}`;
            fs.renameSync(path, newPath);
        }
        const { title, summary, content } = req.body;
        const decodedToken: JwtPayload = jwt.decode(req.cookies.sessionToken) as JwtPayload;
        if (!decodedToken || !decodedToken.id) {
            throw ClientError.unauthorized();
        }
        const post = await PostModel.create({
            title,
            summary,
            content,
            cover: newPath,
            author: decodedToken.id
        })
        ResponseHelper.successPostCreated(res, post);
    } catch (err) {
        next(err);
    }
}

async function edit(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw ClientError.postIDInvalid();
        }
        const post = await PostModel.findById(id);
        if (post === null) {
            throw ClientError.postNotFound();
        }
        const decodedToken: JwtPayload = jwt.decode(req.cookies.sessionToken) as JwtPayload;
        if (!decodedToken || !decodedToken.id) {
            throw ClientError.unauthorized();
        } else if (JSON.stringify(post.author) !== JSON.stringify(decodedToken.id)) {
            throw ClientError.unauthorized();
        }
        let newPath = null;
        if (req.file) {
            const { originalname, path } = req.file;
            const extension = originalname.split('.').pop();
            newPath = `${path}.${extension}`;
            fs.renameSync(path, newPath);
        }
        const { title, summary, content } = req.body;
        await PostModel.updateOne({ _id: id }, {title, summary, content, cover: newPath});
        const updatedPost = await PostModel.findById(id);
        ResponseHelper.successPostEdited(res, updatedPost);
    } catch (err) {
        next(err);
    }
}

export default { getAll, getOne, create, edit }