import './styles/footer.css';

const email = 'zuzannakochowska@gmail.com';
const phone = '+48-604-847-731';

export function AppFooter() {
  return (
    <footer>
      <div>
        Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
        Europejskiego Funduszu Rozwoju
      </div>
      <a href={`mailto:${email}`} className="email">{`Email:${email}`}</a>
      <div>
        Regionalnego w ramach projektu grantowego „Invest in Pomerania 2020”.
      </div>
      <a href={`tel:${phone}`} className="email">{`Tel: ${phone}`}</a>
    </footer>
  );
}
