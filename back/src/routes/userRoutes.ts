import express from 'express';
import authCheck from '../middlewares/authCheckMiddleware';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/', authCheck, userController.getSelf);

router.get('/:username', userController.getOne);

router.put('/', authCheck, userController.update);

router.delete('/', authCheck, userController.remove);

export default router;