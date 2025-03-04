// Модуль для управління мовами сайту

// Доступні мови
const LANGUAGES = {
  UK: 'uk',
  RU: 'ru'
};

// Поточна мова (за замовчуванням українська)
let currentLanguage = localStorage.getItem('fks-language') || LANGUAGES.UK;

// Функція для отримання поточної мови
export const getCurrentLanguage = () => currentLanguage;

// Функція для зміни мови
export const changeLanguage = (language) => {
  if (Object.values(LANGUAGES).includes(language)) {
    currentLanguage = language;
    localStorage.setItem('fks-language', language);
    document.documentElement.setAttribute('lang', language);
    // Викликаємо подію зміни мови, щоб компоненти могли на неї реагувати
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language } }));
    return true;
  }
  return false;
};

// Функція для отримання перекладу з об'єкта перекладів
export const translate = (translations) => {
  return translations[currentLanguage] || '';
};

// Ініціалізація мови при завантаженні сторінки
export const initLanguage = () => {
  document.documentElement.setAttribute('lang', currentLanguage);
  
  // Знаходимо всі перемикачі мови на сторінці
  const languageSwitchers = document.querySelectorAll('[data-language]');
  
  // Додаємо обробники подій для перемикачів мови
  languageSwitchers.forEach(switcher => {
    const language = switcher.dataset.language;
    
    // Позначаємо активну мову
    if (language === currentLanguage) {
      switcher.classList.add('active');
    }
    
    switcher.addEventListener('click', () => {
      if (language !== currentLanguage) {
        // Знімаємо активний клас з усіх перемикачів
        languageSwitchers.forEach(s => s.classList.remove('active'));
        
        // Додаємо активний клас до поточного перемикача
        switcher.classList.add('active');
        
        // Змінюємо мову
        changeLanguage(language);
      }
    });
  });
};

// Експортуємо константи мов
export { LANGUAGES };