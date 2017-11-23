
// testes: http://localhost:3000/api/livros
module.exports = (app) => {

    var url_api = '/api/livros',
        api     = app.api.livros;

    app.route( url_api )
       .get(api.lista)
       .post(api.adiciona);

    app.get(`${url_api}/:id`, api.buscaPorId);
    
    // apenas uma URL, dois verbos distintos
    app.route(`${url_api}/:id`)
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);
    
     app.route(`/api/emprestimos/livros`)
        .get(api.buscarEmprestimos);
};