import { stoneTypes } from './data-stones.js';
import { CatalogBase } from './catalog-base.js';

/**
 * Клас для роботи з каталогом каменю
 */
export class StoneCatalog extends CatalogBase {
  /**
   * Створює новий екземпляр каталогу каменю
   */
  constructor() {
    super(stoneTypes, 'stones');
  }

  /**
   * Оновлює мета-теги для конкретного елементу каменю
   * @param {string} type - Тип каменю
   * @param {string} item - ID елементу
   * @protected
   */
  updateItemMetaTags(type, item) {
    const stoneType = this.catalogData[type];
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
        ogUrl: `${this.baseUrl}?type=${type}&item=${item}`,
      });
    }
  }

  /**
   * Оновлює мета-теги для категорії каменю
   * @param {string} type - Тип каменю
   * @protected
   */
  updateCategoryMetaTags(type) {
    const stoneType = this.catalogData[type];
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
      ogUrl: `${this.baseUrl}?type=${type}`,
    });
  }

  /**
   * Оновлює мета-теги за замовчуванням для каталогу каменю
   * @protected
   */
  updateDefaultMetaTags() {
    updateMetaTags({
      title: `Каталог каменю - ФКС`,
      description: `Каталог природного каменю від ТОВ «ФКС» - граніт, мармур, онікс, травертин та інші види каменю`,
      keywords: `каталог каменю, природний камінь, граніт, мармур, онікс, травертин, кварцит, піщаник`,
      ogTitle: `Каталог каменю - ФКС`,
      ogDescription: `Широкий вибір природного каменю найвищої якості: граніт, мармур, онікс, травертин та інші види каменю для вашого інтер'єру та екстер'єру.`,
      ogImage: `${window.location.origin}/img/logo.png`,
      ogUrl: this.baseUrl,
    });
  }

  /**
   * Отримує опції для відображення каталогу каменю
   * @param {string|null} type - Тип каменю
   * @param {string|null} item - ID елементу
   * @returns {Object} Опції для відображення
   * @protected
   */
  getRenderOptions(type, item) {
    return {
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
  }

  /**
   * Отримує опції для відображення каталогу каменю на головній сторінці
   * @returns {Object} Опції для відображення
   */
  getMainPageRenderOptions() {
    return {
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
  }

  /**
   * Відображає каталог каменю на головній сторінці
   */
  renderMainPage() {
    this.renderMainPageCatalog('.stone-types-grid', this.getMainPageRenderOptions());
  }

  /**
   * Отримує хіти продажів з каталогу каменю
   * @returns {Array} Масив хітів продажів
   */
  getHitProducts() {
    const hits = [];

    Object.entries(this.catalogData).forEach(([type, category]) => {
      category.items.forEach(item => {
        if (item.hit) {
          hits.push({
            ...item,
            type,
            category: category.title,
          });
        }
      });
    });

    return hits;
  }
}