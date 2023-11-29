import './styles.css';
import { useState } from 'react';
import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';
import { RightCornerMenuPopup } from '../RightCornerMenuPopup/RightCornerMenuPopup';

export function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="images-container">
        <SettingIcon />
        <div className="circular_image">
          <img src="https://placekitten.com/500/500" alt="kitten" />
        </div>
        <div className="name-surname-container">
          <h4>Zuzanna </h4>
          <h5>Kursantka </h5>
        </div>

        <button onClick={clickHandler} className="header-button-arrow">
          {' '}
          <MenuArrow className="menu-arrow" />
        </button>
        {!isOpen && <RightCornerMenuPopup />}
      </div>
    </div>
  );
}
