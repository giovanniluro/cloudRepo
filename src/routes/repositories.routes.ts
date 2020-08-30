import { Router, Request, Response } from 'express';
import Repository from '../db/Schema/Repository';
import errorProvider from '../services/errorProvider';

const route = Router();
//list repositories 
route.get('/', async (request: Request, response: Response) => {
  try {
    const repositories = await Repository.find({ user_id: request.id });

    return response.status(200).json(repositories);
  } catch (error) {
    errorProvider(response, 500, error.message);
  }
});

//delete repositorie
route.delete('/', async (request: Request, response: Response) => {
  try {
    const data = request.body;
    await Repository.remove({_id: data.id});
    return response.status(200).send();
  } catch (error) { 
    errorProvider(response, 500, error.message);
  }
})

//create a repository
route.post('/', async (request: Request, response: Response) => {

  const data = request.body;
  const repository = new Repository({ ...data, user_id: request.id });

  try {
    await repository.save();
    return response.status(200).json(repository);
  } catch (error) {
    errorProvider(response, 500, error.message);
  }
});

export default route;