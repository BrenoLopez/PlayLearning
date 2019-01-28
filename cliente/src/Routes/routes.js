  import React from 'react';
  import {BrowserRouter, Route,Switch} from 'react-router-dom';
  //componentes que direcionaram para as rotas
  import PaginaInicial from './../Components/Home/PaginaInicial';
  import Niveis from '../Components/Jogo/Niveis/Niveis';
  import Exercicio from '../Components/Jogo/Exercicio/Exercicio';
  import ListagemExerciciosBasico from '../Components/Jogo/ListagemExercicios/ListagemExerciciosBasico';
  import ListagemExerciciosMedio from '../Components/Jogo/ListagemExercicios/ListagemExerciciosMedio';
  import ListagemExerciciosAvancado from '../Components/Jogo/ListagemExercicios/ListagemExerciciosAvancado';

   const Routes = () => {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component= {PaginaInicial}/>
          <Route path="/niveis" component={Niveis}/>
          <Route path="/exercicio/:numeroId/:nivel" component={Exercicio}/>
          <Route path="/listagemExercicios/basico" component={ListagemExerciciosBasico}/>
          <Route path="/listagemExercicios/medio" component={ListagemExerciciosMedio}/>
            <Route path="/listagemExercicios/avancado" component={ListagemExerciciosAvancado}/>
        </Switch>
      </BrowserRouter>
    );
  };

  export default Routes;
