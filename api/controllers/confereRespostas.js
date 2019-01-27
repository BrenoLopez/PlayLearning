    const Respostas = require('./../models/respostasModel');


     confereRespostas = (respostaUsuario) =>{
        Respostas.find({resposta : respostaUsuario,numeroId : numeroIdExercicio}, (erro, collection) => {
            if (erro) {
                return res.send(erro);
            }
            if (collection.resposta == respostaUsuario) {
                console.log(collection.resposta);
                return res.send(true);
            } else {
                return res.send(false);
            }
        });

     };
