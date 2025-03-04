// Модуль для реалізації кастомного плавного скролу

export default class SmoothScroll {
  constructor(options = {}) {
    // Опції за замовчуванням
    this.options = {
      container: document.documentElement,
      speed: 0.1,
      smooth: true,
      ease: 0.075,
      ...options
    };

    // Елементи для скролу
    this.container = this.options.container;
    this.scrollContent = document.querySelector('.scroll-content');
    
    // Якщо елемент контенту не знайдено, створюємо його
    if (!this.scrollContent) {
      // Обгортаємо весь контент body в div.scroll-content
      this.scrollContent = document.createElement('div');
      this.scrollContent.className = 'scroll-content';
      
      // Переміщуємо всі дочірні елементи body в scroll-content
      while (document.body.firstChild) {
        this.scrollContent.appendChild(document.body.firstChild);
      }
      
      document.body.appendChild(this.scrollContent);
    }
    
    // Змінні для відстеження скролу
    this.scrollY = 0;
    this.currentY = 0;
    this.isEnabled = window.innerWidth > 768; // Вимикаємо на мобільних пристроях
    
    // Ініціалізація
    this.init();
  }
  
  init() {
    // Встановлюємо стилі для body
    document.body.style.overflow = this.isEnabled ? 'hidden' : '';
    document.body.style.position = this.isEnabled ? 'fixed' : '';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    
    // Встановлюємо стилі для контейнера скролу
    this.scrollContent.style.position = this.isEnabled ? 'absolute' : '';
    this.scrollContent.style.top = 0;
    this.scrollContent.style.left = 0;
    this.scrollContent.style.width = '100%';
    
    // Встановлюємо висоту контейнера
    this.setHeight();
    
    // Додаємо обробники подій
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('wheel', this.onWheel.bind(this));
    window.addEventListener('touchstart', this.onTouchStart.bind(this));
    window.addEventListener('touchmove', this.onTouchMove.bind(this));
    
    // Запускаємо анімацію
    if (this.isEnabled) {
      this.animate();
    }
  }
  
  setHeight() {
    // Встановлюємо висоту для body, щоб скрол працював правильно
    document.body.style.height = `${this.scrollContent.getBoundingClientRect().height}px`;
  }
  
  onResize() {
    // Оновлюємо стан при зміні розміру вікна
    this.isEnabled = window.innerWidth > 768;
    document.body.style.overflow = this.isEnabled ? 'hidden' : '';
    document.body.style.position = this.isEnabled ? 'fixed' : '';
    this.scrollContent.style.position = this.isEnabled ? 'absolute' : '';
    
    // Оновлюємо висоту
    this.setHeight();
    
    // Скролимо до поточної позиції
    if (!this.isEnabled) {
      window.scrollTo(0, this.scrollY);
      this.currentY = this.scrollY;
    }
  }
  
  onWheel(e) {
    if (!this.isEnabled) return;
    
    // Оновлюємо позицію скролу на основі події колеса миші
    this.scrollY += e.deltaY;
    this.scrollY = Math.max(0, Math.min(this.scrollY, document.body.scrollHeight - window.innerHeight));
    e.preventDefault();
  }
  
  // Змінні для відстеження дотику
  touchStart = 0;
  touchY = 0;
  
  onTouchStart(e) {
    if (!this.isEnabled) return;
    
    // Зберігаємо початкову позицію дотику
    this.touchStart = e.touches[0].clientY;
    this.touchY = this.scrollY;
  }
  
  onTouchMove(e) {
    if (!this.isEnabled) return;
    
    // Розраховуємо зміщення дотику і оновлюємо позицію скролу
    const touchY = e.touches[0].clientY;
    const diff = (this.touchStart - touchY) * 2;
    
    this.scrollY = this.touchY + diff;
    this.scrollY = Math.max(0, Math.min(this.scrollY, document.body.scrollHeight - window.innerHeight));
    e.preventDefault();
  }
  
  animate() {
    if (!this.isEnabled) {
      requestAnimationFrame(this.animate.bind(this));
      return;
    }
    
    // Плавно анімуємо скрол
    this.currentY += (this.scrollY - this.currentY) * this.options.ease;
    
    // Застосовуємо трансформацію для створення ефекту скролу
    this.scrollContent.style.transform = `translate3d(0, -${this.currentY}px, 0)`;
    
    // Продовжуємо анімацію
    requestAnimationFrame(this.animate.bind(this));
  }
  
  // Метод для програмного скролу до елемента
  scrollTo(target, offset = 0) {
    if (!target) return;
    
    let targetPosition;
    
    if (typeof target === 'number') {
      // Якщо передано число, використовуємо його як позицію
      targetPosition = target;
    } else {
      // Інакше отримуємо позицію елемента
      const targetElement = typeof target === 'string' 
        ? document.querySelector(target) 
        : target;
      
      if (!targetElement) return;
      
      const rect = targetElement.getBoundingClientRect();
      targetPosition = this.scrollY + rect.top - offset;
    }
    
    // Встановлюємо нову позицію скролу
    this.scrollY = targetPosition;
  }
  
  // Метод для увімкнення/вимкнення скролу
  toggle(enabled) {
    this.isEnabled = enabled !== undefined ? enabled : !this.isEnabled;
    
    document.body.style.overflow = this.isEnabled ? 'hidden' : '';
    document.body.style.position = this.isEnabled ? 'fixed' : '';
    this.scrollContent.style.position = this.isEnabled ? 'absolute' : '';
    
    if (!this.isEnabled) {
      window.scrollTo(0, this.scrollY);
      this.currentY = this.scrollY;
    }
  }
  
  // Метод для знищення інстансу скролу
  destroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
    window.removeEventListener('wheel', this.onWheel.bind(this));
    window.removeEventListener('touchstart', this.onTouchStart.bind(this));
    window.removeEventListener('touchmove', this.onTouchMove.bind(this));
    
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.height = '';
    document.body.style.width = '';
    
    this.scrollContent.style.position = '';
    this.scrollContent.style.top = '';
    this.scrollContent.style.left = '';
    this.scrollContent.style.transform = '';
    
    // Повертаємо контент назад в body
    while (this.scrollContent.firstChild) {
      document.body.appendChild(this.scrollContent.firstChild);
    }
    
    if (this.scrollContent.parentNode) {
      this.scrollContent.parentNode.removeChild(this.scrollContent);
    }
  }
}