import React from 'react';

const DIFICULDADES = {
  facil: { intervalo: 1500, tamanhoObjeto: '80px', texto: 'Fácil' },
  mediano: { intervalo: 1000, tamanhoObjeto: '60px', texto: 'Mediano' },
  dificil: { intervalo: 500, tamanhoObjeto: '40px', texto: 'Difícil' },
};

function Menu({ iniciarJogo }) {
  return (
    <div className="menu-container">
      <h1>Jogo de Clique Rápido</h1>
      <h2>Selecione o Nível de Dificuldade:</h2>
      <div className="difficulty-selectors">
        {Object.keys(DIFICULDADES).map((key) => (
          <button
            key={key}
            className="difficulty-button"
            onClick={() => iniciarJogo(key)}
          >
            {DIFICULDADES[key].texto}
          </button>
        ))}
      </div>
      <p>O objetivo é clicar no alvo o máximo de vezes possível.</p>
    </div>
  );
}

export default Menu;