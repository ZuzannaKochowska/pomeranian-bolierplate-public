import './styles.css';
import { useState } from 'react';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView';
import { Playground } from './PlayGround/Playground';
// import { Board } from './Board/Board';

export function Memo_Game() {
  const [isGamestarted, setGameStarted] = useState(false);
  return (
    <div className="memoGame">
      <h1> {'<'} Memory Game</h1>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary{' '}
      </p>
      {isGamestarted ? (
        <GameView setGameStarted={setGameStarted} />
      ) : (
        <MenuView setGameStarted={setGameStarted} />
      )}
      {isGamestarted && <Playground />}
    </div>
  );
}
