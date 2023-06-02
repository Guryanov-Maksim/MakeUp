// import 'bootstrap';
// import photo1Url from './assets/images/customers/photo_0001.jpg';
// import photo2Url from './assets/images/customers/photo_0002.jpg';
// import photo3Url from './assets/images/customers/photo_0003.jpg';
// import photo4Url from './assets/images/customers/photo_0004.jpg';
// import photo5Url from './assets/images/customers/photo_0005.jpg';
// import photo6Url from './assets/images/customers/photo_0006.jpg';
// import photo7Url from './assets/images/customers/photo_0007.jpg';
// import photo8Url from './assets/images/customers/photo_0008.jpg';
// import photo9Url from './assets/images/customers/photo_0009.jpg';
// import photo10Url from './assets/images/customers/photo_0010.jpg';
// import photo11Url from './assets/images/customers/photo_0011.jpg';
// import photo12Url from './assets/images/customers/photo_0012.jpg';
// import photo13Url from './assets/images/customers/photo_0013.jpg';
// import photo14Url from './assets/images/customers/photo_0014.jpg';
// import photo15Url from './assets/images/customers/photo_0015.jpg';

import './style.scss';

import React from 'react'
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// const idToPhotoUrl = {
//   1: photo1Url,
//   2: photo2Url,
//   3: photo3Url,
//   4: photo4Url,
//   5: photo5Url,
//   6: photo6Url,
//   7: photo7Url,
//   8: photo8Url,
//   9: photo9Url,
//   10: photo10Url,
//   11: photo11Url,
//   12: photo12Url,
//   13: photo13Url,
//   14: photo14Url,
//   15: photo15Url,
// }

// const idToimages = {
//   // 1: {
//   //   url: photo1Url,
//   //   width: 524,
//   //   height: 265,
//   // },
//   1: {
//     url: photo1Url,
//     width: 3968,
//     height: 4960,
//   },
//   2: {
//     url: photo2Url,
//     width: 4160,
//     height: 5200,
//   },
//   3: {
//     url: photo3Url,
//     width: 3024,
//     height: 4032,
//   },
//   4: {
//     url: photo4Url,
//     width: 3024,
//     height: 4032,
//   },
//   5: {
//     url: photo5Url,
//     width: 3024,
//     height: 4032,
//   },
//   6: {
//     url: photo6Url,
//     width: 3024,
//     height: 4032,
//   },
//   7: {
//     url: photo7Url,
//     width: 1707,
//     height: 2560,
//   },
//   8: {
//     url: photo8Url,
//     width: 1707,
//     height: 2560,
//   },
//   9: {
//     url: photo9Url,
//     width: 4128,
//     height: 6192,
//   },
//   10: {
//     url: photo10Url,
//     width: 3024,
//     height: 4032,
//   },
//   11: {
//     url: photo11Url,
//     width: 3024,
//     height: 4032,
//   },
//   12: {
//     url: photo12Url,
//     width: 3024,
//     height: 4032,
//   },
//   13: {
//     url: photo13Url,
//     width: 3024,
//     height: 4032,
//   },
//   14: {
//     url: photo14Url,
//     width: 3024,
//     height: 4032,
//   },
//   15: {
//     url: photo4Url,
//     width: 3024,
//     height: 4032,
//   },
// }

// const menuToggler = document.querySelector('.navigation__toggler');

// const menu = document.querySelector('.navigation__list');

// const body = document.querySelector('body');

// const forbidScroll = (e) => {
//   e.preventDefault();
// }

// menuToggler.addEventListener('click', (e) => {
//   if (menu.classList.contains('navigation__list--show')) {
//     menu.classList.add('navigation__list--hide');
//     menuToggler.classList.remove('navigation__toggler--open');
//     // TODO: find out how to get rid of setTimeout
//     setTimeout(() => {
//       menu.classList.remove('navigation__list--show');
//       body.classList.remove('forbid-scroll');
//       menu.classList.remove('navigation__list--hide');
//       menuToggler.classList.remove('navigation__toggler--open');
//     }, 500);
//     return;
//   }
//   menu.classList.remove('navigation__list--hide');
//   menu.classList.add('navigation__list--show');
//   menuToggler.classList.add('navigation__toggler--open');
//   body.classList.add('forbid-scroll');
// });

