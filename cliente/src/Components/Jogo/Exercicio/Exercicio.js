    import React, {Component} from 'react';
    import {Icon,Table,Button } from "semantic-ui-react";
    import {Link} from "react-router-dom";
    import './style.css';
    import axios from 'axios';

    class  Exercicio extends Component {
        constructor(props) {
            super(props);
            //estado do componente começa com o resultado como um array vazio
            this.state = {
                exercicio: [],
                pergunta: []

            };

            axios
                .get('http://localhost:3001/exerciciosid/')
                .then(resultadoRequisicao => {
                    console.log(resultadoRequisicao.data.pergunta);
                    console.log(resultadoRequisicao.data.respostas);
                    this.setState({
                             pergunta: resultadoRequisicao.data.pergunta,
                             exercicio: resultadoRequisicao.data.respostas
                        }
                    );


                });

        }


        render() {

            return (
                <div className="container">
                    <Link to="/niveis"><Icon name="arrow circle left" size="big" color="black"
                                             className="espacamentoTop"/></Link>

                    <Table padded>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Instrução : {this.state.pergunta}  </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Button basic color='blue'>
                                        {this.state.exercicio}
                                    </Button>

                                </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <div className="text-center espacamentoBottom">
                                    <Button color='green' onClick={() => {
                                        console.log("Resposta correta");
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