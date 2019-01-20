    const mongoose = require ('mongoose');

   const conexao = mongoose.connect('mongodb://localhost:27017/playlearn', { useNewUrlParser: true });

    if(conexao){
        console.log("conexao efetuada com sucesso!");
    }

    module.exports = conexao;