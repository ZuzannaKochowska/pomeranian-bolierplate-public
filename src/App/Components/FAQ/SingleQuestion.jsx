import './styles.css';
import { useState } from 'react';
import strzalka from '../../Images/chevron.png';

export const SingleQuestion = (props) => {
  const question = props.question;
  const answer = props.answer;

  const [isActive, setIsActive] = useState(false);

  function clickHandler() {
    setIsActive(!isActive);
  }

  return (
    <div>
      <div className="blok1">
        <h3 className="podtytulek" onClick={clickHandler}>
          <img
            src={strzalka}
            alt="strzalka"
            className={` ${isActive ? 'rotate' : ''}`}
          ></img>
          {question}
        </h3>
        <hr></hr>
        <div>{isActive && answer}</div>
      </div>
    </div>
  );
};
