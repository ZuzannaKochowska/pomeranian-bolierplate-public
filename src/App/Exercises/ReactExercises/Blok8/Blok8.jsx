import React, { useState } from 'react';


import './style.css';
const style = {
  marginLeft: '240px',
}
export function Blok8() {

  const [ilosc, setIlosc] = useState(0); 

  function clickHandler(ev) {
    // console.log('Kliknieto przycisk', ev)
    // alert('kliknieto przycisk')
    setIlosc(ilosc+1)
  }

  function changeHandler(ev) {
    console.log(ev.target.value)
  }

  return (
    <div>
      {/* <p>Przyklad Blok 8</p>
      <button onClick={clickHandler} type="button">Przycisk</button>
      <p> 
      napis
      </p> */}
      <h2> Czesc </h2>
      <h4> Wpisz tekst </h4>
      <input />
      <span style={{marginLeft: '240px'}}>placeholder</span>
      <br/> 
      <button className='btn' onClick={clickHandler} type="button"> Kliknieto we mnie {ilosc} razy</button>
      {/* <span className='btn'> Nie kliknięto we mnie</span> */}
    </div>
  );
}
