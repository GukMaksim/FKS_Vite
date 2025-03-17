// Імпортуємо дані з окремого файлу та утиліти
import { productCategories } from './data-products.js';
import { getUrlParams, getContainer, renderContent, isCurrentPage } from './catalog-utils.js';

// Функція для відображення каталогу виробів
function renderProductCatalog(category = null) {
    const container = getContainer('.dataContainer');
    if (!container) return;
    
    let content = '';
  
    if (category && productCategories[category]) {
      // Відображення конкретної категорії виробів
      const productCategory = productCategories[category];
      content = `
        <h2>${productCategory.title}</h2>
        <div class="product-category-details">
          <div class="product-category-info">
            <p class="product-category-description">${productCategory.description}</p>
          </div>
          <div class="product-items-grid">
            ${productCategory.items.map(item => `
              <div class="product-item-card">
                <div class="product-item-image">
                  <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="product-item-info">
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      // Відображення всіх категорій виробів
      content = `
        <h2 class="section-title">ВИРОБИ З КАМЕНЮ</h2>
        <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
        <div class="product-categories-grid">
          ${Object.entries(productCategories).map(([key, value]) => `
            <div class="product-category-card">
              <div class="product-category-image">
                <img src="${value.image}" alt="${value.title}" loading="lazy">
              </div>
              <div class="product-category-content">
                <h3>${value.title}</h3>
                <p>${value.description}</p>
                <a href="./products.html?category=${key}" class="category-link">Переглянути</a>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    renderContent(container, content);
  }

  // Функція ініціалізації каталогів
  export function initProducts() {
    const params = getUrlParams({ category: 'category' });
    
    if (isCurrentPage('/products.html')) {
      renderProductCatalog(params.category);
    } 
  }