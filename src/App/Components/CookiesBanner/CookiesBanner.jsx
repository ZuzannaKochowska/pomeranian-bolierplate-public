import './styles.css';
import { CalendarIcon } from '../Icons/CalendarIcon';

const CookiesInLocalStorage = () => {
  console.log(!!localStorage, '!!localStorage');
  console.log(!!localStorage, '!localstorage');

  if (!!localStorage.getItem('cookies')) return true;
  if (!localStorage.getItem('cookies')) return false;
};

export const CookieBanner = () => {
  const handleCookiesPermission = () => {
    localStorage.setItem('cookiesPermission', true);
  };

  return (
    <>
      {CookiesInLocalStorage && (
        <div className="cookie_wrapper">
          <div className="cookie_content">
            <CalendarIcon className="cookie_icon" />

            <h4>Pozwól na pliki cookies</h4>
            <div>
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosować. użycie do swoich
              referencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
              zgody”, aby następnie wybrać te które odpowiadają Twoim
              indywidualnym preferencjom.
            </div>
          </div>

          <div className="cookies_permissions">
            <button
              onClick={handleCookiesPermission}
              className="permission_accept"
            >
              W porządku
            </button>
            <button className="permission_reject">Dopasuj zgody</button>
          </div>
        </div>
      )}
    </>
  );
};
