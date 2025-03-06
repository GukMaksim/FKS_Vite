// Функція для отримання параметрів з URL
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    type: params.get('type'),
    category: params.get('category')
  };
}

// Імпортуємо дані з окремого файлу
import { stoneTypes, productCategories } from './catalog-data.js';

// Функція для відображення каталогу каменю
function renderStoneCatalog(type = null) {
  const container = document.querySelector('.dataContainer');
  let content = '';

  if (type && stoneTypes[type]) {
    // Відображення конкретного типу каменю
    const stoneType = stoneTypes[type];
    content = `
      <h2>${stoneType.title}</h2>
      <div class="stone-type-details">
        <div class="stone-type-image">
          <img src="${stoneType.image}" alt="${stoneType.title}" />
        </div>
        <div class="stone-type-info">
          <p class="stone-type-description">${stoneType.description}</p>
        </div>
      </div>
      <h3>Варіанти ${stoneType.title}</h3>
      <div class="stone-variants-grid">
        ${stoneType.items.map(item => `
          <div class="stone-variant-card">
            <div class="stone-variant-image">
              <img src="${item.image}" alt="${item.title}" />
            </div>
            <div class="stone-variant-info">
              <h4>${item.title}</h4>
              <p>${item.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    // Відображення всіх типів каменю
    content = `
      <h2>КАТАЛОГ КАМЕНЮ</h2>
      <div class="stone-types-grid">
        ${Object.entries(stoneTypes).map(([key, value]) => `
          <div class="stone-type-card">
            <div class="stone-type-image">
              <img src="${value.image}" alt="${value.title}" />
            </div>
            <div class="stone-type-info">
              <h3>${value.title}</h3>
              <p>${value.description}</p>
              <a href="./stones.html?type=${key}" class="stone-link">Переглянути</a>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  container.innerHTML = content;
}

// Функція для відображення каталогу виробів
function renderProductCatalog(category = null) {
  const container = document.querySelector('.dataContainer');
  let content = '';

  if (category && productCategories[category]) {
    // Відображення конкретної категорії виробів
    const productCategory = productCategories[category];
    content = `
      <h2>${productCategory.title}</h2>
      <ul class="product-list">
        ${productCategory.items.map(item => `<li class="product-item">${item}</li>`).join('')}
      </ul>
    `;
  } else {
    // Відображення всіх категорій виробів
    content = `
      <h2>ВИРОБИ З КАМЕНЮ</h2>
      <div class="product-categories">
        ${Object.entries(productCategories).map(([key, value]) => `
          <div class="product-category">
            <h3>${value.title}</h3>
            <a href="./product-categories.html?category=${key}" class="category-link">Переглянути</a>
          </div>
        `).join('')}
      </div>
    `;
  }

  container.innerHTML = content;
}

// Функція для відображення деталей конкретного каменю
function renderStoneDetails(stoneId) {
  const container = document.querySelector('.container');
  let content = '';
  
  // Знаходимо камінь за ID (в даному випадку використовуємо тип як ID)
  let stone = null;
  let stoneType = null;
  
  for (const [key, value] of Object.entries(stoneTypes)) {
    if (key === stoneId) {
      stoneType = value;
      break;
    }
  }
  
  if (stoneType) {
    content = `
      <h2>${stoneType.title}</h2>
      <div class="stone-details-content">
        <div class="stone-image">
          <!-- Тут буде зображення каменю -->
          <div class="stone-placeholder">Зображення ${stoneType.title}</div>
        </div>
        <div class="stone-info">
          <h3>Опис</h3>
          <p>Детальний опис ${stoneType.title}. Тут буде розміщена інформація про характеристики, особливості та застосування даного типу каменю.</p>
          
          <h3>Доступні варіанти</h3>
          <ul class="stone-variants">
            ${stoneType.items.map(item => `<li class="stone-variant">${item}</li>`).join('')}
          </ul>
          
          <h3>Характеристики</h3>
          <ul class="stone-specs">
            <li><strong>Твердість:</strong> Висока</li>
            <li><strong>Щільність:</strong> Середня</li>
            <li><strong>Водопоглинання:</strong> Низьке</li>
            <li><strong>Морозостійкість:</strong> Висока</li>
          </ul>
        </div>
      </div>
    `;
  } else {
    content = `
      <h2>Камінь не знайдено</h2>
      <p>На жаль, інформація про вказаний камінь відсутня.</p>
      <a href="./stones.html" class="back-link">Повернутися до каталогу</a>
    `;
  }
  
  container.innerHTML = content;
}

// Функція для відображення виробів конкретної категорії
function renderProductCategoryDetails(categoryId) {
  const container = document.querySelector('.container');
  let content = '';
  
  if (categoryId && productCategories[categoryId]) {
    // Відображення конкретної категорії виробів
    const productCategory = productCategories[categoryId];
    content = `
      <h2>${productCategory.title}</h2>
      <div class="product-category-content">
        <div class="product-category-description">
          <p>Детальний опис категорії ${productCategory.title}. Тут буде розміщена інформація про особливості та переваги виробів даної категорії.</p>
        </div>
        
        <div class="product-list-container">
          <h3>Наші вироби</h3>
          <ul class="product-list">
            ${productCategory.items.map(item => `
              <li class="product-item">
                <div class="product-card">
                  <div class="product-image">
                    <!-- Тут буде зображення виробу -->
                    <div class="product-placeholder">Зображення ${item}</div>
                  </div>
                  <div class="product-info">
                    <h4>${item}</h4>
                    <p>Короткий опис виробу ${item}.</p>
                    <a href="#" class="product-details-link">Детальніше</a>
                  </div>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  } else {
    content = `
      <h2>Категорія не знайдена</h2>
      <p>На жаль, інформація про вказану категорію відсутня.</p>
      <a href="./product-categories.html" class="back-link">Повернутися до каталогу</a>
    `;
  }
  
  container.innerHTML = content;
}

// Функція ініціалізації каталогів
export function initCatalogs() {
  const { type, category } = getUrlParams();
  const path = window.location.pathname;

  if (path.includes('stones.html')) {
    renderStoneCatalog(type);
  } else if (path.includes('stone.html')) {
    renderStoneDetails(type);
  } else if (path.includes('product-categories.html')) {
    renderProductCatalog(category);
  } else if (path.includes('product-category.html')) {
    renderProductCategoryDetails(category);
  }
}