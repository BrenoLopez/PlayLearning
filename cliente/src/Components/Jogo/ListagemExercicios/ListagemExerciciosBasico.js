    import React, {Component} from 'react';
    import { ListGroup, ListGroupItem  } from 'reactstrap';
    import {Icon,Segment} from "semantic-ui-react";
    import {Link} from "react-router-dom";
    import './style.css';
    import axios from 'axios';

    const tamanho = {
    width: 300,
    heigth: 300
}

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
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <ListGroup className="espacamentoTop">
                        {
                            this.state.exercicios.map(exercicios =>
                                <Segment circular style={tamanho}tag="a" href= {"/exercicio/"+ exercicios.numeroId} action >
                                   Exercicio {exercicios.numeroId}
                                 </Segment>
                            )
                        }

                    </ListGroup>
                   </div>

            </div>
        );
    }

    // <Segment circular style={tamanho} tag="a" href="/listagemExercicios/basico">
    //                 <Header as='h2'>
    //                     <Header.Subheader>
    //                         <Icon name='trophy'/>
    //                     </Header.Subheader>
    //                     Exercicios Básico
    //                 </Header>
    //             </Segment>