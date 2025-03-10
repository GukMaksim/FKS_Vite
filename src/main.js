import { initMobileMenu } from './js/mobile-menu.js';
import { setActivePage } from './js/active-page.js';
import { initStones } from './js/loader-stones.js';
import { initProducts } from './js/loader-products.js';
import { generateBreadcrumbs } from './js/breadcrumbs.js';
import './css/breadcrumbs.css';

document.addEventListener('DOMContentLoaded', () => {
  // Ініціалізація мобільного меню
  initMobileMenu();
  
  // Встановлення активної сторінки в меню
  setActivePage();
  
  // Ініціалізація каталогів
  initStones();
  initProducts();
  
  generateBreadcrumbs();
});