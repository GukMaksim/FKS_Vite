import { stoneTypes } from './data-stones.js';
import { getUrlParams, isCurrentPage, isHomePage } from './catalog-utils.js';
import { renderCatalog, renderMainPageCatalog } from './catalog-renderer.js';
import { updateMetaTags } from './meta-tags.js';

function renderStoneCatalog(type = null, item = null) {
  updateStoneMetaTags(type, item);
  const options = {
    renderItemDetails: (stoneItem, stoneType, type) => `
            <h1 class="section-title">${stoneItem.title}</h1>
            <div class="stone-type-details">
                <div class="stone-type-image-big">
                    <img src="${stoneItem.image}" alt="${stoneItem.title}" />
                </div>
                <div class="stone-type-info">
                    <p class="stone-type-description">${
                      stoneItem.description
                    }</p>
                    ${
                      stoneItem.characteristics
                        ? `
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
                    `
                        : ''
                    }
                </div>
            </div>
            <a href="./stones.html?type=${type}" class="btn btn-primary">Повернутися до ${
      stoneType.title
    }</a>
        `,
    renderCategory: (stoneType, type) => `
            <h1 class="section-title">${stoneType.title}</h1>
            <div class="stone-variants-grid">
                ${stoneType.items
                  .map(
                    item => `
                    <div class="stone-variant-card">
                        <a href="./stones.html?type=${type}&item=${item.id}" class="stone-variant-link">
                            <div class="stone-variant-image">
                                <img src="${item.image}" alt="${item.title}" />
                            </div>
                            <div class="stone-variant-info">
                                <h4>${item.title}</h4>
                                <p>${item.characteristics.price}</p>
                            </div>
                        </a>
                    </div>
                `
                  )
                  .join('')}
            </div>
        `,
    renderAllCategories: stoneTypes => `
            <h1 class="section-title">Каталог каменю</h1>
            <div class="stone-types-grid">
                ${Object.entries(stoneTypes)
                  .map(
                    ([key, value]) => `
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
                `
                  )
                  .join('')}
            </div>
        `,
    backUrl: './stones.html',
  };

  renderCatalog(stoneTypes, type, item, options);
}

function renderMainPageStoneCatalog() {
  const options = {
    renderMainPageItem: (value, key) => `
            <div class="stone-type-card">
                <div class="stone-type-image">
                    <img src="${value.image}" alt="${value.title}" loading="lazy" />
                </div>
                <div class="stone-type-info">
                    <h3>${value.title}</h3>
                    <p>${value.description}</p>
                    <a href="./stones.html?type=${key}" class="btn btn-secondary">Переглянути</a>
                </div>
            </div>
        `,
  };

  renderMainPageCatalog(stoneTypes, '.stone-types-grid', options);
}

function updateStoneMetaTags(type, item) {
  const baseUrl = window.location.origin + window.location.pathname;

  if (type && item && stoneTypes[type]) {
    const stoneType = stoneTypes[type];
    const stoneItem = stoneType.items.find(i => i.id === item);

    if (stoneItem) {
      updateMetaTags({
        title: `${stoneItem.title} - Каталог каменю - ФКС`,
        description: `${stoneItem.title} - ${stoneItem.description.substring(
          0,
          150
        )}... Замовляйте ${stoneType.title.toLowerCase()} від ФКС.`,
        keywords: `${stoneItem.title}, ${
          stoneType.title
        }, природний камінь, ФКС, ${stoneItem.characteristics?.color || ''}`,
        ogTitle: `${stoneItem.title} - ФКС`,
        ogDescription: stoneItem.description.substring(0, 200),
        ogImage: stoneItem.image,
        ogUrl: `${baseUrl}?type=${type}&item=${item}`,
      });
    }
  } else if (type && stoneTypes[type]) {
    const stoneType = stoneTypes[type];
    updateMetaTags({
      title: `${stoneType.title} - Каталог каменю - ФКС`,
      description: `Каталог ${stoneType.title.toLowerCase()} від ФКС. ${stoneType.description.substring(
        0,
        150
      )}...`,
      keywords: `${stoneType.title}, природний камінь, ФКС, каталог каменю`,
      ogTitle: `${stoneType.title} - ФКС`,
      ogDescription: stoneType.description.substring(0, 200),
      ogImage: stoneType.image,
      ogUrl: `${baseUrl}?type=${type}`,
    });
  } else {
    updateMetaTags({
      title: `Каталог каменю - ФКС`,
      description: `Каталог природного каменю від ТОВ «ФКС» - граніт, мармур, онікс, травертин та інші види каменю`,
      keywords: `каталог каменю, природний камінь, граніт, мармур, онікс, травертин, кварцит, піщаник`,
      ogTitle: `Каталог каменю - ФКС`,
      ogDescription: `Широкий вибір природного каменю найвищої якості: граніт, мармур, онікс, травертин та інші види каменю для вашого інтер'єру та екстер'єру.`,
      ogImage: `${window.location.origin}/img/logo.png`,
      ogUrl: baseUrl,
    });
  }
}

export function initStones() {
  const params = getUrlParams({ type: 'type', item: 'item' });

  if (isCurrentPage('/stones.html')) {
    renderStoneCatalog(params.type, params.item);
  } else if (isHomePage()) {
    renderMainPageStoneCatalog();
  }
}
