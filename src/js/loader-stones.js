// Імпортуємо дані з окремого файлу та утиліти
import { stoneTypes } from './data-stones.js';
import { getUrlParams, getContainer, renderContent, isCurrentPage, isHomePage } from './catalog-utils.js';

// Функція для відображення каталогу каменю
function renderStoneCatalog(type = null, item = null) {
    const container = getContainer('.dataContainer');
    if (!container) return;

    let content = '';
  
    if (type && item && stoneTypes[type]) {
      // Відображення конкретного айтему каменю
      const stoneType = stoneTypes[type];
      const stoneItem = stoneType.items.find(i => i.id === item);
      
      if (stoneItem) {
        content = `
          <h1 class="section-title">${stoneItem.title}</h1>
          <div class="stone-type-details">
            <div class="stone-type-image-big">
              <img src="${stoneItem.image}" alt="${stoneItem.title}" />
            </div>
            <div class="stone-type-info">
              <p class="stone-type-description">${stoneItem.description}</p>
              ${stoneItem.characteristics ? `
                <div class="stone-characteristics">
                  <h4>Характеристики:</h4>
                  <ul class="characteristics-list">
                  <li><strong>Походження: </strong>${stoneItem.characteristics.origin}</li>
                  <li><strong>Колір: </strong>${stoneItem.characteristics.color}</li>
                  <li><strong>Товщина: </strong>${stoneItem.characteristics.thickness}</li>
                  <li><strong>Формат: </strong>${stoneItem.characteristics.format}</li>
                  <li><strong>Ціна: </strong>${stoneItem.characteristics.price}</li>
                  </ul>
                </div>
              ` : ''}
            </div>
          </div>
          <a href="./stones.html?type=${type}" class="btn btn-primary">Повернутися до ${stoneType.title}</a>
        `;
      } else {
        content = `<p>Камінь не знайдено</p><a href="./stones.html?type=${type}" class="back-link">Повернутися до ${stoneType.title}</a>`;
      }
    } else if (type && stoneTypes[type]) {
      // Відображення конкретного типу каменю
      const stoneType = stoneTypes[type];
      content = `
        <h1 class="section-title">${stoneType.title}</h1>
        <div class="stone-variants-grid">
          ${stoneType.items.map(item => `
            <div class="stone-variant-card">
              <a href="./stones.html?type=${type}&item=${item.id}" class="stone-variant-link">
                <div class="stone-variant-image">
                  <img src="${item.image}" alt="${item.title}" />
                </div>
                <div class="stone-variant-info">
                  <h4>${item.title}</h4>
                </div>
              </a>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      // Відображення всіх типів каменю
      content = `
        <h1 class="section-title">Каталог каменю</h1>
        <div class="stone-types-grid">
          ${Object.entries(stoneTypes).map(([key, value]) => `
            <div class="stone-type-card">
              <div class="stone-type-image">
                <img src="${value.image}" alt="${value.title}" />
              </div>
              <div class="stone-type-info">
                <h3>${value.title}</h3>
                <p>${value.description}</p>
                <a href="./stones.html?type=${key}" class="btn btn-primary">Переглянути</a>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  
    renderContent(container, content);
  }

  // Функція для відображення каталогу каменю на головній сторінці
function renderMainPageStoneCatalog() {
    const container = getContainer('.stone-types-grid');
    if (!container) return;

    // Відображаємо перші 6 типів каменю (або всі, якщо їх менше 6)
    const stoneEntries = Object.entries(stoneTypes).slice(0, 6);
    
    const content = stoneEntries.map(([key, value]) => `
        <div class="stone-type-card">
            <div class="stone-type-image">
                <img src="${value.image}" alt="${value.title}" loading="lazy" />
            </div>
            <div class="stone-type-info">
                <h3>${value.title}</h3>
                <p>${value.description}</p>
                <a href="./stones.html?type=${key}" class="btn btn-primary">Переглянути</a>
            </div>
        </div>
    `).join('');
    
    renderContent(container, content);
}

// Функція ініціалізації каталогів
export function initStones() {
    const params = getUrlParams({ type: 'type', item: 'item' });
    
    if (isCurrentPage('/stones.html')) {
      renderStoneCatalog(params.type, params.item);
    } else if (isHomePage()) {
      // Якщо це головна сторінка, відображаємо спрощений каталог
      renderMainPageStoneCatalog();
    }
  }