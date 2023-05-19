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

// ***************** portfolio modal ****************** //

const portfolioLink = document.querySelector('.portfolio__link');

let activeProtfolioPhotoIndex = null;

portfolioLink.addEventListener('click', (e) => {
  e.preventDefault();
  activeProtfolioPhotoIndex = Number(e.currentTarget.dataset.index);

  // const img = document.createElement('img');

  // img.src = photoLinks[e.currentTarget.dataset.index];
  // img.classList.add('portfolio-modal__photo')

  // const closeButton = document.createElement('button');
  // closeButton.classList.add('portfolio-modal__close-button');

  // closeButton.addEventListener('click', () => {
  //   closePortfolioModal();
  // });

  // modalContent.appendChild(img);
  // modalContent.appendChild(closeButton);

  openPortfolioModal();
});

const portfolioModal = document.querySelector('.portfolio-modal');
const body = document.querySelector('body');

const wheelHandler = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const closePortfolioModal = () => {
  const modal = document.querySelector('.portfolio-modal');
  modal.remove();
  // body.removeEventListener('wheel', wheelHandler, {passive: false})
}

const positionButton = () => {
  // Get the image and button elements
  const img = document.querySelector(".portfolio-modal__photo");
  const btn = document.querySelector(".portfolio-modal__close-button");

  // If the image and button are present
  if (img && btn) {
    // Calculate the position of the image within the container
    const imgRect = img.getBoundingClientRect();
    // const imgTop = imgRect.top + window.scrollY;
    const imgTop = imgRect.top - 30;
    // const imgRight = imgRect.right + window.scrollX;
    const imgRight = imgRect.right + 20;

    // Set the button position based on the image position
    btn.style.top = `${imgTop}px`;
    btn.style.right = `${window.innerWidth - imgRight}px`;
  }
};

const observeContainerChanges = () => {
  // Create a new MutationObserver object
  const observer = new MutationObserver(positionButton);
  const portfolioModal = document.querySelector('.portfolio-modal');
  // Configure the observer to detect changes in the container
  const config = { childList: true, subtree: true };

  // Start observing the container for changes
  observer.observe(portfolioModal, config);
};

window.addEventListener("load", () => {
  positionButton();
  // observeContainerChanges();
});

// const portfolioModal = document.querySelector('.portfolio-modal');

window.addEventListener("resize", positionButton);

const prevButtonHandler = () => {
  const nextIndex = activeProtfolioPhotoIndex - 1 < 0
    ? photoLinks.length - 1
    : activeProtfolioPhotoIndex - 1;

  activeProtfolioPhotoIndex = nextIndex;

  const content = document.querySelector('.portfolio-modal__content');
  content.innerHTML = '';

  const img = document.createElement('img');

  img.src = photoLinks[nextIndex];
  img.classList.add('portfolio-modal__photo')
  img.addEventListener("load", positionButton);

  const closeButton = document.createElement('button');
  closeButton.classList.add('portfolio-modal__close-button');
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', () => {
    closePortfolioModal();
  });

  // window.addEventListener("resize", () => {
  //   console.log('-------------------')
  //   const imgRect = img.getBoundingClientRect();
  //   const imgTop = imgRect.top + window.scrollY;
  //   const imgRight = imgRect.right + window.scrollX;

  //   // Set the button position based on the image position
  //   closeButton.style.top = `${imgTop}px`;
  //   closeButton.style.right = `${window.innerWidth - imgRight}px`;
  // });

  content.appendChild(img);
  content.appendChild(closeButton);
};

const photoLinks = [
  '/MakeUp/assets/images/photo.jpg',
  '/MakeUpassets/images/1.jpg',
];

const openPortfolioModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('portfolio-modal');
  modal.addEventListener("load", positionButton);

  const content = document.createElement('div');
  content.classList.add('portfolio-modal__content');

  const innerDiv = document.createElement('div');
  // innerDiv.classList.add('portfolio-modal__content');

  const prevButton = document.createElement('button');
  prevButton.classList.add('portfolio-modal__prev');
  prevButton.innerText = 'Prev';
  prevButton.addEventListener('click', prevButtonHandler);

  const nextButton = document.createElement('button');
  nextButton.classList.add('portfolio-modal__next');
  nextButton.innerText = 'Next';

  const closeButton = document.createElement('button');
  closeButton.classList.add('portfolio-modal__close-button');
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', () => {
    closePortfolioModal();
  });

  const img = document.createElement('img');
  // img.src = photoLinks[activeProtfolioPhotoIndex];
  img.src = photoLinks[1];
  img.classList.add('portfolio-modal__photo');
  img.id = 'image';
  // console.log(photoLinks[activeProtfolioPhotoIndex])
  img.addEventListener("load", positionButton);

  content.appendChild(img);
  content.appendChild(closeButton);

  // innerDiv.appendChild(img);
  // innerDiv.appendChild(closeButton);

  // content.appendChild(innerDiv);

  modal.appendChild(content);
  modal.appendChild(prevButton);
  modal.appendChild(nextButton);

  const main = document.querySelector('main');
  main.appendChild(modal);
  // body.addEventListener('wheel', wheelHandler, {passive: false})
}

// const prevButton = document.querySelector('.portfolio-modal__prev');
// const nextButton = document.querySelector('.portfolio-modal__next');
// const modalContent = document.querySelector('.portfolio-modal__content');

// prevButton.addEventListener('click', () => {
//   const nextIndex = activeProtfolioPhotoIndex - 1 < 0
//     ? photoLinks.length - 1
//     : activeProtfolioPhotoIndex - 1;

//   activeProtfolioPhotoIndex = nextIndex;

//   const currentImg = document.querySelector('.portfolio-modal__photo');
//   if (currentImg) {
//     currentImg.remove();
//   }

//   const img = document.createElement('img');

//   img.src = photoLinks[nextIndex];
//   img.classList.add('portfolio-modal__photo')

//   const closeButton = document.createElement('button');
//   closeButton.classList.add('portfolio-modal__close-button');

//   closeButton.addEventListener('click', () => {
//     closePortfolioModal();
//   });

//   modalContent.appendChild(img);
//   modalContent.appendChild(closeButton);
// });

// nextButton.addEventListener('click', () => {
//   const nextIndex = activeProtfolioPhotoIndex + 1 > photoLinks.length
//     ? 0
//     : activeProtfolioPhotoIndex + 1;

//   activeProtfolioPhotoIndex = nextIndex;

//   const currentImg = document.querySelector('.portfolio-modal__photo');
//   if (currentImg) {
//     currentImg.remove();
//   }

//   const img = document.createElement('img');

//   img.src = photoLinks[nextIndex];
//   img.classList.add('portfolio-modal__photo')

//   const closeButton = document.createElement('button');
//   closeButton.classList.add('portfolio-modal__close-button');

//   closeButton.addEventListener('click', () => {
//     closePortfolioModal();
//   });

//   modalContent.appendChild(img);
//   modalContent.appendChild(closeButton);
// });


