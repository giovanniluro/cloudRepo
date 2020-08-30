import { Router, Request, Response, response } from 'express';
import User from '../db/Schema/User';
import jwt from 'jsonwebtoken';

const route = Router();

//Logout
route.get("/", (request: Request, response: Response) => {
  return response.status(200).json({
    token: null
  });
}); 

//Login
route.post("/", async (request: Request, response: Response) => {

  const { login, password } = request.body;
  const user = await User.findOne({ login });

  if (!user) return response.status(401).json({ errorMsg: "Nenhum usuário encontrado com este email" });
  if (user.password === password) {
    const secret = process.env.JWT_SECRET || '';
    const token = jwt.sign({ id: user.id }, secret, { expiresIn: 3000 });
    return response.status(200).json({
      token
    });
  }

});

export default route;