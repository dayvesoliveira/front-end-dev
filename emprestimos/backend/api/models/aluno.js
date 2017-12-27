/*!
 * Module dependencies
 * @see https://be-mean.gitbooks.io/be-mean-node-js/content/mongoose.html
 *      http://nomadev.com.br/mongodb-remodelagem-do-relacional-para-o-mongodb/
 * 
 */
import mongoose from 'mongoose';

/**
 * Aluno schema
 */
const schemaAluno = new mongoose.Schema({ 
  "nome" :      { type: String, require: true}, 
  "sobrenome" : { type: String, require: false },
  "created_at": { type: Date, default: Date.now }
});

export default mongoose.model('Aluno', schemaAluno);