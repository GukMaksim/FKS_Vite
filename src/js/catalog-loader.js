/**
 * Спільний модуль для завантаження каталогів
 */
import { updateMetaTags } from './meta-tags.js';
import { renderCatalog, renderMainPageCatalog } from './catalog-renderer.js';
import { getUrlParams, isCurrentPage, isHomePage } from './catalog-utils.js';

/**
 * Оновлює мета-теги для сторінки каталогу
 * @param {Object} data - Дані каталогу
 * @param {string} type - Тип або категорія
 * @param {string} item - Ідентифікатор елемента
 * @param {Object} config - Конфігурація мета-тегів
 */
export function updateCatalogMetaTags(data, type, item, config) {
  const {
    baseTitle,
    baseDescription,
    baseKeywords,
    itemTitleTemplate,
    categoryTitleTemplate,
    catalogTitleTemplate,
    itemDescriptionTemplate,
    categoryDescriptionTemplate,
    catalogDescriptionTemplate,
    itemKeywordsTemplate,
    categoryKeywordsTemplate,
    catalogKeywordsTemplate
  } = config;

  const baseUrl = window.location.origin + window.location.pathname;

  if (type && item && data[type]) {
    const category = data[type];
    const catalogItem = category.items.find(i => i.id === item);

    if (catalogItem) {
      const title = itemTitleTemplate
        .replace('{itemTitle}', catalogItem.title)
        .replace('{baseTitle}', baseTitle);

      const description = itemDescriptionTemplate
        .replace('{itemTitle}', catalogItem.title)
        .replace('{itemDescription}', catalogItem.description.substring(0, 150) + '...')
        .replace('{categoryTitle}', category.title.toLowerCase());

      const keywords = itemKeywordsTemplate
        .replace('{itemTitle}', catalogItem.title)
        .replace('{categoryTitle}', category.title)
        .replace('{baseKeywords}', baseKeywords)
        .replace('{itemColor}', catalogItem.characteristics?.color || '');

      updateMetaTags({
        title: title,
        description: description,
        keywords: keywords,
        ogTitle: `${catalogItem.title} - ФКС`,
        ogDescription: catalogItem.description.substring(0, 200),
        ogImage: catalogItem.image,
        ogUrl: `${baseUrl}?${config.typeParam}=${type}&${config.itemParam}=${item}`,
      });
    }
  } else if (type && data[type]) {
    const category = data[type];
    
    const title = categoryTitleTemplate
      .replace('{categoryTitle}', category.title)
      .replace('{baseTitle}', baseTitle);

    const description = categoryDescriptionTemplate
      .replace('{categoryTitle}', category.title.toLowerCase())
      .replace('{categoryDescription}', category.description.substring(0, 150) + '...');

    const keywords = categoryKeywordsTemplate
      .replace('{categoryTitle}', category.title)
      .replace('{baseKeywords}', baseKeywords);

    updateMetaTags({
      title: title,
      description: description,
      keywords: keywords,
      ogTitle: `${category.title} - ФКС`,
      ogDescription: category.description.substring(0, 200),
      ogImage: category.image,
      ogUrl: `${baseUrl}?${config.typeParam}=${type}`,
    });
  } else {
    updateMetaTags({
      title: catalogTitleTemplate.replace('{baseTitle}', baseTitle),
      description: catalogDescriptionTemplate,
      keywords: catalogKeywordsTemplate,
      ogTitle: `${baseTitle}`,
      ogDescription: catalogDescriptionTemplate,
      ogImage: `${window.location.origin}/img/logo.png`,
      ogUrl: baseUrl,
    });
  }
}

/**
 * Отримує хіти продажів з каталогу
 * @param {Object} data - Дані каталогу
 * @param {Function} hitFilter - Функція фільтрації хітів
 * @returns {Array} Масив хітів продажів
 */
export function getCatalogHits(data, hitFilter) {
  const hits = [];
  
  Object.entries(data).forEach(([type, category]) => {
    category.items.forEach(item => {
      if (hitFilter(item)) {
        hits.push({
          ...item,
          type,
          category: category.title
        });
      }
    });
  });
  
  return hits;
}