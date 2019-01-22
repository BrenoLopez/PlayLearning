    const mongoose= require ('mongoose');

    let Respostas = mongoose.model('repostas', {respostas : Array, numeroId: Number});

    module.exports = Respostas;