import { GameView } from './GameView/GameView';
import { Playground } from './PlayGround/Playground';
// import './styles.css';
import { useState, onClick } from 'react';
import './Button/Button.css';
import { MenuView } from '../SklepacKreta/MenuView/MenuView';

export function SklepacKreta() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="hit-the-mole">
      <h1> {'<'} KRET</h1>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.{' '}
      </p>
      {isGameStarted ? (
        <GameView
          setGameStarted={setGameStarted}
          score={score}
          setScore={setScore}
        />
      ) : (
        <>
          <MenuView setGameStarted={setGameStarted} />
        </>
      )}
      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  );
}
