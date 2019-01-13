  import React from 'react';
  import {BrowserRouter, Route,Switch} from 'react-router-dom';
  //componentes que direcionaram para as rotas
  import PaginaInicial from './../Components/Home/PaginaInicial';
  import Niveis from './../Components/Jogo/Niveis';
  const Routes = () => {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component= {PaginaInicial}/>
          <Route path="/niveis/:nivel" component={Niveis}/>
        </Switch>
      </BrowserRouter>
    );
  };

  export default Routes;
