import './styles.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
export const GameView = ({ setGameStarted }) => {
  return (
    <>
      <Menu label="czas gry">
        <Button isDisabled={true}>1:35</Button>
      </Menu>
      <Menu label="Liczba ruchów">
        <Button isDisabled={true}>2</Button>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button onClick={() => setGameStarted(false)}>STOP</Button>
      </Menu>
    </>
  );
};
