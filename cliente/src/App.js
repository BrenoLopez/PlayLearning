  import React, { Component } from 'react';
  //import {BrowserRouter, Route} from "react-router-dom";
  import Routes from './Routes/routes';

  //import Categoria from './Components/Jogo/Niveis';
  class App extends Component {
    render() {
      return (
          <div className="App">
          <Routes/>
          </div>

            );
    }
  }

  export default App;
