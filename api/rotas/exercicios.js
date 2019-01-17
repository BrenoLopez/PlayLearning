
    //Buscar respostas do bd e responder por aqui em formato json
    module.exports = function(app){
        app.get('/exercicios/', function (request,response) {
            response.send({respostas : 'respondendo uma merda', pergunta : 'Como instanciar uma variavel inteira?'});

        });
    };