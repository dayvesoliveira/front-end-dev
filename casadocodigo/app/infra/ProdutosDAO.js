let ProdutosDAO = (connection) => {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = (callback) => this._connection.query('select * from produtos',callback);

module.exports = ()=> ProdutosDAO;
