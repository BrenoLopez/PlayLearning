    import React from 'react';
    import {Button} from 'reactstrap';
    import Background from './imgs/background-inicial.jpg';
    import './style-pagina-inicial.css';




    const imagem_fundo = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display : 'block',
        margin: '0',
        padding: '0',
    };

    const Paper =()=>{
      return (
            <Paper style={imagem_fundo}/>
      );
    };

    const PaginaInicial =()=> {

        return(
            <div>
          <Paper/>
              <Button color="primary" tag="a" href="/niveis" className="botaoIniciar">Iniciar</Button>
            </div>
        );
    };


    export default PaginaInicial;
