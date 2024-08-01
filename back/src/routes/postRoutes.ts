import express from 'express';
import postController from '../controllers/postController';
import upload from '../middlewares/uploadMiddleware';
import authCheck from '../middlewares/authCheckMiddleware';
import postSchema from '../schemas/postSchema';
import validateRequest from '../middlewares/validateRequest';
import { checkSchema } from 'express-validator';

const router = express.Router();

router.get('/', postController.getAll);

router.get('/:id', postController.getOne);

router.post('/', authCheck, checkSchema(postSchema), validateRequest, upload, postController.create);

export default router;