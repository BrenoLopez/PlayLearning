  import React from 'react';
  import {BrowserRouter, Route,Switch} from 'react-router-dom';
  //componentes que direcionaram para as rotas
  import PaginaInicial from './../Components/Home/PaginaInicial';
  import Niveis from '../Components/Jogo/Niveis/Niveis';
  import Exercicio from '../Components/Jogo/Exercicio/Exercicio';

   const Routes = () => {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component= {PaginaInicial}/>
          <Route path="/niveis" component={Niveis}/>
          <Route path="/exercicio" component={Exercicio}/>
        </Switch>
      </BrowserRouter>
    );
  };

  export default Routes;
