import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import User from '../models/User.js';

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    const savedUser = await newUser.save();
    const { password, createdAt, updatedAt, ...otherDetails } = savedUser._doc;
    res.status(201).json(otherDetails);
  } catch (error) {
    next(error);
  }
};
