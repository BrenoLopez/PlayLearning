    const mongoose= require ('mongoose');


    const ExerciciosNumeroId = require('./../models/exerciciosModel');


    // var exercicio = new ExerciciosNivel({instrucao: 'Declare um vetor de inteiros e armazene um valor a sua primeira posição', nivel :'medio',numeroId: 6});
    //
    // exercicio.save(function (err) {
    //     if (err) throw err;
    //     console.log('Dados salvos com sucesso!');
    // });
    //

    module.exports = function(app) {
            //Buscar respostas do bd e responder por aqui em formato json
            app.get('/exercicioid/:numeroId', function (req, res) {

                ExerciciosNumeroId.find({numeroId: req.params.numeroId},
                    function (err, collection) {
                        if (err)
                            return console.error(err);
                        else
                            console.log("Foi recuperado o exercicio com numeroId: "+req.params.numeroId);
                        res.json(collection);
                    });
            });
        };