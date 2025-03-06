(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function a(){const e=document.querySelector(".menu-button"),o=document.querySelector(".menu-container"),s=document.body;if(!e||!o)return;e.addEventListener("click",i),document.addEventListener("click",r=>{!(o.contains(r.target)||e.contains(r.target))&&o.classList.contains("is-open")&&t()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&o.classList.contains("is-open")&&t()});function i(){const r=o.classList.toggle("is-open");e.setAttribute("aria-expanded",r),s.style.overflow=r?"hidden":""}function t(){o.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),s.style.overflow=""}}function p(){const e=window.location.pathname,o=document.querySelectorAll(".nav-link");o.forEach(s=>{s.classList.remove("current")}),o.forEach(s=>{const i=s.getAttribute("href");(i===e||i===`.${e}`||i===e.replace(/^\//,"./")||e.endsWith("/")&&i==="./"||e.endsWith("/index.html")&&i==="./")&&s.classList.add("current")})}const d={"granite-ukraine":{id:"type1",title:"Граніт України",image:"./img/products/stone/granite-ukraine.jpg",description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики.",items:[{id:"type1-1",title:"Граніт України 1",image:"../img/products/stone/granite-ukraine.jpg",description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики."},{id:"type1-2",title:"Граніт України 2",image:"../img/products/stone/granite-ukraine.jpg",description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики."},{id:"type1-3",title:"Граніт України 3",image:"../img/products/stone/granite-ukraine.jpg",description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики."}]},granite:{id:"type2",title:"Граніт",image:"../img/products/stone/granite.jpeg",description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type2-1",title:"Граніт 1",image:"../img/products/stone/granite-1.jpg",description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type2-2",title:"Граніт 2",image:"../img/products/stone/granite-2.jpg",description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type2-3",title:"Граніт 3",image:"../img/products/stone/granite-3.jpg",description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики."}]},marble:{id:"type3",title:"Мармур",image:"../img/products/stone/marble.jpg",description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type3-1",title:"Мармур 1",image:"../img/products/stone/marble-1.jpg",description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type3-2",title:"Мармур 2",image:"../img/products/stone/marble-2.jpg",description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type3-3",title:"Мармур 3",image:"../img/products/stone/marble-3.jpg",description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."}]},quartzite:{id:"type4",title:"Кварцит",image:"../img/products/stone/quartzite.jpg",description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type4-1",title:"Кварцит 1",image:"../img/products/stone/quartzite.jpg",description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type4-2",title:"Кварцит 2",image:"../img/products/stone/quartzite.jpg",description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type4-3",title:"Кварцит 3",image:"../img/products/stone/quartzite.jpg",description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."}]},travertine:{id:"type5",title:"Травертин",image:"../img/products/stone/travertine.jpg",description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type5-1",title:"Травертин 1",image:"../img/products/stone/travertine.jpg",description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type5-2",title:"Травертин 2",image:"../img/products/stone/travertine.jpg",description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type5-3",title:"Травертин 3",image:"../img/products/stone/travertine.jpg",description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики."}]},onyx:{id:"type6",title:"Онікс",image:"../img/products/stone/onyx.jpg",description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type6-1",title:"Онікс 1",image:"../img/products/stone/onyx.jpg",description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type6-2",title:"Онікс 2",image:"../img/products/stone/onyx.jpg",description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type6-3",title:"Онікс 3",image:"../img/products/stone/onyx.jpg",description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."}]},sandstone:{id:"type7",title:"Піщаник",image:"../img/products/stone/sandstone.jpg",description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type7-1",title:"Піщаник 1",image:"../img/products/stone/sandstone.jpg",description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type7-2",title:"Піщаник 2",image:"../img/products/stone/sandstone.jpg",description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type7-3",title:"Піщаник 3",image:"../img/products/stone/sandstone.jpg",description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики."}]}},n={countertops:{id:"category1",title:"Стільниці",image:"../img/products/countertop.jpg",description:"Стільниці з натурального каменю",items:[{id:"category1-1",title:"Стільниця з граніту",image:"../img/products/countertop.jpg",description:"Стільниця з граніту"},{id:"category1-2",title:"Стільниця з мармуру",image:"../img/products/countertop.jpg",description:"Стільниця з мармуру"},{id:"category1-3",title:"Стільниця з кварциту",image:"../img/products/countertop.jpg",description:"Стільниця з кварциту"},{id:"category1-4",title:"Стільниця з оніксу",image:"../img/products/countertop.jpg",description:"Стільниця з оніксу"}]},windowsills:{id:"category2",title:"Підвіконня",image:"../img/products/windowsill.jpg",description:"Підвіконня з натурального каменю",items:[{id:"category2-1",title:"Підвіконня з граніту",image:"../img/products/windowsill.jpg",description:"Підвіконня з граніту"},{id:"category2-2",title:"Підвіконня з мармуру",image:"../img/products/windowsill.jpg",description:"Підвіконня з мармуру"},{id:"category2-3",title:"Підвіконня з травертину",image:"../img/products/windowsill.jpg",description:"Підвіконня з травертину"},{id:"category2-4",title:"Підвіконня з оніксу",image:"../img/products/windowsill.jpg",description:"Підвіконня з оніксу"}]},stairs:{id:"category3",title:"Сходи",image:"../img/products/stairs.jpg",description:"Сходи з натурального каменю",items:[{id:"category3-1",title:"Сходи з граніту",image:"../img/products/stairs.jpg",description:"Сходи з граніту"},{id:"category3-2",title:"Сходи з мармуру",image:"../img/products/stairs.jpg",description:"Сходи з мармуру"}]},fireplaces:{id:"category4",title:"Каміни",image:"../img/products/fireplace.jpg",description:"Каміни з натурального каменю",items:[{id:"category4-1",title:"Каміни",image:"../img/products/fireplace.jpg",description:"Каміни"}]},floors:{id:"category5",title:"Підлоги",image:"../img/products/floor.jpg",description:"Підлоги з натурального каменю",items:[{id:"category5-1",title:"Підлоги з мармуру",image:"../img/products/floor.jpg",description:"Підлоги з натурульного мармуру"},{id:"category5-2",title:"Підлоги з граніту",image:"../img/products/floor.jpg",description:"Підлоги з граніту"}]},bathrooms:{id:"category6",title:"Ванна кімната",image:"../img/products/bathroom.jpg",description:"Ванна кімната з натурального каменю",items:[{}]},tiles:{id:"category7",title:"Плитка",image:"../img/products/tiles.jpg",description:"Плитка з натурального каменю",items:[{id:"category7-1",title:"Плитка з мармуру",image:"../img/products/tiles.jpg",description:"Плитка з мармуру"},{id:"category7-2",title:"Плитка з граніту",image:"../img/products/tiles.jpg",description:"Плитка з граніту"}]},monuments:{id:"category8",title:"Пам'ятники",image:"../img/products/monuments.jpg",description:"Пам'ятники з натурального каменю",items:[{id:"category8-1",title:"Одинарні пам'ятники",image:"../img/products/monuments.jpg",description:"Одинарні пам'ятники з натурального каменю"},{id:"category8-2",title:"Подвійні пам'ятники",image:"../img/products/monuments.jpg",description:"Подвійні пам'ятники з натурального каменю"},{id:"category8-3",title:"Меморіальні комплекси",image:"../img/products/monuments.jpg",description:"Меморіальні комплекси з натурального каменю"},{id:"category8-4",title:"Фотопортрети на пам'ятники",image:"../img/products/monuments.jpg",description:"Фотопортрети на пам'ятники з натурального каменю"}]},paving:{id:"category9",title:"Бруківка",image:"../img/products/paving.jpg",description:"Бруківка з натурального каменю",items:[{id:"category9-1",title:"Бруківка пиляна",image:"../img/products/paving.jpg",description:"Бруківка пиляна"},{id:"category9-2",title:"Бруківка пиляно-колота",image:"../img/products/paving.jpg",description:"Бруківка пиляно-колота"},{id:"category9-3",title:"Бруківка колота",image:"../img/products/paving.jpg",description:"Бруківка колота"},{id:"category9-3",title:"Бруківка галтована",image:"../img/products/paving.jpg",description:"Бруківка галтована"}]},slabs:{id:"category10",title:"Слеби",image:"../img/products/slabs.jpg",description:"Слеби з натурального каменю",items:[{id:"category10-1",title:"Слеби з мармуру",image:"../img/products/slabs.jpg",description:"Слеби з натурального мармуру"},{id:"category10-2",title:"Слеби з граніту",image:"../img/products/slabs.jpg",description:"Слеби з граніту"},{id:"category10-3",title:"Слеби з оніксу",image:"../img/products/slabs.jpg",description:"Слеби з оніксу"},{id:"category10-4",title:"Слеби з травертину",image:"../img/products/slabs.jpg",description:"Слеби з травертину"}]},rosettes:{id:"category11",title:"Розетки пано",image:"../img/products/rosettes.jpg",description:"Розетки пано з натурального каменю",items:[{}]},entrances:{id:"category12",title:"Вхідні групи",image:"../img/products/entrances.jpg",description:"Вхідні групи з натурального каменю",items:[{}]},church:{id:"category13",title:"Церковні роботи",image:"../img/products/church.jpg",description:"Церковні роботи з натурального каменю",items:["Церковна робота з мармуру","Церковна робота з граніту","Церковна робота з оніксу"]}};function g(){const e=new URLSearchParams(window.location.search);return{type:e.get("type"),category:e.get("category")}}function l(e=null){const o=document.querySelector(".dataContainer");let s="";if(e&&d[e]){const i=d[e];s=`
      <h2>${i.title}</h2>
      <div class="stone-type-details">
        <div class="stone-type-image">
          <img src="${i.image}" alt="${i.title}" />
        </div>
        <div class="stone-type-info">
          <p class="stone-type-description">${i.description}</p>
        </div>
      </div>
      <h3>Варіанти ${i.title}</h3>
      <div class="stone-variants-grid">
        ${i.items.map(t=>`
          <div class="stone-variant-card">
            <div class="stone-variant-image">
              <img src="${t.image}" alt="${t.title}" />
            </div>
            <div class="stone-variant-info">
              <h4>${t.title}</h4>
              <p>${t.description}</p>
            </div>
          </div>
        `).join("")}
      </div>
    `}else s=`
      <h2>КАТАЛОГ КАМЕНЮ</h2>
      <div class="stone-types-grid">
        ${Object.entries(d).map(([i,t])=>`
          <div class="stone-type-card">
            <div class="stone-type-image">
              <img src="${t.image}" alt="${t.title}" />
            </div>
            <div class="stone-type-info">
              <h3>${t.title}</h3>
              <p>${t.description}</p>
              <a href="./stones.html?type=${i}" class="stone-link">Переглянути</a>
            </div>
          </div>
        `).join("")}
      </div>
    `;o.innerHTML=s}function m(e=null){const o=document.querySelector(".dataContainer");let s="";if(e&&n[e]){const i=n[e];s=`
      <h2>${i.title}</h2>
      <div class="product-category-details">
        <div class="product-category-info">
          <p class="product-category-description">${i.description}</p>
        </div>
        <div class="product-items-grid">
          ${i.items.map(t=>`
            <div class="product-item-card">
              <div class="product-item-image">
                <img src="${t.image}" alt="${t.title}" loading="lazy">
              </div>
              <div class="product-item-info">
                <h3>${t.title}</h3>
                <p>${t.description}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}else s=`
      <h2 class="section-title">ВИРОБИ З КАМЕНЮ</h2>
      <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
      <div class="product-categories-grid">
        ${Object.entries(n).map(([i,t])=>`
          <div class="product-category-card">
            <div class="product-category-image">
              <img src="${t.image}" alt="${t.title}" loading="lazy">
            </div>
            <div class="product-category-content">
              <h3>${t.title}</h3>
              <p>${t.description}</p>
              <a href="./product-categories.html?category=${i}" class="category-link">Переглянути</a>
            </div>
          </div>
        `).join("")}
      </div>
    `;o.innerHTML=s}function u(e){const o=document.querySelector(".container");let s="",i=null;for(const[t,r]of Object.entries(d))if(t===e){i=r;break}i?s=`
      <h2>${i.title}</h2>
      <div class="stone-details-content">
        <div class="stone-image">
          <!-- Тут буде зображення каменю -->
          <div class="stone-placeholder">Зображення ${i.title}</div>
        </div>
        <div class="stone-info">
          <h3>Опис</h3>
          <p>Детальний опис ${i.title}. Тут буде розміщена інформація про характеристики, особливості та застосування даного типу каменю.</p>
          
          <h3>Доступні варіанти</h3>
          <ul class="stone-variants">
            ${i.items.map(t=>`<li class="stone-variant">${t}</li>`).join("")}
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
    `:s=`
      <h2>Камінь не знайдено</h2>
      <p>На жаль, інформація про вказаний камінь відсутня.</p>
      <a href="./stones.html" class="back-link">Повернутися до каталогу</a>
    `,o.innerHTML=s}function y(e){const o=document.querySelector(".container");let s="";if(e&&n[e]){const i=n[e];s=`
      <h2>${i.title}</h2>
      <div class="product-category-content">
        <div class="product-category-description">
          <p>Детальний опис категорії ${i.title}. Тут буде розміщена інформація про особливості та переваги виробів даної категорії.</p>
        </div>
        
        <div class="product-list-container">
          <h3>Наші вироби</h3>
          <ul class="product-list">
            ${i.items.map(t=>`
              <li class="product-item">
                <div class="product-card">
                  <div class="product-image">
                    <!-- Тут буде зображення виробу -->
                    <div class="product-placeholder">Зображення ${t}</div>
                  </div>
                  <div class="product-info">
                    <h4>${t}</h4>
                    <p>Короткий опис виробу ${t}.</p>
                    <a href="#" class="product-details-link">Детальніше</a>
                  </div>
                </div>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    `}else s=`
      <h2>Категорія не знайдена</h2>
      <p>На жаль, інформація про вказану категорію відсутня.</p>
      <a href="./product-categories.html" class="back-link">Повернутися до каталогу</a>
    `;o.innerHTML=s}function v(){const{type:e,category:o}=g(),s=window.location.pathname;s.includes("stones.html")?l(e):s.includes("stone.html")?u(e):s.includes("product-categories.html")?m(o):s.includes("product-category.html")&&y(o)}document.addEventListener("DOMContentLoaded",()=>{a(),p(),v()});
//# sourceMappingURL=main-BSAtGUWS.js.map
