var http = require('http'),
    app  = require('./config/express');

// conexao com o banco
require('./config/database')('localhost/emprestimos'); 

http.createServer(app)
    .listen(3000, function() {
        console.log('Servidor iniciado');
    });