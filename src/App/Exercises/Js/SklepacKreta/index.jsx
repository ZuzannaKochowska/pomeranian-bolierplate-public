import { GameView } from './GameView/GameView';
import { Playground } from './PlayGround/Playground';
// import './styles.css';
import { useState, onClick, useEffect } from 'react';
import './Button/Button.css';
import { MenuView } from '../SklepacKreta/MenuView/MenuView';

// TODO:
// - gdy timer = 0 -> koniec gry
// - możliwość wyboru czasu (1min, 2min, 3min)
// - komponent do wyświetlania wyniku
// - na kliknięciu stop - pokaż wyniki i zakończ grę

export function SklepacKreta() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);

  useEffect(() => {
    time === 0 && setGameStarted(false);
  }, [time]);

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
          time={time}
          setTime={setTime}
          // isGameStopped={isGameStopped}
          // setGameStopped={setGameStopped}
        />
      ) : (
        <>
          <MenuView
            time={time}
            setTime={setTime}
            setGameStarted={setGameStarted}
          />
        </>
      )}
      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  );
}
