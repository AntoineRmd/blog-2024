import express from 'express';
import authController from '../controllers/authController';
import { checkSchema } from 'express-validator';
import validateRequest from '../middlewares/validateRequest';
import userSchema from '../schemas/userSchema';
import authCheck from '../middlewares/authCheckMiddleware';

const router = express.Router();

router.post('/register', checkSchema(userSchema), validateRequest, authController.register);

router.post('/login', checkSchema(userSchema), validateRequest, authController.login);

router.post('/logout', authCheck, authController.logout);

export default router;