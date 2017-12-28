import UsuarioService from "../services/usuarioService";

export default class UsuarioController {

    pesquisar(req, res){
        try {
            var service = new UsuarioService();
            console.log('save', service.searchFull );

            searchFull.searchFull()
            .then(  (data)  => res.json(data),
                    (error) => res.status(500).json(error)
                );

        } catch(e){
            throw new Error(e);
        }
    }

}