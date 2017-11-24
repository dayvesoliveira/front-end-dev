let mongoose = require('mongoose');
let model    = mongoose.model('Livro');

let apiLivros = {

    /**
      DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, 
      plug in your own promise library instead: http://mongoosejs.com/docs/promises.html.
     */
    
    //@see http://localhost:3000/api/livros
    lista: (req, res) => {
        model.find()
             .then((data)=> res.json(data),
                   (error) => res.status(500).json(error)
                  );
    },
    
    // @see http://localhost:3000/api/livros/5a161890c79c93250cc56f9d
    buscaPorId: (req, res) => {
        model.findById(req.params.id)
             .then((data)=> res.json(data),
                   (error) => res.status(500).json(error)
                  );
    },
    
    removePorId: (req, res) =>{
        model.remove({_id: req.params.id})
             .then(
                ()=> res.sendStatus(200),
                (error) => res.status(500).json(error)
            );
    },
    
    adiciona: (req, res) =>{
        // TODO IMPLEMENTAR
    },
    
    atualiza: (req, res) =>{
        model.update({_id: req.params.id}, {$set: req.body})
             .then( (data)=> res.json(data),
                    (error) => res.status(500).json(error));
    },
    
    buscarEmprestimos: (req, res)=>{
        console.log('################ aluguel #######################');
        model.find({ 'aluguel': {$exists:false} })
             .then( (data)=> res.json(data),
                    (error) => res.status(500).json(error)
             );
    }
};


module.exports = apiLivros;