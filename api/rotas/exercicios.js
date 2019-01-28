const ExerciciosNumeroId = require('./../models/exerciciosModel');


module.exports = function(app) {
    //Buscar respostas do bd e responder por aqui em formato json
    app.get('/exercicios/', function (req, res) {
        ExerciciosNumeroId.find(function (err, collection) {
            if (err)
                return console.error(err);
            else

                console.log(collection);
            res.json(collection);

        });
    })
};