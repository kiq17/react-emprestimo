import React from 'react';
import { useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Resultado from './componentes/Resultado';

function App() {
  const [valor, setValor] = useState('')
  const [prazo, setPrazo] = useState(0)
  const [total, setTotal] = useState(0)

  let componente
  if (total == 0) {
    componente = ''
  } else {
    componente = <Resultado
      valor={valor}
      prazo={prazo}
      total={total}
    />
  }


  return (
    <>
      <Header titulo="Calcule o seu empréstimo" />

      <div className="conteiner">
      <Formulario
        valor={valor}
        setValor={setValor}
        prazo={prazo}
        setPrazo={setPrazo}
        setTotal={setTotal}
      />
      {componente}
      </div>
    </>
  )
}

export default App
