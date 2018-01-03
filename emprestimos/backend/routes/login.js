import { Router } from 'express';
import LoginController from '../api/controllers/loginController';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.route( '/login' ).post(loginController.login);

export default loginRouter;