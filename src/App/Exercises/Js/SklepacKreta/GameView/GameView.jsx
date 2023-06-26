import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { useState, useEffect } from 'react';

import './GameView.css';

export const GameView = ({ setGameStarted, score, setScore }) => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    if (counter == 0) {
      setGameStarted(false);
    }
  }, [counter]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      counter > 0 && setCounter(counter - 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [counter]);

  return (
    <>
      <Menu label="Czas do końca">
        <div className="value-field">{counter}</div>
      </Menu>

      <Menu label="Wynik">
        <div className="value-field">{score}</div>
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => {
            setGameStarted(false);
            setScore(0);
          }}
        >
          STOP
        </Button>
      </Menu>
    </>
  );
};
