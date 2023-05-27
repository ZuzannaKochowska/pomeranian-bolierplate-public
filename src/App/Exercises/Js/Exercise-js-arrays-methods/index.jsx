import './styles.css';

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrayTwo = [6, 5, 2, 7, 8];
// const arrayOfNumbersOne = [1, 2, 3, 4, 5];
// const arrayOfNumbersTwo = [6, 7, 8, 9, 10];

export function ExerciseJsArraysMethods() {
  function filterMethod(arrayOfNumbers) {
    const greaterThan5 = arrayOfNumbers.filter(function (kot) {
      return kot > 5;
    });
    return console.log('filterMethod', greaterThan5);
  }
  filterMethod(arrayOfNumbers);

  return (
    <div>
      <p> Metody na tablicach: </p>
      <pre>
        <code>{''}</code>
      </pre>
    </div>
  );

  function SameNumbers() {
    const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const array2 = [2, 4, 6, 11, 43, 16, 9, 0];
    const result = array1.filter(function (numberElement) {
      return array2.includes(numberElement);
    });

    return console.log('SameNumbers', result);
  }
  SameNumbers();
}
