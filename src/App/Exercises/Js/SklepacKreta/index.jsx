import { Button } from './Button/Button';
import { Menu } from './Menu/Menu';
import { GameView } from './GameView/GameView';
import { Playground } from './PlayGround/Playground';
// import './styles.css';
import {useState, onClick} from 'react';
import './Button/Button.css';

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
      <Menu label="CZAS GRY">
        <Button> 1 minuta </Button>
        <Button isActive={true}> 2 minuty </Button>
        <Button> 3 minuty </Button> 
      </Menu>
      
        <Menu label="LICZBA KRETÓW">
        
          <Button isActive={true}> 1 kret </Button>
          <Button> 2 krety </Button>
          <Button> 3 krety </Button>
        </Menu>
        
        <Menu label="Przyciski sterujące">
          
        <Button onClick={() => setGameStarted(true)}> START </Button>
        </Menu>
        
        </>
      )}
      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  )}
    
        
    

