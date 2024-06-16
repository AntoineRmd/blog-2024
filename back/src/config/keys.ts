import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const salt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;

export default { salt, jwtSecret };