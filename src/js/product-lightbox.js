/**
 * Initialize product lightbox functionality
 */
export function initProductLightbox() {
    const productGallery = document.getElementById('product-gallery');
    
    // If there's no gallery, exit early
    if (!productGallery) return;
    
    const galleryItems = productGallery.querySelectorAll('.product-gallery-item');
    const lightbox = document.getElementById('product-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentIndex = 0;

    function openLightbox(index) {
      const item = galleryItems[index];
      const imgSrc = item.querySelector('img').src;

      lightboxImage.src = imgSrc;
      lightbox.style.display = 'flex';
      setTimeout(() => {
        lightbox.classList.add('active');
      }, 10);
      currentIndex = index;
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      setTimeout(() => {
        lightbox.style.display = 'none';
      }, 300);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      openLightbox(currentIndex);
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      openLightbox(currentIndex);
    }

    // Add click event to each gallery item
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => openLightbox(index));
    });

    // Add click events to lightbox controls
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Add keyboard navigation
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
}