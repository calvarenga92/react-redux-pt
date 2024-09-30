import React from  'react';

const Aleatorio = (props) => {
    const {valorMaximo, valorMinimo} = props;
    const sorteado = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo);
    return(
        <div>Numero Sorteado: {sorteado}</div>
    )
}

export default Aleatorio;
