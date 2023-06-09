import './styles.css';
import { useState, useEffect } from 'react';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView';
// import { Board } from './Board/Board';

export function Memo_Game() {
  const [isGamestarted, setGameStarted] = useState(false);
  return (
    <div className="memoGame">
      <h1> {'<'} Memory Game</h1>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary{' '}
      </p>
      <GameView></GameView>
      {isGamestarted ? <GameView /> : <MenuView />}
    </div>
  );
}
