import { StoneCatalog } from './stone-catalog.js';

// Створюємо екземпляр каталогу каменю для отримання хітів продажів
const stoneCatalog = new StoneCatalog();

function renderHitCards(hits) {
  const track = document.querySelector('.hits-track');
  if (!track) return;

  const cards = hits
    .map(
      hit => `
        <a href="./stones.html?type=${hit.type}&item=${hit.id}" class="hit-card">
            <div class="hit-image">
                <img src="${hit.image}" alt="${hit.title}" loading="lazy">
            </div>
            <div class="hit-info">
                <div class="hit-category">${hit.category}</div>
                <h3 class="hit-title">${hit.title}</h3>
                <div class="hit-price">${hit.characteristics.price}</div>
            </div>
        </a>
    `
    )
    .join('');

  track.innerHTML = cards;
}

function initSlider() {
  const track = document.querySelector('.hits-track');
  const prevButton = document.querySelector('.prev-slide');
  const nextButton = document.querySelector('.next-slide');
  if (!track || !prevButton || !nextButton) return;

  let currentSlide = 0;
  let slidesToShow = 4;

  function updateSlidesToShow() {
    if (window.innerWidth <= 767) {
      slidesToShow = 1;
    } else if (window.innerWidth <= 991) {
      slidesToShow = 2;
    } else if (window.innerWidth <= 1199) {
      slidesToShow = 3;
    } else {
      slidesToShow = 4;
    }
  }

  function updateSliderPosition() {
    const slideWidth = track.querySelector('.hit-card').offsetWidth + 24; // 24px - margin
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

  updateSlidesToShow();
}

export function initHits() {
  const hits = stoneCatalog.getHitProducts();
  
  if (hits.length > 0) {
    renderHitCards(hits);
    initSlider();
  }
}
