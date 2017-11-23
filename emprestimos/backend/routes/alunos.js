
// testes: http://localhost:3000/api/alunos
module.exports = (app) => {

    var url_api = '/api/alunos',
        api     = app.api.alunos;

    app.route( url_api )
       .get(api.lista)
       .post(api.adiciona);

    app.get(`${url_api}/:id`, api.buscaPorId);
    
    // apenas uma URL, dois verbos distintos
    app.route(`${url_api}/:id`)
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);
    
/*      app.route(`${url_api}/:id/emprestimo`)
        .put(api.updateEmprestimo); */
};