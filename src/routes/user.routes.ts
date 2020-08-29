import { Router, Request, Response } from 'express';
import User from '../db/Schema/User';

interface IUser {
  name: string;
  login: string;
  password: string;
}

const route: Router = Router();

//Getting an user by login
route.get('/', async (request: Request, response: Response) => {

  const login: string = request.body.login;
  const user: IUser | null = await User.findOne({ login });

  return response.json(
    user ? user : { errorMessage: "Nenhum usuário com esse login foi encontrado! :(" }
  );

});

//Posting a new user
route.post('/', async (request: Request, response: Response) => {

  const data: IUser = request.body;
  const user = new User(data);

  await user.save();

  return response.json(user);
});

export default route;