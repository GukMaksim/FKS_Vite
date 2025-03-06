import { initMobileMenu } from './js/mobile-menu.js';
import { setActivePage } from './js/active-page.js';
import { initCatalogs } from './js/catalog-loader.js';

document.addEventListener('DOMContentLoaded', () => {
  // Ініціалізація мобільного меню
  initMobileMenu();
  
  // Встановлення активної сторінки в меню
  setActivePage();
  
  // Ініціалізація каталогів
  initCatalogs();
});