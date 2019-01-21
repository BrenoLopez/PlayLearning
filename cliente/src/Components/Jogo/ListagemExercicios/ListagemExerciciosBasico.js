        import React, {Component} from 'react';
        import { ListGroup, ListGroupItem  } from 'reactstrap';
        import {Icon} from "semantic-ui-react";
        import {Link} from "react-router-dom";
        import './style.css';
        import axios from 'axios';


        export default class ListagemExerciciosBasico extends Component {
               constructor(props){
                   super(props);
                this.state = {
                    exercicios: []
                };

                
                axios
                    .get('http://localhost:3001/exerciciosnivel/basico')
                    .then(resultado =>{
                        console.log(resultado.data);
                        //this.setState({exercicios: resultado.data[0]});
                    });

               }



            render() {
                return (
                    <div className="container">
                        <h3 className="text-center espacamentoTop">Exercicios do nivel Básico</h3>
                        <Link to="/niveis" ><Icon name="arrow circle left" size="big" color="black"/></Link>
                        <ListGroup className="espacamentoTop">
                            <ListGroupItem tag="a" href="#" action>{this.state.exercicios}</ListGroupItem>
                        </ListGroup>

                    </div>
                );
            }
        }