import UsuarioDAO from "../daos/usuarioDAO";


export default class UsuarioService {

    save(usuario){
        let usuarioDAO = new UsuarioDAO();
        console.log(usuarioDAO);
        usuarioDAO.save(usuario);
    }

    searchFull() {
        let usuarioDAO = new UsuarioDAO();
        console.log(usuarioDAO);
        return usuarioDAO.findAll();
    }
}