(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function p(){const i=document.querySelector(".menu-button"),s=document.querySelector(".menu-container"),r=document.body;if(!i||!s)return;i.addEventListener("click",t),document.addEventListener("click",o=>{!(s.contains(o.target)||i.contains(o.target))&&s.classList.contains("is-open")&&e()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&s.classList.contains("is-open")&&e()});function t(){const o=s.classList.toggle("is-open");i.setAttribute("aria-expanded",o),r.style.overflow=o?"hidden":""}function e(){s.classList.remove("is-open"),i.setAttribute("aria-expanded",!1),r.style.overflow=""}}function l(){const i=window.location.pathname,s=document.querySelectorAll(".nav-link");s.forEach(r=>{r.classList.remove("current")}),s.forEach(r=>{const t=r.getAttribute("href");(t===i||t===`.${i}`||t===i.replace(/^\//,"./")||i.endsWith("/")&&t==="./"||i.endsWith("/index.html")&&t==="./")&&r.classList.add("current")})}const c={"granite-ukraine":{id:"type1",title:"Граніт України",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики.",items:[{id:"type1-1",title:"Граніт України 1",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики."},{id:"type1-2",title:"Граніт України 2",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики."},{id:"type1-3",title:"Граніт України 3",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики."}]},granite:{id:"type2",title:"Граніт",image:new URL("/FKS_Vite/assets/granite-B0hs_Hva.jpeg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type2-1",title:"Граніт 1",image:new URL("/FKS_Vite/assets/granite-1-BeRXrB0Z.jpg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type2-2",title:"Граніт 2",image:new URL("/FKS_Vite/assets/granite-2-UKLW6wMh.jpg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type2-3",title:"Граніт 3",image:new URL("/FKS_Vite/assets/granite-3-CQBHNQ2C.jpg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики."}]},marble:{id:"type3",title:"Мармур",image:new URL("/FKS_Vite/assets/marble-bvEluWsD.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type3-1",title:"Мармур 1",image:new URL("/FKS_Vite/assets/marble-1-DSpdXQCF.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type3-2",title:"Мармур 2",image:new URL("/FKS_Vite/assets/marble-2-C3vf0YNe.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type3-3",title:"Мармур 3",image:new URL("/FKS_Vite/assets/marble-3-DtrW2_yk.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."}]},quartzite:{id:"type4",title:"Кварцит",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type4-1",title:"Кварцит 1",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type4-2",title:"Кварцит 2",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type4-3",title:"Кварцит 3",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."}]},travertine:{id:"type5",title:"Травертин",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type5-1",title:"Травертин 1",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type5-2",title:"Травертин 2",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type5-3",title:"Травертин 3",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики."}]},onyx:{id:"type6",title:"Онікс",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type6-1",title:"Онікс 1",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type6-2",title:"Онікс 2",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type6-3",title:"Онікс 3",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."}]},sandstone:{id:"type7",title:"Піщаник",image:new URL("/FKS_Vite/assets/sandstone-ChmOSSDO.jpg",import.meta.url).href,description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type7-1",title:"Піщаник 1",image:new URL("/FKS_Vite/assets/sandstone-ChmOSSDO.jpg",import.meta.url).href,description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type7-2",title:"Піщаник 2",image:new URL("/FKS_Vite/assets/sandstone-ChmOSSDO.jpg",import.meta.url).href,description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type7-3",title:"Піщаник 3",image:new URL("/FKS_Vite/assets/sandstone-ChmOSSDO.jpg",import.meta.url).href,description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики."}]}},a={countertops:{id:"category1",title:"Стільниці",image:new URL("/FKS_Vite/assets/countertop-FwgoXjdK.jpg",import.meta.url).href,description:"Стільниці з натурального каменю",items:[{id:"category1-1",title:"Стільниця з граніту",image:new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,description:"Стільниця з граніту"},{id:"category1-2",title:"Стільниця з мармуру",image:new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,description:"Стільниця з мармуру"},{id:"category1-3",title:"Стільниця з кварциту",image:new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,description:"Стільниця з кварциту"},{id:"category1-4",title:"Стільниця з оніксу",image:new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,description:"Стільниця з оніксу"}]},windowsills:{id:"category2",title:"Підвіконня",image:new URL("/FKS_Vite/assets/windowsill-DIZwQsam.jpg",import.meta.url).href,description:"Підвіконня з натурального каменю",items:[{id:"category2-1",title:"Підвіконня з граніту",image:new URL("/FKS_Vite/assets/windowsill-1-CoCcsiAI.jpg",import.meta.url).href,description:"Підвіконня з граніту"},{id:"category2-2",title:"Підвіконня з мармуру",image:new URL("/FKS_Vite/assets/windowsill-2-5_N-8zob.jpg",import.meta.url).href,description:"Підвіконня з мармуру"},{id:"category2-3",title:"Підвіконня з травертину",image:new URL("/FKS_Vite/assets/windowsill-3-BKr_6RJ0.jpg",import.meta.url).href,description:"Підвіконня з травертину"},{id:"category2-4",title:"Підвіконня з оніксу",image:new URL("/FKS_Vite/assets/windowsill-4-BukGO0Ca.jpg",import.meta.url).href,description:"Підвіконня з оніксу"}]},stairs:{id:"category3",title:"Сходи",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з натурального каменю",items:[{id:"category3-1",title:"Сходи з граніту",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з граніту"},{id:"category3-2",title:"Сходи з мармуру",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з мармуру"}]},fireplaces:{id:"category4",title:"Каміни",image:new URL("/FKS_Vite/assets/fireplace-D0g2o0iF.jpg",import.meta.url).href,description:"Каміни з натурального каменю",items:[{id:"category4-1",title:"Каміни",image:new URL("/FKS_Vite/assets/fireplace-D0g2o0iF.jpg",import.meta.url).href,description:"Каміни"}]},floors:{id:"category5",title:"Підлоги",image:new URL("/FKS_Vite/assets/floor-Bku9pb4S.jpg",import.meta.url).href,description:"Підлоги з натурального каменю",items:[{id:"category5-1",title:"Підлоги з мармуру",image:new URL("/FKS_Vite/assets/floor-Bku9pb4S.jpg",import.meta.url).href,description:"Підлоги з натурульного мармуру"},{id:"category5-2",title:"Підлоги з граніту",image:new URL("/FKS_Vite/assets/floor-Bku9pb4S.jpg",import.meta.url).href,description:"Підлоги з граніту"}]},bathrooms:{id:"category6",title:"Ванна кімната",image:new URL("/FKS_Vite/assets/bathroom-CqQzIxNF.jpg",import.meta.url).href,description:"Ванна кімната з натурального каменю",items:[{}]},tiles:{id:"category7",title:"Плитка",image:new URL("/FKS_Vite/assets/tiles-Cgr9Mr1M.jpg",import.meta.url).href,description:"Плитка з натурального каменю",items:[{id:"category7-1",title:"Плитка з мармуру",image:new URL("/FKS_Vite/assets/tiles-Cgr9Mr1M.jpg",import.meta.url).href,description:"Плитка з мармуру"},{id:"category7-2",title:"Плитка з граніту",image:new URL("/FKS_Vite/assets/tiles-Cgr9Mr1M.jpg",import.meta.url).href,description:"Плитка з граніту"}]},monuments:{id:"category8",title:"Пам'ятники",image:new URL("../img/products/categories/monuments.jpg",import.meta.url).href,description:"Пам'ятники з натурального каменю",items:[{id:"category8-1",title:"Одинарні пам'ятники",image:new URL("../img/products/categories/monuments.jpg",import.meta.url).href,description:"Одинарні пам'ятники з натурального каменю"},{id:"category8-2",title:"Подвійні пам'ятники",image:new URL("../img/products/categories/monuments.jpg",import.meta.url).href,description:"Подвійні пам'ятники з натурального каменю"},{id:"category8-3",title:"Меморіальні комплекси",image:new URL("../img/products/categories/monuments.jpg",import.meta.url).href,description:"Меморіальні комплекси з натурального каменю"},{id:"category8-4",title:"Фотопортрети на пам'ятники",image:new URL("../img/products/categories/monuments.jpg",import.meta.url).href,description:"Фотопортрети на пам'ятники з натурального каменю"}]},paving:{id:"category9",title:"Бруківка",image:new URL("../img/products/categories/paving.jpg",import.meta.url).href,description:"Бруківка з натурального каменю",items:[{id:"category9-1",title:"Бруківка пиляна",image:new URL("../img/products/categories/paving.jpg",import.meta.url).href,description:"Бруківка пиляна"},{id:"category9-2",title:"Бруківка пиляно-колота",image:new URL("../img/products/categories/paving.jpg",import.meta.url).href,description:"Бруківка пиляно-колота"},{id:"category9-3",title:"Бруківка колота",image:new URL("../img/products/categories/paving.jpg",import.meta.url).href,description:"Бруківка колота"},{id:"category9-3",title:"Бруківка галтована",image:new URL("../img/products/categories/paving.jpg",import.meta.url).href,description:"Бруківка галтована"}]},slabs:{id:"category10",title:"Слеби",image:new URL("../img/products/categories/slabs.jpg",import.meta.url).href,description:"Слеби з натурального каменю",items:[{id:"category10-1",title:"Слеби з мармуру",image:new URL("../img/products/categories/slabs.jpg",import.meta.url).href,description:"Слеби з натурального мармуру"},{id:"category10-2",title:"Слеби з граніту",image:new URL("../img/products/categories/slabs.jpg",import.meta.url).href,description:"Слеби з граніту"},{id:"category10-3",title:"Слеби з оніксу",image:new URL("../img/products/categories/slabs.jpg",import.meta.url).href,description:"Слеби з оніксу"},{id:"category10-4",title:"Слеби з травертину",image:new URL("../img/products/categories/slabs.jpg",import.meta.url).href,description:"Слеби з травертину"}]},rosettes:{id:"category11",title:"Розетки пано",image:new URL("../img/products/categories/rosettes.jpg",import.meta.url).href,description:"Розетки пано з натурального каменю",items:[{}]},entrances:{id:"category12",title:"Вхідні групи",image:new URL("../img/products/categories/entrances.jpg",import.meta.url).href,description:"Вхідні групи з натурального каменю",items:[{}]},church:{id:"category13",title:"Церковні роботи",image:new URL("../img/products/categories/church.jpg",import.meta.url).href,description:"Церковні роботи з натурального каменю",items:[{}]}};function d(){const i=new URLSearchParams(window.location.search);return{type:i.get("type"),category:i.get("category")}}function m(i=null){const s=document.querySelector(".dataContainer");let r="";if(i&&c[i]){const t=c[i];r=`
      <h2>${t.title}</h2>
      <div class="stone-type-details">
        <div class="stone-type-image">
          <img src="${t.image}" alt="${t.title}" />
        </div>
        <div class="stone-type-info">
          <p class="stone-type-description">${t.description}</p>
        </div>
      </div>
      <h3>Варіанти ${t.title}</h3>
      <div class="stone-variants-grid">
        ${t.items.map(e=>`
          <div class="stone-variant-card">
            <div class="stone-variant-image">
              <img src="${e.image}" alt="${e.title}" />
            </div>
            <div class="stone-variant-info">
              <h4>${e.title}</h4>
              <p>${e.description}</p>
            </div>
          </div>
        `).join("")}
      </div>
    `}else r=`
      <h2>КАТАЛОГ КАМЕНЮ</h2>
      <div class="stone-types-grid">
        ${Object.entries(c).map(([t,e])=>`
          <div class="stone-type-card">
            <div class="stone-type-image">
              <img src="${e.image}" alt="${e.title}" />
            </div>
            <div class="stone-type-info">
              <h3>${e.title}</h3>
              <p>${e.description}</p>
              <a href="./stones.html?type=${t}" class="stone-link">Переглянути</a>
            </div>
          </div>
        `).join("")}
      </div>
    `;s.innerHTML=r}function g(i=null){const s=document.querySelector(".dataContainer");let r="";if(i&&a[i]){const t=a[i];r=`
      <h2>${t.title}</h2>
      <div class="product-category-details">
        <div class="product-category-info">
          <p class="product-category-description">${t.description}</p>
        </div>
        <div class="product-items-grid">
          ${t.items.map(e=>`
            <div class="product-item-card">
              <div class="product-item-image">
                <img src="${e.image}" alt="${e.title}" loading="lazy">
              </div>
              <div class="product-item-info">
                <h3>${e.title}</h3>
                <p>${e.description}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}else r=`
      <h2 class="section-title">ВИРОБИ З КАМЕНЮ</h2>
      <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
      <div class="product-categories-grid">
        ${Object.entries(a).map(([t,e])=>`
          <div class="product-category-card">
            <div class="product-category-image">
              <img src="${e.image}" alt="${e.title}" loading="lazy">
            </div>
            <div class="product-category-content">
              <h3>${e.title}</h3>
              <p>${e.description}</p>
              <a href="./product-categories.html?category=${t}" class="category-link">Переглянути</a>
            </div>
          </div>
        `).join("")}
      </div>
    `;s.innerHTML=r}function u(i){const s=document.querySelector(".container");let r="",t=null;for(const[e,o]of Object.entries(c))if(e===i){t=o;break}t?r=`
      <h2>${t.title}</h2>
      <div class="stone-details-content">
        <div class="stone-image">
          <!-- Тут буде зображення каменю -->
          <div class="stone-placeholder">Зображення ${t.title}</div>
        </div>
        <div class="stone-info">
          <h3>Опис</h3>
          <p>Детальний опис ${t.title}. Тут буде розміщена інформація про характеристики, особливості та застосування даного типу каменю.</p>
          
          <h3>Доступні варіанти</h3>
          <ul class="stone-variants">
            ${t.items.map(e=>`<li class="stone-variant">${e}</li>`).join("")}
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
    `:r=`
      <h2>Камінь не знайдено</h2>
      <p>На жаль, інформація про вказаний камінь відсутня.</p>
      <a href="./stones.html" class="back-link">Повернутися до каталогу</a>
    `,s.innerHTML=r}function h(i){const s=document.querySelector(".container");let r="";if(i&&a[i]){const t=a[i];r=`
      <h2>${t.title}</h2>
      <div class="product-category-content">
        <div class="product-category-description">
          <p>Детальний опис категорії ${t.title}. Тут буде розміщена інформація про особливості та переваги виробів даної категорії.</p>
        </div>
        
        <div class="product-list-container">
          <h3>Наші вироби</h3>
          <ul class="product-list">
            ${t.items.map(e=>`
              <li class="product-item">
                <div class="product-card">
                  <div class="product-image">
                    <!-- Тут буде зображення виробу -->
                    <div class="product-placeholder">Зображення ${e}</div>
                  </div>
                  <div class="product-info">
                    <h4>${e}</h4>
                    <p>Короткий опис виробу ${e}.</p>
                    <a href="#" class="product-details-link">Детальніше</a>
                  </div>
                </div>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    `}else r=`
      <h2>Категорія не знайдена</h2>
      <p>На жаль, інформація про вказану категорію відсутня.</p>
      <a href="./product-categories.html" class="back-link">Повернутися до каталогу</a>
    `;s.innerHTML=r}function f(){const{type:i,category:s}=d(),r=window.location.pathname;r.includes("stones.html")?m(i):r.includes("stone.html")?u(i):r.includes("product-categories.html")?g(s):r.includes("product-category.html")&&h(s)}document.addEventListener("DOMContentLoaded",()=>{p(),l(),f()});
//# sourceMappingURL=main-C67Cz5_d.js.map
