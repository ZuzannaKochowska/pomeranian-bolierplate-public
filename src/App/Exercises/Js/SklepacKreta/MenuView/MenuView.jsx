import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import './MenuView.css';
import { SelectButtons } from '../SelectButtons/SelectButtons';

export const MenuView = ({ setGameStarted}) => {
return (

    <>
<Menu label="CZAS GRY">
  <SelectButtons options={[
    {
      label: '1 minuta',
      isActive: false,
      value: 1,
    },
    {
      label: '2 minuta',
      isActive: true,
      value: 2,
    },
    {
      label: '3 minuta',
      isActive: false,
      value: 3,
    },
  ]} 
  /> 
  </Menu>

  <Menu label="Liczba kretów">
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
  ]} /> 
      </Menu>
              
        <Menu label="Przyciski sterujące">
          
        <Button onClick={() => setGameStarted(true)}> START </Button>
        </Menu>
        </>
       );
     };
        