// const menuItems = document.querySelectorAll('.navigation__link');

// menuItems.forEach(item => item.addEventListener('click', (e) => {
//   menu.classList.remove('navigation__list--show');
// }));

// document.addEventListener('click', (e) => {
//   e.target
//   if (!(e.target === menu || e.target === menuToggler || menuToggler.contains(e.target))) {
//     menu.classList.remove('navigation__list--show');
//     menuToggler.classList.remove('navigation__toggler--open');
//   }
// })

// // ***************** portfolio modal ****************** //

// const galleryLinks = document.querySelectorAll('.gallery__link');
// const portfolioItems = [...galleryLinks].map(link => ({
//   id: Number(link.dataset.id),
//   url: idToPhotoUrl[link.dataset.id],
// }));

// let activePhotoId = null;

// galleryLinks.forEach(link => link.addEventListener('click', (e) => {
//   e.preventDefault();
//   activePhotoId = Number(e.currentTarget.dataset.id);

//   openPortfolioModal();
// }));

// const closePortfolioModal = () => {
//   const modal = document.querySelector('.portfolio-modal');
//   modal.remove();
// }

// const modalState = {
//   intermediateX: 0,
//   intermediateY: 0,
//   intermediateScaledWidth: 0,
//   intermediateScaledHeight: 0,
//   scaled: false,
//   startX: 0,
//   startY: 0,
//   x: 0,
//   y: 0,
//   intermediateScaledX: 0,
//   intermediateScaledY: 0,
//   sizeX: 0,
//   sizeY: 0,
//   currentSizeX: 0,
//   currentSizeY: 0,
//   maxHeight: 0,
//   paddingForButtons: 0,
//   maxWidth: 1200,
//   Ydiff: 0,
// };

// const calcInitSize = (modalState, content, photoId) => {
//   // console.log('4444444444444444444444444444444')
//   modalState.sizeX = idToimages[activePhotoId].width;
//   modalState.sizeY = idToimages[activePhotoId].height;
//   const { innerWidth, innerHeight } = window;
//   modalState.maxWidth = 1200;
//   modalState.maxHeight = innerHeight - 60;
//   const pad = 120;
//   modalState.paddingForButtons = (innerWidth > 772) ? pad : 0;
  

//   if ((innerWidth * modalState.sizeY) > (innerHeight * modalState.sizeX)) {
//     modalState.currentSizeY = innerHeight;
//     modalState.currentSizeX = (innerHeight * modalState.sizeX) / modalState.sizeY;

//     if (modalState.currentSizeY > modalState.maxHeight) {
//       modalState.currentSizeY = modalState.maxHeight;
//       modalState.currentSizeX = (modalState.currentSizeY * modalState.sizeX) / modalState.sizeY;
//     }

//     content.style.width = `${modalState.currentSizeX}px`;
//     content.style.height = `${modalState.currentSizeY}px`;

//     modalState.x = (innerWidth - modalState.currentSizeX) / 2;
//     modalState.y = ((innerHeight - modalState.currentSizeY)) / 2;
//     content.style.transform = `translate(${modalState.x}px, ${modalState.y}px)`;
//   } else {
//     modalState.currentSizeX = Math.min(innerWidth - modalState.paddingForButtons, modalState.maxWidth);
//     modalState.currentSizeY = (modalState.currentSizeX * modalState.sizeY) / modalState.sizeX;
    
//     if (modalState.currentSizeY > modalState.maxHeight) {
//       modalState.currentSizeY = modalState.maxHeight;
//       modalState.currentSizeX = (modalState.currentSizeY * modalState.sizeX) / modalState.sizeY;
//     }
//     content.style.width = `${modalState.currentSizeX}px`;
//     content.style.height = `${modalState.currentSizeY}px`;

