/**
 * Утиліти для роботи зі слайдерами
 */

/**
 * Створює базовий слайдер з навігацією
 * @param {Object} options - Налаштування слайдера
 * @param {string} options.trackSelector - Селектор треку слайдера
 * @param {string} options.prevButtonSelector - Селектор кнопки "назад"
 * @param {string} options.nextButtonSelector - Селектор кнопки "вперед"
 * @param {number} options.defaultSlidesToShow - Кількість слайдів за замовчуванням
 * @param {Object} options.breakpoints - Точки зміни кількості слайдів (ширина екрану: кількість слайдів)
 * @param {number} options.slideGap - Відстань між слайдами в пікселях
 * @param {string} options.slideSelector - Селектор окремого слайду
 */
export function createSlider(options) {
  const {
    trackSelector,
    prevButtonSelector,
    nextButtonSelector,
    defaultSlidesToShow = 4,
    breakpoints = {
      767: 1,
      991: 2,
      1199: 3
    },
    slideGap = 24,
    slideSelector
  } = options;

  const track = document.querySelector(trackSelector);
  const prevButton = document.querySelector(prevButtonSelector);
  const nextButton = document.querySelector(nextButtonSelector);
  
  if (!track || !prevButton || !nextButton) return;

  let currentSlide = 0;
  let slidesToShow = defaultSlidesToShow;

  function updateSlidesToShow() {
    // Сортуємо точки зміни за зростанням
    const breakpointEntries = Object.entries(breakpoints)
      .map(([width, slides]) => [parseInt(width), slides])
      .sort((a, b) => a[0] - b[0]);

    // Встановлюємо кількість слайдів відповідно до ширини екрану
    for (const [width, slides] of breakpointEntries) {
      if (window.innerWidth <= width) {
        slidesToShow = slides;
        return;
      }
    }
    
    // Якщо жодна точка зміни не підійшла, використовуємо значення за замовчуванням
    slidesToShow = defaultSlidesToShow;
  }

  function updateSliderPosition() {
    const slideWidth = track.querySelector(slideSelector).offsetWidth + slideGap;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSliderPosition();
    }
  });

  nextButton.addEventListener('click', () => {
    const totalSlides = track.children.length;
    if (currentSlide < totalSlides - slidesToShow) {
      currentSlide++;
      updateSliderPosition();
    }
  });

  window.addEventListener('resize', () => {
    updateSlidesToShow();
    currentSlide = 0;
    updateSliderPosition();
  });

  // Ініціалізація
  updateSlidesToShow();
  return {
    updatePosition: updateSliderPosition
  };
}