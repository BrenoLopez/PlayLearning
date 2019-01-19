      //conexao do banco de dados
    //Buscar respostas do bd e responder por aqui em formato
      const mongoose= require ('mongoose');
      const url= 'mongodb://localhost:27017/PlayLearn';
      mongoose.connect(url);
      var Exercicios = mongoose.model('author', {instrucao: String, nivel: String, numeroId: Number});

         module.exports = function(app) {

            app.get('/exercicios', function (req, res) {
                Exercicios.find(function (err, authors) {
                    if (err) return console.error(err);
                    res.send(JSON.stringify(authors));
                });
            })
        };