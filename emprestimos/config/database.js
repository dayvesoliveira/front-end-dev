var mongodb = function(uri) {

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri,{
        useMongoClient: true
        /* other options */
    });

    mongoose.connection.on('connected', function() {
        console.log('Conectado ao MongoDB')
    });

    mongoose.connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Desconectado do MongoDB')
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Aplicação terminada, conexão fechada')
            process.exit(0);
        });
    })
};


module.exports = mongodb;