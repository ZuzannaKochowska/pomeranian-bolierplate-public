import './styles.css';

const tablicaWieluTypow = [
  true,
  1,
  'Jak rozpetalem drugą wojnę światową',
  { Franek: 'Frankowski' },
];
function spreadTwoArrays() {
  const arrayOfNumbersOne = [1, 2, 3, 4, 5];
  const arrayOfNumbersTwo = [6, 7, 8, 9, 10];
}

export function ExerciseJsArraysBasics() {
  function getValueByIndex(array) {
    return console.log('getValueByIndex', array[0]);
  }
}

function shiftElementOfArray(arrayParam) {
  return console.log(arrayParam.shift());
}
shiftElementOfArray(arrayOfNumbers);

function pushElementToArray(arrayToPush) {
  const internalArray = [];
  internalArray.push('Siema');
  internalArray.push(2);
  return console.log(internalArray);
  // return console.log('pushElementToArray', arrayToPush.push('NANAAN'));
}
// pushElementToArray(arrayOfNumbers);

function concatArrays(arrayNumberOne, arrayNumberTwo) {
  const newArray = [].concat(arrayNumberOne, arrayNumberTwo);

  return console.log('concatArrays', newArray);
}
concatArrays(arrayOfNumbersOne, arrayOfNumbersTwo);

function forLoop() {
  for (let count = 0; count < 5; count++) {
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

  while (whileCount <= 5) {
    console.log('whileLoopWithBreak', whileCount);

    if (whileCount <= 10) {
    }
  }
}
