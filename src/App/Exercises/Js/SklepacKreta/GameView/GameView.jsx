import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { Playground } from '../PlayGround/Playground';

import './GameView.css';

export const GameView = ({setGameStarted, score, setScore}) => {
  return (
    <>
      <Menu label="Czas do końca">
        <div className="value-field">[czas]</div>
      </Menu>

      <Menu label="Wynik">
        <div className="value-field">{2}</div>
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button onClick={() => {
          setGameStarted(false);
          setScore(0);
        }}>STOP</Button>
      </Menu>
      
    </>
  );
};
