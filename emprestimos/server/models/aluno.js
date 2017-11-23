/*!
 * Module dependencies
 * @see https://be-mean.gitbooks.io/be-mean-node-js/content/mongoose.html
 *      http://nomadev.com.br/mongodb-remodelagem-do-relacional-para-o-mongodb/
 */
let mongoose    = require("mongoose"),
    Schema      = mongoose.Schema;

/**
 * Aluno schema
 */

 let _schema = { 
  "nome" :      { type: String, require: true}, 
  "sobrenome" : { type: String, require: false },
  "created_at": { type: Date, default: Date.now }
};

let schemaAluno = new Schema(_schema);
let Model = mongoose.model('Aluno', schemaAluno);

/* 
let model = new Model({nome:'Dayves'});
model.save((err, data) => {
  return ((err) ? console.log('ERRO: ', err) : console.log('Inseriu: ', data))
}); 

*/


console.log(schemaAluno);