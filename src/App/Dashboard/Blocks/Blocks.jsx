import { ReactComponent as snowwolft } from '../../Images/startItlogo.svg';
export const Blocks = () => {
  return (
    <div className="dashboard-tiles-container">
      <h2>Hej, tu Zuza!</h2>
      <p>Poniżej znajdziesz najważniejsze informacje o mojej działalności:</p>
      <div className="dashboard-tiles">
        <div>
          <p className="dashboard-tile-title">Moje CV</p>
        </div>
        <div>
          <p className="dashboard-tile-title">Projekty</p>
        </div>
        <div>
          <p className="dashboard-tile-title">Ćwiczenia</p>
        </div>
        <div>
          <p className="dashboard-tile-title">Edukacja</p>
          {/* <img src={snowwolft} alt="icon tech stack" /> */}
          <p className="dashboard-tile-description"></p>
        </div>
        <div>
          <p className="dashboard-tile-title">Tech stack</p>
          {/* <img src={snowwolft} alt="icon tech stack" /> */}
          <p className="dashboard-tile-description">
            Stack technologiczny realizowany na kursie
          </p>
          {/* <SeeMoreLink to="tech-stack" /> */}
        </div>
        <div>
          <p className="dashboard-tile-title">Doświadczenie</p>
        </div>
      </div>
    </div>
  );
};
