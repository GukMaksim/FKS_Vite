// Функція для отримання параметрів з URL
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      type: params.get('type'),
      item: params.get('item')
    };
  }

  // Імпортуємо дані з окремого файлу
import { stoneTypes } from './data-stones.js';

// Функція для відображення каталогу каменю
function renderStoneCatalog(type = null, item = null) {
    const container = document.querySelector('.dataContainer');
    if (!container) {
        console.error('Container element not found');
        return;
      }

    let content = '';
  
    if (type && item && stoneTypes[type]) {
      // Відображення конкретного айтему каменю
      const stoneType = stoneTypes[type];
      const stoneItem = stoneType.items.find(i => i.id === item);
      
      if (stoneItem) {
        content = `
          <h2 class="stone-title">${stoneItem.title}</h2>
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
        <h2 class="stone-title">${stoneType.title}</h2>
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
              <a href="./stones.html?type=${type}&item=${item.id}" class="stone-variant-link">
                <div class="stone-variant-image">
                  <img src="${item.image}" alt="${item.title}" />
                </div>
                <div class="stone-variant-info">
                  <h4>${item.title}</h4>
                  <p>${item.description}</p>
                </div>
              </a>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      // Відображення всіх типів каменю
      content = `
        <h2 class="stone-title">Каталог каменю</h2>
        <div class="stone-types-grid">
          ${Object.entries(stoneTypes).map(([key, value]) => `
            <div class="stone-type-card">
              <div class="stone-type-image">
                <img src="${value.image}" alt="${value.title}" />
              </div>
              <div class="stone-type-info">
                <h3>${value.title}</h3>
                <p>${value.description}</p>
                <a href="./stones.html?type=${key}" class="btn btn-secondary">Переглянути</a>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  
    container.innerHTML = content;
  }

  // Функція ініціалізації каталогів
export function initStones() {
    const { type, item } = getUrlParams();
    const path = window.location.pathname;
    if (path.includes('/stones.html')) {
      renderStoneCatalog(type, item);
    }
  }