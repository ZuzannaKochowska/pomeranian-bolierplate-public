import React from 'react';
import { useState } from 'react';

export function ObliczWynikDzielenia() {
  const [a8, setA8] = useState();
  const [b8, setB8] = useState();
  const [wynik8, setWynik8] = useState();
  const [c8, setC8] = useState();
  const [reszta, setReszta] = useState();
  const [d8, setD8] = useState();
  const [rodzaj, setRodzaj] = useState();
  const [e8, setE8] = useState();
  const [f8, setF8] = useState();
  const [g8, setG8] = useState();
  const [najwieksza, setNajwieksza] = useState();
  const [h8, setH8] = useState();
  const [i8, setI8] = useState();
  const [j8, setJ8] = useState();
  const [kolejno, setKolejno] = useState();

  const Kolejnosc = () => {
    let firstdigit1 = parseInt(h8);
    let seconddigit1 = parseInt(i8);
    let thirddigit1 = parseInt(j8);

    if (
      firstdigit1 > seconddigit1 &&
      firstdigit1 > thirddigit1 &&
      seconddigit1 > thirddigit1
    ) {
      setKolejno(`${firstdigit1}, ${seconddigit1}, ${thirddigit1}`);
    } else if (
      seconddigit1 > thirddigit1 &&
      seconddigit1 > firstdigit1 &&
      firstdigit1 > thirddigit1
    ) {
      setKolejno(`${seconddigit1}, ${firstdigit1}, ${thirddigit1}`);
    } else if (
      thirddigit1 > firstdigit1 &&
      thirddigit1 > seconddigit1 &&
      firstdigit1 > seconddigit1
    ) {
      setKolejno(`${thirddigit1}, ${firstdigit1}, ${seconddigit1}`);
    } else if (
      firstdigit1 > thirddigit1 &&
      firstdigit1 > seconddigit1 &&
      thirddigit1 > seconddigit1
    ) {
      setKolejno(`${firstdigit1}, ${thirddigit1}, ${seconddigit1}`);
    } else if (
      seconddigit1 > thirddigit1 &&
      seconddigit1 > firstdigit1 &&
      thirddigit1 > firstdigit1
    ) {
      setKolejno(`${seconddigit1}, ${thirddigit1}, ${firstdigit1}`);
    } else if (
      thirddigit1 > seconddigit1 &&
      thirddigit1 > firstdigit1 &&
      seconddigit1 > firstdigit1
    ) {
      setKolejno(`${thirddigit1}, ${seconddigit1}, ${firstdigit1}`);
    }
  };

  const NajwiekszaLiczb = () => {
    let firstdigit = parseInt(e8);
    let seconddigit = parseInt(f8);
    let thirddigit = parseInt(g8);

    if (firstdigit > seconddigit && firstdigit > thirddigit) {
      setNajwieksza(firstdigit);
    } else if (seconddigit > thirddigit && seconddigit > firstdigit) {
      setNajwieksza(seconddigit);
    } else if (thirddigit > firstdigit && thirddigit > firstdigit) {
      setNajwieksza(thirddigit);
    }
  };

  const Iloraz8 = () => {
    if (b8 !== 0) {
      const wynikkk = parseInt(a8) / parseInt(b8);
      setWynik8(wynikkk);
    }
  };

  const Czyparzysta = () => {
    let liczbauzyt = parseInt(c8);
    if (liczbauzyt % 2 === 0) {
      setReszta('Liczba parzysta');
    } else {
      setReszta('Liczba nieparzysta');
    }
  };

  const Znakliczby = () => {
    let liczbauzyt2 = parseInt(d8);
    if (liczbauzyt2 > 0) {
      setRodzaj('Liczba większa od zera');
    } else if (liczbauzyt2 === 0) {
      setRodzaj('Liczba równa zero');
    } else {
      setRodzaj('Liczba mniejsza od zera');
    }
  };

  return (
    <div>
      <input type="number" value={a8} onChange={(e) => setA8(e.target.value)} />
      <br />
      <input type="number" value={b8} onChange={(e) => setB8(e.target.value)} />
      <button onClick={Iloraz8}>Iloraz</button>
      <div>Wynik to: {wynik8}</div>
      <h5>Czy parzysta?</h5>
      <input type="number" value={c8} onChange={(e) => setC8(e.target.value)} />
      <button onClick={Czyparzysta}> Lets check</button>
      <div>{reszta}</div>
      <h5>Jaka to liczba?</h5>
      <input type="number" value={d8} onChange={(e) => setD8(e.target.value)} />
      <button onClick={Znakliczby}>CLICK</button>
      <div>{rodzaj}</div>
      <h5>Która największa?</h5>
      <input type="number" value={e8} onChange={(e) => setE8(e.target.value)} />
      <input type="number" value={f8} onChange={(e) => setF8(e.target.value)} />
      <input type="number" value={g8} onChange={(e) => setG8(e.target.value)} />
      <button onClick={NajwiekszaLiczb}> CLICK</button>
      <div>Największa: {najwieksza}</div>
      <h5>Kolejność liczb:</h5>
      <input type="number" value={h8} onChange={(e) => setH8(e.target.value)} />
      <input type="number" value={i8} onChange={(e) => setI8(e.target.value)} />
      <input type="number" value={j8} onChange={(e) => setJ8(e.target.value)} />
      <button onClick={Kolejnosc}>CLICK</button>
      <div>{kolejno}</div>
    </div>
  );
}
