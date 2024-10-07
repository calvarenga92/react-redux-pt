import React from 'react';
import alunos from '../../data/alunos';

export default (props) => {
  const li1 = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {`${aluno.id}) ${aluno.nome} -> ${aluno.nota}`}
      </li>
    );
  })

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {li1}
      </ul>
    </div>
  )
}