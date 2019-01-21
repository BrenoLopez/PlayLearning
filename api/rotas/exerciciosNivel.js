      // const mongoose= require ('mongoose');
      //
      //       //conexao do banco de dados
      //
      //       const conexao = mongoose.connect('mongodb://localhost:27017/playlearn', { useNewUrlParser: true });
      //       if(conexao){
      //           console.log("conexao efetuada com sucesso!");
      //       }
      //
      //       let Exercicios = mongoose.model('exercicio', {instrucao: String, nivel: String, numeroId: Number});
      //
      //
      //           // var exercicio = new ExerciciosNivel({instrucao: 'Declare um vetor de inteiros e armazene um valor a sua primeira posição', nivel :'medio',numeroId: 6});
      //           //
      //           // exercicio.save(function (err) {
      //           //     if (err) throw err;
      //           //     console.log('Dados salvos com sucesso!');
      //           // });
      //           //


            module.exports = function(app) {
                //Buscar respostas do bd e responder por aqui em formato json
                app.get('/exercicionivel/:nivel', function (req, res) {
                    Exercicios.find({nivel: req.params.nivel},
                        function (err, collection) {
                            if (err)
                                return console.error(err);
                            else
                            console.log("Os dados foram  recuperados do banco .");
                            res.json(collection);
                        });
                });
            };