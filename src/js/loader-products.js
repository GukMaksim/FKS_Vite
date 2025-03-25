import { productCategories } from './data-products.js';
import { getUrlParams, isCurrentPage } from './catalog-utils.js';
import { renderCatalog } from './catalog-renderer.js';
import { updateMetaTags } from './meta-tags.js';

function renderProductCatalog(category = null) {
  updateProductMetaTags(category);
  const options = {
    renderCategory: (productCategory, type) => `
            <h2>${productCategory.title}</h2>
            <div class="product-category-details">
                <div class="product-category-info">
                    <p class="product-category-description">${
                      productCategory.description
                    }</p>
                </div>
                <div class="product-items-grid">
                    ${productCategory.items
                      .map(
                        item => `
                        <div class="product-item-card">
                            <div class="product-item-image">
                                <img src="${item.image}" alt="${item.title}" loading="lazy">
                            </div>
                            <div class="product-item-info">
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                            </div>
                        </div>
                    `
                      )
                      .join('')}
                </div>
            </div>
        `,
    renderAllCategories: productCategories => `
            <h1 class="section-title">Вироби з каменю</h1>
            <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
            <div class="product-categories-grid">
                ${Object.entries(productCategories)
                  .map(
                    ([key, value]) => `
                    <div class="product-category-card">
                        <div class="product-category-image">
                            <img src="${value.image}" alt="${value.title}" loading="lazy">
                        </div>
                        <div class="product-category-content">
                            <h3>${value.title}</h3>
                            <p>${value.description}</p>
                            <a href="./products.html?category=${key}" class="btn btn-primary">Переглянути</a>
                        </div>
                    </div>
                `
                  )
                  .join('')}
            </div>
        `,
  };

  renderCatalog(productCategories, category, null, options);
}

function updateProductMetaTags(category) {
  const baseUrl = window.location.origin + window.location.pathname;

  if (category && productCategories[category]) {
    const productCategory = productCategories[category];
    updateMetaTags({
      title: `${productCategory.title} - Вироби з каменю - ФКС`,
      description: `${
        productCategory.title
      } від ФКС - ${productCategory.description.substring(
        0,
        150
      )}... Замовляйте вироби з природного каменю.`,
      keywords: `${productCategory.title}, вироби з каменю, ФКС, природний камінь`,
      ogTitle: `${productCategory.title} - ФКС`,
      ogDescription: productCategory.description.substring(0, 200),
      ogImage: productCategory.image,
      ogUrl: `${baseUrl}?category=${category}`,
    });
  } else {
    updateMetaTags({
      title: `Вироби з каменю - ФКС`,
      description: `Каталог виробів з природного каменю від ТОВ «ФКС» - стільниці, підвіконня, сходи, каміни та інші вироби`,
      keywords: `вироби з каменю, стільниці, підвіконня, сходи, каміни, підлоги, вироби з природного каменю`,
      ogTitle: `Вироби з каменю - ФКС`,
      ogDescription: `Широкий асортимент виробів з натурального каменю найвищої якості для вашого інтер'єру та екстер'єру.`,
      ogImage: `${window.location.origin}/img/logo.png`,
      ogUrl: baseUrl,
    });
  }
}

export function initProducts() {
  const params = getUrlParams({ category: 'category' });

  if (isCurrentPage('/products.html')) {
    renderProductCatalog(params.category);
  }
}
