export function setActivePage() {
  // Get the current page URL
  const currentPage = window.location.pathname;
  
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Remove 'current' class from all links
  navLinks.forEach(link => {
    link.classList.remove('current');
  });
  
  // Add 'current' class to the active link based on the current URL
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Check if the link href matches the current page
    // We need to handle both '/page.html' and './page.html' formats
    if (linkPath === currentPage ||
        linkPath === `.${currentPage}` ||
        linkPath === currentPage.replace(/^\//, './') ||
        (currentPage.endsWith('/') && linkPath === './') ||
        (currentPage.endsWith('/index.html') && linkPath === './')) {
      link.classList.add('current');
    }
  });
}