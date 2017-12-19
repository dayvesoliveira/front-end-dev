module.exports = (app) => {

    app.get('/produtos', function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            res.render('produtos/lista', {lista: results});
        });

        connection.end();
    });

    app.get('/produtos/form', (req, res) => res.render('produtos/form'));
}
