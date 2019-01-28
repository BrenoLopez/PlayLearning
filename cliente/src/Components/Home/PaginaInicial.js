    import React from 'react';
    import Swal from 'sweetalert2';
    import {Button} from "semantic-ui-react";
    import './style-pagina-inicial.css';
    import Logo from './imgs/logo-jogo.png';


    const PaginaInicial = () => {

        return(
            <div className="backgroundHome">
                <img src={Logo} alt="" className="logoHome"></img>
                <Button circular  color="teal" tag="a" className=" botaoIniciar" onClick={
                    ()=>{
                        Swal.fire({
                            title: "Alguma coisa",
                            text : "Alguma coisa",
                            type : "info"

                        }).then(
                            ()=>{
                                window.location.href = '/niveis'
                            }

                        )
                    }
                }>Iniciar</Button>
            </div>
        );
    };


    export default PaginaInicial;
