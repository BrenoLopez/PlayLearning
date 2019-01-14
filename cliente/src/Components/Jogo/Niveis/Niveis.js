    import React, {Component} from 'react';
    import { ListGroup, ListGroupItem  } from 'reactstrap';
    import {Icon} from "semantic-ui-react";

    export default class Niveis extends Component {

      render() {
        return (
            <div className="container">
                <Icon name="arrow circle left"/>
              <h3 className="text-center">Niveis de dificuldade</h3>
               <ListGroup>
                <ListGroupItem tag="a" href="/niveis/basico" action>Exercicios de nivel Básico (buscar do bd)</ListGroupItem>
                <ListGroupItem tag="a" href="/niveis/medio" action>Exercicios de nivel médio</ListGroupItem>
                <ListGroupItem tag="a" href="/niveis/avancado" action>Exercicios de nivel avançado</ListGroupItem>
              </ListGroup>

            </div>
        );
      }
    }