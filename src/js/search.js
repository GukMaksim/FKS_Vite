import { stoneTypes } from './data-stones.js';
import { productCategories } from './data-products.js';
import { renderContent } from './catalog-utils.js';

function searchCatalogs(query) {
  const results = {
    stones: [],
    products: [],
  };

  Object.entries(stoneTypes).forEach(([type, stoneType]) => {
    if (
      stoneType.title.toLowerCase().includes(query.toLowerCase()) ||
      stoneType.description.toLowerCase().includes(query.toLowerCase())
    ) {
      results.stones.push({
        type: 'category',
        title: stoneType.title,
        description: stoneType.description,
        image: stoneType.image,
        url: `./stones.html?type=${type}`,
      });
    }

    stoneType.items.forEach(item => {
      if (
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      ) {
        results.stones.push({
          type: 'item',
          title: item.title,
          description: item.description,
          image: item.image,
          url: `./stones.html?type=${type}&item=${item.id}`,
        });
      }
    });
  });

  Object.entries(productCategories).forEach(([category, productCategory]) => {
    if (
      productCategory.title.toLowerCase().includes(query.toLowerCase()) ||
      productCategory.description.toLowerCase().includes(query.toLowerCase())
    ) {
      results.products.push({
        type: 'category',
        title: productCategory.title,
        description: productCategory.description,
        image: productCategory.image,
        url: `./products.html?category=${category}`,
      });
    }

    productCategory.items.forEach(item => {
      if (
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      ) {
        results.products.push({
          type: 'item',
          title: item.title,
          description: item.description,
          image: item.image,
          url: `./products.html?category=${category}`,
        });
      }
    });
  });

  return results;
}

function renderSearchResults(results) {
  const container = document.querySelector('.search-results');
  if (!container) return;

  let content = '';

  if (results.stones.length === 0 && results.products.length === 0) {
    content = '<p class="no-results">Результатів пошуку не знайдено</p>';
  } else {
    content = `
            <div class="search-results-container">
                ${
                  results.stones.length > 0
                    ? `
                    <div class="search-section">
                        <h3>Каталог каменю</h3>
                        <div class="search-results-grid">
                            ${results.stones
                              .map(
                                item => `
                                <div class="search-result-card">
                                    <a href="${item.url}" class="search-result-link">
                                        <div class="search-result-image">
                                            <img src="${item.image}" alt="${item.title}" loading="lazy">
                                        </div>
                                        <div class="search-result-info">
                                            <h4>${item.title}</h4>
                                        </div>
                                    </a>
                                </div>
                            `
                              )
                              .join('')}
                        </div>
                    </div>
                `
                    : ''
                }
                
                ${
                  results.products.length > 0
                    ? `
                    <div class="search-section">
                        <h3>Вироби з каменю</h3>
                        <div class="search-results-grid">
                            ${results.products
                              .map(
                                item => `
                                <div class="search-result-card">
                                    <a href="${item.url}" class="search-result-link">
                                        <div class="search-result-image">
                                            <img src="${item.image}" alt="${item.title}" loading="lazy">
                                        </div>
                                        <div class="search-result-info">
                                            <h4>${item.title}</h4>
                                        </div>
                                    </a>
                                </div>
                            `
                              )
                              .join('')}
                        </div>
                    </div>
                `
                    : ''
                }
            </div>
        `;
  }

  renderContent(container, content);
}

export function initSearch() {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('.search-input');

  if (!searchForm || !searchInput) {
    console.error('Елементи пошуку не знайдено');
    return;
  }

  const searchResults = document.createElement('div');
  searchResults.className = 'search-results';
  searchForm.appendChild(searchResults);

  let searchTimeout;

  searchInput.addEventListener('input', e => {
    const query = e.target.value.trim();

    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      if (query.length >= 2) {
        const results = searchCatalogs(query);
        renderSearchResults(results);
        searchResults.classList.add('active');
      } else {
        renderContent(searchResults, '');
        searchResults.classList.remove('active');
      }
    }, 300);
  });

  searchForm.addEventListener('click', e => {
    e.stopPropagation();
  });

  document.addEventListener('click', e => {
    if (!searchForm.contains(e.target)) {
      renderContent(searchResults, '');
      searchResults.classList.remove('active');
    }
  });

  searchForm.addEventListener('submit', e => {
    e.preventDefault();
  });
}
