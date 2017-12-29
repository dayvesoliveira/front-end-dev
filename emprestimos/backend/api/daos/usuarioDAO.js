import UsuarioModel from '../models/usuario';

export default class UsuarioDAO {
    
    constructor(){
       // console.log('UsuarioDAO >>>> ', UsuarioModel);
    }

    findAll(){
        return UsuarioModel.find();
    }

    save(usuario){
        if (usuario._id) return this.update(usuario);
        return this.insert(usuario);
    }

    insert(usuario){
        
        let model = new UsuarioModel({
            username: usuario.nome,
            password: usuario.senha
        });
        
        //console.log( 'usuario >>>>> ', model.isModified('password') );

        return model.save((err, data)=>{
            if (err) return console.log('ERRO: ', err);
            console.log('Inseriu: ', data);
        });
    }

    update(usuario) {
        let modelUsuario = new UsuarioModel( usuario );
        return modelUsuario.save((err, data)=>{
            if (err) return console.log('ERRO: ', err);
            console.log('Inseriu: ', data);
        });
    }

}