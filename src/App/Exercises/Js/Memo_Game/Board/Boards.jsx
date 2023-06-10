import './Board.css';

export const Board = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`button ${isActive ? 'button-active' : ''}`}
      onCLick={onClick}
    >
      {children}
    </button>
  );
};