//     // It is for google chrome desktop Почему-то смещает на 7 пикселей. Выяснить!!!
//     const padForGoogleDesktop = (!navigator?.userAgentData?.mobile && navigator?.userAgentData?.brands.find((item) => item.brand === 'Google Chrome'))
//     ? 14
//     : 0;

//     modalState.x = ((innerWidth - modalState.currentSizeX) - padForGoogleDesktop) / 2;
//     modalState.y = (innerHeight - modalState.currentSizeY) / 2;

//     content.style.transform = `translate(${modalState.x}px, ${modalState.y}px)`;
//   }

// }

// const prevButtonHandler = () => {
//   const currentPhotoIndex = portfolioItems.findIndex(photo => photo.id === activePhotoId)
//   const nextIndex = currentPhotoIndex - 1 < 0
//     ? portfolioItems.length - 1
//     : currentPhotoIndex - 1;

//   activePhotoId = portfolioItems[nextIndex].id;

//   const content = document.querySelector('.portfolio-modal__content');
//   content.innerHTML = '';

//   calcInitSize(modalState, content, activePhotoId);

//   const closeButton = document.createElement('button');
//   closeButton.classList.add('portfolio-modal__close-button');
//   closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="close"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>';
//   closeButton.addEventListener('click', () => {
//     closePortfolioModal();
//   });

//   const img = document.createElement('img');
//   img.src = portfolioItems[nextIndex].url;
//   img.classList.add('portfolio-modal__photo')
//   img.addEventListener("load", () => {
//     content.innerHTML = '';
//     content.appendChild(img);
//     content.appendChild(closeButton);
//   });

//   const div = document.createElement('div');
//   div.classList.add('spinner-border');
//   div.classList.add('text-light');
//   content.appendChild(div);
// };

// const nextButtonHandler = () => {
//   const currentPhotoIndex = portfolioItems.findIndex(photo => photo.id === activePhotoId);

//   const nextIndex = currentPhotoIndex + 1 >= portfolioItems.length
//     ? 0
//     : currentPhotoIndex + 1;

//   activePhotoId = portfolioItems[nextIndex].id;

//   const content = document.querySelector('.portfolio-modal__content');
//   content.innerHTML = '';

//   calcInitSize(modalState, content, activePhotoId);

//   const closeButton = document.createElement('button');
//   closeButton.classList.add('portfolio-modal__close-button');
//   closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="close"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>';
//   closeButton.addEventListener('click', () => {
//     closePortfolioModal();
//   });

//   const img = document.createElement('img');
//   img.src = portfolioItems[nextIndex].url;
//   img.classList.add('portfolio-modal__photo')
//   img.addEventListener("load", () => {
//     content.innerHTML = '';
//     content.appendChild(img);
//     content.appendChild(closeButton);
//   });

//   const div = document.createElement('div');
//   div.classList.add('spinner-border');
//   div.classList.add('text-light');
//   content.appendChild(div);
// };

// let startX, startY, endX, endY;

// const handleSwipe = () => {
//   const xDiff = endX - startX;
//   const yDiff = endY - startY;
//   if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff > 90) {
//     nextButtonHandler();
//   }

//   if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff < -90) {
//     prevButtonHandler();
//   }
// };

// const calcScaledSize = (modalState, content, Ydiff) => {
//   console.log(Ydiff);
//   const { innerWidth, innerHeight } = window;
//   if ((innerWidth * modalState.sizeY) > (innerHeight * modalState.sizeX)) {
//     modalState.intermediateScaledHeight = Math.max(modalState.currentSizeY + Ydiff, modalState.maxHeight);
//     modalState.intermediateScaledWidth = modalState.intermediateScaledHeight * modalState.sizeX / modalState.sizeY;

//     content.style.width = `${modalState.intermediateScaledWidth}px`;
//     content.style.height = `${modalState.intermediateScaledHeight}px`;
//   } else {
//     const maxWidthForMobile = innerWidth > 722
//       ? innerWidth - modalState.paddingForButtons
//       : innerWidth;

