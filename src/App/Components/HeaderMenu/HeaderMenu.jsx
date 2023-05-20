import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';


export function HeaderMenu () {
  return (
  <div className="images-container">
    <SettingIcon />
    <div className="circular_image">
      (img src="https://placekitten.com/500/500")
    </div>

    <MenuArrow className="menu-arrow" />
  </div>

  
  );

}
