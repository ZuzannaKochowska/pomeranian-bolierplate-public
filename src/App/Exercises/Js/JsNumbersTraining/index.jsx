import './styles.css';

export function Exercise() {
  return <>JS BOOLEANS</>;
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;
  let string = true;

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age && hasDriverLicense && hasCar) {
      return 'You can drive your car';
    } else if (age && hasDriverLicense && !hasCar) {
      return 'You can drive a rental car';
    } else if ((age = false || !hasDriverLicense)) {
      return 'You cant drive';
    }
  }
  function hasEnough(hasEnough) {
    if (hasEnough) {
      return true;
    } else {
      return false;
    }
  }
  canDrive(18, true, true);
  hasEnough(true);
  return (
    <div>
      {' '}
      <p>{hasEnough}</p>{' '}
    </div>
  );
}

function isStringShort(string) {
  if (string.length < 10) {
    return 'true';
  } else if (string.length >= 10) {
    return 'false';
  }
}

// function circleArea() {
//   input = {'Wprowadz promien kola: ', x}
//   let r = x*Math.PI**2;
//   return {'Pole koła wynosi:'{x} }
// }

function circleArea() {
  let x = prompt('Wprowadź promień koła: ');
  let r = MAth.PI * x ** 2;
  return 'Pole koła wynosi: ' + r;
}

circleArea();
