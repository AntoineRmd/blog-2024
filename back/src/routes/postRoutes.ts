import express from 'express';
import postController from '../controllers/postController';
import upload from '../middlewares/uploadMiddleware';

const router = express.Router();

router.get('/', postController.getAll);

router.get('/:id', postController.getOne);

router.post('/', upload, postController.create);

export default router;