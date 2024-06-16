import express from 'express';
import authController from '../controllers/authController';
import { checkSchema } from 'express-validator';
import validateRequest from '../middlewares/validateRequest';
import userSchema from '../schemas/userSchema';

const router = express.Router();

router.post('/register', checkSchema(userSchema), validateRequest, authController.register);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

export default router;