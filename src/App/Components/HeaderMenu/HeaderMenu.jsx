import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';

export function HeaderMenu() {
  return (
    <header>
      <div className="images-container">
        <SettingIcon />
        <div className="circular_image">
          <img src="https://placekitten.com/500/500" alt="kitten" />
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
