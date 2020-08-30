import { Router } from 'express';
import userRoute from './user.routes';
import authRoute from './auth.routes';

const route: Router = Router();

route.use('/user', userRoute);
route.use('/auth', authRoute);

export default route;