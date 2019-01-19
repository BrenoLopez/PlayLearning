    import React, {Component} from 'react';
    import { ListGroup, ListGroupItem  } from 'reactstrap';
    import {Icon} from "semantic-ui-react";
    import {Link} from "react-router-dom";
    import './style.css';

    export default class Niveis extends Component {
      render() {
        return (
            <div className="container">
              <h3 className="text-center espacamentoTop">Niveis de dificuldade</h3>
                <Link to="/" ><Icon name="arrow circle left" size="big" color="black"/></Link>
               <ListGroup className="espacamentoTop">
                <ListGroupItem tag="a" href="/listagemExercicios/basico" action>Exercicios de nivel Básico</ListGroupItem>
                <ListGroupItem tag="a" href="/listagemExercicios/medio" action>Exercicios de nivel médio</ListGroupItem>
                <ListGroupItem tag="a" href="/listagemExercicios/avancado" action>Exercicios de nivel avançado</ListGroupItem>
              </ListGroup>

            </div>
        );
      }
    }