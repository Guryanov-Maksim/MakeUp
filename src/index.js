import 'bootstrap';
import photo1Url from './assets/images/customers/photo_0001.jpg';
import photo2Url from './assets/images/customers/photo_0002.jpg';
import photo3Url from './assets/images/customers/photo_0003.jpg';
import photo4Url from './assets/images/customers/photo_0004.jpg';
import photo5Url from './assets/images/customers/photo_0005.jpg';
import photo6Url from './assets/images/customers/photo_0006.jpg';
import photo7Url from './assets/images/customers/photo_0007.jpg';
import photo8Url from './assets/images/customers/photo_0008.jpg';
import photo9Url from './assets/images/customers/photo_0009.jpg';
import photo10Url from './assets/images/customers/photo_0010.jpg';
import photo11Url from './assets/images/customers/photo_0011.jpg';
import photo12Url from './assets/images/customers/photo_0012.jpg';
import photo13Url from './assets/images/customers/photo_0013.jpg';
import photo14Url from './assets/images/customers/photo_0014.jpg';
import photo15Url from './assets/images/customers/photo_0015.jpg';

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

// ***************** portfolio modal ****************** //

const portfolioLink = document.querySelectorAll('.portfolio__link-item');
const galleryLinks = document.querySelectorAll('.gallery__link');

let activePhotoId = null;

galleryLinks.forEach(link => link.addEventListener('click', (e) => {
  e.preventDefault();
  activePhotoId = Number(e.currentTarget.dataset.id);

  openPortfolioModal();
}));

portfolioLink.forEach(link => link.addEventListener('click', (e) => {
  e.preventDefault();
  activePhotoId = Number(e.currentTarget.dataset.id);

  openPortfolioModal();
}));

const portfolioModal = document.querySelector('.portfolio-modal');
const body = document.querySelector('body');

const wheelHandler = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const closePortfolioModal = () => {
  const modal = document.querySelector('.portfolio-modal');
  modal.remove();
}

const positionButton = () => {
  const img = document.querySelector(".portfolio-modal__photo");
  const btn = document.querySelector(".portfolio-modal__close-button");
  const isMobile = navigator.userAgentData.mobile;

  if (img && btn) {
    const imgRect = img.getBoundingClientRect();
    const imgTop = imgRect.top - 30;
    const imgRight = isMobile ? imgRect.right : imgRect.right + 20; // TODO: find out why mobile and desktop browsers calculate differently

    btn.style.top = `${imgTop}px`;
    btn.style.right = `${window.innerWidth - imgRight}px`;
  }
};

window.addEventListener("resize", positionButton);

const mainPagePortfolio = [
  { id: 1, url: photo1Url },
  { id: 6, url: photo6Url },
  { id: 9, url: photo9Url },
  { id: 12, url: photo12Url },
  { id: 15, url: photo15Url },
  { id: 11, url: photo11Url },
];

const prevButtonHandler = () => {
  const currentPhotoIndex = mainPagePortfolio.findIndex(photo => photo.id === activePhotoId)
  const nextIndex = currentPhotoIndex - 1 < 0
    ? mainPagePortfolio.length - 1
    : currentPhotoIndex - 1;

    activePhotoId = mainPagePortfolio[nextIndex].id;

  const content = document.querySelector('.portfolio-modal__content');
  content.innerHTML = '';

  const closeButton = document.createElement('button');
  closeButton.classList.add('portfolio-modal__close-button');
  closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="close"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>';
  closeButton.addEventListener('click', () => {
    closePortfolioModal();
  });

  const img = document.createElement('img');
  img.src = mainPagePortfolio[nextIndex].url;
  img.classList.add('portfolio-modal__photo')
  img.addEventListener("load", () => {
    content.innerHTML = '';
    content.appendChild(img);
    content.appendChild(closeButton);
    positionButton();
  });

  const div = document.createElement('div');
  div.classList.add('spinner-border');
  div.classList.add('text-light');
  content.appendChild(div);
};

const nextButtonHandler = () => {
  const currentPhotoIndex = mainPagePortfolio.findIndex(photo => photo.id === activePhotoId);

  const nextIndex = currentPhotoIndex + 1 >= mainPagePortfolio.length
  ? 0
  : currentPhotoIndex + 1;

  activePhotoId = mainPagePortfolio[nextIndex].id;

  const content = document.querySelector('.portfolio-modal__content');
  content.innerHTML = '';

  const closeButton = document.createElement('button');
  closeButton.classList.add('portfolio-modal__close-button');
  closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="close"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>';
  closeButton.addEventListener('click', () => {
    closePortfolioModal();
  });

  const img = document.createElement('img');
  img.src = mainPagePortfolio[nextIndex].url;
  img.classList.add('portfolio-modal__photo')
  img.addEventListener("load", () => {
    content.innerHTML = '';
    content.appendChild(img);
    content.appendChild(closeButton);
    positionButton();
  });

  const div = document.createElement('div');
  div.classList.add('spinner-border');
  div.classList.add('text-light');
  content.appendChild(div);
};

const idToPhotoUrl = {
  1: photo1Url,
  2: photo2Url,
  3: photo3Url,
  4: photo4Url,
  5: photo5Url,
  6: photo6Url,
  7: photo7Url,
  8: photo8Url,
  9: photo9Url,
  10: photo10Url,
  11: photo11Url,
  12: photo12Url,
  13: photo13Url,
  14: photo14Url,
  15: photo15Url,
}

let startX, startY, endX, endY;

function handleSwipe() {
  const xDiff = endX - startX;
  const yDiff = endY - startY;
  if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff > 0) {
    nextButtonHandler();
  }

  if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff < 0) {
    prevButtonHandler();
  }
}

const openPortfolioModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('portfolio-modal');
  modal.addEventListener("load", positionButton);

  const content = document.createElement('div');
  content.classList.add('portfolio-modal__content');
  content.addEventListener('touchstart', function(event) {
    const touch = event.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  }, false);

  content.addEventListener('touchend', function(event) {
    const touch = event.changedTouches[0];
    endX = touch.clientX;
    endY = touch.clientY;
    handleSwipe();
  }, false);

  const prevButton = document.createElement('button');
  prevButton.classList.add('portfolio-modal__prev');
  prevButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="left-arrow"><path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path></svg>';
  prevButton.addEventListener('click', prevButtonHandler);

  const nextButton = document.createElement('button');
  nextButton.classList.add('portfolio-modal__next');
  nextButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="right-arrow"><path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"></path></svg>';
  nextButton.addEventListener('click', nextButtonHandler);

  const closeButton = document.createElement('button');
  closeButton.classList.add('portfolio-modal__close-button');
  closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="close"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>';

  closeButton.addEventListener('click', () => {
    closePortfolioModal();
  });

  const img = document.createElement('img');
  img.src = idToPhotoUrl[activePhotoId];
  img.classList.add('portfolio-modal__photo')
  img.id = 'image';
  img.addEventListener("load", () => {
    content.innerHTML = '';
    content.appendChild(img);
    content.appendChild(closeButton);
    positionButton();
  });

  const div = document.createElement('div');
  div.classList.add('spinner-border', 'text-light');
  content.appendChild(div);

  modal.appendChild(content);
  modal.appendChild(prevButton);
  modal.appendChild(nextButton);

  const main = document.querySelector('main');
  main.appendChild(modal);
}
