import './styles.css';

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrayTwo = [6, 5, 2, 7, 8];
// const arrayOfNumbersOne = [1, 2, 3, 4, 5];
// const arrayOfNumbersTwo = [6, 7, 8, 9, 10];

//obiekty - tablica obiektów
const objectOfMultipleTypes = {
  zuza: { daneOsobowe: 'Jestem z Gdańska' },
  kursFe: 'react',
  kursFe1: 1,
  kursFe2: true,
  kursFe3: [],
  kursFe4: () => 'Lubię Vanilla JS', //funkcja bez wąsów
};

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
      <code>{objectOfMultipleTypes.zuza.daneOsobowe}</code>
      <br />
      <code>{objectOfMultipleTypes.kursFe}</code>
      <br />
      <code>{objectOfMultipleTypes.kursFe1}</code>
      <br />
      <code>{objectOfMultipleTypes.kursFe2}</code>
      <br />
      <code>{objectOfMultipleTypes.kursFe3}</code>
      <br />
      <code>{objectOfMultipleTypes.kursFe4()}</code>
      <br />
      <code>{objectOfMultipleTypes['zuza']['daneOsobowe']}</code>
      <br />
      <code>{mergeObjects()}</code>
      <br />
      [kursFe] <br />
      {/* Destrukturyzacja tablicy: {String(kursFe2)} */}
    </div>
  );
  function mergeObjects() {
    const object1 = { foo: 'bar' };
    const object2 = { name: 'Zuza' };
    const resultOfMerging = { ...object1, ...object2 };

    console.log('mergeObjects', resultOfMerging);

    return resultOfMerging.name;
  }

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
