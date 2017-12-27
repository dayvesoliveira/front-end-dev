/*!
 * Module dependencies
 * @see https://be-mean.gitbooks.io/be-mean-node-js/content/mongoose.html
 *      http://nomadev.com.br/mongodb-remodelagem-do-relacional-para-o-mongodb/
 */
import mongoose from 'mongoose';

/**
 * Livro schema
 */
let schemaLivro = new mongoose.Schema({ 
    "titulo" :      { type: String, require: true}, 
    "autor" :       { type: String, require: false },
    "aluguel":  {
        "aluno_id": { type: String, require: true},
        "nome" :      String,
        "sobrenome" : String
    },
    "created_at":   { type: Date,   default: Date.now }
});


export default mongoose.model('Livro', schemaLivro);