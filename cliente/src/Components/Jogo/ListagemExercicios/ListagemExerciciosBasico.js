    import React, {Component} from 'react';
    import { ListGroup, ListGroupItem  } from 'reactstrap';
    import {Icon} from "semantic-ui-react";
    import {Link} from "react-router-dom";
    import './style.css';
    import axios from 'axios';


    export default class ListagemExerciciosBasico extends Component {

           state = {
               exercicios: []
           };

           componentDidMount() {
               axios
                   .get('http://localhost:3001/exerciciosnivel/basico')
                   .then(resultado => {
                       console.log(resultado.data);
                       this.setState({exercicios: resultado.data});

                   });
           }

        render() {
            return (
                <div className="container">
                    <h3 className="text-center espacamentoTop">Exercicios do nivel Básico</h3>
                    <Link to="/niveis" ><Icon name="arrow circle left" size="big" color="black"/></Link>
                    <ListGroup className="espacamentoTop">
                        {
                            this.state.exercicios.map(exercicios =>
                                <ListGroupItem tag="a" href= {"/exercicio/"+ exercicios.numeroId} action >{exercicios.numeroId}</ListGroupItem>
                            )}

                    </ListGroup>

                </div>
            );
        }
    }