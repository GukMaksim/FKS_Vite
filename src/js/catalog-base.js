import { updateMetaTags } from './meta-tags.js';
import { renderCatalog, renderMainPageCatalog } from './catalog-renderer.js';

/**
 * Базовий клас для роботи з каталогами
 */
export class CatalogBase {
  /**
   * @param {Object} catalogData - Дані каталогу
   * @param {string} catalogType - Тип каталогу ('stones' або 'products')
   */
  constructor(catalogData, catalogType) {
    this.catalogData = catalogData;
    this.catalogType = catalogType;
    this.baseUrl = window.location.origin + window.location.pathname;
  }

  /**
   * Оновлює мета-теги для сторінки каталогу
   * @param {string|null} type - Тип елементу каталогу
   * @param {string|null} item - ID елементу
   */
  updateMetaTags(type, item) {
    if (type && item && this.catalogData[type]) {
      this.updateItemMetaTags(type, item);
    } else if (type && this.catalogData[type]) {
      this.updateCategoryMetaTags(type);
    } else {
      this.updateDefaultMetaTags();
    }
  }

  /**
   * Оновлює мета-теги для конкретного елементу
   * @param {string} type - Тип елементу каталогу
   * @param {string} item - ID елементу
   * @protected
   */
  updateItemMetaTags(type, item) {
    // Буде перевизначено в дочірніх класах
  }

  /**
   * Оновлює мета-теги для категорії
   * @param {string} type - Тип елементу каталогу
   * @protected
   */
  updateCategoryMetaTags(type) {
    // Буде перевизначено в дочірніх класах
  }

  /**
   * Оновлює мета-теги за замовчуванням
   * @protected
   */
  updateDefaultMetaTags() {
    // Буде перевизначено в дочірніх класах
  }

  /**
   * Відображає каталог
   * @param {string|null} type - Тип елементу каталогу
   * @param {string|null} item - ID елементу
   */
  renderCatalog(type = null, item = null) {
    this.updateMetaTags(type, item);
    const options = this.getRenderOptions(type, item);
    renderCatalog(this.catalogData, type, item, options);
  }

  /**
   * Отримує опції для відображення каталогу
   * @param {string|null} type - Тип елементу каталогу
   * @param {string|null} item - ID елементу
   * @returns {Object} Опції для відображення
   * @protected
   */
  getRenderOptions(type, item) {
    // Буде перевизначено в дочірніх класах
    return {};
  }

  /**
   * Відображає каталог на головній сторінці
   * @param {string} containerSelector - Селектор контейнера
   * @param {Object} options - Опції для відображення
   */
  renderMainPageCatalog(containerSelector, options = {}) {
    renderMainPageCatalog(this.catalogData, containerSelector, options);
  }
}