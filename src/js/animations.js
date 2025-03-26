document.addEventListener('DOMContentLoaded', () => {
  // Вибираємо всі елементи з класом animate-on-scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  // Вибираємо всі елементи з класом stagger-item для поступової анімації
  const staggerItems = document.querySelectorAll('.stagger-item');
  
  // Функція для перевірки видимості елементів
  const checkVisibility = () => {
    // Анімація для звичайних елементів
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('visible');
      }
    });
    
    // Анімація для елементів з поступовою появою
    staggerItems.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 50) {
        // Додаємо затримку в залежності від індексу елемента
        setTimeout(() => {
          element.classList.add('visible');
        }, 150 * index);
      }
    });
  };
  
  // Функція для анімації елементів, які вже видимі при завантаженні
  const animateInitialElements = () => {
    // Анімуємо елементи в hero секції одразу
    const heroElements = document.querySelectorAll('.hero-title, .hero-description, .hero-buttons');
    heroElements.forEach(element => {
      if (element.classList.contains('fade-in') || element.classList.contains('slide-up')) {
        // Додаємо невелику затримку для плавності
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 100);
      }
    });
  };
  
  // Перевірка при завантаженні сторінки
  checkVisibility();
  animateInitialElements();
  
  // Перевірка при прокрутці з оптимізацією продуктивності
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        checkVisibility();
        scrollTimeout = null;
      }, 10);
    }
  });
});