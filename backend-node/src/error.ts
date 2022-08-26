import { ResponseError } from '.';

export const createError = (status: number, message: string) => {
  const error: ResponseError = {
    status,
    message,
  };
  return error;
};
