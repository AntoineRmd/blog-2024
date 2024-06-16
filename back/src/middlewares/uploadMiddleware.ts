import multer from 'multer';

const uploadMiddleware = multer({ dest: '../public/uploads/' });

export default uploadMiddleware;