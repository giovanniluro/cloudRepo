import { Router, Request, Response } from 'express';
import userRoute from './user.routes';

const route: Router = Router();

route.use('/user', userRoute);

export default route;