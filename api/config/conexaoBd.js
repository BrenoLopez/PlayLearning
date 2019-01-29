    const mongoose = require ('mongoose');

   const conexao = mongoose.connect('mongodb://breno:playlearn123@ds117773.mlab.com:17773/playlearn', { useNewUrlParser: true });

    if(conexao){
        console.log("conexao efetuada com sucesso!");
    }

    module.exports = conexao;