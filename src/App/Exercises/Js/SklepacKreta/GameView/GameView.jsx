import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';

export const GameView = ({}) => {
  return (
    <>
      <Menu label="Czas do końca">
        <div className="value-field">[czas]</div>
      </Menu>

      <Menu label="Wynik">
        <div className="value-field">{2}</div>
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button onClick={() => {}}>Stop</Button>
      </Menu>
    </>
  );
};
