import './styles.css';

import strzalka from '../Images/chevron.png';
import korytko from '../Images/korytko.png';
// import duzefaq from '../Images/duzefaq.png';

export function Faq() {
  return (
    <div>
      <h2 className="tytul">
        {'<'}FAQ
        {/* <img src={duzefaq} alt="duzefaq"></img> */}
      </h2>
      <div>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</div>
      <div className="blok1">
        <h3 className="podtytulek">
          <img src={strzalka} alt="strzalka"></img>Jak mogę zapisać się na
          szkolenie?
        </h3>
        <hr></hr>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          rutrum ipsum, <br />
          leo et in. Mattis porttitor volutpat placerat suspendisse ante in
          cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing
          adipiscing iaculis habitant. Viverra pretium tincidunt nisl
          pellentesque ut adipiscing non. Lorem ipsum dolor <br />
          sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="blok2">
        <h3>
          <img src={korytko} alt="korytko"></img>Jak mogę zapisać się na
          szkolenie?
        </h3>
      </div>
      <div className="blok2">
        <h3>
          <img src={korytko} alt="korytko"></img>Jak mogę wypisać się ze
          szkolenia?
        </h3>
      </div>
      <div className="blok2">
        <h3>
          <img src={korytko} alt="korytko"></img>Jak mogę zapisać się na
          szkolenie?
        </h3>
      </div>
    </div>
  );
}
