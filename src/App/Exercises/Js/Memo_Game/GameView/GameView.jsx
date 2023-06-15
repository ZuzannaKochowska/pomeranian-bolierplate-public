import './styles.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { useEffect, useState } from 'react';

export const GameView = ({ setGameStartedMemo, amount, time, setAmount }) => {
  const [memoTime, setMemoTime] = useState(0);

  useEffect(() => {
    const setTheTime = setTimeout(() => {
      memoTime >= 0 && setMemoTime(memoTime + 1);
    }, 1000);
    return () => clearTimeout(setTheTime);
  }, [memoTime]);

  return (
    <div>
    <Menu label="Czas gry">
      <Button isDisabled={true}>{time}</Button>
    </Menu>
    <Menu label="Liczba ruchów">
      <Button isDisabled={true}>{amount}</Button>
    </Menu>
    <Menu label="Przyciski sterujące">
      <Button
        isControl={true}
        onClick={() => {
          setGameStartedMemo(false);
          setAmount(0);
        }}
        
      >
        PASS
      </Button>
    </Menu>
  </div>

    
  );
};
