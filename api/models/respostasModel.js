    const mongoose= require ('mongoose');

    Respostas = mongoose.model('repostas', {respostas : Array, numeroId: Number});

    module.exports = Respostas;