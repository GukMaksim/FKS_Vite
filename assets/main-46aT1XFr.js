import{S as b,N as y,P as L,A as $,E as S}from"./vendor-2krqkDcN.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function k(){const t=document.querySelector(".menu-button"),s=document.querySelector(".menu-container"),r=document.body;if(!t||!s)return;t.addEventListener("click",e),document.addEventListener("click",a=>{!(s.contains(a.target)||t.contains(a.target))&&s.classList.contains("is-open")&&i()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&s.classList.contains("is-open")&&i()});function e(){const a=s.classList.toggle("is-open");t.setAttribute("aria-expanded",a),r.style.overflow=a?"hidden":""}function i(){s.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),r.style.overflow=""}}function j(){const t=window.location.pathname,s=document.querySelectorAll(".nav-link");s.forEach(r=>{r.classList.remove("current")}),s.forEach(r=>{const e=r.getAttribute("href");(e===t||e===`.${t}`||e===t.replace(/^\//,"./")||t.endsWith("/")&&e==="./"||t.endsWith("/index.html")&&e==="./")&&r.classList.add("current")})}const m={marble:{id:"marble",title:"Мармур",image:new URL("/FKS_Vite/assets/marble-bvEluWsD.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"marble-1",title:"Мармур 1",image:new URL("/FKS_Vite/assets/marble-1-DSpdXQCF.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!0},{id:"marble-2",title:"Мармур 2",image:new URL("/FKS_Vite/assets/marble-2-C3vf0YNe.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!0},{id:"marble-3",title:"Мармур 3",image:new URL("/FKS_Vite/assets/marble-3-DtrW2_yk.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!0}]},granite:{id:"granite",title:"Граніт",image:new URL("/FKS_Vite/assets/granite-B0hs_Hva.jpeg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"granite-baltic-brown",title:"Baltic Brown",image:new URL("/FKS_Vite/assets/granite-baltic-brown-CRi-aMvH.jpg",import.meta.url).href,description:"Цей граніт має теплий коричневий відтінок з характерними круглими візерунками, що надають йому унікального вигляду. Використовується для стільниць, підлогових покриттів та облицювання.",characteristics:{origin:"Фінляндія",color:"Коричневий з чорними та сірими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!0},{id:"granite-verde-ubatuba",title:"Verde Ubatuba",image:new URL("/FKS_Vite/assets/granite-verde-ubatuba-DCY7dmfW.jpeg",import.meta.url).href,description:"Цей граніт відомий своїм насиченим темно-зеленим кольором з дрібними золотистими вкрапленнями, що додають йому глибини. Часто використовується для стільниць, підвіконь та облицювання стін.",characteristics:{origin:"Бразилія",color:"Темно-зелений з дрібними золотистими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!0},{id:"granite-black-galaxy",title:"Black Galaxy",image:new URL("/FKS_Vite/assets/granite-black-galaxy-C-4Nv-GF.jpg",import.meta.url).href,description:"Цей граніт має глибокий чорний фон з дрібними золотистими та сріблястими вкрапленнями, що нагадують зоряне небо. Використовується для стільниць, підлог та декоративних елементів.",characteristics:{origin:"Індія",color:"Чорний з золотистими та сріблястими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!0}]},"granite-ukraine":{id:"granite-ukraine",title:"Граніт України",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики.",items:[{id:"granite-ukraine-labradoryt",title:'Граніт "Лабрадорит"',image:new URL("/FKS_Vite/assets/granite-ukraine-labradoryt-BOACHj8G.jpg",import.meta.url).href,description:"Це глибокий чорний граніт із характерними синіми кристалами, що створюють ефект глибини. Використовується для фасадів, пам’ятників, інтер’єрних елементів.",characteristics:{origin:"Україна",color:"Чорний з переливами синього",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"granite-ukraine-kapustyanskiy",title:'Граніт "Капустянський"',image:new URL("/FKS_Vite/assets/granite-ukraine-kapustyanskiy-CRLa3_hq.jpg",import.meta.url).href,description:"Один із найміцніших і довговічних українських гранітів, має насичений червоний відтінок. Використовується для облицювання будівель, пам’ятників, плитки, сходів.",characteristics:{origin:"Україна",color:"Червоний з чорними і сірими вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"granite-ukraine-sofiivksy",title:'Граніт "Софіївський"',image:new URL("/FKS_Vite/assets/granite-ukraine-sofiivksy-BLD10NzT.jpg",import.meta.url).href,description:"Класичний граніт із рівномірною текстурою, чудово підходить для мощення, облицювання фасадів та внутрішніх приміщень. Дуже міцний і довговічний.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1}]},onyx:{id:"onyx",title:"Онікс",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"onyx-1",title:"Онікс 1",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"onyx-2",title:"Онікс 2",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"onyx-3",title:"Онікс 3",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1}]},travertine:{id:"travertine",title:"Травертін",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертін - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"travertine-1",title:"Травертін 1",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертін - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"travertine-2",title:"Травертін 2",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертін - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"travertine-3",title:"Травертін 3",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертін - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1}]},quartzite:{id:"quartzite",title:"Кварцит",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"quartzite-1",title:"Кварцит 1",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"quartzite-2",title:"Кварцит 2",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"quartzite-3",title:"Кварцит 3",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1}]}};function u(t){const s=new URLSearchParams(window.location.search),r={};return Object.entries(t).forEach(([e,i])=>{r[e]=s.get(i)}),r}function h(t){const s=document.querySelector(t);return s||(console.error(`Container element not found: ${t}`),null)}function d(t,s){t&&(t.innerHTML=s)}function g(t){const s=window.location.pathname;return Array.isArray(t)?t.some(r=>s.includes(r)):s.includes(t)}function C(){const t=window.location.pathname;return t.includes("/index.html")||t==="/"||t.endsWith("/")}function f(t,s,r,e={}){var n,c,o;const i=h(".dataContainer");if(!i)return;let a="";if(s&&r&&t[s]){const l=t[s],p=l.items.find(w=>w.id===r);p?a=((n=e.renderItemDetails)==null?void 0:n.call(e,p,l,s))||"":a=`<p>Елемент не знайдено</p><a href="${e.backUrl}?type=${s}" class="back-link">Повернутися до ${l.title}</a>`}else if(s&&t[s]){const l=t[s];a=((c=e.renderCategory)==null?void 0:c.call(e,l,s))||""}else a=((o=e.renderAllCategories)==null?void 0:o.call(e,t))||"";d(i,a)}function U(t,s,r={}){const e=h(s);if(!e)return;const a=Object.entries(t).slice(0,r.limit||6).map(([n,c])=>{var o;return((o=r.renderMainPageItem)==null?void 0:o.call(r,c,n))||""}).join("");d(e,a)}function F(t=null,s=null){f(m,t,s,{renderItemDetails:(e,i,a)=>`
            <h1 class="section-title">${e.title}</h1>
            <div class="stone-type-details">
                <div class="stone-type-image-big">
                    <img src="${e.image}" alt="${e.title}" />
                </div>
                <div class="stone-type-info">
                    <p class="stone-type-description">${e.description}</p>
                    ${e.characteristics?`
                        <div class="stone-characteristics">
                            <h4>Характеристики:</h4>
                            <ul class="characteristics-list">
                                <li><strong>Походження: </strong>${e.characteristics.origin}</li>
                                <li><strong>Колір: </strong>${e.characteristics.color}</li>
                                <li><strong>Товщина: </strong>${e.characteristics.thickness}</li>
                                <li><strong>Формат: </strong>${e.characteristics.format}</li>
                                <li><strong>Ціна: </strong>${e.characteristics.price}</li>
                            </ul>
                        </div>
                    `:""}
                </div>
            </div>
            <a href="./stones.html?type=${a}" class="btn btn-primary">Повернутися до ${i.title}</a>
        `,renderCategory:(e,i)=>`
            <h1 class="section-title">${e.title}</h1>
            <div class="stone-variants-grid">
                ${e.items.map(a=>`
                    <div class="stone-variant-card">
                        <a href="./stones.html?type=${i}&item=${a.id}" class="stone-variant-link">
                            <div class="stone-variant-image">
                                <img src="${a.image}" alt="${a.title}" />
                            </div>
                            <div class="stone-variant-info">
                                <h4>${a.title}</h4>
                            </div>
                        </a>
                    </div>
                `).join("")}
            </div>
        `,renderAllCategories:e=>`
            <h1 class="section-title">Каталог каменю</h1>
            <div class="stone-types-grid">
                ${Object.entries(e).map(([i,a])=>`
                    <div class="stone-type-card">
                        <div class="stone-type-image">
                            <img src="${a.image}" alt="${a.title}" />
                        </div>
                        <div class="stone-type-info">
                            <h3>${a.title}</h3>
                            <p>${a.description}</p>
                            <a href="./stones.html?type=${i}" class="btn btn-primary">Переглянути</a>
                        </div>
                    </div>
                `).join("")}
            </div>
        `,backUrl:"./stones.html"})}function E(){U(m,".stone-types-grid",{renderMainPageItem:(s,r)=>`
            <div class="stone-type-card">
                <div class="stone-type-image">
                    <img src="${s.image}" alt="${s.title}" loading="lazy" />
                </div>
                <div class="stone-type-info">
                    <h3>${s.title}</h3>
                    <p>${s.description}</p>
                    <a href="./stones.html?type=${r}" class="btn btn-secondary">Переглянути</a>
                </div>
            </div>
        `})}function R(){const t=u({type:"type",item:"item"});g("/stones.html")?F(t.type,t.item):C()&&E()}const v={countertops:{id:"countertops",title:"Стільниці",image:new URL("/FKS_Vite/assets/countertop-FwgoXjdK.jpg",import.meta.url).href,description:"Стільниці з натурального каменю",items:[{id:"countertops-granite",title:"Стільниця з граніту",image:new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,description:"Стільниця з граніту"},{id:"countertops-marble",title:"Стільниця з мармуру",image:new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,description:"Стільниця з мармуру"},{id:"countertops-quartzite",title:"Стільниця з кварциту",image:new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,description:"Стільниця з кварциту"},{id:"countertops-onyx",title:"Стільниця з оніксу",image:new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,description:"Стільниця з оніксу"}]},windowsills:{id:"windowsills",title:"Підвіконня",image:new URL("/FKS_Vite/assets/windowsill-DIZwQsam.jpg",import.meta.url).href,description:"Підвіконня з натурального каменю",items:[{id:"windowsills-granite",title:"Підвіконня з граніту",image:new URL("/FKS_Vite/assets/windowsill-1-CoCcsiAI.jpg",import.meta.url).href,description:"Підвіконня з граніту"},{id:"windowsills-marble",title:"Підвіконня з мармуру",image:new URL("/FKS_Vite/assets/windowsill-2-5_N-8zob.jpg",import.meta.url).href,description:"Підвіконня з мармуру"},{id:"windowsills-travertine",title:"Підвіконня з травертину",image:new URL("/FKS_Vite/assets/windowsill-3-BKr_6RJ0.jpg",import.meta.url).href,description:"Підвіконня з травертину"},{id:"windowsills-onyx",title:"Підвіконня з оніксу",image:new URL("/FKS_Vite/assets/windowsill-4-BukGO0Ca.jpg",import.meta.url).href,description:"Підвіконня з оніксу"}]},stairs:{id:"stairs",title:"Сходи",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з натурального каменю",items:[{id:"stairs-granite",title:"Сходи з граніту",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з граніту"},{id:"stairs-marble",title:"Сходи з мармуру",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з мармуру"}]}};function _(t=null){f(v,t,null,{renderCategory:(r,e)=>`
            <h2>${r.title}</h2>
            <div class="product-category-details">
                <div class="product-category-info">
                    <p class="product-category-description">${r.description}</p>
                </div>
                <div class="product-items-grid">
                    ${r.items.map(i=>`
                        <div class="product-item-card">
                            <div class="product-item-image">
                                <img src="${i.image}" alt="${i.title}" loading="lazy">
                            </div>
                            <div class="product-item-info">
                                <h3>${i.title}</h3>
                                <p>${i.description}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `,renderAllCategories:r=>`
            <h1 class="section-title">Вироби з каменю</h1>
            <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
            <div class="product-categories-grid">
                ${Object.entries(r).map(([e,i])=>`
                    <div class="product-category-card">
                        <div class="product-category-image">
                            <img src="${i.image}" alt="${i.title}" loading="lazy">
                        </div>
                        <div class="product-category-content">
                            <h3>${i.title}</h3>
                            <p>${i.description}</p>
                            <a href="./products.html?category=${e}" class="btn btn-primary">Переглянути</a>
                        </div>
                    </div>
                `).join("")}
            </div>
        `})}function K(){const t=u({category:"category"});g("/products.html")&&_(t.category)}function V(){const t=document.querySelector(".breadcrumbs-list");if(!t)return;for(;t.children.length>1;)t.removeChild(t.lastChild);const s=window.location.pathname,r=window.location.search;if(s==="/"||s.endsWith("/index.html"))return;const e={"products.html":"Вироби з каменю","stones.html":"Каталог каменю","portfolio.html":"Портфоліо","contacts.html":"Контакти","about.html":"Про компанію"},i=s.split("/").pop();if(e[i]){const a=document.createElement("li");if(a.className="breadcrumbs-item",!r||i!=="stones.html"&&i!=="products.html"){const n=document.createElement("span");n.className="breadcrumbs-current",n.textContent=e[i],a.appendChild(n)}else{const n=document.createElement("a");n.href=`./${i}`,n.className="breadcrumbs-link",n.textContent=e[i],a.appendChild(n),x(t,i,r);return}t.appendChild(a)}}function x(t,s,r){const e=new URLSearchParams(r);let i="",a="";if(s==="products.html"){const n=document.createElement("li");n.className="breadcrumbs-item";const c=document.createElement("a");if(c.href="./products.html",c.className="breadcrumbs-link",c.textContent="Вироби з каменю",n.appendChild(c),t.appendChild(n),a=e.get("category"),!a)return;i={countertops:"Стільниці",windowsills:"Підвіконня",stairs:"Сходи",fireplaces:"Каміни",floors:"Підлоги",bathrooms:"Ванна кімната",tiles:"Плитка",monuments:"Пам'ятники",paving:"Бруківка",slabs:"Слеби",rosettes:"Розетки пано",entrances:"Вхідні групи",church:"Церковні роботи"}[a]||a}else if(s==="stones.html"){const n=document.createElement("li");n.className="breadcrumbs-item";const c=document.createElement("a");if(c.href="./stones.html",c.className="breadcrumbs-link",c.textContent="Каталог каменю",n.appendChild(c),t.appendChild(n),a=e.get("type"),!a)return;i={"granite-ukraine":"Граніт України",granite:"Граніт",marble:"Мармур",quartzite:"Кварцит",travertine:"Травертин",onyx:"Онікс",sandstone:"Піщаник"}[a]||a}if(i){const n=document.createElement("li");n.className="breadcrumbs-item";const c=document.createElement("span");c.className="breadcrumbs-current",c.textContent=i,n.appendChild(c),t.appendChild(n)}}function D(){new b(".hero-slider",{modules:[y,L,$,S],effect:"fade",fadeEffect:{crossFade:!0},loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".hero-slider-pagination",clickable:!0},navigation:{nextEl:".hero-slider-button-next",prevEl:".hero-slider-button-prev"}})}function N(t){const s={stones:[],products:[]};return Object.entries(m).forEach(([r,e])=>{(e.title.toLowerCase().includes(t.toLowerCase())||e.description.toLowerCase().includes(t.toLowerCase()))&&s.stones.push({type:"category",title:e.title,description:e.description,image:e.image,url:`./stones.html?type=${r}`}),e.items.forEach(i=>{(i.title.toLowerCase().includes(t.toLowerCase())||i.description.toLowerCase().includes(t.toLowerCase()))&&s.stones.push({type:"item",title:i.title,description:i.description,image:i.image,url:`./stones.html?type=${r}&item=${i.id}`})})}),Object.entries(v).forEach(([r,e])=>{(e.title.toLowerCase().includes(t.toLowerCase())||e.description.toLowerCase().includes(t.toLowerCase()))&&s.products.push({type:"category",title:e.title,description:e.description,image:e.image,url:`./products.html?category=${r}`}),e.items.forEach(i=>{(i.title.toLowerCase().includes(t.toLowerCase())||i.description.toLowerCase().includes(t.toLowerCase()))&&s.products.push({type:"item",title:i.title,description:i.description,image:i.image,url:`./products.html?category=${r}`})})}),s}function P(t){const s=document.querySelector(".search-results");if(!s)return;let r="";t.stones.length===0&&t.products.length===0?r='<p class="no-results">Результатів пошуку не знайдено</p>':r=`
            <div class="search-results-container">
                ${t.stones.length>0?`
                    <div class="search-section">
                        <h3>Каталог каменю</h3>
                        <div class="search-results-grid">
                            ${t.stones.map(e=>`
                                <div class="search-result-card">
                                    <a href="${e.url}" class="search-result-link">
                                        <div class="search-result-image">
                                            <img src="${e.image}" alt="${e.title}" loading="lazy">
                                        </div>
                                        <div class="search-result-info">
                                            <h4>${e.title}</h4>
                                        </div>
                                    </a>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                `:""}
                
                ${t.products.length>0?`
                    <div class="search-section">
                        <h3>Вироби з каменю</h3>
                        <div class="search-results-grid">
                            ${t.products.map(e=>`
                                <div class="search-result-card">
                                    <a href="${e.url}" class="search-result-link">
                                        <div class="search-result-image">
                                            <img src="${e.image}" alt="${e.title}" loading="lazy">
                                        </div>
                                        <div class="search-result-info">
                                            <h4>${e.title}</h4>
                                        </div>
                                    </a>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                `:""}
            </div>
        `,d(s,r)}function q(){const t=document.querySelector(".search-form"),s=document.querySelector(".search-input");if(!t||!s){console.error("Елементи пошуку не знайдено");return}const r=document.createElement("div");r.className="search-results",t.appendChild(r);let e;s.addEventListener("input",i=>{const a=i.target.value.trim();clearTimeout(e),e=setTimeout(()=>{if(a.length>=2){const n=N(a);P(n),r.classList.add("active")}else d(r,""),r.classList.remove("active")},300)}),t.addEventListener("click",i=>{i.stopPropagation()}),document.addEventListener("click",i=>{t.contains(i.target)||(d(r,""),r.classList.remove("active"))}),t.addEventListener("submit",i=>{i.preventDefault()})}function z(){const t=[];return Object.entries(m).forEach(([s,r])=>{r.items.forEach(e=>{e.hit&&t.push({...e,type:s,category:r.title})})}),t}function O(t){const s=document.querySelector(".hits-track");if(!s)return;const r=t.map(e=>`
        <a href="./stones.html?type=${e.type}&item=${e.id}" class="hit-card">
            <div class="hit-image">
                <img src="${e.image}" alt="${e.title}" loading="lazy">
            </div>
            <div class="hit-info">
                <div class="hit-category">${e.category}</div>
                <h3 class="hit-title">${e.title}</h3>
                <div class="hit-price">${e.characteristics.price}</div>
            </div>
        </a>
    `).join("");s.innerHTML=r}function B(){const t=document.querySelector(".hits-track"),s=document.querySelector(".prev-slide"),r=document.querySelector(".next-slide");if(!t||!s||!r)return;let e=0,i=4;function a(){window.innerWidth<=767?i=1:window.innerWidth<=991?i=2:window.innerWidth<=1199?i=3:i=4}function n(){const c=t.querySelector(".hit-card").offsetWidth+24;t.style.transform=`translateX(-${e*c}px)`}s.addEventListener("click",()=>{e>0&&(e--,n())}),r.addEventListener("click",()=>{const c=t.children.length;e<c-i&&(e++,n())}),window.addEventListener("resize",()=>{a(),e=0,n()}),a()}function H(){const t=z();O(t),B()}document.addEventListener("DOMContentLoaded",()=>{k(),j(),R(),K(),q(),H(),V(),D()});
