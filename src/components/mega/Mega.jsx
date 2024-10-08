import React, { useState } from 'react';
import "./Mega.css"

export default props => {
  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = Array(qtde).fill(0);
  const [numeros, setNumeros] = useState(numerosIniciais);

  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);
    return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
  }
  
  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
      const novoNumero = gerarNumeroNaoContido(1, 60, nums);
      return [...nums, novoNumero]
    }, [])
    .sort((n1, n2) => n1 - n2)
    
    return numeros;
  }

  return(
    <div className='Mega'>
      <h2>Mega</h2>
      <h3>{numeros.join('  ')}</h3>
      <div>
        <label >Qtde de Números: </label>
        <input max="15" min="6" type="number" value={qtde} onChange={e => {
          setQtde(+e.target.value);
          setNumeros(gerarNumeros(+e.target.value))
        }} />
      </div>
      <button onClick={() => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
    </div>
  );
}



