    const mongoose= require ('mongoose');

    Respostas = mongoose.model('respostas', {respostas : Array, numeroId: Number});

    module.exports = Respostas;