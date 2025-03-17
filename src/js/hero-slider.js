// Hero slider functionality using Swiper.js
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function initHeroSlider() {
  const heroSlider = new Swiper('.hero-slider', {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.hero-slider-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.hero-slider-button-next',
      prevEl: '.hero-slider-button-prev',
    },
  });
}