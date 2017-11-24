
// testes: http://localhost:3000/api/livros
module.exports = (app) => {

    var url_api = '/api/livros',
        api     = app.api.livros;

    app.get(url_api, api.lista);

    app.post(`${url_api}/livro`, api.adiciona);
    app.get(`${url_api}/livro/:id`, api.buscaPorId);
    
    // apenas uma URL, dois verbos distintos
    app.route(`${url_api}/livro/:id`)
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);
    
     app.get(`${url_api}/emprestimos`, api.buscarEmprestimos);
    
};