//     const minWidth = Math.min(maxWidthForMobile, modalState.maxWidth);
//     modalState.intermediateScaledWidth = Math.max(modalState.currentSizeX + Ydiff, minWidth);
//     modalState.intermediateScaledHeight = (modalState.intermediateScaledWidth * modalState.sizeY) / modalState.sizeX;
//     content.style.width = `${modalState.intermediateScaledWidth}px`;
//     content.style.height = `${modalState.intermediateScaledHeight}px`;
//   }

//   modalState.intermediateScaledX = modalState.x - Ydiff / 2;
//   modalState.intermediateScaledY = modalState.y - Ydiff / 2;

//   if (modalState.intermediateScaledHeight > innerHeight && modalState.intermediateScaledWidth > innerWidth) {
//     if ((modalState.intermediateScaledY) >= 0) {
//       modalState.intermediateY = 0;
//     } else if (Math.abs(modalState.intermediateScaledY) >= (modalState.intermediateScaledHeight - innerHeight)) {
//       modalState.intermediateY = -(modalState.intermediateScaledHeight - innerHeight) / 2;
//     } else {
//       modalState.intermediateY = modalState.intermediateScaledY;
//     }
//     if ((modalState.intermediateScaledX) > 0) {
//       console.log('------------------')
//       modalState.intermediateX = 0;
//     } else if (Math.abs(modalState.intermediateScaledX) >= (modalState.intermediateScaledWidth - innerWidth)) {
//       modalState.intermediateX = -(modalState.intermediateScaledWidth - innerWidth) / 2;
//     } else {
//       modalState.intermediateX = modalState.intermediateScaledX;
//     }
//   } else if (modalState.intermediateScaledHeight > innerHeight) {
//     if ((modalState.intermediateScaledY) >= 0) {
//       modalState.intermediateY = 0;
//     } else if (Math.abs(modalState.intermediateScaledY) >= (modalState.intermediateScaledHeight - innerHeight)) {
//       modalState.intermediateY = -(modalState.intermediateScaledHeight - innerHeight);
//     } else {
//       modalState.intermediateY = modalState.intermediateScaledY;
//     }
//     modalState.intermediateX = Math.abs(modalState.intermediateScaledWidth - innerWidth) / 2;
//   } else if (modalState.intermediateScaledWidth > innerWidth) {
//     if ((modalState.intermediateScaledX) >= 0) {
//       console.log('-----------111111111111111111111111111 -------')
//       modalState.intermediateX = 0;
//     } else if (Math.abs(modalState.intermediateScaledX) >= (modalState.intermediateScaledWidth - innerWidth)) {
//       modalState.intermediateX = -(modalState.intermediateScaledWidth - innerWidth);
//     } else {
//       modalState.intermediateX = modalState.intermediateScaledX;
//     }
//     modalState.intermediateY = Math.abs(modalState.intermediateScaledHeight - innerHeight) / 2;;
//   } else {
//     modalState.intermediateX = Math.abs(modalState.intermediateScaledWidth - innerWidth) / 2;
//     modalState.intermediateY = Math.abs(modalState.intermediateScaledHeight - innerHeight) / 2;
//   }

//   content.style.transform = `translate(${modalState.intermediateX}px, ${modalState.intermediateY}px)`;
// }



// const scaleImage = (modalState, content, event) => {
//   // console.log(event.changedTouches);
//   modalState.scaled = true;
  
//   let Ydiff;
//   let Xdiff;
//   let Ydiff2;
//   let Xdiff2;

//   if (event.type === 'wheel') {
//     Ydiff = event.deltaY;
//     calcScaledSize(modalState, content, Ydiff);

//     modalState.x = modalState.intermediateX;
//     modalState.y = modalState.intermediateY;
//     modalState.currentSizeX = modalState.intermediateScaledWidth;
//     modalState.currentSizeY = modalState.intermediateScaledHeight;
//   } else {
//     if (event.changedTouches.length > 1) {
//       // console.log(event.changedTouches);
//       // Xdiff = event.changedTouches[0].clientX - modalState.startX;
//       // Ydiff = event.changedTouches[0].clientY - modalState.startY;
//       // Xdiff2 = event.changedTouches[1].clientX - modalState.startX2;
//       // Ydiff2 = event.changedTouches[1].clientY - modalState.startY2;
//       // const x1 = modalState.startX + Xdiff;
//       // const x2 = modalState.startX2 + Xdiff2;
//       // const absEndX = (x2 > x1)
//       // ? (x2 - x1)
//       // : x1 - x2;
//       // const absInitX = (modalState.startX > modalState.startX2)
//       //   ? modalState.startX - modalState.startX2
//       //   : modalState.startX2 - modalState.startX;
      
