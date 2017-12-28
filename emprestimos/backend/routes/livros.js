
// testes: http://localhost:3000/api/livros
module.exports = (app) => {

    /* var url_api = '/api/livros',
        api     = app.api.livros;

    app.get(url_api, api.lista);

    app.post(`${url_api}/livro`, api.adiciona);
    app.get(`${url_api}/livro/:id`, api.buscaPorId);
    
    // apenas uma URL, dois verbos distintos
    app.route(`${url_api}/livro/:id`)
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);
    
    
    // @see http://localhost:3000/api/livros/emprestimos 
    app.get(`${url_api}/emprestimos`, function(req, res) {
        console.log('emprestimos');

        const { method, url } = req;
        
        console.log(method, url);

        let promise = retornarEmprestimos();
        promise
            .then(retornarEndereco)
            .then((dados) => { 
                //console.log('Promise 2', dados); 
                return res.send(dados) })
            .catch(function(err){
                return res.send({messages: 'Ops, ocorreu um erro'}) 
                //Este código será executado logo após o erro
                console.log('Ops, ocorreu um erro');
            });
         
    });

    let retornarEmprestimos = () =>{
        console.log('buscarEmprestimos 1 ');
        return api.buscarEmprestimos(true);
    }

    let retornarEndereco = (dados) => {
        console.log('buscarEmprestimos 2 ');
        //console.log('Promise 1', dados );
        return api.buscarEmprestimos(false);
    } */
    
};