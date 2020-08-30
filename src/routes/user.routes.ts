import { Router, Request, Response } from 'express';
import User from '../db/Schema/User';

interface IUser {
  name: string;
  login: string;
  password: string;
}

const route: Router = Router();

//Posting a new user
route.post('/', async (request: Request, response: Response) => {
  const data: IUser = request.body;

  if (data.login && data.password && data.name) {
    const user = new User(data);
    await user.save();

    return response.status(200).json(user);
  } else {
    return response.status(500).json({
      errorMsg: "Todos os campos devem ser preenchidos!"
    })
  }
});

export default route;