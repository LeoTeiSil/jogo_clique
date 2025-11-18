import React, { useState, useEffect, useCallback } from 'react';

const DIFICULDADES = {
  facil: { intervalo: 1500, tamanhoObjeto: '100px', texto: 'Fácil' },
  mediano: { intervalo: 1000, tamanhoObjeto: '70px', texto: 'Mediano' },
  dificil: { intervalo: 500, tamanhoObjeto: '50px', texto: 'Difícil' },
};

function Jogo({ dificuldadeSelecionada, voltarAoMenu }) {
  const [pontuacao, setPontuacao] = useState(0);
  const [posicao, setPosicao] = useState({ x: 0, y: 0, visivel: false });

  const configAtual = DIFICULDADES[dificuldadeSelecionada];

  const novaPosicao = useCallback(() => {
    const areaLargura = window.innerWidth * 0.9;
    const areaAltura = window.innerHeight * 0.7; 
    const objetoTamanho = parseInt(configAtual.tamanhoObjeto);

    const x = Math.random() * (areaLargura - objetoTamanho);
    const y = Math.random() * (areaAltura - objetoTamanho);

    setPosicao({
      x: x,
      y: y,
      visivel: true,
    });
    
    if (dificuldadeSelecionada === 'dificil') {
        setTimeout(() => setPosicao(p => ({ ...p, visivel: false })), configAtual.intervalo - 100); 
    }
  }, [dificuldadeSelecionada, configAtual.tamanhoObjeto, configAtual.intervalo]);

  useEffect(() => {
    const timer = setInterval(novaPosicao, configAtual.intervalo);

    return () => clearInterval(timer);
  }, [novaPosicao, configAtual.intervalo]);

  const handleClick = (e) => {
    e.stopPropagation();
    if (posicao.visivel) {
        setPontuacao(p => p + 1);
        setPosicao(p => ({ ...p, visivel: false }));
    }
  };

  return (
    <div className="game-container">
      <header className="game-header">
        <button onClick={voltarAoMenu} className="back-button">
            ← Voltar ao Menu
        </button>
        <h1>Pontuação: {pontuacao}</h1>
        <h2>Nível: {configAtual.texto}</h2>
      </header>
      
      <div className="game-area">
        {posicao.visivel && (
          <div 
            className="target-object"
            onClick={handleClick}
            style={{
              transform: `translate(${posicao.x}px, ${posicao.y}px)`,
              width: configAtual.tamanhoObjeto,
              height: configAtual.tamanhoObjeto,
              backgroundColor: '#000000', 
              color: '#ffffff',
              fontSize: '1em'
            }}
          >
            •
          </div>
        )}
        
        {!posicao.visivel && (
            <p className="status-text">Prepare-se!</p>
        )}
      </div>
    </div>
  );
}

export default Jogo;