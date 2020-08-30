import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  iat: number;
  exp: number;
  id: string;
}

function ensureAuth(request: Request, response: Response, next: NextFunction) {
  const secret = process.env.JWT_SECRET || '';
  const authorization = request.headers.authorization;
  if (!authorization) return response.status(500).json({ errorMsg: "Token de autorização não encontrado!" })

  const [_, token] = authorization.split(' ');

  try {
    const payload = verify(token, secret);
    const { id } = payload as IPayload;
    request.id = id;
    return next();

  } catch (error) {
    return response.status(401).json({ errorMsg: error.message });
  }
}

export default ensureAuth;
