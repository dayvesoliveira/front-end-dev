import { Router } from 'express';
import UsuarioController from '../api/controllers/usuarioController';
import LoginController from '../api/controllers/loginController';

const UserRouter = Router();
const usuarioController = new UsuarioController();
const loginController = new LoginController();

UserRouter.route( '/usuarios' )
          .get(loginController.validarToken, usuarioController.pesquisar)
          .post(usuarioController.incluir)
          .put(usuarioController.update);

export default UserRouter;