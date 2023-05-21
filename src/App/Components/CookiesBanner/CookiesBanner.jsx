import './styles.css';
import { CalgitendarIcon } from '../Icons/CalendarIcon';

const cookiesInLocalStarage = () => {
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
      {cookiesInLocalStorage && (
        <div className="cookie_wrapper">
          <div className="cookie_content">
            <CalendarIcon className="content_icon" />
            <h4>Pozwól na pliki cookies</h4>
            <p>
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosować. użycie do swoich
              referencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
              zgody”, aby następnie wybrać te które odpowiadają Twoim
              indywidualnym preferencjom.
            </p>
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
