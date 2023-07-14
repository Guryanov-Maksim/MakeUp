import Navigation from '../components/Navigation.jsx';
import Footer from "../components/Footer.jsx";

const PricesPage = () => {
  return (
    <>
      <Navigation activePageId={'pricesId'} />
      <main>
        <section className="price">
          <div className="custom-container price__container">
            <h2 className="price__header custom-header">Цены</h2>
            <p className="price__text">Я сделаю вас красоткой по привлекательной цене</p>
            <table className="price__table">
              <thead className="price__service-params">
                <tr>
                  <th>Название услуги</th>
                  <th>Время</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr className="price__service">
                  <td>Экспресс-макияж</td>
                  <td>40 мин.</td>
                  <td>2000 руб.</td>
                </tr>
                <tr className="price__service">
                  <td>Дневной макияж</td>
                  <td>1 час</td>
                  <td>2500 руб.</td>
                </tr>
                <tr className="price__service">
                  <td>Вечерний макияж</td>
                  <td>1 час 30 мин</td>
                  <td>3500 руб.</td>
                </tr>
                <tr className="price__service">
                  <td>Свадебный макияж</td>
                  <td>1 час 30 мин</td>
                  <td>3500 руб.</td>
                </tr>
                <tr className="price__service">
                  <td>Свадебный образ</td>
                  <td>3 ч.</td>
                  <td>8000 руб.</td>
                </tr>
                <tr className="price__service">
                  <td>Свадебный образ с репетицией</td>
                  <td>6 ч.</td>
                  <td>12000 руб.</td>
                </tr>
                <tr className="price__service">
                  <td>Укладка волос</td>
                  <td>40 мин. - 1 ч.</td>
                  <td>2500 руб.</td>
                </tr>
                <tr className="price__service">
                  <td>Прическа</td>
                  <td>1 ч. 30 мин.</td>
                  <td>3500 руб.</td>
                </tr>
              </tbody>
            </table>
            <div className="price__extra-servise-wrapper">
              <p className="price__extra-servise-text">Дополнительный услуги:</p>
              <ul className="price__extra-servise-list">
                <li>Выезд - 1000 руб.</li>
                <li>Ранний выезд (до 8:00) - 1500 руб.</li>
              </ul>
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </>
  )
};

export default PricesPage;
