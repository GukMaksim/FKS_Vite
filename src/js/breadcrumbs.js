export function generateBreadcrumbs() {
  const breadcrumbsList = document.querySelector('.breadcrumbs-list');
  if (!breadcrumbsList) return;

  while (breadcrumbsList.children.length > 1) {
    breadcrumbsList.removeChild(breadcrumbsList.lastChild);
  }

  const path = window.location.pathname;
  const search = window.location.search;
  if (path === '/' || path.endsWith('/index.html')) {
    return;
  }

  const pageLabels = {
    'products.html': 'Вироби з каменю',
    'stones.html': 'Каталог каменю',
    'portfolio.html': 'Портфоліо',
    'contacts.html': 'Контакти',
    'about.html': 'Про компанію',
  };

  const pageName = path.split('/').pop();
  if (pageLabels[pageName]) {
    const listItem = document.createElement('li');
    listItem.className = 'breadcrumbs-item';
    if (
      !search ||
      (pageName !== 'stones.html' && pageName !== 'products.html')
    ) {
      const span = document.createElement('span');
      span.className = 'breadcrumbs-current';
      span.textContent = pageLabels[pageName];
      listItem.appendChild(span);
    } else {
      const link = document.createElement('a');
      link.href = `./${pageName}`;
      link.className = 'breadcrumbs-link';
      link.textContent = pageLabels[pageName];
      listItem.appendChild(link);
      addSpecificBreadcrumb(breadcrumbsList, pageName, search);
      return;
    }

    breadcrumbsList.appendChild(listItem);
  }
}

function addSpecificBreadcrumb(breadcrumbsList, pageName, search) {
  const params = new URLSearchParams(search);
  let label = '';
  let param = '';

  if (pageName === 'products.html') {
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

    const categoryLabels = {
      countertops: 'Стільниці',
      windowsills: 'Підвіконня',
      stairs: 'Сходи',
      fireplaces: 'Каміни',
      floors: 'Підлоги',
      bathrooms: 'Ванна кімната',
      tiles: 'Плитка',
      monuments: "Пам'ятники",
      paving: 'Бруківка',
      slabs: 'Слеби',
      rosettes: 'Розетки пано',
      entrances: 'Вхідні групи',
      church: 'Церковні роботи',
    };

    label = categoryLabels[param] || param;
  } else if (pageName === 'stones.html') {
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

    const stoneLabels = {
      'granite-ukraine': 'Граніт України',
      granite: 'Граніт',
      marble: 'Мармур',
      quartzite: 'Кварцит',
      travertine: 'Травертин',
      onyx: 'Онікс',
      sandstone: 'Піщаник',
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
