import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoute.js';
import commentRoutes from './routes/commentRoute.js';
import videoRoutes from './routes/videoRoute.js';
import authRoutes from './routes/authRoute.js';

export interface ResponseError {
  status: number;
  message: string;
}

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.DB_URL!)
    .then(() => {
      console.log('Connected to DB');
    })
    .catch((err) => console.log(err));
};

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/vieos', videoRoutes);

app.use(
  (err: ResponseError, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || 'Somthing went wrong!';
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  }
);

app.listen(8080, () => {
  connect();
  console.log('Listening on port 8080');
});
