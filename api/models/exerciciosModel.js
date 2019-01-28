    const mongoose= require ('mongoose');

    let Exercicios = mongoose.model('exercicios', {instrucao : String, nivel: String, numeroId: Number});

    module.exports = Exercicios;