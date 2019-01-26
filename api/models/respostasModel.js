    const mongoose= require ('mongoose');

    Respostas = mongoose.model('respostas', {alternativas : Array, resposta : String,  numeroId: Number});

    module.exports = Respostas;