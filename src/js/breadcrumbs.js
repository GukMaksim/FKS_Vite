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
  let itemParam = params.get('item');

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

    // Додаємо категорію як посилання, якщо є параметр item
    if (itemParam) {
      const categoryListItem = document.createElement('li');
      categoryListItem.className = 'breadcrumbs-item';
      const categoryLink = document.createElement('a');
      categoryLink.href = `./products.html?category=${param}`;
      categoryLink.className = 'breadcrumbs-link';
      categoryLink.textContent = label;
      categoryListItem.appendChild(categoryLink);
      breadcrumbsList.appendChild(categoryListItem);

      // Імпортуємо дані продуктів для отримання назви конкретного елемента
      import('./data-products.js').then(({ productCategories }) => {
        if (productCategories[param]) {
          const productItem = productCategories[param].items.find(item => item.id === itemParam);
          if (productItem) {
            const itemListItem = document.createElement('li');
            itemListItem.className = 'breadcrumbs-item';
            const itemSpan = document.createElement('span');
            itemSpan.className = 'breadcrumbs-current';
            itemSpan.textContent = productItem.title;
            itemListItem.appendChild(itemSpan);
            breadcrumbsList.appendChild(itemListItem);
          }
        }
      });
      return;
    }
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

    // Додаємо тип каменю як посилання, якщо є параметр item
    if (itemParam) {
      const typeListItem = document.createElement('li');
      typeListItem.className = 'breadcrumbs-item';
      const typeLink = document.createElement('a');
      typeLink.href = `./stones.html?type=${param}`;
      typeLink.className = 'breadcrumbs-link';
      typeLink.textContent = label;
      typeListItem.appendChild(typeLink);
      breadcrumbsList.appendChild(typeListItem);

      // Імпортуємо дані каменів для отримання назви конкретного елемента
      import('./data-stones.js').then(({ stoneTypes }) => {
        if (stoneTypes[param]) {
          const stoneItem = stoneTypes[param].items.find(item => item.id === itemParam);
          if (stoneItem) {
            const itemListItem = document.createElement('li');
            itemListItem.className = 'breadcrumbs-item';
            const itemSpan = document.createElement('span');
            itemSpan.className = 'breadcrumbs-current';
            itemSpan.textContent = stoneItem.title;
            itemListItem.appendChild(itemSpan);
            breadcrumbsList.appendChild(itemListItem);
          }
        }
      });
      return;
    }
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
