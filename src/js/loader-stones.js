// Функція для отримання параметрів з URL
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      type: params.get('type')
    };
  }

  // Імпортуємо дані з окремого файлу
import { stoneTypes } from './data-stones.js';

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
  // Функція ініціалізації каталогів
export function initStones() {
    const { type } = getUrlParams();
    const path = window.location.pathname;
    if (path === '/stones.html' || path === '/stone.html') {
      renderStoneCatalog(type);
    }
  }