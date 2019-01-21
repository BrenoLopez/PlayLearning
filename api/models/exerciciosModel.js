    const mongoose= require ('mongoose');

    var Exercicios = mongoose.model('exercicios', {instrucao : String, nivel: String, numeroId: Number});

    module.exports = Exercicios;