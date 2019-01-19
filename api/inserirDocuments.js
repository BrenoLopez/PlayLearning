const mongoose= require ('mongoose');

//conexao do banco de dados

const conexao = mongoose.connect('mongodb://localhost:27017/playlearn', { useNewUrlParser: true });
if(conexao){
    console.log("conexao efetuada com sucesso!");
}

let Exercicios = mongoose.model('exercicio', {instrucao: String, nivel: String, numeroId: Number});

var exercicio2 = new Exercicios({instrucao: 'Declare uma constante', nivel :'basico',numeroId: 2});


exercicio2.save(function (err) {
    if (err) throw err;
    console.log('Dados salvos com sucesso!');
});

