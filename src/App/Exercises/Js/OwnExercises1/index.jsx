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
  const [i1, setI1] = useState();
  const [pierwiastek, setPierwiastek] = useState();

  const Sqrt = () => {
    let liczba1 = Math.sqrt(i1);
    setPierwiastek(liczba1);
  };

  const [j1, setJ1] = useState();
  const [kwadrat, setKwadrat] = useState();

  const Squared = () => {
    let liczba1 = parseFloat(Math.pow(j1, 2));
    setKwadrat(liczba1);
  };

  const [k1, setK1] = useState();
  const [l1, setL1] = useState();
  const [m1, setM1] = useState();
  const [poleprosto, setPoleprosto] = useState();

  const cuboid = () => {
    let bok1 = parseFloat(k1);
    let bok2 = parseFloat(l1);
    let bok3 = parseFloat(m1);
    setPoleprosto(bok1 * bok2 * 2 + bok1 * bok3 * 2 + bok2 * bok3 * 2);
  };

  const [r1, setR1] = useState();
  const [obwod, setObwod] = useState();
  const [polekola, setPolekola] = useState();

  const circumference = () => {
    let promien = parseInt(r1);

    if (!isNaN(promien) && promien >= 0) {
      setObwod(2 * promien * Math.PI);
      setPolekola(Math.PI * Math.pow(promien, 2));
    } else {
      console.log('Promien musi byc liczba');
    }
  };
  //Wczytuje obecną cenę benzyny.
  //Oblicza koszt przejazdu z Gdańska do Szczecina 360 km, przy założeniu, że samochód spala 8 litrów benzyny na 100 km.
  const [cena, setCena] = useState();
  const [koszt, setKoszt] = useState();

  const spalanie = () => {
    const kosztprzejazdu = parseInt(cena);
    setKoszt((kosztprzejazdu * 8 * 360) / 100);
  };
  //Wczytuje cenę benzyny, długość trasy oraz wartość spalania samochodu. Oblicza koszt przejazdu i wypisuje go na ekran.

  const [cenabenz, setCenabenz] = useState();
  const [trasa, setTrasa] = useState();
  const [spalanie2, setSpalanie2] = useState();

  const koszttrasy = () => {
    let benzyna = parseFloat(cenabenz);
    let traska = parseFloat(trasa);
    if (!isNaN(benzyna) && !isNaN(traska) && benzyna >= 0 && traska >= 0) {
      setSpalanie2(benzyna * traska);
    }
  };

  //Oblicza zysk z lokaty dla dowolnej kwoty wprowadzonej przez użytkownika i wypisuje ją na ekran.
  //Aktualna oferta lokaty wynosi 8% rocznie. Uwzględnij „podatek Belki”.

  const [wplata, setWplata] = useState();
  const [podatekbelki, setPodatekbelki] = useState();

  const Lokata8procent365 = () => {
    const kwotainwestycji = parseFloat(wplata);
    const zysknetto = parseFloat(0.81 * wplata * 0.08);

    if (!isNaN(wplata) && kwotainwestycji >= 0 && zysknetto >= 0) {
      setPodatekbelki(zysknetto + kwotainwestycji);
    }
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

      <h2>Zadanie4 - pierwiastek</h2>
      <div>Wprowadź liczbę:</div>
      <input value={i1} onChange={(e) => setI1(e.target.value)} />
      <br />
      <button onClick={Sqrt}>Pierwiastek</button>
      <div>{pierwiastek}</div>

      <h2>Zadanie5 - kwadrat liczby</h2>
      <div>Wprowadź liczbę</div>
      <input value={j1} onChange={(e) => setJ1(e.target.value)} />
      <button onClick={Squared}>Kwadrat liczby</button>
      <div>{kwadrat}</div>

      <h2>Zadanie6 - pole prostopadłościanu</h2>
      <div>Wprowadź pierwszy bok:</div>
      <input value={k1} onChange={(e) => setK1(e.target.value)} />
      <div>Wprowadź drugi bok:</div>
      <input value={l1} onChange={(e) => setL1(e.target.value)} />
      <div>Wprowadź trzeci bok:</div>
      <input value={m1} onChange={(e) => setM1(e.target.value)} />
      <br />
      <button onClick={cuboid}>Pole prostopadłościanu</button>

      <div>
        {poleprosto}
        {`m2`}
      </div>

      <h2>Zadanie7 - pole i obwód koła</h2>
      <div>Wprowadź promień koła R: </div>
      <input value={r1} onChange={(e) => setR1(e.target.value)} />
      <br />
      <button onClick={circumference}>Obwód koła</button>
      <div>{obwod}</div>
      <button onClick={circumference}>Pole koła</button>
      <div>{polekola}</div>

      <h2>Zadanie8 - spalanie</h2>
      <div>Aktualna cena benzyny:</div>
      <input value={cena} onChange={(e) => setCena(e.target.value)} />
      <br />
      <button onClick={spalanie}>Koszt podróży</button>
      <div>{koszt}</div>

      <h2>Zadanie9 - przejazd </h2>
      <div>Cena za litr benzyny: </div>
      <input value={cenabenz} onChange={(e) => setCenabenz(e.target.value)} />
      <div>Ilość kilometrów trasy: </div>
      <input value={trasa} onChange={(e) => setTrasa(e.target.value)} />
      <button onClick={koszttrasy}>Koszt trasy wynosi:</button>
      <br />
      <div>{spalanie2}</div>

      <h2>Zadanie10 - Lokata</h2>
      <div>Kwota zdeponowana na lokacie:</div>
      <input value={wplata} onChange={(e) => setWplata(e.target.value)} />
      <br />
      <button onClick={Lokata8procent365}>
        Lokata z podatkiem Belki wynosi:
      </button>
      <br />
      <div>{podatekbelki}</div>
    </div>
  );
}
