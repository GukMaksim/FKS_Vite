export function setActivePage() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.classList.remove('current');
  });

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (
      linkPath === currentPage ||
      linkPath === `.${currentPage}` ||
      linkPath === currentPage.replace(/^\//, './') ||
      (currentPage.endsWith('/') && linkPath === './') ||
      (currentPage.endsWith('/index.html') && linkPath === './')
    ) {
      link.classList.add('current');
    }
  });
}
