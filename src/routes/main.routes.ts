import { Router } from 'express';
import userRoute from './user.routes';
import authRoute from './auth.routes';
import ensureAuth from '../services/ensureAuthenticated';
import repositoryRoute from './repositories.routes';

const route: Router = Router();

route.use('/user', userRoute);
route.use('/auth', authRoute);
route.use('/repositories', ensureAuth,repositoryRoute);
export default route;