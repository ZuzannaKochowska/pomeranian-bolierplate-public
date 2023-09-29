import './styles.css';

export const RoundImage = (props) => {
  const { title, src, height, width, color } = props;
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        backgroundImage: `url(${src})`,
      }}
    >
      {title} <img src={src} alt={title} />
    </div>
  );
};
