import { initMobileMenu } from './js/mobile-menu.js';
import { setActivePage } from './js/active-page.js';
import { initStones } from './js/loader-stones.js';
import { initProducts } from './js/loader-products.js';
import { generateBreadcrumbs } from './js/breadcrumbs.js';
import { initHeroSlider } from './js/hero-slider.js';
import { initSearch } from './js/search.js';
import { initHits } from './js/hits-slider.js';
import { initPhoneMasks } from './js/input-mask.js';
import { setBaseOpenGraphTags } from './js/meta-tags.js';
import { initFormHandlers } from './js/form-handler.js';
import './js/animations.js';
import './css/breadcrumbs.css';

document.addEventListener('DOMContentLoaded', () => {
  setBaseOpenGraphTags();
  initMobileMenu();
  setActivePage();
  initStones();
  initProducts();
  initSearch();
  initHits();
  generateBreadcrumbs();
  initHeroSlider();
  initPhoneMasks();
  initFormHandlers();
});
