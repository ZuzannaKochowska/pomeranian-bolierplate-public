import React, { useState } from 'react';
import './style.css';

export function Blok8() {
  const [ilosc, setIlosc] = useState(0);
  const [dalej, setDalej] = useState(0);

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
  }

  return (
    <div>
      <h2> Cześć! </h2>
      <h4> Wpisz swój login: </h4>
      <input size="41" />
      <br />

      <button className="btn" onClick={clickHandler2} type="button">
        {' '}
        Przejdź dalej {dalej}
      </button>
      <h4> Wpisz email: </h4>

      <input
        type="email"
        id="email"
        pattern=".+@globex\.com"
        size="41"
        required
      />
      {/* <span style={{ marginLeft: '240px' }}>placeholder</span> */}
      <br />
      <button className="btn" onClick={clickHandler} type="button">
        {' '}
        Kliknięto we mnie {ilosc} razy
      </button>
      {/* <span className='btn'> Nie kliknięto we mnie</span> */}
    </div>
  );
}
