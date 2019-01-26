    const RespostasNumeroId = require('./../models/respostasModel');


    //  let Respostas = new RespostasNumeroId(
    // {
    //     alternativas :
    //         [
    //     {
    //         alternativa: "int"
    //     },
    //     {
    //         alternativa: "integer"
    //     },
    //     {
    //         alternativa: "var"
    //     },
    //     {
    //         alternativa: ";"
    //     },
    //     {
    //         alternativa: "1variavel"
    //     },
    //     {
    //         alternativa: "numero"
    //     },
    //     {
    //         alternativa: ":"
    //     },
    //     {
    //         alternativa: "double"
    //     }
    // ],
    //   resposta : "int numero ;"  ,
    //     numeroId: 1
    //
    //     }
    // );
    //
    // Respostas.save(function (err) {
    //     if (err) throw err;
    //     console.log('Dados salvos com sucesso!');
    // });


    module.exports = function(app) {
        //Buscar respostas do bd e responder por aqui em formato json
        app.get('/respostasid/:numeroId', function (req, res) {

            RespostasNumeroId.find(
                {numeroId: req.params.numeroId},
                function (err, collection) {
                    if (err)
                        return console.error(err);
                    else
                        console.log("Foi recuperado o reposta com numeroId: "+req.params.numeroId);
                    res.json(collection);
                });
        });
    };