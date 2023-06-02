import { Button } from './Button/Button';
import { Menu } from './Menu/Menu';
import { GameView } from './GameView/GameView';
import { Mole } from '../../../Images/Mole';
import './styles.css';

export function SklepacKreta() {
  return (
    <div>
      <h1> {'<'} KRET</h1>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.{' '}
      </p>
      <Menu label="Czas gry">
        <Button> 1 minuta </Button>
        <Button> 2 minuty </Button>
        <Button> 3 minuty </Button>
      </Menu>
      <div className="table">
        {/* <p>
          CZAS GRY
          <button className="gameTime"> 1 minuta </button>
          <button className="gameTime"> 2 minuty </button>
          <button className="gameTime"> 3 minuty </button>
        </p> */}
        <br />
        <p>
          LICZBA KRETÓW
          <Button> 1 kret </Button>
          <Button> 2 krety </Button>
          <Button> 3 krety </Button>
        </p>
        <br />
        <p>
          PRZYCISKI STERUJĄCE{' '}
          <Button className="steeringButtons"> START </Button>
        </p>
        <GameView></GameView>
        <Mole></Mole>
      </div>
    </div>
  );
}
