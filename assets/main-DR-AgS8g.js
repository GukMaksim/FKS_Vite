import{S as h,N as f,P as b,A as v,E as w}from"./vendor-2krqkDcN.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();function y(){const e=document.querySelector(".menu-button"),s=document.querySelector(".menu-container"),r=document.body;if(!e||!s)return;e.addEventListener("click",n),document.addEventListener("click",i=>{!(s.contains(i.target)||e.contains(i.target))&&s.classList.contains("is-open")&&t()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&s.classList.contains("is-open")&&t()});function n(){const i=s.classList.toggle("is-open");e.setAttribute("aria-expanded",i),r.style.overflow=i?"hidden":""}function t(){s.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),r.style.overflow=""}}function L(){const e=window.location.pathname,s=document.querySelectorAll(".nav-link");s.forEach(r=>{r.classList.remove("current")}),s.forEach(r=>{const n=r.getAttribute("href");(n===e||n===`.${e}`||n===e.replace(/^\//,"./")||e.endsWith("/")&&n==="./"||e.endsWith("/index.html")&&n==="./")&&r.classList.add("current")})}const c={"granite-ukraine":{id:"granite-ukraine",title:"Граніт України",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики.",items:[{id:"granite-ukraine-labradoryt",title:'Граніт "Лабрадорит"',image:new URL("/FKS_Vite/assets/granite-ukraine-labradoryt-BOACHj8G.jpg",import.meta.url).href,description:"Це глибокий чорний граніт із характерними синіми кристалами, що створюють ефект глибини. Використовується для фасадів, пам’ятників, інтер’єрних елементів.",characteristics:{origin:"Україна",color:"Чорний з переливами синього",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-ukraine-kapustyanskiy",title:'Граніт "Капустянський"',image:new URL("/FKS_Vite/assets/granite-ukraine-kapustyanskiy-CRLa3_hq.jpg",import.meta.url).href,description:"Один із найміцніших і довговічних українських гранітів, має насичений червоний відтінок. Використовується для облицювання будівель, пам’ятників, плитки, сходів.",characteristics:{origin:"Україна",color:"Червоний з чорними і сірими вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-ukraine-sofiivksy",title:'Граніт "Софіївський"',image:new URL("/FKS_Vite/assets/granite-ukraine-sofiivksy-BLD10NzT.jpg",import.meta.url).href,description:"Класичний граніт із рівномірною текстурою, чудово підходить для мощення, облицювання фасадів та внутрішніх приміщень. Дуже міцний і довговічний.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"}}]},granite:{id:"granite",title:"Граніт",image:new URL("/FKS_Vite/assets/granite-B0hs_Hva.jpeg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"granite-baltic-brown",title:"Baltic Brown",image:new URL("/FKS_Vite/assets/granite-baltic-brown-CRi-aMvH.jpg",import.meta.url).href,description:"Цей граніт має теплий коричневий відтінок з характерними круглими візерунками, що надають йому унікального вигляду. Використовується для стільниць, підлогових покриттів та облицювання.",characteristics:{origin:"Фінляндія",color:"Коричневий з чорними та сірими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-verde-ubatuba",title:"Verde Ubatuba",image:new URL("/FKS_Vite/assets/granite-verde-ubatuba-DCY7dmfW.jpeg",import.meta.url).href,description:"Цей граніт відомий своїм насиченим темно-зеленим кольором з дрібними золотистими вкрапленнями, що додають йому глибини. Часто використовується для стільниць, підвіконь та облицювання стін.",characteristics:{origin:"Бразилія",color:"Темно-зелений з дрібними золотистими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-black-galaxy",title:"Black Galaxy",image:new URL("/FKS_Vite/assets/granite-black-galaxy-C-4Nv-GF.jpg",import.meta.url).href,description:"Цей граніт має глибокий чорний фон з дрібними золотистими та сріблястими вкрапленнями, що нагадують зоряне небо. Використовується для стільниць, підлог та декоративних елементів.",characteristics:{origin:"Індія",color:"Чорний з золотистими та сріблястими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"}}]},marble:{id:"marble",title:"Мармур",image:new URL("/FKS_Vite/assets/marble-bvEluWsD.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"marble-1",title:"Мармур 1",image:new URL("/FKS_Vite/assets/marble-1-DSpdXQCF.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"marble-2",title:"Мармур 2",image:new URL("/FKS_Vite/assets/marble-2-C3vf0YNe.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"marble-3",title:"Мармур 3",image:new URL("/FKS_Vite/assets/marble-3-DtrW2_yk.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."}]}};function p(e){const s=new URLSearchParams(window.location.search),r={};return Object.entries(e).forEach(([n,t])=>{r[n]=s.get(t)}),r}function d(e){const s=document.querySelector(e);return s||(console.error(`Container element not found: ${e}`),null)}function m(e,s){e&&(e.innerHTML=s)}function u(e){const s=window.location.pathname;return Array.isArray(e)?e.some(r=>s.includes(r)):s.includes(e)}function $(){const e=window.location.pathname;return e.includes("/index.html")||e==="/"||e.endsWith("/")}function k(e=null,s=null){const r=d(".dataContainer");if(!r)return;let n="";if(e&&s&&c[e]){const t=c[e],i=t.items.find(a=>a.id===s);i?n=`
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
          <a href="./stones.html?type=${e}" class="btn btn-primary">Повернутися до ${t.title}</a>
        `:n=`<p>Камінь не знайдено</p><a href="./stones.html?type=${e}" class="back-link">Повернутися до ${t.title}</a>`}else if(e&&c[e]){const t=c[e];n=`
        <h1 class="section-title">${t.title}</h1>
        <div class="stone-variants-grid">
          ${t.items.map(i=>`
            <div class="stone-variant-card">
              <a href="./stones.html?type=${e}&item=${i.id}" class="stone-variant-link">
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
          ${Object.entries(c).map(([t,i])=>`
            <div class="stone-type-card">
              <div class="stone-type-image">
                <img src="${i.image}" alt="${i.title}" />
              </div>
              <div class="stone-type-info">
                <h3>${i.title}</h3>
                <p>${i.description}</p>
                <a href="./stones.html?type=${t}" class="btn btn-secondary">Переглянути</a>
              </div>
            </div>
          `).join("")}
        </div>
      `;m(r,n)}function S(){const e=d(".stone-types-grid");if(!e)return;const r=Object.entries(c).slice(0,6).map(([n,t])=>`
        <div class="stone-type-card">
            <div class="stone-type-image">
                <img src="${t.image}" alt="${t.title}" loading="lazy" />
            </div>
            <div class="stone-type-info">
                <h3>${t.title}</h3>
                <p>${t.description}</p>
                <a href="./stones.html?type=${n}" class="btn btn-secondary">Переглянути</a>
            </div>
        </div>
    `).join("");m(e,r)}function C(){const e=p({type:"type",item:"item"});u("/stones.html")?k(e.type,e.item):$()&&S()}const l={countertops:{id:"countertops",title:"Стільниці",image:new URL("/FKS_Vite/assets/countertop-FwgoXjdK.jpg",import.meta.url).href,description:"Стільниці з натурального каменю",items:[{id:"countertops-granite",title:"Стільниця з граніту",image:new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,description:"Стільниця з граніту"},{id:"countertops-marble",title:"Стільниця з мармуру",image:new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,description:"Стільниця з мармуру"},{id:"countertops-quartzite",title:"Стільниця з кварциту",image:new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,description:"Стільниця з кварциту"},{id:"countertops-onyx",title:"Стільниця з оніксу",image:new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,description:"Стільниця з оніксу"}]},windowsills:{id:"windowsills",title:"Підвіконня",image:new URL("/FKS_Vite/assets/windowsill-DIZwQsam.jpg",import.meta.url).href,description:"Підвіконня з натурального каменю",items:[{id:"windowsills-granite",title:"Підвіконня з граніту",image:new URL("/FKS_Vite/assets/windowsill-1-CoCcsiAI.jpg",import.meta.url).href,description:"Підвіконня з граніту"},{id:"windowsills-marble",title:"Підвіконня з мармуру",image:new URL("/FKS_Vite/assets/windowsill-2-5_N-8zob.jpg",import.meta.url).href,description:"Підвіконня з мармуру"},{id:"windowsills-travertine",title:"Підвіконня з травертину",image:new URL("/FKS_Vite/assets/windowsill-3-BKr_6RJ0.jpg",import.meta.url).href,description:"Підвіконня з травертину"},{id:"windowsills-onyx",title:"Підвіконня з оніксу",image:new URL("/FKS_Vite/assets/windowsill-4-BukGO0Ca.jpg",import.meta.url).href,description:"Підвіконня з оніксу"}]},stairs:{id:"stairs",title:"Сходи",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з натурального каменю",items:[{id:"stairs-granite",title:"Сходи з граніту",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з граніту"},{id:"stairs-marble",title:"Сходи з мармуру",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з мармуру"}]}};function j(e=null){const s=d(".dataContainer");if(!s)return;let r="";if(e&&l[e]){const n=l[e];r=`
        <h2>${n.title}</h2>
        <div class="product-category-details">
          <div class="product-category-info">
            <p class="product-category-description">${n.description}</p>
          </div>
          <div class="product-items-grid">
            ${n.items.map(t=>`
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
      `}else r=`
        <h1 class="section-title">Вироби з каменю</h1>
        <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
        <div class="product-categories-grid">
          ${Object.entries(l).map(([n,t])=>`
            <div class="product-category-card">
              <div class="product-category-image">
                <img src="${t.image}" alt="${t.title}" loading="lazy">
              </div>
              <div class="product-category-content">
                <h3>${t.title}</h3>
                <p>${t.description}</p>
                <a href="./products.html?category=${n}" class="category-link">Переглянути</a>
              </div>
            </div>
          `).join("")}
        </div>
      `;m(s,r)}function F(){const e=p({category:"category"});u("/products.html")&&j(e.category)}function _(){const e=document.querySelector(".breadcrumbs-list");if(!e)return;for(;e.children.length>1;)e.removeChild(e.lastChild);const s=window.location.pathname,r=window.location.search;if(s==="/"||s.endsWith("/index.html"))return;const n={"products.html":"Вироби з каменю","stones.html":"Каталог каменю","portfolio.html":"Портфоліо","contacts.html":"Контакти","about.html":"Про компанію"},t=s.split("/").pop();if(n[t]){const i=document.createElement("li");if(i.className="breadcrumbs-item",!r||t!=="stones.html"&&t!=="products.html"){const a=document.createElement("span");a.className="breadcrumbs-current",a.textContent=n[t],i.appendChild(a)}else{const a=document.createElement("a");a.href=`./${t}`,a.className="breadcrumbs-link",a.textContent=n[t],i.appendChild(a),K(e,t,r);return}e.appendChild(i)}}function K(e,s,r){const n=new URLSearchParams(r);let t="",i="";if(s==="products.html"){const a=document.createElement("li");a.className="breadcrumbs-item";const o=document.createElement("a");if(o.href="./products.html",o.className="breadcrumbs-link",o.textContent="Вироби з каменю",a.appendChild(o),e.appendChild(a),i=n.get("category"),!i)return;t={countertops:"Стільниці",windowsills:"Підвіконня",stairs:"Сходи",fireplaces:"Каміни",floors:"Підлоги",bathrooms:"Ванна кімната",tiles:"Плитка",monuments:"Пам'ятники",paving:"Бруківка",slabs:"Слеби",rosettes:"Розетки пано",entrances:"Вхідні групи",church:"Церковні роботи"}[i]||i}else if(s==="stones.html"){const a=document.createElement("li");a.className="breadcrumbs-item";const o=document.createElement("a");if(o.href="./stones.html",o.className="breadcrumbs-link",o.textContent="Каталог каменю",a.appendChild(o),e.appendChild(a),i=n.get("type"),!i)return;t={"granite-ukraine":"Граніт України",granite:"Граніт",marble:"Мармур",quartzite:"Кварцит",travertine:"Травертин",onyx:"Онікс",sandstone:"Піщаник"}[i]||i}if(t){const a=document.createElement("li");a.className="breadcrumbs-item";const o=document.createElement("span");o.className="breadcrumbs-current",o.textContent=t,a.appendChild(o),e.appendChild(a)}}function R(){new h(".hero-slider",{modules:[f,b,v,w],effect:"fade",fadeEffect:{crossFade:!0},loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".hero-slider-pagination",clickable:!0},navigation:{nextEl:".hero-slider-button-next",prevEl:".hero-slider-button-prev"}})}document.addEventListener("DOMContentLoaded",()=>{y(),L(),C(),F(),_(),R()});
