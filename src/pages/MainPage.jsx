import Gallery from "../components/Gallery.jsx";
import { mainPagePhotos } from "../photoLists.js";
import Navigation from '../components/Navigation.jsx';
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import artistMainPhoto from '../assets/images/artist-main.jpg'
import artistAboutPhoto from '../assets/images/artist_about.jpg'

import routes from "../routes.js";

const MainPage = () => {
  return (
    <>
      <Navigation activePageId={'mainId'} />
      <main>
        <section className="introduction">
          <div className="custom-container">
            <div className="introduction__left-column">
              <h2 className="introduction__name">Екатерина</h2>
              <p className="introduction__profession">Визажист и стилист по волосам</p>
              <p className="introduction__text">Я верю, если вы чуствуете себя уютно и уверенно в своем теле, то наслаждаетесь жизнью, вместо траты энергии
                на копание в себе из-за неуверенность в своей внешности</p>
              <Link className="btn btn-secondary introduction__link" to={routes.portfolioRoute()}>Мое портфолио</Link>
            </div>
            <div className="introduction__right-column">
              <img className="introduction__photo" src={artistMainPhoto} alt="Фото Екатерины Кушнир" />
            </div>
          </div>
        </section>
        <section className="artist">
          <div className="custom-container artist__container">
            <div className="artist__left-column">
              <h2 className="artist__header custom-header">Обо мне</h2>
              <p className="artist__text">Я являюсь профессиональным визажистом и стилистом по волосам, живущим в Жуковском. Обладая способностью находить подход к каждому, у меня имеется большой список довольных девушек, включая моделей, невест и тех, кто просто хочет выглядеть шикарно на важном мероприятии. Мое портфолио покажет выполненные работы и счастливые прекрасные лица моих клиенток.
              </p>
            </div>
            <div className="artist__right-column">
              <img className="artist__photo" src={artistAboutPhoto} alt="Фото Екатерины Кушник" />
            </div>
          </div>
        </section>
        <Gallery photos={mainPagePhotos} />
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
                  <td>1 час 30 мин</td>
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
                  <td>4000 руб.</td>
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
        <section className="proposal">
          <div className="proposal__container custom-container">
            <p>Готовы получить красивый образ, о котором вы всегда мечтали?</p>
            <p>
              Позвоните мне <a className="proposal__phone" href="tel:+79261239837">+7(926)-123-98-37</a> или напишите в <a aria-label="Chat on WhatsApp" href="https://wa.me/79261239837">WhatsApp</a> или <a aria-label="Chat on Telegram" href="https://t.me/+79261239837"> Telegram </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
};

export default MainPage;