//       // if (absInitX > absEndX) {
//       //   Ydiff = - (Math.abs(Xdiff) + Math.abs(Xdiff2)) * 2;
//       // } else {
//       //   Ydiff = Math.abs(Xdiff) + Math.abs(Xdiff2) * 2;
//       // }
//       // // calcScaledSize(modalState, content, Ydiff)
 
//       const startPoint1 = { x: modalState.startX, y: modalState.startY };
//       const startPoint2 = { x: modalState.startX2, y: modalState.startY2 };
//       const endPoint1 = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
//       const endPoint2 = { x: event.changedTouches[1].clientX, y: event.changedTouches[1].clientY };

//       const calcDistance = (point1, point2) => {
//         // let difffX;
//         // if (point1.x > point2.x) {
//         //   const difffX = point1.x - point2.x;
//         // } else {
//         //   const difffX = point2.x - point1.x;
//         // }

//         // let difffY;
//         // if (point1.y > point2.y) {
//         //   const difffY = point1.y - point2.y;
//         // } else {
//         //   const difffY = point2.y - point1.y;
//         // }

//         return Math.sqrt(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2))
//       }

//       // const startPoint1 = { x: }
//       const startDistance = calcDistance(startPoint1, startPoint2);
//       const endDistance = calcDistance(endPoint1, endPoint2);
//       const diff = endDistance - startDistance;
//       // const scale = endDistance + startDistance
//       console.log(`start distance = ${startDistance}`);
//       console.log(`end distance = ${endDistance}`);
//       if (endDistance < startDistance) {
//         // const scale = startDistance - endDistance;
//         calcScaledSize(modalState, content, diff)
//       } else {
//         // const scale = endDistance - startDistance;
//         calcScaledSize(modalState, content, diff)
//       }

//       console.log(`--------------- ${calcDistance(startPoint1, startPoint2)} -------------------`)
//       console.log(`--------------- ${calcDistance(startPoint2, startPoint1)} -------------------`)
//       console.log(`--------------- ${calcDistance(endPoint1, endPoint2)} -------------------`)

//         // calcScaledSize(modalState, content, diff)
//       // }
      
//       // let difffX;
//       // if (startPoint1.x > endPoint1.x) {
//       //   const difffX = startPoint1.x - endPoint1.x;
//       // } else {
//       //   const difffX = endPoint1.x - startPoint1.x;
//       // }

//       // let difffY;
//       // if (startPoint1.y > endPoint1.y) {
//       //   const difffY = startPoint1.y - endPoint1.y;
//       // } else {
//       //   const difffY = endPoint1.y - startPoint1.y;
//       // }
//     } 
//   }
// };

// const moveImage = (modalState, content) => {

// }

// // const handleScroll = (event) => {
// //   event.preventDefault();
// //   // console.log(event.ctrlKey);
// //   if (event.ctrlKey) {
// //     scaleImage();
// //   }

// //   if (event.deltaY > 0) {
// //     nextButtonHandler();
// //   } else {
// //     prevButtonHandler();
// //   }
// // };

// const openPortfolioModal = () => {
//   const modal = document.createElement('div');
//   modal.classList.add('portfolio-modal');

//   const content = document.createElement('div');
//   content.classList.add('portfolio-modal__content');

//   calcInitSize(modalState, content, activePhotoId);

//   window.addEventListener('resize', () => {
//     calcInitSize(modalState, content, activePhotoId);
//   });

//   modal.addEventListener('wheel', (event) => {
//     event.preventDefault();
  
//     if (event.ctrlKey) {
//       scaleImage(modalState, content, event);
//       return;
//     }

