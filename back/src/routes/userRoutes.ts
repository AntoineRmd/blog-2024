import express from 'express';
import authCheck from '../middlewares/authCheckMiddleware';
import userController from '../controllers/userController';
import validateRequest from '../middlewares/validateRequest';
import { checkSchema } from 'express-validator';
import passwordSchema from '../schemas/passwordSchema';

const router = express.Router();

router.get('/', authCheck, userController.getSelf);

router.get('/:username', userController.getOne);

router.put('/', authCheck, checkSchema(passwordSchema), validateRequest, userController.update);

export default router;