// Імпортуємо необхідні модулі
import { initLanguage } from './js/language.js';
import SmoothScroll from './js/smooth-scroll.js';

// Ініціалізуємо мовний модуль
document.addEventListener('DOMContentLoaded', () => {
  // Ініціалізація мовного модуля
  initLanguage();
  
  // Ініціалізація кастомного скролу
  const smoothScroll = new SmoothScroll({
    ease: 0.075 // Швидкість плавності скролу
  });
  
  // Додаємо smoothScroll до window для доступу з інших модулів
  window.smoothScroll = smoothScroll;
  
  // Ініціалізація мобільного меню (бургер-меню)
  initMobileMenu();
});

// Функція для ініціалізації мобільного меню
function initMobileMenu() {
  const burgerBtn = document.querySelector('.burger-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu-close');
  
  if (!burgerBtn || !mobileMenu) return;
  
  // Відкриття меню
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    document.body.classList.add('no-scroll');
    
    // Якщо є кастомний скрол, вимикаємо його
    if (window.smoothScroll) {
      window.smoothScroll.toggle(false);
    }
  });
  
  // Закриття меню
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileMenu);
  }
  
  // Закриття меню при кліку на посилання
  const mobileLinks = mobileMenu.querySelectorAll('a[href^="#"]');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  // Функція закриття мобільного меню
  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    
    // Якщо є кастомний скрол, вмикаємо його знову
    if (window.smoothScroll) {
      window.smoothScroll.toggle(true);
    }
  }
}