
    import React, {Component} from 'react';
    import { ListGroup, ListGroupItem  } from 'reactstrap';
    import {Icon,Segment} from "semantic-ui-react";
    import {Link} from "react-router-dom";
    import './style.css';
    import axios from 'axios';
        render() {
            return (
                <div className="container">
                    <h3 className="text-center espacamentoTop">Exercicios do nivel Avançado</h3>
                    <Link to="/niveis" ><Icon name="arrow circle left" size="big" color="black"/></Link>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                     <ListGroup className="espacamentoTop">
                        {
                            this.state.exercicios.map(exercicios =>
                            <Segment circular style={tamanho} tag="a" href= {"/exercicio/"+ exercicios.numeroId} action >
                                Exercicio {exercicios.numeroId}
                            </Segment>
                        }
                     </ListGroup>
                    </div>