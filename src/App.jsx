import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/basicos/layout/Card';

export default () => {
  return(
    <div id="app">
      <h1>Fundamentos com React</h1>  
      <Card titulo="Primeiro">
        <Primeiro />
      </Card>
      
      <Card titulo="Com Parametro">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Pedro"
          nota={9.3}
        />
      </Card>
      
      <Card titulo="Aleatorio">
        <Aleatorio valorMaximo={10} valorMinimo={0} />
      </Card>
    </div>
  );
}