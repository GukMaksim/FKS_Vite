export function initMobileMenu() {
  const menuButton = document.querySelector('.menu-button');
  const mobileMenu = document.querySelector('.menu-container');
  const body = document.body;

  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener('click', toggleMenu);

  document.addEventListener('click', e => {
    const isClickInside =
      mobileMenu.contains(e.target) || menuButton.contains(e.target);

    if (!isClickInside && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Close menu on ESC key press
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', isOpen);
    body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', false);
    body.style.overflow = '';
  }
}
