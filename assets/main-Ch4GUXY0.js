(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function d(){const t=document.querySelector(".menu-button"),a=document.querySelector(".menu-container"),s=document.body;if(!t||!a)return;t.addEventListener("click",i),document.addEventListener("click",r=>{!(a.contains(r.target)||t.contains(r.target))&&a.classList.contains("is-open")&&e()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&a.classList.contains("is-open")&&e()});function i(){const r=a.classList.toggle("is-open");t.setAttribute("aria-expanded",r),s.style.overflow=r?"hidden":""}function e(){a.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),s.style.overflow=""}}function m(){const t=window.location.pathname,a=document.querySelectorAll(".nav-link");a.forEach(s=>{s.classList.remove("current")}),a.forEach(s=>{const i=s.getAttribute("href");(i===t||i===`.${t}`||i===t.replace(/^\//,"./")||t.endsWith("/")&&i==="./"||t.endsWith("/index.html")&&i==="./")&&s.classList.add("current")})}const l={"granite-ukraine":{id:"type1",title:"Граніт України",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики.",items:[{id:"type1-1",title:"Граніт України 1",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики."},{id:"type1-2",title:"Граніт України 2",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики."},{id:"type1-3",title:"Граніт України 3",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики."}]},granite:{id:"type2",title:"Граніт",image:new URL("/FKS_Vite/assets/granite-B0hs_Hva.jpeg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type2-1",title:"Граніт 1",image:new URL("/FKS_Vite/assets/granite-1-BeRXrB0Z.jpg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type2-2",title:"Граніт 2",image:new URL("/FKS_Vite/assets/granite-2-UKLW6wMh.jpg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type2-3",title:"Граніт 3",image:new URL("/FKS_Vite/assets/granite-3-CQBHNQ2C.jpg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики."}]},marble:{id:"type3",title:"Мармур",image:new URL("/FKS_Vite/assets/marble-bvEluWsD.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type3-1",title:"Мармур 1",image:new URL("/FKS_Vite/assets/marble-1-DSpdXQCF.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type3-2",title:"Мармур 2",image:new URL("/FKS_Vite/assets/marble-2-C3vf0YNe.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type3-3",title:"Мармур 3",image:new URL("/FKS_Vite/assets/marble-3-DtrW2_yk.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."}]},quartzite:{id:"type4",title:"Кварцит",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type4-1",title:"Кварцит 1",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type4-2",title:"Кварцит 2",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type4-3",title:"Кварцит 3",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."}]},travertine:{id:"type5",title:"Травертин",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type5-1",title:"Травертин 1",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type5-2",title:"Травертин 2",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type5-3",title:"Травертин 3",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики."}]},onyx:{id:"type6",title:"Онікс",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type6-1",title:"Онікс 1",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type6-2",title:"Онікс 2",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type6-3",title:"Онікс 3",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."}]},sandstone:{id:"type7",title:"Піщаник",image:new URL("/FKS_Vite/assets/sandstone-ChmOSSDO.jpg",import.meta.url).href,description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"type7-1",title:"Піщаник 1",image:new URL("/FKS_Vite/assets/sandstone-ChmOSSDO.jpg",import.meta.url).href,description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type7-2",title:"Піщаник 2",image:new URL("/FKS_Vite/assets/sandstone-ChmOSSDO.jpg",import.meta.url).href,description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"type7-3",title:"Піщаник 3",image:new URL("/FKS_Vite/assets/sandstone-ChmOSSDO.jpg",import.meta.url).href,description:"Піщаник - це натуральний камінь, який має унікальну природну форму та характеристики."}]}},c={countertops:{id:"category1",title:"Стільниці",image:new URL("/FKS_Vite/assets/countertop-FwgoXjdK.jpg",import.meta.url).href,description:"Стільниці з натурального каменю",items:[{id:"category1-1",title:"Стільниця з граніту",image:new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,description:"Стільниця з граніту"},{id:"category1-2",title:"Стільниця з мармуру",image:new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,description:"Стільниця з мармуру"},{id:"category1-3",title:"Стільниця з кварциту",image:new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,description:"Стільниця з кварциту"},{id:"category1-4",title:"Стільниця з оніксу",image:new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,description:"Стільниця з оніксу"}]},windowsills:{id:"category2",title:"Підвіконня",image:new URL("/FKS_Vite/assets/windowsill-DIZwQsam.jpg",import.meta.url).href,description:"Підвіконня з натурального каменю",items:[{id:"category2-1",title:"Підвіконня з граніту",image:new URL("/FKS_Vite/assets/windowsill-1-CoCcsiAI.jpg",import.meta.url).href,description:"Підвіконня з граніту"},{id:"category2-2",title:"Підвіконня з мармуру",image:new URL("/FKS_Vite/assets/windowsill-2-5_N-8zob.jpg",import.meta.url).href,description:"Підвіконня з мармуру"},{id:"category2-3",title:"Підвіконня з травертину",image:new URL("/FKS_Vite/assets/windowsill-3-BKr_6RJ0.jpg",import.meta.url).href,description:"Підвіконня з травертину"},{id:"category2-4",title:"Підвіконня з оніксу",image:new URL("/FKS_Vite/assets/windowsill-4-BukGO0Ca.jpg",import.meta.url).href,description:"Підвіконня з оніксу"}]},stairs:{id:"category3",title:"Сходи",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з натурального каменю",items:[{id:"category3-1",title:"Сходи з граніту",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з граніту"},{id:"category3-2",title:"Сходи з мармуру",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з мармуру"}]},fireplaces:{id:"category4",title:"Каміни",image:new URL("/FKS_Vite/assets/fireplace-D0g2o0iF.jpg",import.meta.url).href,description:"Каміни з натурального каменю",items:[{id:"category4-1",title:"Каміни",image:new URL("/FKS_Vite/assets/fireplace-D0g2o0iF.jpg",import.meta.url).href,description:"Каміни"}]},floors:{id:"category5",title:"Підлоги",image:new URL("/FKS_Vite/assets/floor-Bku9pb4S.jpg",import.meta.url).href,description:"Підлоги з натурального каменю",items:[{id:"category5-1",title:"Підлоги з мармуру",image:new URL("/FKS_Vite/assets/floor-Bku9pb4S.jpg",import.meta.url).href,description:"Підлоги з натурульного мармуру"},{id:"category5-2",title:"Підлоги з граніту",image:new URL("/FKS_Vite/assets/floor-Bku9pb4S.jpg",import.meta.url).href,description:"Підлоги з граніту"}]},bathrooms:{id:"category6",title:"Ванна кімната",image:new URL("/FKS_Vite/assets/bathroom-CqQzIxNF.jpg",import.meta.url).href,description:"Ванна кімната з натурального каменю",items:[{id:"category6-1",title:"Ванна кімната",image:new URL("/FKS_Vite/assets/bathroom-CqQzIxNF.jpg",import.meta.url).href,description:"Ванна кімната"}]},tiles:{id:"category7",title:"Плитка",image:new URL("/FKS_Vite/assets/tiles-Cgr9Mr1M.jpg",import.meta.url).href,description:"Плитка з натурального каменю",items:[{id:"category7-1",title:"Плитка з мармуру",image:new URL("/FKS_Vite/assets/tiles-Cgr9Mr1M.jpg",import.meta.url).href,description:"Плитка з мармуру"},{id:"category7-2",title:"Плитка з граніту",image:new URL("/FKS_Vite/assets/tiles-Cgr9Mr1M.jpg",import.meta.url).href,description:"Плитка з граніту"}]},monuments:{id:"category8",title:"Пам'ятники",image:new URL("/FKS_Vite/assets/monuments-DpN-5-Pu.jpg",import.meta.url).href,description:"Пам'ятники з натурального каменю",items:[{id:"category8-1",title:"Одинарні пам'ятники",image:new URL("/FKS_Vite/assets/monuments-DpN-5-Pu.jpg",import.meta.url).href,description:"Одинарні пам'ятники з натурального каменю"},{id:"category8-2",title:"Подвійні пам'ятники",image:new URL("/FKS_Vite/assets/monuments-DpN-5-Pu.jpg",import.meta.url).href,description:"Подвійні пам'ятники з натурального каменю"},{id:"category8-3",title:"Меморіальні комплекси",image:new URL("/FKS_Vite/assets/monuments-DpN-5-Pu.jpg",import.meta.url).href,description:"Меморіальні комплекси з натурального каменю"},{id:"category8-4",title:"Фотопортрети на пам'ятники",image:new URL("/FKS_Vite/assets/monuments-DpN-5-Pu.jpg",import.meta.url).href,description:"Фотопортрети на пам'ятники з натурального каменю"}]},paving:{id:"category9",title:"Бруківка",image:new URL("/FKS_Vite/assets/paving-C8bQ4jT5.jpg",import.meta.url).href,description:"Бруківка з натурального каменю",items:[{id:"category9-1",title:"Бруківка пиляна",image:new URL("/FKS_Vite/assets/paving-C8bQ4jT5.jpg",import.meta.url).href,description:"Бруківка пиляна"},{id:"category9-2",title:"Бруківка пиляно-колота",image:new URL("/FKS_Vite/assets/paving-C8bQ4jT5.jpg",import.meta.url).href,description:"Бруківка пиляно-колота"},{id:"category9-3",title:"Бруківка колота",image:new URL("/FKS_Vite/assets/paving-C8bQ4jT5.jpg",import.meta.url).href,description:"Бруківка колота"},{id:"category9-3",title:"Бруківка галтована",image:new URL("/FKS_Vite/assets/paving-C8bQ4jT5.jpg",import.meta.url).href,description:"Бруківка галтована"}]},slabs:{id:"category10",title:"Слеби",image:new URL("/FKS_Vite/assets/slabs-BFGyvLZk.jpg",import.meta.url).href,description:"Слеби з натурального каменю",items:[{id:"category10-1",title:"Слеби з мармуру",image:new URL("/FKS_Vite/assets/slabs-BFGyvLZk.jpg",import.meta.url).href,description:"Слеби з натурального мармуру"},{id:"category10-2",title:"Слеби з граніту",image:new URL("/FKS_Vite/assets/slabs-BFGyvLZk.jpg",import.meta.url).href,description:"Слеби з граніту"},{id:"category10-3",title:"Слеби з оніксу",image:new URL("/FKS_Vite/assets/slabs-BFGyvLZk.jpg",import.meta.url).href,description:"Слеби з оніксу"},{id:"category10-4",title:"Слеби з травертину",image:new URL("/FKS_Vite/assets/slabs-BFGyvLZk.jpg",import.meta.url).href,description:"Слеби з травертину"}]},rosettes:{id:"category11",title:"Розетки пано",image:new URL("/FKS_Vite/assets/rosettes-BlCsf3Yh.jpeg",import.meta.url).href,description:"Розетки пано з натурального каменю",items:[{id:"category11-1",title:"Розетки пано",image:new URL("/FKS_Vite/assets/rosettes-BlCsf3Yh.jpeg",import.meta.url).href,description:"Розетки пано"}]},entrances:{id:"category12",title:"Вхідні групи",image:new URL("/FKS_Vite/assets/entrances-Bu3fVAMI.jpg",import.meta.url).href,description:"Вхідні групи з натурального каменю",items:[{id:"category12-1",title:"Вхідні групи",image:new URL("/FKS_Vite/assets/entrances-Bu3fVAMI.jpg",import.meta.url).href,description:"Вхідні групи"}]},church:{id:"category13",title:"Церковні роботи",image:new URL("/FKS_Vite/assets/church-DdJDBeHd.jpg",import.meta.url).href,description:"Церковні роботи з натурального каменю",items:[{id:"category13-1",title:"Церковні роботи",image:new URL("/FKS_Vite/assets/church-DdJDBeHd.jpg",import.meta.url).href}]}};function g(){const t=new URLSearchParams(window.location.search);return{type:t.get("type"),category:t.get("category")}}function u(t=null){const a=document.querySelector(".dataContainer");let s="";if(t&&l[t]){const i=l[t];s=`
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
        ${i.items.map(e=>`
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
    `}else s=`
      <h2>КАТАЛОГ КАМЕНЮ</h2>
      <div class="stone-types-grid">
        ${Object.entries(l).map(([i,e])=>`
          <div class="stone-type-card">
            <div class="stone-type-image">
              <img src="${e.image}" alt="${e.title}" />
            </div>
            <div class="stone-type-info">
              <h3>${e.title}</h3>
              <p>${e.description}</p>
              <a href="./stones.html?type=${i}" class="stone-link">Переглянути</a>
            </div>
          </div>
        `).join("")}
      </div>
    `;a.innerHTML=s}function h(t=null){const a=document.querySelector(".dataContainer");let s="";if(t&&c[t]){const i=c[t];s=`
      <h2>${i.title}</h2>
      <div class="product-category-details">
        <div class="product-category-info">
          <p class="product-category-description">${i.description}</p>
        </div>
        <div class="product-items-grid">
          ${i.items.map(e=>`
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
    `}else s=`
      <h2 class="section-title">ВИРОБИ З КАМЕНЮ</h2>
      <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
      <div class="product-categories-grid">
        ${Object.entries(c).map(([i,e])=>`
          <div class="product-category-card">
            <div class="product-category-image">
              <img src="${e.image}" alt="${e.title}" loading="lazy">
            </div>
            <div class="product-category-content">
              <h3>${e.title}</h3>
              <p>${e.description}</p>
              <a href="./product-categories.html?category=${i}" class="category-link">Переглянути</a>
            </div>
          </div>
        `).join("")}
      </div>
    `;a.innerHTML=s}function f(t){const a=document.querySelector(".container");let s="",i=null;for(const[e,r]of Object.entries(l))if(e===t){i=r;break}i?s=`
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
            ${i.items.map(e=>`<li class="stone-variant">${e}</li>`).join("")}
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
    `,a.innerHTML=s}function y(t){const a=document.querySelector(".container");let s="";if(t&&c[t]){const i=c[t];s=`
      <h2>${i.title}</h2>
      <div class="product-category-content">
        <div class="product-category-description">
          <p>Детальний опис категорії ${i.title}. Тут буде розміщена інформація про особливості та переваги виробів даної категорії.</p>
        </div>
        
        <div class="product-list-container">
          <h3>Наші вироби</h3>
          <ul class="product-list">
            ${i.items.map(e=>`
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
    `}else s=`
      <h2>Категорія не знайдена</h2>
      <p>На жаль, інформація про вказану категорію відсутня.</p>
      <a href="./product-categories.html" class="back-link">Повернутися до каталогу</a>
    `;a.innerHTML=s}function w(){const{type:t,category:a}=g(),s=window.location.pathname;s.includes("stones.html")?u(t):s.includes("stone.html")?f(t):s.includes("product-categories.html")?h(a):s.includes("product-category.html")&&y(a)}function L(){const t=document.querySelector(".breadcrumbs-list");if(!t)return;for(;t.children.length>1;)t.removeChild(t.lastChild);const a=window.location.pathname,s=window.location.search;if(a==="/"||a.endsWith("/index.html"))return;const i={"product-categories.html":"Вироби з каменю","stones.html":"Каталог каменю","portfolio.html":"Портфоліо","contacts.html":"Контакти","stone.html":"Деталі каменю","product-category.html":"Категорія виробів"},e=a.split("/").pop();if(i[e]){const r=document.createElement("li");if(r.className="breadcrumbs-item",!s||e!=="stones.html"&&e!=="product-categories.html"){const n=document.createElement("span");n.className="breadcrumbs-current",n.textContent=i[e],r.appendChild(n)}else{const n=document.createElement("a");n.href=`./${e}`,n.className="breadcrumbs-link",n.textContent=i[e],r.appendChild(n),v(t,e,s);return}t.appendChild(r)}}function v(t,a,s){const i=new URLSearchParams(s);let e="",r="";if(a==="product-categories.html"){const n=document.createElement("li");n.className="breadcrumbs-item";const o=document.createElement("a");if(o.href="./product-categories.html",o.className="breadcrumbs-link",o.textContent="Вироби з каменю",n.appendChild(o),t.appendChild(n),r=i.get("category"),!r)return;e={countertops:"Стільниці",windowsills:"Підвіконня",stairs:"Сходи",fireplaces:"Каміни",floors:"Підлоги",bathrooms:"Ванна кімната",tiles:"Плитка",monuments:"Пам'ятники",paving:"Бруківка",slabs:"Слеби",rosettes:"Розетки пано",entrances:"Вхідні групи",church:"Церковні роботи"}[r]||r}else if(a==="stones.html"){const n=document.createElement("li");n.className="breadcrumbs-item";const o=document.createElement("a");if(o.href="./stones.html",o.className="breadcrumbs-link",o.textContent="Каталог каменю",n.appendChild(o),t.appendChild(n),r=i.get("type"),!r)return;e={"granite-ukraine":"Граніт України",granite:"Граніт",marble:"Мармур",quartzite:"Кварцит",travertine:"Травертин",onyx:"Онікс",sandstone:"Піщаник"}[r]||r}if(e){const n=document.createElement("li");n.className="breadcrumbs-item";const o=document.createElement("span");o.className="breadcrumbs-current",o.textContent=e,n.appendChild(o),t.appendChild(n)}}document.addEventListener("DOMContentLoaded",()=>{d(),m(),w(),L()});export{c as p};
//# sourceMappingURL=main-Ch4GUXY0.js.map
