document.addEventListener('DOMContentLoaded', function() {
  // Get all gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('portfolio-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  
  let currentIndex = 0;
  
  // Function to open lightbox
  function openLightbox(index) {
    const item = galleryItems[index];
    const imgSrc = item.querySelector('.gallery-image').src;
    const caption = item.querySelector('.gallery-caption').textContent;
    
    lightboxImage.src = imgSrc;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'flex';
    lightbox.classList.add('active');
    currentIndex = index;
  }
  
  // Function to close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    setTimeout(() => {
      lightbox.style.display = 'none';
    }, 300); // Match the transition duration in CSS
  }
  
  // Function to navigate to previous image
  function prevImage() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  }
  
  // Function to navigate to next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    openLightbox(currentIndex);
  }
  
  // Add click event to each gallery item
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });
  
  // Add event listeners for navigation
  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);
  
  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
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
