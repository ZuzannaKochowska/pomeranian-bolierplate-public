import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import './MenuView.css';
import { SelectButtons } from '../SelectButtons/SelectButtons';
import { Result } from '../Result/Result';

export const MenuView = ({
  setGameStarted,
  isGameStarted,
  setTime,
  setScore,
}) => {
  return (
    <>
      <Menu label="CZAS GRY">
        <SelectButtons
          setOptionChosen={setTime}
          options={[
            {
              label: '1 minuta',
              isActive: false,
              value: 1,
            },
            {
              label: '2 minuty',
              isActive: true,
              value: 2,
            },
            {
              label: '3 minuty',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>

      <Menu label="LICZBA KRETÓW">
        <SelectButtons
          options={[
            {
              label: '1 kret',
              isActive: true,
              value: 1,
            },
            {
              label: '2 krety',
              isActive: false,
              value: 2,
            },
            {
              label: '3 krety',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>

      <Menu label="PRZYCISKI STERUJĄCE ">
        <Button onClick={() => setGameStarted(true)}> START </Button>
      </Menu>
      {isGameStarted ? <Result setScore={setScore} /> : ''}
    </>
  );
};
