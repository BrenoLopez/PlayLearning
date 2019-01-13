    import React from 'react';
    import {Button} from 'reactstrap';
    import background from './imgs/background-inicial.jpg';
    import {Link} from "react-router-dom";

    const imagem_fundo = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeate"
    };

    const PaginaInicial = props => {

        return(
          <div Style={imagem_fundo}>
            <div  className="text-center botaoIniciar" >
                <Link to="/niveis/1"> <Button color="primary">Iniciar</Button></Link>
            </div>
            </div>
        );
    };


    export default PaginaInicial;