//     if (event.deltaY > 0) {
//       nextButtonHandler();
//     } else {
//       prevButtonHandler();
//     }
//   });

//   content.addEventListener('touchend', (event) => {
//     modalState.x = modalState.intermediateX;
//     modalState.y = modalState.intermediateY;
//     modalState.currentSizeX = modalState.intermediateScaledWidth;
//     modalState.currentSizeY = modalState.intermediateScaledHeight;
//     console.log(modalState);
//   }, false);

//   // window.addEventListener([])

//   content.addEventListener('touchmove', (event) => {
//     event.preventDefault();
//     // console.log(event);

//     if (event.shiftKey || event.touches.length > 1) {
//       scaleImage(modalState, content, event);
//       return;
//     }

//     // if (modalState.startX < event.changedTouches[0].clientX) {
//     //   const Xdiff = event.changedTouches[0].clientX - modalState.startX;
//     //   const Ydiff = event.changedTouches[0].clientY - modalState.startY;

//     //   if (modalState.scaled) {
//     //     const rect = content.getBoundingClientRect();
//     //     const { innerWidth, innerHeight } = window;
//     //     if (rect.height > innerHeight && rect.width > innerWidth) {
//     //       if ((modalState.y + Ydiff) >= 0) {
//     //         modalState.intermediateY = 0;
//     //       } else if (Math.abs(modalState.y + Ydiff) >= (rect.height - innerHeight)) {
//     //         modalState.intermediateY = -(rect.height - innerHeight);
//     //       } else {
//     //         modalState.intermediateY = modalState.y + Ydiff;
//     //       }
//     //       if ((modalState.x + Xdiff) > 0) {
//     //         modalState.intermediateX = 0;
//     //       } else if (Math.abs(modalState.x + Xdiff) >= (rect.width - innerWidth)) {
//     //         modalState.intermediateX = -(rect.width - innerWidth);
//     //       } else {
//     //         modalState.intermediateX = modalState.x + Xdiff;
//     //       }
//     //     } else if (rect.height > innerHeight) {
//     //       if ((modalState.y + Ydiff) >= 0) {
//     //         modalState.intermediateY = 0;
//     //       } else if (Math.abs(modalState.y + Ydiff) >= (rect.height - innerHeight)) {
//     //         modalState.intermediateY = -(rect.height - innerHeight);
//     //       } else {
//     //         modalState.intermediateY = modalState.y + Ydiff;
//     //       }
//     //       modalState.intermediateX = modalState.x;
//     //     } else if (rect.width > innerWidth) {
//     //       if ((modalState.x + Xdiff) > 0) {
//     //         modalState.intermediateX = 0;
//     //       } else if (Math.abs(modalState.x + Xdiff) >= (rect.width - innerWidth)) {
//     //         modalState.intermediateX = -(rect.width - innerWidth);
//     //       } else {
//     //         modalState.intermediateX = modalState.x + Xdiff;
//     //       }
//     //       modalState.intermediateY = modalState.y;
//     //     }
//     //   } else {
//     //     modalState.intermediateX = modalState.x;
//     //     modalState.intermediateY = modalState.y;
//     //   }
//     // }
//     // if (modalState.startX > event.changedTouches[0].clientX) {
//     //   const Xdiff = modalState.startX - event.changedTouches[0].clientX;
//     //   const Ydiff = modalState.startY - event.changedTouches[0].clientY;

