import './styles.css';
import { useState } from 'react';
import strzalka from '../../Images/chevron.png';

export const SingleQuestion = (props) => {
  const question = props.question;
  const answer = props.answer;

  return (
    <div>
      <div className="blok1">
        <h3 className="podtytulek">
          <img src={strzalka} alt="strzalka"></img>
          {question}
        </h3>
        <hr></hr>
        <div>{answer}</div>
      </div>{' '}
    </div>
  );
};
