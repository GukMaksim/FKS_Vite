import{S as h,N as f,P as b,A as w,E as v}from"./vendor-2krqkDcN.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function y(){const e=document.querySelector(".menu-button"),s=document.querySelector(".menu-container"),n=document.body;if(!e||!s)return;e.addEventListener("click",r),document.addEventListener("click",i=>{!(s.contains(i.target)||e.contains(i.target))&&s.classList.contains("is-open")&&t()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&s.classList.contains("is-open")&&t()});function r(){const i=s.classList.toggle("is-open");e.setAttribute("aria-expanded",i),n.style.overflow=i?"hidden":""}function t(){s.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),n.style.overflow=""}}function L(){const e=window.location.pathname,s=document.querySelectorAll(".nav-link");s.forEach(n=>{n.classList.remove("current")}),s.forEach(n=>{const r=n.getAttribute("href");(r===e||r===`.${e}`||r===e.replace(/^\//,"./")||e.endsWith("/")&&r==="./"||e.endsWith("/index.html")&&r==="./")&&n.classList.add("current")})}const c={marble:{id:"marble",title:"Мармур",image:new URL("/FKS_Vite/assets/marble-bvEluWsD.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"marble-1",title:"Мармур 1",image:new URL("/FKS_Vite/assets/marble-1-DSpdXQCF.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"marble-2",title:"Мармур 2",image:new URL("/FKS_Vite/assets/marble-2-C3vf0YNe.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"marble-3",title:"Мармур 3",image:new URL("/FKS_Vite/assets/marble-3-DtrW2_yk.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."}]},granite:{id:"granite",title:"Граніт",image:new URL("/FKS_Vite/assets/granite-B0hs_Hva.jpeg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"granite-baltic-brown",title:"Baltic Brown",image:new URL("/FKS_Vite/assets/granite-baltic-brown-CRi-aMvH.jpg",import.meta.url).href,description:"Цей граніт має теплий коричневий відтінок з характерними круглими візерунками, що надають йому унікального вигляду. Використовується для стільниць, підлогових покриттів та облицювання.",characteristics:{origin:"Фінляндія",color:"Коричневий з чорними та сірими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-verde-ubatuba",title:"Verde Ubatuba",image:new URL("/FKS_Vite/assets/granite-verde-ubatuba-DCY7dmfW.jpeg",import.meta.url).href,description:"Цей граніт відомий своїм насиченим темно-зеленим кольором з дрібними золотистими вкрапленнями, що додають йому глибини. Часто використовується для стільниць, підвіконь та облицювання стін.",characteristics:{origin:"Бразилія",color:"Темно-зелений з дрібними золотистими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-black-galaxy",title:"Black Galaxy",image:new URL("/FKS_Vite/assets/granite-black-galaxy-C-4Nv-GF.jpg",import.meta.url).href,description:"Цей граніт має глибокий чорний фон з дрібними золотистими та сріблястими вкрапленнями, що нагадують зоряне небо. Використовується для стільниць, підлог та декоративних елементів.",characteristics:{origin:"Індія",color:"Чорний з золотистими та сріблястими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"}}]},"granite-ukraine":{id:"granite-ukraine",title:"Граніт України",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики.",items:[{id:"granite-ukraine-labradoryt",title:'Граніт "Лабрадорит"',image:new URL("/FKS_Vite/assets/granite-ukraine-labradoryt-BOACHj8G.jpg",import.meta.url).href,description:"Це глибокий чорний граніт із характерними синіми кристалами, що створюють ефект глибини. Використовується для фасадів, пам’ятників, інтер’єрних елементів.",characteristics:{origin:"Україна",color:"Чорний з переливами синього",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-ukraine-kapustyanskiy",title:'Граніт "Капустянський"',image:new URL("/FKS_Vite/assets/granite-ukraine-kapustyanskiy-CRLa3_hq.jpg",import.meta.url).href,description:"Один із найміцніших і довговічних українських гранітів, має насичений червоний відтінок. Використовується для облицювання будівель, пам’ятників, плитки, сходів.",characteristics:{origin:"Україна",color:"Червоний з чорними і сірими вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-ukraine-sofiivksy",title:'Граніт "Софіївський"',image:new URL("/FKS_Vite/assets/granite-ukraine-sofiivksy-BLD10NzT.jpg",import.meta.url).href,description:"Класичний граніт із рівномірною текстурою, чудово підходить для мощення, облицювання фасадів та внутрішніх приміщень. Дуже міцний і довговічний.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"}}]},onyx:{id:"onyx",title:"Онікс",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"onyx-1",title:"Онікс 1",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"onyx-2",title:"Онікс 2",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"onyx-3",title:"Онікс 3",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."}]},travertine:{id:"travertine",title:"Травертін",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертін - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"travertine-1",title:"Травертін 1",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертін - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"travertine-2",title:"Травертін 2",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертін - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"travertine-3",title:"Травертін 3",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертін - це натуральний камінь, який має унікальну природну форму та характеристики."}]},quartzite:{id:"quartzite",title:"Кварцит",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"quartzite-1",title:"Кварцит 1",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"quartzite-2",title:"Кварцит 2",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"quartzite-3",title:"Кварцит 3",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."}]}};function p(e){const s=new URLSearchParams(window.location.search),n={};return Object.entries(e).forEach(([r,t])=>{n[r]=s.get(t)}),n}function d(e){const s=document.querySelector(e);return s||(console.error(`Container element not found: ${e}`),null)}function m(e,s){e&&(e.innerHTML=s)}function u(e){const s=window.location.pathname;return Array.isArray(e)?e.some(n=>s.includes(n)):s.includes(e)}function S(){const e=window.location.pathname;return e.includes("/index.html")||e==="/"||e.endsWith("/")}function j(e=null,s=null){const n=d(".dataContainer");if(!n)return;let r="";if(e&&s&&c[e]){const t=c[e],i=t.items.find(a=>a.id===s);i?r=`
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
        `:r=`<p>Камінь не знайдено</p><a href="./stones.html?type=${e}" class="back-link">Повернутися до ${t.title}</a>`}else if(e&&c[e]){const t=c[e];r=`
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
      `}else r=`
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
                <a href="./stones.html?type=${t}" class="btn btn-primary">Переглянути</a>
              </div>
            </div>
          `).join("")}
        </div>
      `;m(n,r)}function U(){const e=d(".stone-types-grid");if(!e)return;const n=Object.entries(c).slice(0,6).map(([r,t])=>`
        <div class="stone-type-card">
            <div class="stone-type-image">
                <img src="${t.image}" alt="${t.title}" loading="lazy" />
            </div>
            <div class="stone-type-info">
                <h3>${t.title}</h3>
                <p>${t.description}</p>
                <a href="./stones.html?type=${r}" class="btn btn-primary">Переглянути</a>
            </div>
        </div>
    `).join("");m(e,n)}function $(){const e=p({type:"type",item:"item"});u("/stones.html")?j(e.type,e.item):S()&&U()}const l={countertops:{id:"countertops",title:"Стільниці",image:new URL("/FKS_Vite/assets/countertop-FwgoXjdK.jpg",import.meta.url).href,description:"Стільниці з натурального каменю",items:[{id:"countertops-granite",title:"Стільниця з граніту",image:new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,description:"Стільниця з граніту"},{id:"countertops-marble",title:"Стільниця з мармуру",image:new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,description:"Стільниця з мармуру"},{id:"countertops-quartzite",title:"Стільниця з кварциту",image:new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,description:"Стільниця з кварциту"},{id:"countertops-onyx",title:"Стільниця з оніксу",image:new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,description:"Стільниця з оніксу"}]},windowsills:{id:"windowsills",title:"Підвіконня",image:new URL("/FKS_Vite/assets/windowsill-DIZwQsam.jpg",import.meta.url).href,description:"Підвіконня з натурального каменю",items:[{id:"windowsills-granite",title:"Підвіконня з граніту",image:new URL("/FKS_Vite/assets/windowsill-1-CoCcsiAI.jpg",import.meta.url).href,description:"Підвіконня з граніту"},{id:"windowsills-marble",title:"Підвіконня з мармуру",image:new URL("/FKS_Vite/assets/windowsill-2-5_N-8zob.jpg",import.meta.url).href,description:"Підвіконня з мармуру"},{id:"windowsills-travertine",title:"Підвіконня з травертину",image:new URL("/FKS_Vite/assets/windowsill-3-BKr_6RJ0.jpg",import.meta.url).href,description:"Підвіконня з травертину"},{id:"windowsills-onyx",title:"Підвіконня з оніксу",image:new URL("/FKS_Vite/assets/windowsill-4-BukGO0Ca.jpg",import.meta.url).href,description:"Підвіконня з оніксу"}]},stairs:{id:"stairs",title:"Сходи",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з натурального каменю",items:[{id:"stairs-granite",title:"Сходи з граніту",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з граніту"},{id:"stairs-marble",title:"Сходи з мармуру",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з мармуру"}]}};function F(e=null){const s=d(".dataContainer");if(!s)return;let n="";if(e&&l[e]){const r=l[e];n=`
        <h2>${r.title}</h2>
        <div class="product-category-details">
          <div class="product-category-info">
            <p class="product-category-description">${r.description}</p>
          </div>
          <div class="product-items-grid">
            ${r.items.map(t=>`
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
      `}else n=`
        <h1 class="section-title">Вироби з каменю</h1>
        <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
        <div class="product-categories-grid">
          ${Object.entries(l).map(([r,t])=>`
            <div class="product-category-card">
              <div class="product-category-image">
                <img src="${t.image}" alt="${t.title}" loading="lazy">
              </div>
              <div class="product-category-content">
                <h3>${t.title}</h3>
                <p>${t.description}</p>
                <a href="./products.html?category=${r}" class="category-link">Переглянути</a>
              </div>
            </div>
          `).join("")}
        </div>
      `;m(s,n)}function k(){const e=p({category:"category"});u("/products.html")&&F(e.category)}function _(){const e=document.querySelector(".breadcrumbs-list");if(!e)return;for(;e.children.length>1;)e.removeChild(e.lastChild);const s=window.location.pathname,n=window.location.search;if(s==="/"||s.endsWith("/index.html"))return;const r={"products.html":"Вироби з каменю","stones.html":"Каталог каменю","portfolio.html":"Портфоліо","contacts.html":"Контакти","about.html":"Про компанію"},t=s.split("/").pop();if(r[t]){const i=document.createElement("li");if(i.className="breadcrumbs-item",!n||t!=="stones.html"&&t!=="products.html"){const a=document.createElement("span");a.className="breadcrumbs-current",a.textContent=r[t],i.appendChild(a)}else{const a=document.createElement("a");a.href=`./${t}`,a.className="breadcrumbs-link",a.textContent=r[t],i.appendChild(a),K(e,t,n);return}e.appendChild(i)}}function K(e,s,n){const r=new URLSearchParams(n);let t="",i="";if(s==="products.html"){const a=document.createElement("li");a.className="breadcrumbs-item";const o=document.createElement("a");if(o.href="./products.html",o.className="breadcrumbs-link",o.textContent="Вироби з каменю",a.appendChild(o),e.appendChild(a),i=r.get("category"),!i)return;t={countertops:"Стільниці",windowsills:"Підвіконня",stairs:"Сходи",fireplaces:"Каміни",floors:"Підлоги",bathrooms:"Ванна кімната",tiles:"Плитка",monuments:"Пам'ятники",paving:"Бруківка",slabs:"Слеби",rosettes:"Розетки пано",entrances:"Вхідні групи",church:"Церковні роботи"}[i]||i}else if(s==="stones.html"){const a=document.createElement("li");a.className="breadcrumbs-item";const o=document.createElement("a");if(o.href="./stones.html",o.className="breadcrumbs-link",o.textContent="Каталог каменю",a.appendChild(o),e.appendChild(a),i=r.get("type"),!i)return;t={"granite-ukraine":"Граніт України",granite:"Граніт",marble:"Мармур",quartzite:"Кварцит",travertine:"Травертин",onyx:"Онікс",sandstone:"Піщаник"}[i]||i}if(t){const a=document.createElement("li");a.className="breadcrumbs-item";const o=document.createElement("span");o.className="breadcrumbs-current",o.textContent=t,a.appendChild(o),e.appendChild(a)}}function R(){new h(".hero-slider",{modules:[f,b,w,v],effect:"fade",fadeEffect:{crossFade:!0},loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".hero-slider-pagination",clickable:!0},navigation:{nextEl:".hero-slider-button-next",prevEl:".hero-slider-button-prev"}})}document.addEventListener("DOMContentLoaded",()=>{y(),L(),$(),k(),_(),R()});
