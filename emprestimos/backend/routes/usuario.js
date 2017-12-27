import { UsuarioController } from "../controllers/usuarioController";
import { Router } from 'express';

export default (app) => {

    let api = Router();
    
    var url_api = '/api/usuarios';
    
    const usuarioController = new UsuarioController();

    api.route( url_api ).post(usuarioController.save);
    
    return api;

};