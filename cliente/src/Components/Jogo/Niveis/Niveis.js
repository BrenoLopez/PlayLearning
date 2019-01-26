    import React, {Component} from 'react';
    import { ListGroup, ListGroupItem  } from 'reactstrap';
    import {Icon, Segment,Header} from "semantic-ui-react";
    import {Link} from "react-router-dom";
    import './style.css';


const tamanho = {
    width: 300,
    heigth: 300
}


    export default class Niveis extends Component {
      render() {
        return (
            <div className="container">
              <h2 className="text-center espacamentoTop">Niveis de dificuldade</h2>

                <Link to="/" ><Icon name="arrow circle left" size="big" color="black"/></Link>
            <div style={{display: 'flex', justifyContent: 'center'}}>

            <ListGroup className="espacamentoTop text-center ">
                <Segment circular style={tamanho} tag="a" href="/listagemExercicios/basico">
                    <Header as='h2'>
                        <Header.Subheader>
                            <Icon name='trophy'/>
                        </Header.Subheader>
                        Exercicios Básico
                    </Header>
                </Segment>

                <Segment circular style={tamanho} tag="a" href="/listagemExercicios/medio">
                    <Header as='h2'>
                        <Header.Subheader>
                            <Icon name='trophy'/>
                        </Header.Subheader>
                        Exercicios Médio
                    </Header>
                </Segment>

                <Segment circular style={tamanho} tag="a" href="/listagemExercicios/avancado">
                    <Header as='h2'>
                        <Header.Subheader>
                             <Icon name='trophy'/>
                        </Header.Subheader>
                        Exercicios Avançado
                    </Header>
                </Segment>
              </ListGroup>
             </div>
            </div>
        );
      }
    }