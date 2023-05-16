import 'bootstrap';

import './style.scss';

const menuToggler = document.querySelector('.navigation__toggler');

const menu = document.querySelector('.navigation__list');

menuToggler.addEventListener('click', (e) => {
  menu.classList.toggle('navigation__list--show');
  menuToggler.classList.toggle('navigation__toggler--open');
});

const menuItems = document.querySelectorAll('.navigation__link');

menuItems.forEach(item => item.addEventListener('click', (e) => {
  menu.classList.remove('navigation__list--show');
}));

document.addEventListener('click', (e) => {
  e.target
  if (!(e.target === menu || e.target === menuToggler || menuToggler.contains(e.target))) {
    menu.classList.remove('navigation__list--show');
    menuToggler.classList.remove('navigation__toggler--open');
  }
})
