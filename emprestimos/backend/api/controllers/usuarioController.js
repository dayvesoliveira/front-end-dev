import UsuarioService from "../services/usuarioService";

const service = new UsuarioService();

let getJson = (req)=> {
    return (req && req.body ? 
    {   "nome": req.body.usuario, 
        "senha": req.body.senha, 
        "email": req.body.email 
    } : {});
};

export default class UsuarioController {
    
    pesquisar(req, res){

        var a =2;
        a.x.y;

        try {
            service.findAll().then(  
                (data)  => res.json(data),
                (error) => res.status(500).json(error)
             );
        } catch(e){
            throw new Error("Não foi possível realizar a consulta");
        }
    }

    incluir(req, res) {
        service.insert( getJson(req) ).then(
                (data)  => res.json(data),
                (error) => res.status(500).json(error)
            );
    }

    update(req, res) {
        service.update( getJson(req) ).then(
                (data)  => res.json(data),
                (error) => res.status(500).json(error)
            );
    }

}