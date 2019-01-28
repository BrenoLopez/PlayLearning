const ExerciciosNumeroId = require('./../models/exerciciosModel');


module.exports = function(app) {
    //Buscar respostas do bd e responder por aqui em formato json
    app.get('/exercicios/:nivel', function (req, res) {
        ExerciciosNumeroId.find({nivel: req.params.nivel},function (err, collection) {
            if (err)
                return console.error(err);
            else

                //console.log(collection);
            res.json(collection);

        });
    })
};