import { getHitProducts } from './loader-stones.js';
import { createSlider } from './slider-utils.js';

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
  createSlider({
    trackSelector: '.hits-track',
    prevButtonSelector: '.prev-slide',
    nextButtonSelector: '.next-slide',
    defaultSlidesToShow: 4,
    breakpoints: {
      767: 1,
      991: 2,
      1199: 3
    },
    slideGap: 24,
    slideSelector: '.hit-card'
  });
}

export function initHits() {
  const hits = getHitProducts();
  
  if (hits.length > 0) {
    renderHitCards(hits);
    initSlider();
  }
}
