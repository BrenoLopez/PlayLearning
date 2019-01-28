    const ExerciciosNumeroId = require('./../models/exerciciosModel');


    module.exports = function(app) {
            //Buscar respostas do bd e responder por aqui em formato json
            app.get('/exercicioid/:numeroId/:nivel', function (req, res) {

                ExerciciosNumeroId.find({numeroId: req.params.numeroId,nivel: req.params.nivel},
                    function (err, collection) {
                        if (err)
                            return console.error(err);
                        else
                            console.log("Foi recuperado o exercicio com numeroId: "+req.params.numeroId);
                            console.log("Foi recuperado o exercicio com nivel: "+req.params.nivel);
                        res.json(collection);
                    });
            })
    };