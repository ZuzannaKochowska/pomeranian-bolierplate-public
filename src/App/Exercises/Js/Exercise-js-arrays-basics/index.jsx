import './styles.css';

const tablicaWieluTypow = [
  true,
  1,
  'Jak rozpetalem drugą wojnę światową',
  { Franek: 'Frankowski' },
];

export function ExerciseJsArraysBasics() {
  function getValueByIndex(array) {
    return console.log('getValueByIndex', array[2]);
  }
  getValueByIndex(tablicaWieluTypow);

  var tablicaLiczb = [1, 2, 3, 4, 5];
  var usunietyElement = tablicaLiczb.shift();

  console.log(usunietyElement);
  // tablicaliczb.shift - shift usuwa ZEROWY element z tablicy, więc po wywołaniu tablicy teraz wskaże ona [2,3,4,5]

  //Zadanie: Napisać funkcję, która usuwa PIERWSZY element z tablicy
  const arrayOfNumbers = [4, 5, 2, 7, 8];
  function shiftElementOfArray(arrayParam) {
    return console.log('shiftElementOfArray', arrayParam.shift());
  }
  shiftElementOfArray(arrayOfNumbers);

  const arrayTwo = [6, 5, 2, 7, 8];
  function PopElementOfArrayTwo(arrayParam) {
    return console.log('PopElementOfArrayTwo', arrayParam.pop());
  }
  PopElementOfArrayTwo(arrayTwo);

  const arrayOfNumbersOne = [1, 2, 3, 4, 5];
  const arrayOfNumbersTwo = [6, 7, 8, 9, 10];

  function pushElementToArray(arrayToPush) {
    const internalArray = [];
    internalArray.push(2);
    internalArray.push('Cześć JS jest bardzo intuicyjny...');
    return console.log(internalArray);
  }
  pushElementToArray();

  // Funkcja CONCAT merguje dwie tablice
  function concatArrays(arrayNumberOne, ArrayNumberTwo) {
    const newArray = [].concat(arrayNumberOne, ArrayNumberTwo);
    return console.log('concatArrays', newArray);
  }
  concatArrays(arrayOfNumbersOne, arrayOfNumbersTwo);

  // Polecana funkcja - rownież merge
  function spreadTwoArrays() {
    const a = [1, 2, 3];
    const b = [6, 7, 8];

    return console.log('spreadTwoArrays', [...a, ...b]);
  }
  spreadTwoArrays();

  // Liczy liczbę argumentów w liście
  // var arrayOfNumbers2 = [3, 4, 5, 6, 7, 8];
  // {
  //   return console.log('arrayOfNumbers2', arrayOfNumbers2.length);
  // }

  function forLoop() {
    for (let count = 0; count <= 5; count++) {
      console.log(count);
    }
  }
  forLoop();

  function whileLoop() {
    let whileCount = 0;

    while (whileCount <= 5) {
      console.log(whileCount);

      whileCount++;
    }
  }

  whileLoop();

  function whileLoopWithBreak() {
    let whileCount = 0;

    while (whileCount <= 10) {
      console.log('whileLoopWithBreak', whileCount);

      if (whileCount === 10) {
        break;
      }
      whileCount++;
    }
  }
  whileLoopWithBreak();
}
