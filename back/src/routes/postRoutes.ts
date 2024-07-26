import express from 'express';
import postController from '../controllers/postController';

const router = express.Router();

router.get('/', postController.getAll);

router.get('/:id', postController.getOne);

export default router;