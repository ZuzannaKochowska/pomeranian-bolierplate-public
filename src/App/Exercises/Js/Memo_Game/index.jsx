import './styles.css';
import { useEffect, useState } from 'react';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView';
import { Playground } from './PlayGround/Playground';
import { clear } from '@testing-library/user-event/dist/clear';


export function Memo_Game() {
  const [isGamestarted, setGameStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState();
  const [boardSize, setboardSize] = useState()
  const[amount, setAmount] = useState(0);
  const[gameEnded, setGameEnded] = useState(false);
  const[myTime, setMyTime] = useState(0);


  useEffect(()=> {
    if (isGamestarted) {
      const gameInterval = setInterval(()=> {
        return setTime((prev) => prev + 1)
      }, 1000);

      setTimeInterval(gameInterval)
    } else {
      clearInterval(timeInterval)
      setTime(0)
    }

  }, [isGamestarted])

  return (
    <div className="memoGame">
      <h1> {'<'} Memory Game</h1>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary{' '}
      </p>
      {isGamestarted ? (
        <GameView setGameStarted={setGameStarted} time={time} amount={amount} setAmout={setAmount} />
      ) : (
        <MenuView setGameStarted={setGameStarted} setBoardSize={setboardSize} myTime={myTime} setAmount={setAmount} amount={amount} gameEnded={gameEnded} boardSize={boardSize}  />
      )}
      {isGamestarted && (<Playground 
      boardSize={boardSize} 
      setGameStarted={setGameStarted}
      amount={amount} 
      setAmount={setAmount} 
      time={time}
      setMyTime={setMyTime}
      setGameEnded={setGameEnded} 
      gameEnded={gameEnded}
      />) }
    </div>
  );
}