//     //   if (modalState.scaled) {
//     //     const rect = content.getBoundingClientRect();
//     //     const { innerWidth, innerHeight } = window;
//     //     if (rect.height > innerHeight && rect.width > innerWidth) {
//     //       if ((modalState.y - Ydiff) >= 0) {
//     //         modalState.intermediateY = 0;
//     //       } else if (Math.abs(modalState.y - Ydiff) >= (rect.height - innerHeight)) {
//     //         modalState.intermediateY = -(rect.height - innerHeight);
//     //       } else {
//     //         modalState.intermediateY = modalState.y - Ydiff;
//     //       }
//     //       if ((modalState.x - Xdiff) > 0) {
//     //         modalState.intermediateX = 0;
//     //       } else if (Math.abs(modalState.x - Xdiff) >= (rect.width - innerWidth)) {
//     //         modalState.intermediateX = -(rect.width - innerWidth);
//     //       } else {
//     //         modalState.intermediateX = modalState.x - Xdiff;
//     //       }
//     //     } else if (rect.height > innerHeight) {
//     //       if ((modalState.y - Ydiff) >= 0) {
//     //         modalState.intermediateY = 0;
//     //       } else if (Math.abs(modalState.y - Ydiff) >= (rect.height - innerHeight)) {
//     //         modalState.intermediateY = -(rect.height - innerHeight);
//     //       } else {
//     //         modalState.intermediateY = modalState.y - Ydiff;
//     //       }
//     //       modalState.intermediateX = modalState.x;
//     //     } else if (rect.width > innerWidth) {
//     //       if ((modalState.x - Xdiff) > 0) {
//     //         modalState.intermediateX = 0;
//     //       } else if (Math.abs(modalState.x - Xdiff) >= (rect.width - innerWidth)) {
//     //         modalState.intermediateX = -(rect.width - innerWidth);
//     //       } else {
//     //         modalState.intermediateX = modalState.x - Xdiff;
//     //       }
//     //       modalState.intermediateY = modalState.y;
//     //     }
//     //   } else {
//     //     modalState.intermediateX = modalState.x;
//     //     modalState.intermediateY = modalState.y;
//     //   }
//     // }

//     // content.style.transform = `translate(${modalState.intermediateX}px, ${modalState.intermediateY}px)`;
//   }, false);

//   // window.addEventListener('scroll', );

//   content.addEventListener('touchstart', (event) => {
//     // modalState.currentSizeX = modalState.stateX,
//     // modalState.currentSizeY = modalState.stateY,
//     modalState.intermediateX = modalState.x;
//     modalState.intermediateY = modalState.y;
//     // console.log(modalState);

//     if (event.touches.length > 1) {
//       const touch = event.touches[0];
//       const touch2 = event.touches[1];
//       modalState.startX = touch.clientX;
//       modalState.startY = touch.clientY;
//       modalState.startX2 = touch2.clientX;
//       modalState.startY2 = touch2.clientY;
//       console.log(modalState);
//     }
    
//   }, false);

//   const prevButton = document.createElement('button');
//   prevButton.classList.add('portfolio-modal__prev');
//   prevButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="left-arrow"><path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path></svg>';
//   prevButton.addEventListener('click', prevButtonHandler);

//   const nextButton = document.createElement('button');
//   nextButton.classList.add('portfolio-modal__next');
//   nextButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="right-arrow"><path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"></path></svg>';
//   nextButton.addEventListener('click', nextButtonHandler);

//   const closeButton = document.createElement('button');
//   closeButton.classList.add('portfolio-modal__close-button');
//   closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="close"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>';

//   closeButton.addEventListener('click', () => {
//     closePortfolioModal();
//   });

//   const img = document.createElement('img');
//   img.src = idToPhotoUrl[activePhotoId];
//   img.classList.add('portfolio-modal__photo')
//   img.id = 'image';
//   img.addEventListener("load", () => {
//     content.innerHTML = '';
//     content.appendChild(img);
//     content.appendChild(closeButton);
//   });

//   const isLeftArrowKey = (keyCode) => keyCode === 37;
//   const isRightArrowKey = (keyCode) => keyCode === 39;

//   onkeydown = (event) => {
//     if (isLeftArrowKey(event.keyCode)) {
//       prevButtonHandler();
//       return;
//     }
//     if (isRightArrowKey(event.keyCode)) {
//       nextButtonHandler();
//       return;
//     }
//   };

//   const div = document.createElement('div');
//   div.classList.add('spinner-border', 'text-light');
//   content.appendChild(div);

//   modal.appendChild(content);
//   modal.appendChild(prevButton);
//   modal.appendChild(nextButton);

//   const main = document.querySelector('main');
//   main.appendChild(modal);
// }
