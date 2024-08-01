import { Schema } from 'express-validator';

const postSchema: Schema = {
    title: { trim: true, notEmpty: true, isString: true, errorMessage: "title-check" },
    summary: { trim: true, notEmpty: false, isString: true, errorMessage: "summary-check" },
    content: { },
    cover: { }
}

export default postSchema;