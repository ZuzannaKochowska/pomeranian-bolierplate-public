import './styles.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { useEffect, useState } from 'react';

export const GameView = ({ setGameStartedMemo, amount }) => {
  const [memoTime, setMemoTime] = useState(0);

  useEffect(() => {
    const setTheTime = setTimeout(() => {
      memoTime >= 0 && setMemoTime(memoTime + 1);
    }, 1000);
    return () => clearTimeout(setTheTime);
  }, [memoTime]);

  return (
    <>
      <Menu label="czas gry">
        <Button isDisabled={true}>{memoTime}</Button>
      </Menu>
      <Menu label="Liczba ruchów">
        <Button isDisabled={true}>{amount}</Button>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button 
        isControl={true}
        onClick={() => setGameStartedMemo(false)}>STOP</Button>
      </Menu>
    </>
    
  );
};
