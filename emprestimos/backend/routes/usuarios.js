import { Router } from 'express';
import UsuarioController from '../api/controllers/usuarioController';

const UserRouter = Router();
const usuarioController = new UsuarioController();

UserRouter.route( '/usuarios' )
          .get(usuarioController.pesquisar)
          .post(usuarioController.incluir)
          .put(usuarioController.update);

export default UserRouter;