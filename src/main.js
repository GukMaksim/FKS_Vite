import { initMobileMenu } from './js/mobile-menu.js';
import { setActivePage } from './js/active-page.js';
import { initStones } from './js/loader-stones.js';
import { initProducts } from './js/loader-products.js';
import { generateBreadcrumbs } from './js/breadcrumbs.js';
import { initHeroSlider } from './js/hero-slider.js';
import { initSearch } from './js/search.js';
import './css/breadcrumbs.css';

document.addEventListener('DOMContentLoaded', () => {
  // Ініціалізація мобільного меню
  initMobileMenu();
  
  // Встановлення активної сторінки в меню
  setActivePage();
  
  // Ініціалізація каталогів
  initStones();
  initProducts();
  initSearch();
  
  // Ініціалізація хлібних крихт
  generateBreadcrumbs();
  
  // Ініціалізація слайдера на головній сторінці
  initHeroSlider();
});