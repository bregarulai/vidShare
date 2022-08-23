import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

app.listen(8080, () => {
  connect();
  console.log('Listening on port 8080');
});
