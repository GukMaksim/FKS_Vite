import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { productCategories } from './data-products.js';

// Function to initialize sliders
function initPortfolioSliders() {
  // Create placeholder images for development
  createPlaceholderImages();

  // Initialize each slider
  initSlider('countertops', productCategories.countertops.items);
  initSlider('windowsills', productCategories.windowsills.items);
  initSlider('stairs', productCategories.stairs.items);
  initSlider('fireplaces', productCategories.fireplaces.items);
  initSlider('floors', productCategories.floors.items);
  initSlider('bathrooms', productCategories.bathrooms.items);
  initSlider('tiles', productCategories.tiles.items);
  initSlider('monuments', productCategories.monuments.items);
  initSlider('paving', productCategories.paving.items);
  initSlider('slabs', productCategories.slabs.items);
  initSlider('rosettes', productCategories.rosettes.items);
}

// Function to create and show lightbox
function showLightbox(imageSrc) {
  const lightbox = document.createElement('div');
  lightbox.className = 'portfolio-lightbox';

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = 'Full size image';

  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  // Add fade-in effect
  setTimeout(() => lightbox.classList.add('active'), 10);

  // Close lightbox on click
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    setTimeout(() => lightbox.remove(), 300);
  });
}

// Function to initialize a specific slider
function initSlider(category, items) {
  const sliderSelector = `.${category}-slider`;
  const sliderElement = document.querySelector(sliderSelector);

  if (!sliderElement) return;

  // Add slides to the wrapper
  const swiperWrapper = sliderElement.querySelector('.swiper-wrapper');

  items.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.loading = 'lazy';

    // Add click handler for lightbox
    img.addEventListener('click', e => {
      e.preventDefault();
      showLightbox(item.image);
    });

    const caption = document.createElement('div');
    caption.className = 'portfolio-item-caption';
    caption.textContent = item.title;

    slide.appendChild(img);
    slide.appendChild(caption);
    swiperWrapper.appendChild(slide);
  });

  // Initialize Swiper
  new Swiper(sliderSelector, {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    centeredSlides: true,
    grabCursor: true,
    lazy: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    loop: true,
    pagination: {
      el: `${sliderSelector} .swiper-pagination`,
      clickable: true,
    },
    navigation: {
      nextEl: `${sliderSelector} .swiper-button-next`,
      prevEl: `${sliderSelector} .swiper-button-prev`,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  
  // Add 'Перейти' button after the slider
  const portfolioCategory = sliderElement.closest('.portfolio-category');
  if (portfolioCategory) {
    // Check if button already exists
    if (!portfolioCategory.querySelector('.category-link-button')) {
      const linkButton = document.createElement('a');
      linkButton.className = 'category-link-button';
      linkButton.textContent = 'Перейти';
      linkButton.href = `./products.html?category=${category}`;
      
      // Create a container for the button to center it
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';
      buttonContainer.appendChild(linkButton);
      
      // Insert the button after the slider
      portfolioCategory.appendChild(buttonContainer);
    }
  }
}

// Function to create placeholder images for development
function createPlaceholderImages() {
  // Check if we're in development and images don't exist
  const testImage = new Image();
  testImage.src = productCategories.countertops.items[0].image;

  testImage.onerror = () => {
    console.log('Using placeholder images for development');

    // Replace image paths with placeholder images
    Object.keys(productCategories).forEach(category => {
      if (productCategories[category].items) {
        productCategories[category].items.forEach(item => {
          // Use placeholder.com for development placeholders
          item.image = `https://via.placeholder.com/800x500?text=${category}+image`;
        });
      }
    });

    // Reinitialize sliders with placeholder images
    initSlider('countertops', productCategories.countertops.items);
    initSlider('windowsills', productCategories.windowsills.items);
    initSlider('stairs', productCategories.stairs.items);
    initSlider('fireplaces', productCategories.fireplaces.items);
    initSlider('floors', productCategories.floors.items);
    initSlider('bathrooms', productCategories.bathrooms.items);
    initSlider('tiles', productCategories.tiles.items);
    initSlider('monuments', productCategories.monuments.items);
    initSlider('paving', productCategories.paving.items);
    initSlider('slabs', productCategories.slabs.items);
    initSlider('rosettes', productCategories.rosettes.items);
  };
}

// Initialize portfolio sliders when DOM is loaded
document.addEventListener('DOMContentLoaded', initPortfolioSliders);
