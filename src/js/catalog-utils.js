export function getUrlParams(paramConfig) {
  const params = new URLSearchParams(window.location.search);
  const result = {};

  Object.entries(paramConfig).forEach(([key, paramName]) => {
    result[key] = params.get(paramName);
  });

  return result;
}

export function getContainer(selector) {
  const container = document.querySelector(selector);
  if (!container) {
    console.error(`Container element not found: ${selector}`);
    return null;
  }
  return container;
}

export function renderContent(container, content) {
  if (container) {
    container.innerHTML = content;
  }
}

export function isCurrentPage(pathPatterns) {
  const path = window.location.pathname;

  if (Array.isArray(pathPatterns)) {
    return pathPatterns.some(pattern => path.includes(pattern));
  }

  return path.includes(pathPatterns);
}

export function isHomePage() {
  const path = window.location.pathname;
  return path.includes('/index.html') || path === '/' || path.endsWith('/');
}
