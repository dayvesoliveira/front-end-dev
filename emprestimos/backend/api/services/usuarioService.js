import UsuarioDAO from "../daos/usuarioDAO";
import { Error } from "mongoose";


export default class UsuarioService {
    
    constructor(){
        this.usuarioDAO = new UsuarioDAO();
    }

    findAll() {
        return this.usuarioDAO.findAll();
    }

    insert(usuario){
        return this.usuarioDAO.insert(usuario);
    }

    update(usuario){
        return this.usuarioDAO.update(usuario);
    }

    recupera(user){
        return this.usuarioDAO.find( {username: user.username} );
    }

    validaSenha(usuario){
        let p = this.usuarioDAO.verificaSenha(usuario);
        console.log('p',p)
        return p;
    }
}