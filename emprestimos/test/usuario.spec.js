var mongoose = require('mongoose');
var Usuario = require('../backend/api/models/usuario');
 
//Aqui estamos declarando as dependências necessárias para realizar os nossos testes!
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);


//Aqui é o bloco principal que executará o nossos testes:
/* describe('Usuarios', function() {
  beforeEach(function(done) {

      //Sempre depois de executar o nosso teste, iremos limpar a nossa base de dados:
      Usuario.insert({nome:"xxxxxx", senha:"123"}, function(error) {
          done();
      });
  });
}); */



  /**
 * Teste da rota: /GET
 */
describe('/GET usuarios', function() {
  it('Deve retornar todos os usuarios', function(done) {
      chai.request(server)
            .get('/api/usuarios')
            .end(function(error, res) {
                //Se tudo der certo deve retornar o status: 200 - OK
                res.should.have.status(200);
                //E em seguida retornar em um array todos os livros cadastrados na base de dados:
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
  });

});


describe('/POST livro', function() {
    it('Não deve retornar o POST do usuario criado, uma vez que não foi definido o campo: senha', function(done) {
 
        var usuario = {
            senha: "",
            nome: "David Flanagan",
        };

        chai.request(server)
            .post('/api/usuarios')
            .send(usuario)
            .end(function(error, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('senha');
                res.body.errors.senha.should.have.property('kind').eql('required');
                done();
            });
    });
 
    it('Deve Criar um Usuario', function(done) {
        var usuario = {
            senha: "123",
            autor: "David Flanagan"
        };

        chai.request(server)
            .post('/api/usuarios')
            .send(usuario)
            .end(function(error, res) {
                console.log('error');
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Usuario adicionado com Sucesso!');
                res.body.livro.should.have.property('senha');
                res.body.livro.should.have.property('nome');
                done();
            });
    });
});