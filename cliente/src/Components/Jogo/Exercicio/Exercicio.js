    import React, {Component} from 'react';
    import {Icon,Table,Button } from "semantic-ui-react";
    import {Link} from "react-router-dom";
    import './style.css';
    import axios from 'axios';



    class  Exercicio extends Component {

        state = {
            instrucao : [],
            respostas: []

        };


        componentDidMount(){
            const { match: { params } } = this.props;
            axios
                .get(`http://localhost:3001/exercicioid/${params.numeroId}`)
                .then(resultado => {
                   // console.log(resultado.data[0].instrucao);
                    this.setState({instrucao: resultado.data[0].instrucao});

                });

            axios
                .get(`http://localhost:3001/respostasid/${params.numeroId}`)
                .then(resultado => {
                    //console.log(resultado.data[0].respostas);
                    this.setState(
                        {respostas: resultado.data[0].respostas});

                });
        }

        render() {

            return (
                <div className="container" >
                    <Link to="/niveis"><Icon name="arrow circle left" size="big" color="black"
                                             className="espacamentoTop"/></Link>

                    <Table padded>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Instrução : {this.state.instrucao.toString()}  </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>

                                    {

                                        this.state.respostas.map(resultado =>
                                            <Button basic color='blue' onClick={
                                                (resposta)=>{
                                                    //criar função para concatenar palavras clicadas
                                                       resposta = resultado.resposta.toString();
                                                       console.log(resposta);
                                                    }
                                            }>{resultado.resposta.toString()}</Button>

                                        )
                                    }
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