import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes';
// import postRoutes from './routes/postRoutes';
// import userRoutes from './routes/userRoutes';
import errorHandler from './middlewares/errorHandler';

const app = express();

// Connect DB
// connectDB();
console.log('>>>>>>>> RECONECT DB!!! <<<<<<<<');

// Load environment variables
dotenv.config();

// Middleware: CORS
app.use(cors({credentials: true, origin: process.env.FRONTEND_URL || "http://localhost:3000"}));
// Middleware: JSON parser
app.use(express.json());
// Middleware: cookie parser
app.use(cookieParser());
// Middleware: serving files endpoint
app.use('/uploads', express.static(process.cwd() + '/public/uploads'));

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/user', userRoutes);

// Error Handler End Middleware
app.use(errorHandler);

export default app;