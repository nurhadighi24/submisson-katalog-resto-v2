import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#mainContent');
skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.onload = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.bundle.js')
      .then(() => {
        console.log('Service worker registered');
      })
      .catch((error) => {
        console.log('Failed to register service worker', error);
      });
  }
};

const START = 1;
const NUMBER_OF_IMAGES = 20;

const generateImage = (restaurants) => {
  // eslint-disable-next-line no-plusplus
  for (let i = START; i < START + NUMBER_OF_IMAGES; i++) {
    document.body.innerHTML += `<img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}/pictureId" alt="dummy images"><br>`;
  }
};

generateImage();
