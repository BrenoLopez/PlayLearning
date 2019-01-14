    import React, {Component} from 'react';
    import {Icon,Table,Button } from "semantic-ui-react";
    import {Link} from "react-router-dom";
    import './style.css';


    class  Exercicio extends Component{

        constructor (props){
            super(props);
            this.State = {

            }
        }
        render(){

            return(
                <div className="container">
                    <Link to="/niveis"><Icon name="arrow circle left" size="big" color="black" className="espacamentoTop" /></Link>

                    <Table padded>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Instrução : (Instrução buscada do bd)</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Aqui vai botões com as possiveis respostas</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <div>
                                <Button color='green' onClick={() =>{
                                    console.log( "Resposta correta");
                                }}>
                                    Validar Resposta
                                </Button>
                                </div>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            );
        }
    }

    export default Exercicio;