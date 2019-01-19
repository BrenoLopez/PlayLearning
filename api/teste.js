    var express = require('express');
    var mongoose = require('mongoose');

    var app = express();

    mongoose.connect('mongodb://localhost:27017/Documents');

    var Author = mongoose.model('author', {nome: String, profissao: String});
    var bognar = new Author({nome: 'Bognar', profissao :'Programador'});
    var tite = new Author({nome: 'Tite', profissao :'Técnico de Futebol'});
    var lemmy = new Author({nome: 'Lemmy Kilmister', profissao :'Musico'});
    var astolfo = new Author({nome: 'Astolfo', profissao :'Programador'});

    tite.save(function (err) {
        if (err) throw err;
        console.log('Dados salvos com sucesso!');
    });
    lemmy.save(function (err) {
        if (err) throw err;
        console.log('Dados salvos com sucesso!');
    });
    astolfo.save(function (err) {
        if (err) throw err;
        console.log('Dados salvos com sucesso!');
    });
    Author.find(function (err, authors) {
        if (err) return console.error(err);
        console.log(authors);
    });
    bognar.save(function (err) {
        if (err) {
            console.log(err);
        }
        else
        console.log('Dados salvos com sucesso!');
    });