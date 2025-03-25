import { updateMetaTags } from './meta-tags.js';

document.addEventListener('DOMContentLoaded', function () {
  updatePortfolioMetaTags();
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('portfolio-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  let currentIndex = 0;

  function openLightbox(index) {
    const item = galleryItems[index];
    const imgSrc = item.querySelector('.gallery-image').src;

    lightboxImage.src = imgSrc;
    lightbox.style.display = 'flex';
    lightbox.classList.add('active');
    currentIndex = index;
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    setTimeout(() => {
      lightbox.style.display = 'none';
    }, 300);
  }

  function prevImage() {
    currentIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    openLightbox(currentIndex);
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    }
  });
});

function updatePortfolioMetaTags() {
  const baseUrl = window.location.origin + window.location.pathname;

  updateMetaTags({
    title: 'Портфоліо - ФКС',
    description:
      'Портфоліо робіт ТОВ «ФКС» - реалізовані проекти з природного каменю: каміни, фасади, стільниці, сходи та інші вироби',
    keywords:
      'портфоліо ФКС, проекти з каменю, реалізовані роботи, каміни, фасади, стільниці, сходи',
    ogTitle: 'Портфоліо робіт - ФКС',
    ogDescription:
      'Галерея реалізованих проектів з природного каменю від ТОВ «ФКС» - каміни, фасади, стільниці, сходи та інші вироби',
    ogImage: `${window.location.origin}/img/portfolio/portfolio-1.jpg`,
    ogUrl: baseUrl,
  });
}
