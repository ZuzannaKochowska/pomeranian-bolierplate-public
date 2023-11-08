import './styles.css';

import { SingleQuestion } from '../Components/FAQ/SingleQuestion';

// import duzefaq from '../Images/duzefaq.png';

export function Faq() {
  return (
    <div>
      <h2 className="tytul">{'<'}FAQ</h2>
      <div>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</div>

      <SingleQuestion
        question={'Jak mogę zapisać się na szkolenie?'}
        answer={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      />
      <SingleQuestion
        question={'Jak się wypisać ze szkolenia?'}
        answer={
          'W przypadku szkoleń finansowanych ze środków UE informacje wysyłane są na tydzień przed szkoleniem (termin, dokładna lokalizacja, program szkolenia oraz szczegółowe informacje dotyczące noclegu). Chcąc zmienić grupę szkoleniową należy wypisać się ze szkolenia, na które jest się zapisanym i na nowo zapisać się na inne w ramach dostępnych miejsc.'
        }
      />
      <SingleQuestion
        question={'Jakie są warunki umowy?'}
        answer={
          'Ogólne warunki umowy to forma wzorców umów, są zbiorem postanowień umownych wyrażonych klauzulami abstrakcyjnymi, to znaczy mającymi zastosowanie do różnych transakcji sprzedaży, różnych produktów czyli mających zastosowanie dla umów, które przedsiębiorca włącza do danej umowy lub uzgadnia się między stronami włączenie wprost lub też strony powołują się na nie w zawartej umowie.'
        }
      />
      <SingleQuestion
        question={'Cennik:'}
        answer={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      />
    </div>
  );
}
