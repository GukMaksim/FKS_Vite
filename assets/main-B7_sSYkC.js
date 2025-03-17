(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();function h(){const t=document.querySelector(".menu-button"),s=document.querySelector(".menu-container"),r=document.body;if(!t||!s)return;t.addEventListener("click",n),document.addEventListener("click",i=>{!(s.contains(i.target)||t.contains(i.target))&&s.classList.contains("is-open")&&e()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&s.classList.contains("is-open")&&e()});function n(){const i=s.classList.toggle("is-open");t.setAttribute("aria-expanded",i),r.style.overflow=i?"hidden":""}function e(){s.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),r.style.overflow=""}}function f(){const t=window.location.pathname,s=document.querySelectorAll(".nav-link");s.forEach(r=>{r.classList.remove("current")}),s.forEach(r=>{const n=r.getAttribute("href");(n===t||n===`.${t}`||n===t.replace(/^\//,"./")||t.endsWith("/")&&n==="./"||t.endsWith("/index.html")&&n==="./")&&r.classList.add("current")})}const c={"granite-ukraine":{id:"granite-ukraine",title:"Граніт України",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики.",items:[{id:"granite-ukraine-labradoryt",title:'Граніт "Лабрадорит"',image:new URL("/FKS_Vite/assets/granite-ukraine-labradoryt-BOACHj8G.jpg",import.meta.url).href,description:"Це глибокий чорний граніт із характерними синіми кристалами, що створюють ефект глибини. Використовується для фасадів, пам’ятників, інтер’єрних елементів.",characteristics:{origin:"Україна",color:"Чорний з переливами синього",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-ukraine-kapustyanskiy",title:'Граніт "Капустянський"',image:new URL("/FKS_Vite/assets/granite-ukraine-kapustyanskiy-CRLa3_hq.jpg",import.meta.url).href,description:"Один із найміцніших і довговічних українських гранітів, має насичений червоний відтінок. Використовується для облицювання будівель, пам’ятників, плитки, сходів.",characteristics:{origin:"Україна",color:"Червоний з чорними і сірими вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-ukraine-sofiivksy",title:'Граніт "Софіївський"',image:new URL("/FKS_Vite/assets/granite-ukraine-sofiivksy-BLD10NzT.jpg",import.meta.url).href,description:"Класичний граніт із рівномірною текстурою, чудово підходить для мощення, облицювання фасадів та внутрішніх приміщень. Дуже міцний і довговічний.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"}}]},granite:{id:"granite",title:"Граніт",image:new URL("/FKS_Vite/assets/granite-B0hs_Hva.jpeg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"granite-baltic-brown",title:"Baltic Brown",image:new URL("/FKS_Vite/assets/granite-baltic-brown-CRi-aMvH.jpg",import.meta.url).href,description:"Цей граніт має теплий коричневий відтінок з характерними круглими візерунками, що надають йому унікального вигляду. Використовується для стільниць, підлогових покриттів та облицювання.",characteristics:{origin:"Фінляндія",color:"Коричневий з чорними та сірими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-verde-ubatuba",title:"Verde Ubatuba",image:new URL("/FKS_Vite/assets/granite-verde-ubatuba-DCY7dmfW.jpeg",import.meta.url).href,description:"Цей граніт відомий своїм насиченим темно-зеленим кольором з дрібними золотистими вкрапленнями, що додають йому глибини. Часто використовується для стільниць, підвіконь та облицювання стін.",characteristics:{origin:"Бразилія",color:"Темно-зелений з дрібними золотистими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-black-galaxy",title:"Black Galaxy",image:new URL("/FKS_Vite/assets/granite-black-galaxy-C-4Nv-GF.jpg",import.meta.url).href,description:"Цей граніт має глибокий чорний фон з дрібними золотистими та сріблястими вкрапленнями, що нагадують зоряне небо. Використовується для стільниць, підлог та декоративних елементів.",characteristics:{origin:"Індія",color:"Чорний з золотистими та сріблястими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"}}]},marble:{id:"marble",title:"Мармур",image:new URL("/FKS_Vite/assets/marble-bvEluWsD.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"marble-1",title:"Мармур 1",image:new URL("/FKS_Vite/assets/marble-1-DSpdXQCF.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"marble-2",title:"Мармур 2",image:new URL("/FKS_Vite/assets/marble-2-C3vf0YNe.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"marble-3",title:"Мармур 3",image:new URL("/FKS_Vite/assets/marble-3-DtrW2_yk.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."}]}};function p(t){const s=new URLSearchParams(window.location.search),r={};return Object.entries(t).forEach(([n,e])=>{r[n]=s.get(e)}),r}function d(t){const s=document.querySelector(t);return s||(console.error(`Container element not found: ${t}`),null)}function m(t,s){t&&(t.innerHTML=s)}function u(t){const s=window.location.pathname;return Array.isArray(t)?t.some(r=>s.includes(r)):s.includes(t)}function b(){const t=window.location.pathname;return t.includes("/index.html")||t==="/"||t.endsWith("/")}function w(t=null,s=null){const r=d(".dataContainer");if(!r)return;let n="";if(t&&s&&c[t]){const e=c[t],i=e.items.find(a=>a.id===s);i?n=`
          <h1 class="section-title">${i.title}</h1>
          <div class="stone-type-details">
            <div class="stone-type-image-big">
              <img src="${i.image}" alt="${i.title}" />
            </div>
            <div class="stone-type-info">
              <p class="stone-type-description">${i.description}</p>
              ${i.characteristics?`
                <div class="stone-characteristics">
                  <h4>Характеристики:</h4>
                  <ul class="characteristics-list">
                  <li><strong>Походження: </strong>${i.characteristics.origin}</li>
                  <li><strong>Колір: </strong>${i.characteristics.color}</li>
                  <li><strong>Товщина: </strong>${i.characteristics.thickness}</li>
                  <li><strong>Формат: </strong>${i.characteristics.format}</li>
                  <li><strong>Ціна: </strong>${i.characteristics.price}</li>
                  </ul>
                </div>
              `:""}
            </div>
          </div>
          <a href="./stones.html?type=${t}" class="btn btn-primary">Повернутися до ${e.title}</a>
        `:n=`<p>Камінь не знайдено</p><a href="./stones.html?type=${t}" class="back-link">Повернутися до ${e.title}</a>`}else if(t&&c[t]){const e=c[t];n=`
        <h1 class="section-title">${e.title}</h1>
        <div class="stone-variants-grid">
          ${e.items.map(i=>`
            <div class="stone-variant-card">
              <a href="./stones.html?type=${t}&item=${i.id}" class="stone-variant-link">
                <div class="stone-variant-image">
                  <img src="${i.image}" alt="${i.title}" />
                </div>
                <div class="stone-variant-info">
                  <h4>${i.title}</h4>
                </div>
              </a>
            </div>
          `).join("")}
        </div>
      `}else n=`
        <h1 class="section-title">Каталог каменю</h1>
        <div class="stone-types-grid">
          ${Object.entries(c).map(([e,i])=>`
            <div class="stone-type-card">
              <div class="stone-type-image">
                <img src="${i.image}" alt="${i.title}" />
              </div>
              <div class="stone-type-info">
                <h3>${i.title}</h3>
                <p>${i.description}</p>
                <a href="./stones.html?type=${e}" class="btn btn-secondary">Переглянути</a>
              </div>
            </div>
          `).join("")}
        </div>
      `;m(r,n)}function v(){const t=d(".stone-types-grid");if(!t)return;const r=Object.entries(c).slice(0,6).map(([n,e])=>`
        <div class="stone-type-card">
            <div class="stone-type-image">
                <img src="${e.image}" alt="${e.title}" loading="lazy" />
            </div>
            <div class="stone-type-info">
                <h3>${e.title}</h3>
                <p>${e.description}</p>
                <a href="./stones.html?type=${n}" class="btn btn-secondary">Переглянути</a>
            </div>
        </div>
    `).join("");m(t,r)}function y(){const t=p({type:"type",item:"item"});u("/stones.html")?w(t.type,t.item):b()&&v()}const l={countertops:{id:"countertops",title:"Стільниці",image:new URL("/FKS_Vite/assets/countertop-FwgoXjdK.jpg",import.meta.url).href,description:"Стільниці з натурального каменю",items:[{id:"countertops-granite",title:"Стільниця з граніту",image:new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,description:"Стільниця з граніту"},{id:"countertops-marble",title:"Стільниця з мармуру",image:new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,description:"Стільниця з мармуру"},{id:"countertops-quartzite",title:"Стільниця з кварциту",image:new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,description:"Стільниця з кварциту"},{id:"countertops-onyx",title:"Стільниця з оніксу",image:new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,description:"Стільниця з оніксу"}]},windowsills:{id:"windowsills",title:"Підвіконня",image:new URL("/FKS_Vite/assets/windowsill-DIZwQsam.jpg",import.meta.url).href,description:"Підвіконня з натурального каменю",items:[{id:"windowsills-granite",title:"Підвіконня з граніту",image:new URL("/FKS_Vite/assets/windowsill-1-CoCcsiAI.jpg",import.meta.url).href,description:"Підвіконня з граніту"},{id:"windowsills-marble",title:"Підвіконня з мармуру",image:new URL("/FKS_Vite/assets/windowsill-2-5_N-8zob.jpg",import.meta.url).href,description:"Підвіконня з мармуру"},{id:"windowsills-travertine",title:"Підвіконня з травертину",image:new URL("/FKS_Vite/assets/windowsill-3-BKr_6RJ0.jpg",import.meta.url).href,description:"Підвіконня з травертину"},{id:"windowsills-onyx",title:"Підвіконня з оніксу",image:new URL("/FKS_Vite/assets/windowsill-4-BukGO0Ca.jpg",import.meta.url).href,description:"Підвіконня з оніксу"}]},stairs:{id:"stairs",title:"Сходи",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з натурального каменю",items:[{id:"stairs-granite",title:"Сходи з граніту",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з граніту"},{id:"stairs-marble",title:"Сходи з мармуру",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з мармуру"}]}};function L(t=null){const s=d(".dataContainer");if(!s)return;let r="";if(t&&l[t]){const n=l[t];r=`
        <h2>${n.title}</h2>
        <div class="product-category-details">
          <div class="product-category-info">
            <p class="product-category-description">${n.description}</p>
          </div>
          <div class="product-items-grid">
            ${n.items.map(e=>`
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
        <h1 class="section-title">Вироби з каменю</h1>
        <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
        <div class="product-categories-grid">
          ${Object.entries(l).map(([n,e])=>`
            <div class="product-category-card">
              <div class="product-category-image">
                <img src="${e.image}" alt="${e.title}" loading="lazy">
              </div>
              <div class="product-category-content">
                <h3>${e.title}</h3>
                <p>${e.description}</p>
                <a href="./products.html?category=${n}" class="category-link">Переглянути</a>
              </div>
            </div>
          `).join("")}
        </div>
      `;m(s,r)}function $(){const t=p({category:"category"});u("/products.html")&&L(t.category)}function k(){const t=document.querySelector(".breadcrumbs-list");if(!t)return;for(;t.children.length>1;)t.removeChild(t.lastChild);const s=window.location.pathname,r=window.location.search;if(s==="/"||s.endsWith("/index.html"))return;const n={"products.html":"Вироби з каменю","stones.html":"Каталог каменю","portfolio.html":"Портфоліо","contacts.html":"Контакти","about.html":"Про компанію"},e=s.split("/").pop();if(n[e]){const i=document.createElement("li");if(i.className="breadcrumbs-item",!r||e!=="stones.html"&&e!=="products.html"){const a=document.createElement("span");a.className="breadcrumbs-current",a.textContent=n[e],i.appendChild(a)}else{const a=document.createElement("a");a.href=`./${e}`,a.className="breadcrumbs-link",a.textContent=n[e],i.appendChild(a),C(t,e,r);return}t.appendChild(i)}}function C(t,s,r){const n=new URLSearchParams(r);let e="",i="";if(s==="products.html"){const a=document.createElement("li");a.className="breadcrumbs-item";const o=document.createElement("a");if(o.href="./products.html",o.className="breadcrumbs-link",o.textContent="Вироби з каменю",a.appendChild(o),t.appendChild(a),i=n.get("category"),!i)return;e={countertops:"Стільниці",windowsills:"Підвіконня",stairs:"Сходи",fireplaces:"Каміни",floors:"Підлоги",bathrooms:"Ванна кімната",tiles:"Плитка",monuments:"Пам'ятники",paving:"Бруківка",slabs:"Слеби",rosettes:"Розетки пано",entrances:"Вхідні групи",church:"Церковні роботи"}[i]||i}else if(s==="stones.html"){const a=document.createElement("li");a.className="breadcrumbs-item";const o=document.createElement("a");if(o.href="./stones.html",o.className="breadcrumbs-link",o.textContent="Каталог каменю",a.appendChild(o),t.appendChild(a),i=n.get("type"),!i)return;e={"granite-ukraine":"Граніт України",granite:"Граніт",marble:"Мармур",quartzite:"Кварцит",travertine:"Травертин",onyx:"Онікс",sandstone:"Піщаник"}[i]||i}if(e){const a=document.createElement("li");a.className="breadcrumbs-item";const o=document.createElement("span");o.className="breadcrumbs-current",o.textContent=e,a.appendChild(o),t.appendChild(a)}}document.addEventListener("DOMContentLoaded",()=>{h(),f(),y(),$(),k()});
