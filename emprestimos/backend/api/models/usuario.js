import mongoose, { Schema } from 'mongoose';

let schemaUsuario = new Schema({
    nome: {
      type: String,
      unique: true,
      required: true
    },
    senha: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: false
    }
});

let UsuarioModel;
try {
    UsuarioModel = mongoose.model('Usuario', schemaUsuario);
} catch(e){
    UsuarioModel = mongoose.model('Usuario');
}

console.log('usuarioModel >>> ', UsuarioModel); 

export default UsuarioModel;