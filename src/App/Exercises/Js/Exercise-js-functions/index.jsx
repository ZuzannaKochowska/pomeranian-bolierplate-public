import './styles.css';

export function Exercise() {
  function multiply(num1, num2) {
    return num1 * num2;
  }

  function getWelcomeMessage(name, amount) {
    return `Witaj ${name}! Jesteś ${amount} uzytkownikiem odwiedzającym tę stronę!`;
  }

  function trialFunction(height, width) {
    return `Mój dom ma wysokość ${height} i szerokość ${width}`;
  }

  const list = [
    {
      name: 'Wojtek',
      surname: 'Abc',
      age: 48,
    },
    {
      name: 'Kasia',
      surname: 'Cbd',
      age: 28,
    },
  ];

  function displayList(list) {
    return list.map((listElement) => (
      <div>
        Moje imię to {listElement.name}, nazwisko {listElement.surname}, wiek{' '}
        {listElement.age}{' '}
      </div>
    ));
  }

  return (
    <div>
      <p>Definiowanie funkcji</p>
      <pre>
        <code>
          {`
            function multiply(num1, num2) {
                return num1 * num2;
            }
            
            const result = multiply(9, 9)  // wynik 81
            `}
        </code>
      </pre>

      <section>
        <h2>Wykorzystywanie funkcji - przykłady</h2>
        <pre>
          <code>9 * 9 = {multiply(9, 9)}</code>
        </pre>
        <pre>
          <code>{getWelcomeMessage('Jon', 129384)}</code>
        </pre>
        <pre>
          <code>{trialFunction('3 metrów', '10 metrów')} </code>
        </pre>
      </section>

      <section>
        <h2> Lista ludzi w tablicy:</h2>
        {displayList(list)}
      </section>
    </div>
  );
}
