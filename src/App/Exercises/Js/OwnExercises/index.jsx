import './styles.css';
import React from 'react';

export function OwnExercises() {
  const a1 = parseFloat(prompt('Wprowadź pierwszy bok: '));
  const b1 = parseFloat(prompt('Wprowadź drugi bok: '));
  const c1 = parseFloat(prompt('Wprowadź trzeci bok: '));

  let PolObw = (a1 + b1 + c1) / 2;
  let PoTrojkat = Math.sqrt(
    PolObw * (PolObw - a1) * (PolObw - b1) * (PolObw - c1)
  );

  if (a1 + b1 > c1 && b1 + c1 > a1 && a1 + c1 > b1) {
    console.log('Pol obwodu to: ' + PolObw);
    console.log('A pole trojkata to: ' + PoTrojkat);
  } else {
    console.log('Nie można utworzyć trójkąta');
  }

  return (
    <div>
      <h1> ZADANIE Z POLEM TRÓJKĄTA</h1>
      {/*Wyświetl pole trojkata lub informację o niemożności utworzenia*/}
      {PoTrojkat ? (
        <div>Pole trójkata wynosi: {PoTrojkat} </div>
      ) : (
        <div> nie można utworzyć trójkąta </div>
      )}
    </div>
  );
}
