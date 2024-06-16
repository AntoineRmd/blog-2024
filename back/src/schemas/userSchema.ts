import { Schema } from "express-validator";

const userSchema: Schema = {
    username: { trim: true, notEmpty: true, isString: true, isAlphanumeric: true },
    password: { trim: true, notEmpty: true, isString: true, isLength: { options: { min: 8 } } }
}

export default userSchema;