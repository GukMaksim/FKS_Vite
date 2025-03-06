(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();function a(){const i=document.querySelector(".menu-button"),o=document.querySelector(".menu-container"),s=document.body;if(!i||!o)return;i.addEventListener("click",e),document.addEventListener("click",n=>{!(o.contains(n.target)||i.contains(n.target))&&o.classList.contains("is-open")&&t()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&o.classList.contains("is-open")&&t()});function e(){const n=o.classList.toggle("is-open");i.setAttribute("aria-expanded",n),s.style.overflow=n?"hidden":""}function t(){o.classList.remove("is-open"),i.setAttribute("aria-expanded",!1),s.style.overflow=""}}function l(){const i=window.location.pathname,o=document.querySelectorAll(".nav-link");o.forEach(s=>{s.classList.remove("current")}),o.forEach(s=>{const e=s.getAttribute("href");(e===i||e===`.${i}`||e===i.replace(/^\//,"./")||i.endsWith("/")&&e==="./"||i.endsWith("/index.html")&&e==="./")&&s.classList.add("current")})}const d={"granite-ukraine":{id:"type1",title:"Граніт України",image:"../img/products/stone/granit-demo.jpg",description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики.",items:[{id:"type1-1",title:"Граніт України 1",image:"../img/products/stone/granit-demo.jpg",description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики."},{id:"type1-2",title:"Граніт України 2",image:"../img/products/stone/granit-demo.jpg",description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики."},{id:"type1-3",title:"Граніт України 3",image:"../img/products/stone/granit-demo.jpg",description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики."}]},granite:{id:"type2",title:"Граніт",image:"../img/products/stone/granit-demo.jpg",description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type2-1",title:"Граніт 1",image:"../img/products/stone/granit-demo.jpg",description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type2-2",title:"Граніт 2",image:"../img/products/stone/granit-demo.jpg",description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type2-3",title:"Граніт 3",image:"../img/products/stone/granit-demo.jpg",description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики."}]},marble:{id:"type3",title:"Мармур",image:"../img/products/stone/granit-demo.jpg",description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type3-1",title:"Мармур 1",image:"../img/products/stone/granit-demo.jpg",description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type3-2",title:"Мармур 2",image:"../img/products/stone/granit-demo.jpg",description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type3-3",title:"Мармур 3",image:"../img/products/stone/granit-demo.jpg",description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."}]},quartzite:{id:"type4",title:"Кварцит",image:"../img/products/stone/granit-demo.jpg",description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type4-1",title:"Кварцит 1",image:"../img/products/stone/granit-demo.jpg",description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type4-2",title:"Кварцит 2",image:"../img/products/stone/granit-demo.jpg",description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type4-3",title:"Кварцит 3",image:"../img/products/stone/granit-demo.jpg",description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."}]},travertine:{id:"type5",title:"Травертин",image:"../img/products/stone/granit-demo.jpg",description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type5-1",title:"Травертин 1",image:"../img/products/stone/granit-demo.jpg",description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type5-2",title:"Травертин 2",image:"../img/products/stone/granit-demo.jpg",description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type5-3",title:"Травертин 3",image:"../img/products/stone/granit-demo.jpg",description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики."}]},onyx:{id:"type6",title:"Онікс",image:"../img/products/stone/granit-demo.jpg",description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type6-1",title:"Онікс 1",image:"../img/products/stone/granit-demo.jpg",description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type6-2",title:"Онікс 2",image:"../img/products/stone/granit-demo.jpg",description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type6-3",title:"Онікс 3",image:"../img/products/stone/granit-demo.jpg",description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."}]},sandstone:{id:"type7",title:"Піщаник",image:"../img/products/stone/granit-demo.jpg",description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type7-1",title:"Піщаник 1",image:"../img/products/stone/granit-demo.jpg",description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type7-2",title:"Піщаник 2",image:"../img/products/stone/granit-demo.jpg",description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type7-3",title:"Піщаник 3",image:"../img/products/stone/granit-demo.jpg",description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики."}]}},r={countertops:{title:"Стільниці",items:["Стільниця з граніту","Стільниця з мармуру","Стільниця з кварциту"]},windowsills:{title:"Підвіконня",items:["Підвіконня з граніту","Підвіконня з мармуру","Підвіконня з травертину"]},stairs:{title:"Сходи",items:["Сходи з граніту","Сходи з мармуру","Сходи з пісковику"]},fireplaces:{title:"Каміни",items:["Камін з граніту","Камін з мармуру","Камін з оніксу"]},floors:{title:"Підлоги",items:["Підлога з граніту","Підлога з мармуру","Підлога з травертину"]},bathrooms:{title:"Ванна кімната",items:["Ванна з мармуру","Ванна з оніксу","Ванна з травертину"]},tiles:{title:"Плитка",items:["Плитка з граніту","Плитка з мармуру","Плитка з травертину"]},monuments:{title:"Пам'ятники",items:["Пам'ятник з граніту","Пам'ятник з мармуру","Пам'ятник з пісковику"]},paving:{title:"Бруківка",items:["Бруківка з граніту","Бруківка з пісковику","Бруківка з травертину"]},slabs:{title:"Слеби",items:["Слеб з граніту","Слеб з мармуру","Слеб з оніксу"]},rosettes:{title:"Розетки пано",items:["Розетка з мармуру","Розетка з оніксу","Розетка з граніту"]},entrances:{title:"Вхідні групи",items:["Вхідна група з граніту","Вхідна група з мармуру","Вхідна група з травертину"]},church:{title:"Церковні роботи",items:["Церковна робота з мармуру","Церковна робота з граніту","Церковна робота з оніксу"]}};function p(){const i=new URLSearchParams(window.location.search);return{type:i.get("type"),category:i.get("category")}}function g(i=null){const o=document.querySelector(".dataContainer");let s="";if(i&&d[i]){const e=d[i];s=`
      <h2>${e.title}</h2>
      <div class="stone-type-details">
        <div class="stone-type-image">
          <img src="${e.image}" alt="${e.title}" />
        </div>
        <div class="stone-type-info">
          <p class="stone-type-description">${e.description}</p>
        </div>
      </div>
      <h3>Варіанти ${e.title}</h3>
      <div class="stone-variants-grid">
        ${e.items.map(t=>`
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
        ${Object.entries(d).map(([e,t])=>`
          <div class="stone-type-card">
            <div class="stone-type-image">
              <img src="${t.image}" alt="${t.title}" />
            </div>
            <div class="stone-type-info">
              <h3>${t.title}</h3>
              <p>${t.description}</p>
              <a href="./stones.html?type=${e}" class="stone-link">Переглянути</a>
            </div>
          </div>
        `).join("")}
      </div>
    `;o.innerHTML=s}function m(i=null){const o=document.querySelector(".dataContainer");let s="";if(i&&r[i]){const e=r[i];s=`
      <h2>${e.title}</h2>
      <ul class="product-list">
        ${e.items.map(t=>`<li class="product-item">${t}</li>`).join("")}
      </ul>
    `}else s=`
      <h2>ВИРОБИ З КАМЕНЮ</h2>
      <div class="product-categories">
        ${Object.entries(r).map(([e,t])=>`
          <div class="product-category">
            <h3>${t.title}</h3>
            <a href="./product-categories.html?category=${e}" class="category-link">Переглянути</a>
          </div>
        `).join("")}
      </div>
    `;o.innerHTML=s}function u(i){const o=document.querySelector(".container");let s="",e=null;for(const[t,n]of Object.entries(d))if(t===i){e=n;break}e?s=`
      <h2>${e.title}</h2>
      <div class="stone-details-content">
        <div class="stone-image">
          <!-- Тут буде зображення каменю -->
          <div class="stone-placeholder">Зображення ${e.title}</div>
        </div>
        <div class="stone-info">
          <h3>Опис</h3>
          <p>Детальний опис ${e.title}. Тут буде розміщена інформація про характеристики, особливості та застосування даного типу каменю.</p>
          
          <h3>Доступні варіанти</h3>
          <ul class="stone-variants">
            ${e.items.map(t=>`<li class="stone-variant">${t}</li>`).join("")}
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
    `,o.innerHTML=s}function y(i){const o=document.querySelector(".container");let s="";if(i&&r[i]){const e=r[i];s=`
      <h2>${e.title}</h2>
      <div class="product-category-content">
        <div class="product-category-description">
          <p>Детальний опис категорії ${e.title}. Тут буде розміщена інформація про особливості та переваги виробів даної категорії.</p>
        </div>
        
        <div class="product-list-container">
          <h3>Наші вироби</h3>
          <ul class="product-list">
            ${e.items.map(t=>`
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
    `;o.innerHTML=s}function h(){const{type:i,category:o}=p(),s=window.location.pathname;s.includes("stones.html")?g(i):s.includes("stone.html")?u(i):s.includes("product-categories.html")?m(o):s.includes("product-category.html")&&y(o)}document.addEventListener("DOMContentLoaded",()=>{a(),l(),h()});
//# sourceMappingURL=main-DcqmsK84.js.map
