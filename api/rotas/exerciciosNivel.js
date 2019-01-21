const mongoose= require ('mongoose');


const ExerciciosNivel = require('./../models/exerciciosModel');



// var exercicio = new ExerciciosNivel({instrucao: 'Declare um vetor de inteiros e armazene um valor a sua primeira posição', nivel :'medio',numeroId: 6});
                //
                // exercicio.save(function (err) {
                //     if (err) throw err;
                //     console.log('Dados salvos com sucesso!');
                // });
                //


            module.exports = function(app) {
                //Buscar respostas do bd e responder por aqui em formato json
                app.get('/exerciciosnivel/:nivel', function (req, res) {
                    ExerciciosNivel.find({nivel: req.params.nivel},
                        function (err, collection) {
                            if (err)
                                return console.error(err);
                            else
                            console.log("Exercicios do nivel:"+req.params.nivel);
                            res.json(collection);
                        });
                });
            };