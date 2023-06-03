import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';
// <<<<<<< HEAD
import { ReactComponent as LogoSVG } from '../../Images/startItlogo.svg';

export function HeaderMenu() {
  return (
    <header>
      {/* <a href="/">
        {''}
        <img src={LogoSVG} className="logo" alt="logo" />
      </a> */}
      <div className="images-container">
        <SettingIcon />
        <div className="circular_image">
          <img src="https://placekitten.com/500/500" />
        </div>
        <div className="name-surname-container">
          <h4>Zuzanna </h4>
          <h5>Kursantka </h5>
        </div>

        <MenuArrow className="menu-arrow" />
      </div>
    </header>
  );
}
// =======

// export function HeaderMenu () {
//   return (
//   <div className="images-container">
//     <SettingIcon />
//     <div className="circular_image">
//       (img src="https://placekitten.com/500/500")
//     </div>

//     <MenuArrow className="menu-arrow" />
//   </div>

//   );

// >>>>>>> master
// }
