import { Schema } from 'express-validator';

const userSchema: Schema = {
    username: { trim: true, notEmpty: true, isString: true, isAlphanumeric: true, errorMessage: "username-check" },
    password: { trim: true, notEmpty: true, isString: true, isLength: { options: { min: 8 } }, errorMessage: "password-check" }
}

export default userSchema;