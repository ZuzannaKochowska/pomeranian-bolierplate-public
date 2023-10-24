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
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      />
      <SingleQuestion
        question={'Jakie są warunki umowy?'}
        answer={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit'
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
