      const mongoose= require ('mongoose');

      //conexao do banco de dados

      const conexao = mongoose.connect('mongodb://localhost:27017/playlearn', { useNewUrlParser: true });
      if(conexao){
          console.log("conexao efetuada com sucesso!");
      }

      let Exercicios = mongoose.model('exercicio', {instrucao: String, nivel: String, numeroId: Number});

          var exercicio = new Exercicios({instrucao: 'Faça a variável ‘salario’ receber um valor digitado pelo usuário', nivel :'basico',numeroId: 5});

          exercicio.save(function (err) {
              if (err) throw err;
              console.log('Dados salvos com sucesso!');
          });



      module.exports = function(app) {
             //Buscar respostas do bd e responder por aqui em formato json
            app.get('/exercicios', function (req, res) {
                Exercicios.find(function (err, exercicio) {
                    if (err) return console.error(err);
                    else
                    console.log("Operação de recuperar dados do mongodb funcionou.");
                    res.send(JSON.stringify(exercicio));
                });
            });
        };