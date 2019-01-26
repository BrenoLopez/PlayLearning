    import React from 'react';

    import {Button} from "semantic-ui-react";
    import './style-pagina-inicial.css';
    import Logo from './imgs/logo-jogo.png';


    const PaginaInicial = () => {

        return(
            <div className="backgroundHome">
                <img src={Logo} alt="" className="logoHome"></img>
                <Button circular  color="teal" tag="a" href="/niveis" className=" botaoIniciar">Iniciar</Button>
            </div>
        );
    };


    export default PaginaInicial;
