import './styles.css';
import jpg from '../../../Images/flower.jpg';
import png from '../../../Images/pingwin.png';
import gif from '../../../Images/mis.gif';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

// export function Zdjecia() {
//   return (
//     <div className="wszystkie">
//       <img src={jpg} alt={'flower'}></img>

//       <img src={png} alt={'pingwin'}></img>

//       <img src={gif} alt={'miś'}></img>

//       <RoundImage />
//       <div className="imageBackground"></div>
//     </div>
//   );
// }

export function Zdjecia() {
  const images = [
    {
      title: 'To jest png',
      src: png,
      width: 650,
      height: 550,
      color: 'orange',
    },
    {
      title: 'To jest jpg',
      src: jpg,
      width: 650,
      height: 550,
      color: 'pink',
    },
    {
      title: 'To jest gif',
      src: gif,
      width: 650,
      height: 450,
      color: 'purple',
    },
  ];

  return (
    <div className="roundImage">
      {images.map((el) => (
        <RoundImage
          width={el.width}
          height={el.height}
          title={el.title}
          src={el.src}
          color={el.color}
        />
      ))}
    </div>
  );
}
