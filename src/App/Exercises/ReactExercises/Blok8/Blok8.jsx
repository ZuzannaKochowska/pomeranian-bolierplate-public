import React, { useState } from 'react';
import './style.css';

export function Blok8() {
  const [ilosc, setIlosc] = useState(0);
  const [dalej, setDalej] = useState(0);
  const [text, setText] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  function clickHandler(ev) {
    console.log('Kliknięto przycisk', ev);
    // alert('kliknieto przycisk');
    setIlosc(ilosc + 1);
  }
  function clickHandler2(ev) {
    console.log('Przejdź dalej', ev);
    // alert('kliknieto przycisk');
    setDalej(dalej + 1);
  }

  function changeHandler(ev) {
    console.log(ev.target.value);
    setText(ev.target.value);
    setPlaceholder(ev.target.value);
  }

  return (
    <div>
      <h2> Cześć! </h2>
      <h4> /PRZYKŁAD/ Wpisz swój e-mail: </h4>
      <input
        size="41"
        value={text}
        onChange={changeHandler}
        placeholder="tekst do wpisania"
      />
      <br />

      <h4> /PRZYKŁAD/ Wpisz swój e-mail: </h4>
      <input size="41" value="przykladowyemail@gmail.com" />
      <br />

      <button className="btn" onClick={clickHandler2} type="button">
        {' '}
        Przejdź dalej {dalej}
      </button>
      <span style={{ marginLeft: '140px' }}> {placeholder}</span>
      {/* //Zmiana na szybko bez ingerencji w style.css */}

      <h4> Wpisz email: </h4>

      <input
        type="email"
        id="email"
        pattern=".+@gmail\.com"
        size="41"
        required
      />
      {/* <span style={{ marginLeft: '240px' }}>placeholder</span> */}
      <br />
      <button className="btn" onClick={clickHandler} type="button">
        {' '}
        Kliknięto we mnie {ilosc} razy
      </button>
      <span className="przesun"> Placeholder</span>
    </div>
  );
}
