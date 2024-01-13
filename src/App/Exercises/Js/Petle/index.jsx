import './styles.css';

export const Petle = () => {
  const Wymienia = () => {
    for (let i = 1; i <= 10; i++) {
      document.write(i + '');
    }
  };
  return <div>{console.log(Wymienia)}</div>;
};
