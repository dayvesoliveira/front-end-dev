import { Router } from 'express';
import UsuarioController from '../api/controllers/usuarioController';

export default (app) => {

    let api     = Router();
    var url_api = '/api/usuarios';
    
    const usuarioController = new UsuarioController();

    api.route( url_api ).get(usuarioController.pesquisar);
    
    return api;

};