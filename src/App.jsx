import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import "./App.css"
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ListaProduto from './components/repeticao/ListaProdutos';
export default () => {
  return(
    <div className="App">
      <h1>Fundamentos React</h1> 

      <div className="Cards">
        <Card titulo="#07 - Desafio Produto" color="#a2ba89">
          <ListaProduto />
        </Card>

        <Card titulo="#06 - Repetição" color="#ff4c65">
          <ListaAlunos />
        </Card>
        
        <Card titulo="#05 - Componente com filhos" color="#bd0">
          <Familia sobrenome="Sese">
            <FamiliaMembro name="Pedro" />
            <FamiliaMembro name="Claudio" />
            <FamiliaMembro name="Vania" />
          </Familia>
        </Card>
                
        <Card titulo="#04 - Desafio Aleatório" color="#E8B71A">
          <Aleatorio valorMaximo={10} valorMinimo={0} />
        </Card>

        <Card titulo="#02 - Com Parametro" color="#E94C6F">
          <ComParametro
            titulo="Situação do aluno"
            aluno="Pedro"
            nota={9.3}
          />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#bd0">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}