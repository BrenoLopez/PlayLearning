import React, {Component} from 'react';
import { ListGroup  } from 'reactstrap';
import {Icon,Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import './style.css';
import axios from 'axios';


const tamanho = {
    width: 300,
    heigth: 300
};

export default class ListagemExerciciosMedio extends Component {

    state = {
        exercicios: []
    };

    componentDidMount() {
        axios
            .get('http://localhost:3001/exerciciosnivel/medio')
            .then(resultado => {
                console.log(resultado.data);
                this.setState({exercicios: resultado.data});

            });
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center espacamentoTop">Exercicios do nivel Médio</h3>
                <Link to="/niveis" ><Icon name="arrow circle left" size="big" color="black"/></Link>
             <div style={{display: 'flex', justifyContent: 'center'}}>

                <ListGroup className="espacamentoTop">
                    {
                        this.state.exercicios.map(exercicios =>
                            <Segment circular style={tamanho}tag="a" href={"/exercicio/"+ exercicios.numeroId+"/"+exercicios.nivel} action key={exercicios.numeroId}> Exercicio {exercicios.numeroId}
                             </Segment>)}

                </ListGroup>
            </div>
            </div>
        );
    }
}