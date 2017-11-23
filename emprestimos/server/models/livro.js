/*!
 * Module dependencies
 * @see https://be-mean.gitbooks.io/be-mean-node-js/content/mongoose.html
 *      http://nomadev.com.br/mongodb-remodelagem-do-relacional-para-o-mongodb/
 */


let mongoose    = require("mongoose"),
    Schema      = mongoose.Schema;

/**
 * Livro schema
 */

 let _schema = { 
  "titulo" :      { type: String, require: true}, 
  "autor" :       { type: String, require: false },
  "aluguel":  {
      "aluno_id": { type: String, require: true},
      "nome" :      String,
      "sobrenome" : String
  },
  "created_at":   { type: Date,   default: Date.now }
};

let schemaLivro = new Schema(_schema);

let Model = mongoose.model('Livro', schemaLivro);

/*  

let model = new Model({"titulo" : "O Principe", "autor" : "Nicolau Maquiavel" });
model.save((err, data) => {
  return ((err) ? console.log('ERRO: ', err) : console.log('Inseriu: ', data))
});

*/

console.log(schemaLivro);