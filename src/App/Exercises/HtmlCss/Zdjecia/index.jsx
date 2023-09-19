import './styles.css';
import jpg from '../../../Images/flower.jpg';
import png from '../../../Images/pingwin.png';
import gif from '../../../Images/mis.gif';

export function Zdjecia() {
  return (
    <div>
      <img src={jpg} alt={'flower'}></img>
      <img src={png} alt={'pingwin'}></img>
      <img src={gif} alt={'miś'}></img>
    </div>
  );
}
