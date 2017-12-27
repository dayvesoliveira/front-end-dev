import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';


let schemaUsuario = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
});


const UsuarioModel = mongoose.model('Usuario', schemaUsuario);

console.log(schemaUsuario);

export default UsuarioModel;