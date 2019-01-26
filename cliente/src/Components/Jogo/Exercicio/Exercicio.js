    import React, {Component} from 'react';
    import {Icon,Table,Button,Input } from "semantic-ui-react";
    import {Link} from "react-router-dom";
    import './style.css';
    import axios from 'axios';

    let contadorClicks = 0 ;
    parseInt(contadorClicks);
    let arrayRespostaUsuario = [];

    class  Exercicio extends Component {

        state = {
            instrucao : [],
            alternativas: [],

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
                    //console.log(resultado.data[0].alternativas);
                    this.setState(
                        {alternativas: resultado.data[0].alternativas});

                });
        }



        pegarValorBotaoResposta = (valorAtual) => {

            do {
                arrayRespostaUsuario[contadorClicks] = valorAtual;
                contadorClicks++;
                //this.escondeBotao();
                console.log(arrayRespostaUsuario);
                console.log(contadorClicks);

            }

            while (false);

        };

        concatenarResposta() {
            let arrayConcatenado = arrayRespostaUsuario.join(' ');
            console.log(arrayConcatenado);
            this.enviaResposta(arrayConcatenado);

        }

        enviaResposta (resposta){
             axios
                 .post('http://localhost:3001/confereResposta', {resposta : resposta})
                 .then(resultadoRequisicao =>{
                     if(resultadoRequisicao === true){
                         return //modal resposta certa;
                     }
                     else{
                    //modal resposta incorreta
                     }
                 });
        }

       //  escondeBotao(){
       //
       //          document.querySelector('.botaoResposta').hidden = true;
       // }

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
                                    <Input disabled label="Sua resposta:" className="container" placeholder={()=> {
                                         arrayRespostaUsuario.map((resultado) =>
                                            <p>{resultado}</p>
                                        );
                                        }
                                    } />

                                </Table.Cell>


                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="text-center">
                                    {

                                        this.state.alternativas.map(resultado =>
                                            <Button basic color='blue' onClick={
                                                ()=>{
                                                this.pegarValorBotaoResposta(resultado.alternativa);
                                                }
                                            } className={"botaoResposta"} key={resultado.alternativa} hidden={false} >{resultado.alternativa.toString()}</Button>

                                        )
                                    }
                                </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <div className="text-center espacamentoBottom">

                                    <Button color='green' onClick={() => {
                                       this.concatenarResposta();
                                    }} >
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