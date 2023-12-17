import './styles.css';
import React from 'react';
import { useState } from 'react';

export function OwnExercises1() {
  const [a2, setA2] = useState();
  const [b2, setB2] = useState();
  const [c2, setC2] = useState();
  const [suma, setSuma] = useState();

  const handleSum = () => {
    let liczba1 = parseInt(a2) || 0;
    let liczba2 = parseInt(b2) || 0;
    let liczba3 = parseInt(c2) || 0;
    let razem = parseInt(liczba1 + liczba2 + liczba3);
    setSuma(razem);
  };
  const [d2, setD2] = useState();
  const [e2, setE2] = useState();
  const [f2, setF2] = useState();
  const [srednia, setSrednia] = useState();

  const average = () => {
    let liczba1 = parseInt(d2) || 0;
    let liczba2 = parseInt(e2) || 0;
    let liczba3 = parseInt(f2) || 0;

    setSrednia((liczba1 + liczba2 + liczba3) / 3);
  };

  const [g1, setG1] = useState();
  const [h1, setH1] = useState();
  const [odejmowanie, setOdejmowanie] = useState();
  const [mnozenie, setMnozenie] = useState();
  const [dzielenie, setDzielenie] = useState();

  const operations = () => {
    let liczba1 = parseInt(g1) || 0;
    let liczba2 = parseInt(h1) || 0;

    setOdejmowanie(liczba1 - liczba2);
    setMnozenie(liczba1 * liczba2);
    setDzielenie(liczba1 / liczba2);
  };
  return (
    <div>
      <h2>Zadanie1 - Suma liczb</h2>
      <div>Wprowadź liczę pierwszą: </div>
      <input value={a2} onChange={(e) => setA2(e.target.value)} />
      <div>Wprowadź liczę drugą: </div>
      <input value={b2} onChange={(e) => setB2(e.target.value)} />
      <div>Wprowadź liczę trzecią: </div>
      <input value={c2} onChange={(e) => setC2(e.target.value)} />
      <br />
      <button onClick={handleSum}>Suma wszystkich liczb to: </button>
      <div>{suma}</div>

      <h2>Zadanie2 - Średnia z liczb</h2>
      <div>Wprowadź pierwsza liczbę: </div>
      <input value={d2} onChange={(e) => setD2(e.target.value)} />
      <div>Wprowadź drugą liczbę: </div>
      <input value={e2} onChange={(e) => setE2(e.target.value)} />
      <div>Wprowadź trzecią liczbę: </div>
      <input value={f2} onChange={(e) => setF2(e.target.value)} />
      <br />
      <button onClick={average}>Średnia wartość liczb: </button>
      <div>{srednia}</div>

      <h2>Zadanie3 - działania</h2>
      <div>Wprowadź pierwszą liczbę: </div>
      <input value={g1} onChange={(e) => setG1(e.target.value)} />
      <div>Wprowadź pierwszą liczbę: </div>
      <input value={h1} onChange={(e) => setH1(e.target.value)} />
      <br />
      <button onClick={operations}>Odejmowanie</button>
      <div>{odejmowanie}</div>
      <button onClick={operations}>Mnożenie</button>
      <div>{mnozenie}</div>
      <button onClick={operations}>Dzielenie</button>
      <div>{dzielenie}</div>
    </div>
  );
}
