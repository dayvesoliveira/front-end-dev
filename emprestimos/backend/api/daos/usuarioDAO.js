import bcrypt from 'bcrypt-nodejs';
import UsuarioModel from '../models/usuario';

export default class UsuarioDAO {
    
    constructor(){
        console.log('UsuarioDAO >>>> ', UsuarioModel);
    }

    findAll(){
        return UsuarioModel.find();
    }

    insert(usuario){
        
        let model = new UsuarioModel({
            username: usuario.username,
            password: usuario.password
        });

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