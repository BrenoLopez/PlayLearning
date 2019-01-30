    const Respostas = require('./../models/respostasModel');
    module.exports = function (app) {
        app.post('/confereResposta/:numeroId/:nivel', (req, res) => {

           Respostas.find({numeroId : req.params.numeroId, nivel: req.params.nivel}, (erro, collection) => {
                if (erro) {
                    return res.send(erro);
                }
                console.log(collection[0].resposta);
                console.log( req.body.resposta);

                if (collection[0].resposta === req.body.resposta) {
                     res.send(true);
                    console.log("retornei true para requisição da resposta");
                } else {
                     res.send(false);
                    console.log("retornei false para requisição da resposta");
                }
            });
        })
    };