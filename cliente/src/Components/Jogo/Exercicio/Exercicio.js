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

   const progress_bar = {
    // width: 350,
    heigth: 100
};

const ProgressExampleProgressValuePercentageOfTotal = () => (
  <Progress progress='value' value={35} total={50} />
)

    class  Exercicio extends Component {

        state = {
            instrucao : [],
            dica: [],
            alternativas: []


        };

        componentDidMount(){
            const { match: { params } } = this.props;
            axios
                .get(`http://localhost:3001/exercicioid/${params.numeroId}`)
                .then(resultado => {
                   // console.log(resultado.data[0].instrucao);
                    this.setState({
                        instrucao: resultado.data[0].instrucao,
                        dica : resultado.data[0].dica
                    });

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
                 .post(`http://localhost:3001/confereResposta/${params.numeroId}`,{resposta : respostaUsuario})
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

    buscaProximoExercicio(){
        const { match: { params } } = this.props;
        let numeroIdAtualizado = parseInt(params.numeroId) + 1;
        console.log(numeroIdAtualizado);
        window.location.href = `/exercicio/${numeroIdAtualizado}`;
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
                                             text : this.state.dica
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
                                        Limpara Respostas
                                    </Button>
                            </div>
                            </Table.Row>
                            <br/>
                        </Table.Body>
                    </Table>
                    <Progress style={progress_bar} value={1}  total= {'5'} progress='ratio'/>

                </div>

            );
        }
    }
    export default Exercicio;
