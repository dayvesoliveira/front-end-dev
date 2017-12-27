import mongoose from 'mongoose';
import UsuarioModel from "./models/usuario";

export default class UsuarioDAO {

    modelUsuario = mongoose.model('Usuario');
    
    insert(usuario){
        
        let model = new UsuarioModel({
            username: usuario.username,
            password: usuario.password
        });

        return model.save( usuario , (err, data)=>{
            if (err) return console.log('ERRO: ', err);
            console.log('Inseriu: ', data);
        });
    }

    update(usuario) {
        return model.save( usuario , (err, data)=>{
            if (err) return console.log('ERRO: ', err);
            console.log('Inseriu: ', data);
        });
    }

}