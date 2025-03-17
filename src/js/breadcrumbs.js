// Function to generate breadcrumbs based on current page
export function generateBreadcrumbs() {
  const breadcrumbsList = document.querySelector('.breadcrumbs-list');
  if (!breadcrumbsList) return;

  // Clear existing items except Home
  while (breadcrumbsList.children.length > 1) {
    breadcrumbsList.removeChild(breadcrumbsList.lastChild);
  }

  // Get current path and page name
  const path = window.location.pathname;
  const search = window.location.search;
  
  // Skip for homepage
  if (path === '/' || path.endsWith('/index.html')) {
    return;
  }

  // Define page mappings for breadcrumb labels
  const pageLabels = {
    'products.html': 'Вироби з каменю',
    'stones.html': 'Каталог каменю',
    'portfolio.html': 'Портфоліо',
    'contacts.html': 'Контакти',
    'about.html': 'Про компанію',
  };

  // Extract page name from path
  const pageName = path.split('/').pop();
  
  // Add current page to breadcrumbs
  if (pageLabels[pageName]) {
    const listItem = document.createElement('li');
    listItem.className = 'breadcrumbs-item';
    
    // For pages without query parameters or special cases
    if (!search || (pageName !== 'stones.html' && pageName !== 'products.html')) {
      const span = document.createElement('span');
      span.className = 'breadcrumbs-current';
      span.textContent = pageLabels[pageName];
      listItem.appendChild(span);
    } else {
      // For pages with query parameters (category or stone type pages)
      const link = document.createElement('a');
      link.href = `./${pageName}`;
      link.className = 'breadcrumbs-link';
      link.textContent = pageLabels[pageName];
      listItem.appendChild(link);
      
      // Add the specific category or stone type as the final breadcrumb
      addSpecificBreadcrumb(breadcrumbsList, pageName, search);
      return; // Exit early as we've added the specific breadcrumb
    }
    
    breadcrumbsList.appendChild(listItem);
  }
}

// Function to add specific category or stone type breadcrumb
function addSpecificBreadcrumb(breadcrumbsList, pageName, search) {
  const params = new URLSearchParams(search);
  let label = '';
  let param = '';
  
  if (pageName === 'products.html') {
    // Add intermediate level for product catalog
    const catalogListItem = document.createElement('li');
    catalogListItem.className = 'breadcrumbs-item';
    const catalogLink = document.createElement('a');
    catalogLink.href = './products.html';
    catalogLink.className = 'breadcrumbs-link';
    catalogLink.textContent = 'Вироби з каменю';
    catalogListItem.appendChild(catalogLink);
    breadcrumbsList.appendChild(catalogListItem);
    
    param = params.get('category');
    if (!param) return;
    
    // Map category IDs to readable names
    const categoryLabels = {
      'countertops': 'Стільниці',
      'windowsills': 'Підвіконня',
      'stairs': 'Сходи',
      'fireplaces': 'Каміни',
      'floors': 'Підлоги',
      'bathrooms': 'Ванна кімната',
      'tiles': 'Плитка',
      'monuments': 'Пам\'ятники',
      'paving': 'Бруківка',
      'slabs': 'Слеби',
      'rosettes': 'Розетки пано',
      'entrances': 'Вхідні групи',
      'church': 'Церковні роботи'
    };
    
    label = categoryLabels[param] || param;
  } else if (pageName === 'stones.html') {
    // Add intermediate level for stone catalog
    const catalogListItem = document.createElement('li');
    catalogListItem.className = 'breadcrumbs-item';
    const catalogLink = document.createElement('a');
    catalogLink.href = './stones.html';
    catalogLink.className = 'breadcrumbs-link';
    catalogLink.textContent = 'Каталог каменю';
    catalogListItem.appendChild(catalogLink);
    breadcrumbsList.appendChild(catalogListItem);
    
    param = params.get('type');
    if (!param) return;
    
    // Map stone types to readable names
    const stoneLabels = {
      'granite-ukraine': 'Граніт України',
      'granite': 'Граніт',
      'marble': 'Мармур',
      'quartzite': 'Кварцит',
      'travertine': 'Травертин',
      'onyx': 'Онікс',
      'sandstone': 'Піщаник'
    };
    
    label = stoneLabels[param] || param;
  }
  
  if (label) {
    const listItem = document.createElement('li');
    listItem.className = 'breadcrumbs-item';
    
    const span = document.createElement('span');
    span.className = 'breadcrumbs-current';
    span.textContent = label;
    
    listItem.appendChild(span);
    breadcrumbsList.appendChild(listItem);
  }
}