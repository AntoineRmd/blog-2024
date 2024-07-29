import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import ClientError from '../utils/ClientError';
import ApiError from '../utils/ApiError';

const uploader = multer({ dest: '../public/uploads/', limits: { fileSize: 1024 * 1024 * 5} }).single('cover');

function upload(req: Request, res: Response, next: NextFunction) {
  uploader(req, res, (err) => {
    if (err instanceof multer.MulterError) {
        next(ClientError.fileTooLarge());
    } else if (err) {
        next(ApiError.internal());
    } else {
        next();
    }
  });
}

export default upload;