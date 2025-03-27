import { productCategories } from './data-products.js';
import { getUrlParams, isCurrentPage, isHomePage } from './catalog-utils.js';
import { renderCatalog, renderMainPageCatalog } from './catalog-renderer.js';
import { updateCatalogMetaTags, getCatalogHits } from './catalog-loader.js';
import { initProductLightbox } from './product-lightbox.js';

function renderProductCatalog(category = null, item = null) {
  updateProductMetaTags(category, item);

  const options = {
    renderItemDetails: (productItem, productCategory, category) => `
            <h1 class="section-title">${productItem.title}</h1>
            <div class="product-category-details">
                <div class="product-category-info">
                    <div class="product-main-content">
                        <div class="product-item-image-big">
                            <img src="${productItem.image}" alt="${productItem.title}" loading="lazy">
                        </div>
                        <div class="product-description-container">
                            <p class="product-category-description">${productItem.description}</p>
                            <p class="product-category-description">${productItem.description2}</p>
                            <p class="product-category-description">${productItem.description3}</p>
                        </div>
                    </div>
                    <div class="product-order-button-container">
                        <button class="btn btn-primary btn-calc pulse">ЗАМОВИТИ ПРОРАХУНОК</button>
                    </div>
                    
                    ${
                      productItem.pics
                        ? `
                        <div class="product-gallery-section">
                            <h3 class="product-gallery-title">Фото ${
                              productItem.title
                            }:</h3>
                            <div class="product-gallery" id="product-gallery">
                                ${productItem.pics
                                  .map(
                                    (pic, index) => `
                                    <div class="product-gallery-item" data-index="${index}">
                                        <img src="${pic}" alt="${
                                      productItem.title
                                    } - фото ${index + 1}" loading="lazy">
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
            </div>
            <a href="./products.html?category=${category}" class="btn btn-primary">Повернутися до ${
      productCategory.title
    }</a>
            
            <!-- Product Lightbox -->
            <div id="product-lightbox" class="product-lightbox">
                <span class="lightbox-close">&times;</span>
                <img class="lightbox-image" id="lightbox-image">
                <div class="lightbox-nav">
                    <button class="lightbox-prev">&#10094;</button>
                    <button class="lightbox-next">&#10095;</button>
                </div>
            </div>
        `,
    renderCategory: (productCategory, type) => `
            <h2 class="section-title">${productCategory.title}</h2>
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
                            <a href="./products.html?category=${type}&item=${item.id}" class="product-item-link">
                                <div class="product-item-image">
                                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                                </div>
                                <div class="product-item-info">
                                    <h3>${item.title}</h3>
                                </div>
                            </a>
                        </div>
                    `
                      )
                      .join('')}
                </div>
            </div>
            <div class="product-order-button-container">
                        <button class="btn btn-primary btn-calc pulse">ЗАМОВИТИ ПРОРАХУНОК</button>
                    </div>
        `,
    renderAllCategories: productCategories => `
            <h1 class="section-title">Вироби з каменю</h1>
            <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
            <div class="product-categories-grid">
                ${Object.entries(productCategories)
                  .map(
                    ([key, value]) => `
                    <div class="card">
                        <div class="card-image">
                            <img src="${value.image}" alt="${value.title}" loading="lazy">
                        </div>
                        <div class="card-info">
                            <h3 class="products-title">${value.title}</h3>
                            <p>${value.description}</p>
                            <a href="./products.html?category=${key}" class="btn btn-primary">Переглянути</a>
                        </div>
                    </div>
                `
                  )
                  .join('')}
            </div>
        `,
    backUrl: './products.html',
  };

  renderCatalog(productCategories, category, item, options);
}

function updateProductMetaTags(category, item) {
  updateCatalogMetaTags(productCategories, category, item, {
    baseTitle: 'Вироби з каменю - ФКС',
    baseDescription: 'Каталог виробів з природного каменю від ТОВ «ФКС» - стільниці, підвіконня, сходи, каміни та інші вироби',
    baseKeywords: 'вироби з каменю, ФКС, природний камінь',
    itemTitleTemplate: '{itemTitle} - Вироби з каменю - ФКС',
    categoryTitleTemplate: '{categoryTitle} - Вироби з каменю - ФКС',
    catalogTitleTemplate: '{baseTitle}',
    itemDescriptionTemplate: '{itemTitle} - {itemDescription} Замовляйте {categoryTitle} від ФКС.',
    categoryDescriptionTemplate: '{categoryTitle} від ФКС - {categoryDescription} Замовляйте вироби з природного каменю.',
    catalogDescriptionTemplate: 'Каталог виробів з природного каменю від ТОВ «ФКС» - стільниці, підвіконня, сходи, каміни та інші вироби',
    itemKeywordsTemplate: '{itemTitle}, {categoryTitle}, вироби з каменю, ФКС, природний камінь',
    categoryKeywordsTemplate: '{categoryTitle}, вироби з каменю, ФКС, природний камінь',
    catalogKeywordsTemplate: 'вироби з каменю, стільниці, підвіконня, сходи, каміни, підлоги, вироби з природного каменю',
    typeParam: 'category',
    itemParam: 'item'
  });
}

export function initProducts() {
  const params = getUrlParams({ category: 'category', item: 'item' });

  if (isCurrentPage('/products.html')) {
    renderProductCatalog(params.category, params.item);
    initProductLightbox();
  }
}
