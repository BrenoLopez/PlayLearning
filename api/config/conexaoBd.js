     const firebase = require('firebase');

     // Initialize Firebase
     // TODO: Replace with your project's customized code snippet
     conexaobd = () => {
     const config = {
         apiKey: "AIzaSyCMtfg4tmcSxXFqqWR7k3KohpfjS7z7ej8",
         authDomain: "playlearning-b80ef.firebaseapp.com",
         databaseURL: "https://playlearning-b80ef.firebaseio.com",
         storageBucket: "playlearning-b80ef.appspot.com",
         messagingSenderId: "471521486952"
     };
        return firebase.initializeApp(config);
     };
     module.exposts = conexaobd;
