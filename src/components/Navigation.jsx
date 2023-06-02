import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Link } from "react-router-dom";


const pages = [
  {
    id: 'mainId',
    pagename: 'main',
    text: 'Главная',
    route: '/',
  },
  {
    id: 'contactsId',
    name: 'contacts',
    text: 'Контакты',
    route: '/contacts',
  },
  {
    id: 'portfolioId',
    name: 'portfolio',
    text: 'Портфолио',
    route: '/portfolio',
  },
  {
    id: 'pricesId',
    name: 'prices',
    text: 'Цены',
    route: '/prices',
  },
];

const Navigation = ({ activePageId }) => {
  const getclassList = (id) => cn('navigation__link', {
    'navigation__link--active': activePageId === id,
  });

  const [open, setOpen] = useState(false);

  const buttonClasses = cn("navigation__toggler", {
    'navigation__toggler--open': open,
  });

  const handleTogglerClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    open
      ? document.body.classList.add('forbid-scroll')
      : document.body.classList.remove('forbid-scroll')
  }, [open]);

  const navListClasses = cn("navigation__list", {
    'navigation__list--show': open,
    'navigation__list--hide': !open,
  });

  return (
    <header>
      <nav className="navigation">
        <div className="custom-container navigation__container">
          <Link className="navigation__brand" to="/">Екатерина<br />Кушнир</Link>
          <div className="navigation__wrapper">
            <button className={buttonClasses} onClick={handleTogglerClick} type="button" aria-label="Toggle navigation">
              <span></span>
            </button>
            <ul className={navListClasses}>
              {pages.map(({ id, text, route }) => (
                <li key={id} className="navigation__item">
                  <Link className={getclassList(id)} to={route}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Navigation;
