import UsuarioDAO from './daos/usuarioDAO';


export default class UsuarioService {

    usuarioDAO = new UsuarioDAO();


    save(usuario){
        usuarioDAO.save(usuario);
    }

}