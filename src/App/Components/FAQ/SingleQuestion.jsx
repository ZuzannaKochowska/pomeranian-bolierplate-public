import './styles.css';
import { useState } from 'react';
import strzalka from '../../Images/chevron.png';

export const SingleQuestion = (props) => {
  const question = props.question;
  const answer = props.answer;

  const [isTrue, setIsTrue] = useState(false);

  function clickHandler() {
    setIsTrue(!isTrue);
  }

  return (
    <div>
      <div className="blok1">
        <h3 className="podtytulek" onClick={clickHandler}>
          <img src={strzalka} alt="strzalka"></img>
          {question}
        </h3>
        <hr></hr>
        <div>{isTrue && answer}</div>
      </div>
    </div>
  );
};
