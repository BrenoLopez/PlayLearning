    import React, {Component} from 'react';
    import {Icon,Table,Button,Popup,Progress } from "semantic-ui-react";
    import {Link} from "react-router-dom";
    import Swal from 'sweetalert2';
    import 'sweetalert2/src/sweetalert2.scss';
    import 'animate.css/animate.min.css';
    import './style.css';
    import axios from 'axios';

    let contadorClicks = 0 ;
    parseInt(contadorClicks);
    let arrayRespostaUsuario = [];
    const urlApi = "http://localhost:3001";

    class  Exercicio extends Component {


        state = {
            instrucao : [],
            dica: [],
            alternativas: [],
            numeroExercicios: 0,
            numeroExercicioProgresso : 0


        };

        componentDidMount(){
            const { match : {params} } = this.props;
            axios
                .get(`${urlApi}/exercicioid/${params.numeroId}/${params.nivel}`)
                .then(resultado => {
                   //console.log(resultado.data[0].nivel);
                    this.setState({
                        instrucao: resultado.data[0].instrucao,
                        dica : resultado.data[0].dica,
                        numeroId : resultado.data[0].numeroId

                    });

                });

            axios
                .get(`${urlApi}/respostasid/${params.numeroId}/${params.nivel}`)
                .then(resultado => {
                    //console.log(resultado.data[0].alternativas);
                    this.setState(
                        {alternativas: resultado.data[0].alternativas});

                });
            axios
                .get(`${urlApi}/exercicios/${params.nivel}`)
                .then(resultado => {
                    //console.log(resultado.data.length);
                    this.setState({
                       numeroExercicios: resultado.data.length,
                        numeroExercicioProgresso : params.numeroId

                    });

                });

        }



        pegarValorBotaoResposta = (valorAtual) => {

            do {
                arrayRespostaUsuario[contadorClicks] = valorAtual;
                contadorClicks++;
                console.log(arrayRespostaUsuario);
               // console.log(contadorClicks);

            }

            while (false);

        };

        concatenarRespostaEnvia() {
            let arrayConcatenado = arrayRespostaUsuario.join(' ');
            //console.log(arrayConcatenado);
            this.enviaResposta(arrayConcatenado);

        }

        enviaResposta (respostaUsuario){
            const { match: { params } } = this.props;

             axios
                 .post(`${urlApi}/confereResposta/${params.numeroId}`,{resposta : respostaUsuario})
                 .then(resultadoRequisicao =>{
                    //console.log("Enviei "+JSON.stringify({resposta : respostaUsuario})+" e recebi "+resultadoRequisicao.data);
                     if(resultadoRequisicao.data === true){
                          //console.log("resposta certa");
                         Swal.fire({
                             title: 'Certa Resposta!',
                             text: 'Click no botão e bora pra proxima questão!',
                             type: 'success'
                         }).then( ()=>{
                             this.setState({alternativas : []});
                             this.setState({instrucao : []});
                             this.buscaProximoExercicio();
                         });

                     }
                     else{
                          //console.log("resposta incorreta");
                         Swal.fire({
                             title:'Resposta Incorreta!',
                             text:'Click no botão e tente novamente!',
                             type: 'error',
                             animation: false,
                             customClass: 'animated tada'
                             }
                         ).then(()=>{
                             window.location.reload();
                         });


                     }
                 });
        }

    buscaProximoExercicio() {
        const {match: {params}} = this.props;
        let numeroIdAtualizado = parseInt(params.numeroId) + 1;
        //console.log(numeroIdAtualizado);
        //console.log(this.state.numeroExercicios);
        //console.log(params.numeroId);
        //console.log(params.nivel);
        if (numeroIdAtualizado === (this.state.numeroExercicios + 1) && params.nivel.toString() === "basico") {
            numeroIdAtualizado = 1;
            Swal.fire({
                title: "Parabéns",
                text: "Você está apto a jogar o proximo nivel!",
                type: "success"
            }).then(() => {
                window.location.href = `/exercicio/${numeroIdAtualizado}/medio`

            });
        } else if (numeroIdAtualizado === (this.state.numeroExercicios + 1) && params.nivel === "medio") {
            numeroIdAtualizado = 1;
            Swal.fire({
                title: "Parabéns",
                text: "Você está apto a jogar o proximo nivel!",
                type: "success"
            }).then(() => {
                window.location.href = `/exercicio/${numeroIdAtualizado}/avancado`
            });
        } else if (numeroIdAtualizado === (this.state.numeroExercicios + 1) && params.nivel === "avancado") {
            numeroIdAtualizado = 1;
            Swal.fire({
                title: "Parabéns",
                text: "Você finalizou o jogo !",
                type: "success"
            }).then(() => {
                window.location.href = `/niveis`
            });
        }else
        if (params.numeroId === this.state.numeroExercicios) {
            numeroIdAtualizado = 1;
            if (params.nivel.toString() === "basico") {
                Swal.fire({
                    title: "Parabéns",
                    text: "Você está apto a jogar o proximo nivel!",
                    type: "success"
                }).then(() => {
                    window.location.href = `/exercicio/${numeroIdAtualizado}/medio`
                });
            }  if (params.nivel.toString() === "medio") {
                Swal.fire({
                    title: "Parabéns",
                    text: "Você está apto a jogar o proximo nivel!",
                    type: "success"
                }).then(() => {
                    window.location.href = `/exercicio/${numeroIdAtualizado}/avancado`
                });
            }
        }
            else
                window.location.href = `/exercicio/${numeroIdAtualizado}/${params.nivel}`;


    }

    retornaRespostaUsuario (valorResposta){
        document.querySelector('.lugarRespostaUsuario').append(valorResposta+" ");

        }


        render() {


            return (
                <div className="container" >
                    <Link to='/niveis'><Icon name="arrow circle left" size="big" color="black"
                                             className="espacamentoTop"/></Link>

                    <Table padded>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Instrução : {this.state.instrucao.toString()}  </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell >
                                    <Popup trigger={<Button  basic color="green"  className=" lugarRespostaUsuario" content="Sua resposta: " fluid  onClick={
                                        ()=>{
                                        //modal para dica
                                         Swal.fire({
                                             title:"Dica:",
                                             text : this.state.dica,
                                             type : "info"
                                         });
                                        }
                                    }/>} content='Click e ganhe uma dica :-)' position={'bottom left'}/>

                                </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell className="text-center">
                                    {

                                        this.state.alternativas.map(resultado =>
                                            <Button basic color='blue' onClick={
                                                ()=>{
                                                this.pegarValorBotaoResposta(resultado.alternativa.toString());
                                                this.retornaRespostaUsuario(resultado.alternativa.toString());
                                                }
                                            } className={"botaoResposta"} key={resultado.alternativa} hidden={false} >{resultado.alternativa}</Button>

                                        )
                                    }
                                </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <div className="text-center espacamentoBottom">

                                    <Button color='green' onClick={() => {
                                       this.concatenarRespostaEnvia();
                                    }} >
                                        Validar Resposta
                                    </Button>

                                     <Button color='red' onClick={() => {
                                       window.location.reload();
                                    }} >
                                        Limpar Resposta
                                    </Button>
                            </div>
                            </Table.Row>
                            <br/>
                        </Table.Body>
                    </Table>
                    <Progress  value={this.state.numeroExercicioProgresso} total={this.state.numeroExercicios} indicating active progress='ratio' size="small" color="yellow"/>
                </div>



            );
        }
    }
    export default Exercicio;
