// const RespostasNumeroId = require('./../models/respostasModel');
//
//
// let Respostas = new RespostasNumeroId(
//     {
//         alternativas :
//             [
//                 {
//                     alternativa: "cin"
//                 },
//                 {
//                     alternativa: "salario"
//                 },
//                 {
//                     alternativa: "<<"
//                 },
//                 {
//                     alternativa: ";"
//                 },
//                 {
//                     alternativa: "cout"
//                 },
//                 {
//                     alternativa: "="
//                 },
//                 {
//                     alternativa: "scanf"
//                 },
//                 {
//                     alternativa: ">>"
//                 },
//                 {
//                     alternativa: ":"
//                 }
//             ],
//         resposta : "cin >> salario ;"  ,
//         numeroId: 5
//
//     }
// );
//
// Respostas.save(function (err) {
//     if (err) throw err;
//     console.log('Dados salvos com sucesso!');
// });
//
//
// module.exports = function(app) {
//     //Buscar respostas do bd e responder por aqui em formato json
//     app.get('/respostasid', function (req, res) {
//
//         RespostasNumeroId.find(
//             function (err, collection) {
//                 if (err)
//                     return console.error(err);
//                 else
//                     console.log("Foi recuperado o reposta com numeroId: ");
//                 res.json(collection);
//             });
//     });
// };