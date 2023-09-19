import Snowwolft from '../../Images/startItlogo.svg';
import PersonalCard from '../../Images/personalcard.svg';
import Edit from '../../Images/edit.svg';
import Wavinghand from '../../Images/waving-hand.svg';
import Book from '../../Images/book-saved.svg';
import TechStack from '../../Images/tech-stack.svg';
import Faq from '../../Images/faq.svg';
import { NavLink } from 'react-router-dom';

export const Blocks = () => {
  return (
    <div className="dashboard-tiles-container">
      <h2>
        <img src={Wavinghand} alt="hand" /> Hej, tu Zuza!
      </h2>
      <p className="dashboard-description">
        Poniżej znajdziesz najważniejsze informacje o mojej działalności:
      </p>
      <div className="dashboard-tiles">
        <div>
          <p className="dashboard-tile-title">Moje CV</p>{' '}
          <img src={PersonalCard} alt="personal card" />
          <p className="dashboard-tile-description">Podgląd CV</p>
        </div>
        <div>
          <p className="dashboard-tile-title">Projekty</p>
          <img src={Edit} alt="edit" />
          <p className="dashboard-tile-description">Przebyte projekty </p>
        </div>
        <div>
          <p className="dashboard-tile-title">Ćwiczenia</p>
          <img src={Book} alt="book" />
          <p className="dashboard-tile-description">
            Wszystkie wykonane ćwiczenia{' '}
          </p>
        </div>
        <div>
          <p className="dashboard-tile-title">Edukacja</p>
          <img src={Book} alt="book" />
          <p className="dashboard-tile-description">Przebyte kursy</p>
        </div>
        <div>
          <NavLink
            to="../../TechStack/TechStack.jsx"
            className="dashboard-tile-title"
          >
            Tech stack
          </NavLink>

          <img src={TechStack} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            Stack technologiczny realizowany na kursie
          </p>
          {/* <SeeMoreLink to="TechStack" /> */}
        </div>
        <div>
          <p className="dashboard-tile-title">Doświadczenie</p>
          <img src={Faq} alt="notification" />
          <p className="dashboard-tile-description">
            Opis całego doświadczenia{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
