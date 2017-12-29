import UsuarioDAO from "../daos/usuarioDAO";


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
}