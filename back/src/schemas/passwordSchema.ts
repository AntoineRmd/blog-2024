import { Schema } from 'express-validator';

const userSchema: Schema = {
    password: { trim: true, notEmpty: true, isString: true, isLength: { options: { min: 8 } }, errorMessage: "password-check" }
}

export default userSchema;