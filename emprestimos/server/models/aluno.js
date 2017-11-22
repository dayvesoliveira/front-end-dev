/*!
 * Module dependencies
 */

var mongoose    = require("mongoose"),
    Schema      = mongoose.Schema;

/**
 * Aluno schema
 */

var schemaAluno = new Schema(
        { "nome" :      {type: String, require: true}, 
          "sobrenome" : {type: String, require: false },
          "data": {
            type: Date,
            default: Date.now
          }
        });

mongoose.model('Aluno', schemaAluno);

//console.log(schemaAluno);