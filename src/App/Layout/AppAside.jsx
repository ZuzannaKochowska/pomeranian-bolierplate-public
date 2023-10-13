import { NavLink } from 'react-router-dom';
import Element1 from '../Images/aside/Element1.svg';
import Element2 from '../Images/aside/Element2.svg';
import Element3 from '../Images/aside/Element3.svg';
import Element4 from '../Images/aside/Element4.svg';
import Element5 from '../Images/aside/Element5.jpg';
import Element6 from '../Images/aside/Element6.png';
import Element7 from '../Images/aside/Element7.svg';

import './styles/aside.css';
import { SettingIcon } from '../Components/Icons/SettingIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <u>
            <img src={Element1} alt="1"></img>
            <NavLink to="dashboard">Dashboard</NavLink>
          </u>
          <ul>
            <img src={Element2} alt="2"></img>
            <NavLink to="cv">CV</NavLink>
          </ul>
          <ul>
            <img src={Element3} alt="3"></img>
            <NavLink to="blocks">Bloki</NavLink>
          </ul>
          <ul>
            <img src={Element4} alt="4"></img>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </ul>
          <ul>
            <img src={Element5} alt="5"></img>
            <NavLink to="calendar">Kalendarz</NavLink>
          </ul>
          <ul>
            <img src={Element6} alt="6"></img>
            <NavLink to="settings">Ustawienia</NavLink>
          </ul>
          <ul>
            <img src={Element7} alt="7"></img>
            <NavLink to="faq">FAQ</NavLink>
          </ul>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
