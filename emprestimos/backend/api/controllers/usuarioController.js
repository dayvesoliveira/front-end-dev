import UsuarioService from "../services/usuarioService";

export default class UsuarioController {
    
    constructor(){
        //this._service = null;
    }

    pesquisar(req, res){
        try {
            let service = new UsuarioService();
            service.findAll().then(  
                (data)  => res.json(data),
                (error) => res.status(500).json(error)
             );
        } catch(e){
            throw new Error("Não foi possível realizar a consulta");
        }
    }

    incluir(req, res) {
        let service = new UsuarioService();
        service.insert( this._getJson(req) ).then(
                (data)  => res.json(data),
                (error) => res.status(500).json(error)
            );
    }

    update(req, res) {
        let service = new UsuarioService();
        service.update( this._getJson(req) ).then(
                (data)  => res.json(data),
                (error) => res.status(500).json(error)
            );
    }

    static _getJson(req){
        return (req && req.body ? 
        {   "nome": req.body.nome, 
            "senha": req.body.senha, 
            "email": req.body.email 
        } : {});
    }
}