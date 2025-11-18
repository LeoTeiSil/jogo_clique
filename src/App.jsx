import React, { useState } from 'react';
import Menu from './Menu'; 
import Jogo from './Jogo'; 
import './App.css'; 

function App() {
  const [telaAtual, setTelaAtual] = useState('menu');
  const [dificuldade, setDificuldade] = useState(null); 
  const iniciarJogo = (dificuldadeSelecionada) => {
    setDificuldade(dificuldadeSelecionada);
    setTelaAtual('jogo');
  };

  const voltarAoMenu = () => {
    setTelaAtual('menu');
    setDificuldade(null); 
  };

  if (telaAtual === 'menu') {
    return <Menu iniciarJogo={iniciarJogo} />;
  }

  if (telaAtual === 'jogo') {
    return (
      <Jogo 
        dificuldadeSelecionada={dificuldade} 
        voltarAoMenu={voltarAoMenu} 
      />
    );
  }
}

export default App;