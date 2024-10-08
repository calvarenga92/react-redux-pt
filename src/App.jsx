import React from 'react';
import "./App.css"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ListaProduto from './components/repeticao/ListaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default () => {
  return(
    <div className="App">
      <h1>Fundamentos React</h1> 

      <div className="Cards">
        <Card titulo="#13 - Desafio Megasena" color="#0922af">
          <Mega qtde={8} />
        </Card>
        <Card titulo="#12 - Contador" color="#cc3560">
          <Contador numeroInicial={10} />
        </Card>

        <Card titulo="#11 - Componente Controlado (Input)" color="#023a09">
          <Input />
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#170c94">
          <IndiretaPai />
        </Card>

        <Card titulo="#09 - Comunicação Direta" color="#f45e00">
          <DiretaPai numero={20} />
        </Card>

        <Card titulo="#08 - Rendereização condicional Par ou Impar" color="#e400f4">
          <ParOuImpar numero={20} />
          <UsuarioInfo usuario={{ nome: 'Fernando' }} />
        </Card>

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