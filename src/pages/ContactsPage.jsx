import Navigation from '../components/Navigation.jsx';
import YMap from '../components/YMap.jsx';
import Footer from "../components/Footer.jsx";

const ContactsPage = () => {
  return (
    <>
      <Navigation activePageId={'contactsId'} />
      <main>
        <section className="contacts">
          <div className="contacts__container custom-container">
            <YMap />
            <div className="contacts__details">
              <h2 className="custom-header">Контакты</h2>
              <address>
                <a className="contacts__phone" href="tel:+79261239837">+7(926)-123-98-37</a>
                <br />
                <a className="contacts__email" href="mailto:cusnir.ea@gmail.com">cusnir.ea@gmail.com</a>
                <br />
                <a className="contacts__whatsapp" aria-label="Chat on WhatsApp" href="https://wa.me/79261239837">
                  WhatsApp
                </a>
                <br />
                <a className="contacts__telegram" aria-label="Chat on Telegram" href="https://t.me/+79261239837">
                  Telegram
                </a>
                <p className="contacts__address">
                  <span>МО, г. Жуковский</span>
                  <span>ул. Ломоносова, д. 33, кв. 15</span>
                </p>
              </address>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
};

export default ContactsPage;
