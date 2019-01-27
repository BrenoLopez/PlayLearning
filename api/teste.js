const RespostasNumeroId = require('./models/respostasModel');


 let Respostas = new RespostasNumeroId(
{
    alternativas :
        [
    {
        alternativa: "float "
    },
    {
        alternativa: "#int"
    },
    {
        alternativa: "#define"
    },
    {
        alternativa: "pi"
    },
    {
        alternativa: " 3.1415"
    },
    {
        alternativa: "; "
    },
    {
        alternativa: "#float "
    },
    {
        alternativa: "define "
    }
    ,{
        alternativa: ":"
        }
],
  resposta : "#define pi 3.1415 "  ,
    numeroId: 2

    }
);

Respostas.save(function (err) {
    if (err) throw err;
    console.log('Dados salvos com sucesso!');
});