import { Response } from 'express';

function errorProvider(response: Response, status: number, content: string) {
  return response.status(status).json({
    errorMsg: content
  });
}

export default errorProvider;