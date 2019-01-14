    import React from 'react';
    import {Button} from 'reactstrap';
    import background from './imgs/background-inicial.jpg';
    import './style-pagina-inicial.css';
    import {Link} from "react-router-dom";

    const imagem_fundo = {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center center"
    };

    const PaginaInicial = props => {

        return(

          <div style={imagem_fundo}>
            <div  className="text-center botaoIniciar ">
                <Link to="/niveis"> <Button color="primary">Iniciar</Button></Link>
            </div>
          </div>

        );
    };


    export default PaginaInicial;
