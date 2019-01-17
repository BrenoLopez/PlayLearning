        import React, {Component} from 'react';
        import { ListGroup, ListGroupItem  } from 'reactstrap';
        import {Icon} from "semantic-ui-react";
        import {Link} from "react-router-dom";
        import './style.css';

        export default class ListagemExerciciosMedio extends Component {
            render() {
                return (
                    <div className="container">
                        <h3 className="text-center espacamentoTop">Exercicios do nivel Médio</h3>
                        <Link to="/niveis" ><Icon name="arrow circle left" size="big" color="black"/></Link>
                        <ListGroup className="espacamentoTop">
                            <ListGroupItem tag="a" href="/exercicio/:numero" action> Listar exercicios em forma de lista por numero do exercicio</ListGroupItem>

                        </ListGroup>

                    </div>
                );
            }
        }