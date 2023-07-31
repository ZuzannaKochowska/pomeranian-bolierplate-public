import './styles.css';

export function Exercise() {
  let string1 = 'Jon Snow';
  let string6 = 'Joffrey Baratheon from the House Lannister';
  let string8 = 'Peaky Blinders';
  const string3 = 'Innym świetnym serialem jest ' + string8;

  const string2 = `Najmniej ulubiony bohater z serialu "Gra o tron" to: ${string6}`;

  let string4 = 'Nieznajomy';
  let string5 = 'Którymś z kolei';

  const string7 = '5, 6 i 7';

  return (
    <div className="playing-with-variables">
      <section>
        <h2>Operacje na stringach</h2>
        <p>Najciekawsze sezony to {string7}</p>
        <p>
          Ulubiony bohater z serialu "Gra o tron" to
          <span className="variable-string-placeholder">{string1}</span>
        </p>
        <p>{string2}</p>
        <p>{string3}</p>
        {/* Uzupełnij zanie korzystając ze zmiennych oraz operacji na stringach */}
        <p>
          Witaj {string4}! Jesteś {string5} uzytkownikiem odwiedzającym tę
          stronę!
        </p>
      </section>
    </div>
  );
}
