/**
 * Utility functions for catalog loaders
 */

/**
 * Get URL parameters based on the provided parameter names
 * @param {Object} paramConfig - Configuration object with parameter names
 * @returns {Object} - Object with parameter values
 */
export function getUrlParams(paramConfig) {
  const params = new URLSearchParams(window.location.search);
  const result = {};
  
  // Extract each parameter specified in the config
  Object.entries(paramConfig).forEach(([key, paramName]) => {
    result[key] = params.get(paramName);
  });
  
  return result;
}

/**
 * Find container element and handle errors consistently
 * @param {string} selector - CSS selector for the container
 * @returns {HTMLElement|null} - Container element or null if not found
 */
export function getContainer(selector) {
  const container = document.querySelector(selector);
  if (!container) {
    console.error(`Container element not found: ${selector}`);
    return null;
  }
  return container;
}

/**
 * Render content to a container
 * @param {HTMLElement} container - Container element
 * @param {string} content - HTML content to render
 */
export function renderContent(container, content) {
  if (container) {
    container.innerHTML = content;
  }
}

/**
 * Check if current page matches the given path pattern
 * @param {string|Array<string>} pathPatterns - Path pattern(s) to check
 * @returns {boolean} - True if current path matches any pattern
 */
export function isCurrentPage(pathPatterns) {
  const path = window.location.pathname;
  
  if (Array.isArray(pathPatterns)) {
    return pathPatterns.some(pattern => path.includes(pattern));
  }
  
  return path.includes(pathPatterns);
}

/**
 * Check if current page is the home page
 * @returns {boolean} - True if current page is home page
 */
export function isHomePage() {
  const path = window.location.pathname;
  return path.includes('/index.html') || path === '/' || path.endsWith('/');
}