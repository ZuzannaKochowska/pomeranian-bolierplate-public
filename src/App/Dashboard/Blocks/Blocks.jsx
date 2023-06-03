import { ReactComponent as snowwolft } from '../../Images/startItlogo.svg';
import TechStack from '../../TechStack/TechStack';

export const Blocks = () => {
  return (
    <div className="dashboard-tiles-container">
      <h2>Hej, tu Zuza!</h2>
      <p>Poniżej znajdziesz najważniejsze informacje o mojej działalności:</p>
      <div className="dashboard-tiles">
        <div>
          <p className="dashboard-tile-title">Moje CV</p>{' '}
          <p className="dashboard-tile-description">Podgląd CV</p>
        </div>
        <div>
          <p className="dashboard-tile-title">Projekty</p>
          <p className="dashboard-tile-description">Przebyte projekty </p>
        </div>
        <div>
          <p className="dashboard-tile-title">Ćwiczenia</p>
          <p className="dashboard-tile-description">
            Wszystkie zrobione ćwiczenia{' '}
          </p>
        </div>
        <div>
          <p className="dashboard-tile-title">Edukacja</p>
          {/* <img src={snowwolft} alt="icon tech stack" /> */}
          <p className="dashboard-tile-description">Przebyte kursy</p>
        </div>
        <div>
          <p className="dashboard-tile-title">Tech stack</p>

          {/* <img src={snowwolft} alt="icon tech stack" /> */}
          <p className="dashboard-tile-description">
            Stack technologiczny realizowany na kursie
          </p>
          {/* <SeeMoreLink to="TechStack" /> */}
        </div>
        <div>
          <p className="dashboard-tile-title">Doświadczenie</p>
          <p className="dashboard-tile-description">
            Opis całego doświadczenia{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
