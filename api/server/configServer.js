    const express = require('express');
    const bodyParser = require('body-parser');
    const consign = require('consign');
    const app = express();




    app.use(function(req,res,next){
        //configuração para que a aplicação tenha um res para uma request padrao do navegador antes da requisição verdadeira
        res.setHeader("Access-Control-Allow-Origin","*"); // "*" habilita que a api vai fornecer uma resposta para qualquer aplicação de qualquer dominio
        res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE"); //metodos habilidatados atraves de qualquer origem
        res.setHeader("Access-Control-Allow-Headers","Content-Type"); //habilita que a origem defina o content-type da requisição
        res.setHeader("Access-Control-Allow-Credentials",true);
        next();
    });
    app.use(bodyParser.urlencoded({extended: true}));

    consign()
          .include('./../rotas')
          .then('./../config/conexaoBd.js')
          .then('./../controllers')
          .into(app);


    module.exports = app;