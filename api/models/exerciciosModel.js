    const conexaoBancoDados = require( './../config/conexaoBd');

    var Exercicios = conexaoBancoDados.model('exercicios', {instrucao : String, nivel: String, numeroId: String});
    var exercicio = new Exercicios({instrucao: 'Declare uma variável de tipo inteiro', nivel:'basico', numeroId:'1'});

    exercicio.save(function (err) {
        if (err) throw err;
        console.log('Dados salvos com sucesso!');
    });

    Exercicios.find(function (err, authors) {
        if (err) return console.error(err);
        console.log(exercicio);
    });