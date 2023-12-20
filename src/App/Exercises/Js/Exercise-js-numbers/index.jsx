import './styles.css';

export function ObliczPoleTrojkata(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    const polobwod = (a + b + c) / 2;
    const poletrojkata = Math.sqrt(
      polobwod * (polobwod - a) * (polobwod - b) * (polobwod - c)
    );

    return poletrojkata;
  } else {
    return 'Nie można zbudować trójkata';
  }
}

function Wczytajliczbe(promptText) {
  let input = prompt(promptText);
  return parseFloat(input);
}

// let a = Wczytajliczbe('Podaj długość a: ');
// let b = Wczytajliczbe('Podaj długość b: ');
// let c = Wczytajliczbe('Podaj długość c: ');

// var PoleTrojkata2 = ObliczPoleTrojkata(a, b, c);
// console.log(PoleTrojkata2);

// 255; // two-hundred and fifty-five
// 255.0; // same number
// 255 === 255.0;
// true
// 255 === 0xff;
// true (hexadecimal notation)
// 255 === 0b11111111;
// true (binary notation)
// 255 === 0.255e3; // true (decimal exponential notation) // Math.round() // Math.floor() // Math.random() // Math.min() // Math.max() // Math.ceil()
