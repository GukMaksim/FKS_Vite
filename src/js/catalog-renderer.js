import { getContainer, renderContent } from './catalog-utils.js';

export function renderCatalog(data, type, item, options = {}) {
  const container = getContainer('.dataContainer');
  if (!container) return;

  let content = '';

  if (type && item && data[type]) {
    const category = data[type];
    const categoryItem = category.items.find(i => i.id === item);

    if (categoryItem) {
      content = options.renderItemDetails?.(categoryItem, category, type) || '';
    } else {
      content = `<p>Елемент не знайдено</p><a href="${options.backUrl}?type=${type}" class="back-link">Повернутися до ${category.title}</a>`;
    }
  } else if (type && data[type]) {
    const category = data[type];
    content = options.renderCategory?.(category, type) || '';
  } else {
    content = options.renderAllCategories?.(data) || '';
  }

  renderContent(container, content);
}

export function renderMainPageCatalog(data, containerSelector, options = {}) {
  const container = getContainer(containerSelector);
  if (!container) return;

  const entries = Object.entries(data).slice(0, options.limit || 6);
  const content = entries
    .map(([key, value]) => options.renderMainPageItem?.(value, key) || '')
    .join('');

  renderContent(container, content);
}
