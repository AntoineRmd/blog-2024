import { Schema } from 'express-validator';

const userSchema: Schema = {
    username: { trim: true, notEmpty: true, isString: true, isAlphanumeric: true, errorMessage: "Invalid username" },
    password: { trim: true, notEmpty: true, isString: true, isLength: { options: { min: 8 } }, errorMessage: "Invalid password. Password must contain at least 8 characters" }
}

export default userSchema;