import mongoose from 'mongoose';

let model = mongoose.model('Livro');


export default class UsuarioController {

    save(req, res){
        console.log('save');
    }

}