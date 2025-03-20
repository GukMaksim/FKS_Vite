import{S as b,N as L,P as y,A as $,E as S}from"./vendor-2krqkDcN.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();function C(){const e=document.querySelector(".menu-button"),s=document.querySelector(".menu-container"),a=document.body;if(!e||!s)return;e.addEventListener("click",t),document.addEventListener("click",r=>{!(s.contains(r.target)||e.contains(r.target))&&s.classList.contains("is-open")&&i()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&s.classList.contains("is-open")&&i()});function t(){const r=s.classList.toggle("is-open");e.setAttribute("aria-expanded",r),a.style.overflow=r?"hidden":""}function i(){s.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),a.style.overflow=""}}function j(){const e=window.location.pathname,s=document.querySelectorAll(".nav-link");s.forEach(a=>{a.classList.remove("current")}),s.forEach(a=>{const t=a.getAttribute("href");(t===e||t===`.${e}`||t===e.replace(/^\//,"./")||e.endsWith("/")&&t==="./"||e.endsWith("/index.html")&&t==="./")&&a.classList.add("current")})}const m={marble:{id:"marble",title:"Мармур",image:new URL("/FKS_Vite/assets/marble-bvEluWsD.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"marble-1",title:"Мармур 1",image:new URL("/FKS_Vite/assets/marble-1-DSpdXQCF.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"marble-2",title:"Мармур 2",image:new URL("/FKS_Vite/assets/marble-2-C3vf0YNe.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"marble-3",title:"Мармур 3",image:new URL("/FKS_Vite/assets/marble-3-DtrW2_yk.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики."}]},granite:{id:"granite",title:"Граніт",image:new URL("/FKS_Vite/assets/granite-B0hs_Hva.jpeg",import.meta.url).href,description:"Граніт - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"granite-baltic-brown",title:"Baltic Brown",image:new URL("/FKS_Vite/assets/granite-baltic-brown-CRi-aMvH.jpg",import.meta.url).href,description:"Цей граніт має теплий коричневий відтінок з характерними круглими візерунками, що надають йому унікального вигляду. Використовується для стільниць, підлогових покриттів та облицювання.",characteristics:{origin:"Фінляндія",color:"Коричневий з чорними та сірими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-verde-ubatuba",title:"Verde Ubatuba",image:new URL("/FKS_Vite/assets/granite-verde-ubatuba-DCY7dmfW.jpeg",import.meta.url).href,description:"Цей граніт відомий своїм насиченим темно-зеленим кольором з дрібними золотистими вкрапленнями, що додають йому глибини. Часто використовується для стільниць, підвіконь та облицювання стін.",characteristics:{origin:"Бразилія",color:"Темно-зелений з дрібними золотистими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-black-galaxy",title:"Black Galaxy",image:new URL("/FKS_Vite/assets/granite-black-galaxy-C-4Nv-GF.jpg",import.meta.url).href,description:"Цей граніт має глибокий чорний фон з дрібними золотистими та сріблястими вкрапленнями, що нагадують зоряне небо. Використовується для стільниць, підлог та декоративних елементів.",characteristics:{origin:"Індія",color:"Чорний з золотистими та сріблястими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"}}]},"granite-ukraine":{id:"granite-ukraine",title:"Граніт України",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це натуральний камінь з України, який має унікальну природну форму та характеристики.",items:[{id:"granite-ukraine-labradoryt",title:'Граніт "Лабрадорит"',image:new URL("/FKS_Vite/assets/granite-ukraine-labradoryt-BOACHj8G.jpg",import.meta.url).href,description:"Це глибокий чорний граніт із характерними синіми кристалами, що створюють ефект глибини. Використовується для фасадів, пам’ятників, інтер’єрних елементів.",characteristics:{origin:"Україна",color:"Чорний з переливами синього",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-ukraine-kapustyanskiy",title:'Граніт "Капустянський"',image:new URL("/FKS_Vite/assets/granite-ukraine-kapustyanskiy-CRLa3_hq.jpg",import.meta.url).href,description:"Один із найміцніших і довговічних українських гранітів, має насичений червоний відтінок. Використовується для облицювання будівель, пам’ятників, плитки, сходів.",characteristics:{origin:"Україна",color:"Червоний з чорними і сірими вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"}},{id:"granite-ukraine-sofiivksy",title:'Граніт "Софіївський"',image:new URL("/FKS_Vite/assets/granite-ukraine-sofiivksy-BLD10NzT.jpg",import.meta.url).href,description:"Класичний граніт із рівномірною текстурою, чудово підходить для мощення, облицювання фасадів та внутрішніх приміщень. Дуже міцний і довговічний.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"}}]},onyx:{id:"onyx",title:"Онікс",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"onyx-1",title:"Онікс 1",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"onyx-2",title:"Онікс 2",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"onyx-3",title:"Онікс 3",image:new URL("/FKS_Vite/assets/onyx-2F6uZik-.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики."}]},travertine:{id:"travertine",title:"Травертін",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертін - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"travertine-1",title:"Травертін 1",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертін - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"travertine-2",title:"Травертін 2",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертін - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"travertine-3",title:"Травертін 3",image:new URL("/FKS_Vite/assets/travertine-UE6D-XHa.jpg",import.meta.url).href,description:"Травертін - це натуральний камінь, який має унікальну природну форму та характеристики."}]},quartzite:{id:"quartzite",title:"Кварцит",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",items:[{id:"quartzite-1",title:"Кварцит 1",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"quartzite-2",title:"Кварцит 2",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."},{id:"quartzite-3",title:"Кварцит 3",image:new URL("/FKS_Vite/assets/quartzite-DjW8srU6.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики."}]}};function u(e){const s=new URLSearchParams(window.location.search),a={};return Object.entries(e).forEach(([t,i])=>{a[t]=s.get(i)}),a}function g(e){const s=document.querySelector(e);return s||(console.error(`Container element not found: ${e}`),null)}function d(e,s){e&&(e.innerHTML=s)}function h(e){const s=window.location.pathname;return Array.isArray(e)?e.some(a=>s.includes(a)):s.includes(e)}function k(){const e=window.location.pathname;return e.includes("/index.html")||e==="/"||e.endsWith("/")}function f(e,s,a,t={}){var n,o,c;const i=g(".dataContainer");if(!i)return;let r="";if(s&&a&&e[s]){const l=e[s],p=l.items.find(w=>w.id===a);p?r=((n=t.renderItemDetails)==null?void 0:n.call(t,p,l,s))||"":r=`<p>Елемент не знайдено</p><a href="${t.backUrl}?type=${s}" class="back-link">Повернутися до ${l.title}</a>`}else if(s&&e[s]){const l=e[s];r=((o=t.renderCategory)==null?void 0:o.call(t,l,s))||""}else r=((c=t.renderAllCategories)==null?void 0:c.call(t,e))||"";d(i,r)}function U(e,s,a={}){const t=g(s);if(!t)return;const r=Object.entries(e).slice(0,a.limit||6).map(([n,o])=>{var c;return((c=a.renderMainPageItem)==null?void 0:c.call(a,o,n))||""}).join("");d(t,r)}function F(e=null,s=null){f(m,e,s,{renderItemDetails:(t,i,r)=>`
            <h1 class="section-title">${t.title}</h1>
            <div class="stone-type-details">
                <div class="stone-type-image-big">
                    <img src="${t.image}" alt="${t.title}" />
                </div>
                <div class="stone-type-info">
                    <p class="stone-type-description">${t.description}</p>
                    ${t.characteristics?`
                        <div class="stone-characteristics">
                            <h4>Характеристики:</h4>
                            <ul class="characteristics-list">
                                <li><strong>Походження: </strong>${t.characteristics.origin}</li>
                                <li><strong>Колір: </strong>${t.characteristics.color}</li>
                                <li><strong>Товщина: </strong>${t.characteristics.thickness}</li>
                                <li><strong>Формат: </strong>${t.characteristics.format}</li>
                                <li><strong>Ціна: </strong>${t.characteristics.price}</li>
                            </ul>
                        </div>
                    `:""}
                </div>
            </div>
            <a href="./stones.html?type=${r}" class="btn btn-primary">Повернутися до ${i.title}</a>
        `,renderCategory:(t,i)=>`
            <h1 class="section-title">${t.title}</h1>
            <div class="stone-variants-grid">
                ${t.items.map(r=>`
                    <div class="stone-variant-card">
                        <a href="./stones.html?type=${i}&item=${r.id}" class="stone-variant-link">
                            <div class="stone-variant-image">
                                <img src="${r.image}" alt="${r.title}" />
                            </div>
                            <div class="stone-variant-info">
                                <h4>${r.title}</h4>
                            </div>
                        </a>
                    </div>
                `).join("")}
            </div>
        `,renderAllCategories:t=>`
            <h1 class="section-title">Каталог каменю</h1>
            <div class="stone-types-grid">
                ${Object.entries(t).map(([i,r])=>`
                    <div class="stone-type-card">
                        <div class="stone-type-image">
                            <img src="${r.image}" alt="${r.title}" />
                        </div>
                        <div class="stone-type-info">
                            <h3>${r.title}</h3>
                            <p>${r.description}</p>
                            <a href="./stones.html?type=${i}" class="btn btn-primary">Переглянути</a>
                        </div>
                    </div>
                `).join("")}
            </div>
        `,backUrl:"./stones.html"})}function R(){U(m,".stone-types-grid",{renderMainPageItem:(s,a)=>`
            <div class="stone-type-card">
                <div class="stone-type-image">
                    <img src="${s.image}" alt="${s.title}" loading="lazy" />
                </div>
                <div class="stone-type-info">
                    <h3>${s.title}</h3>
                    <p>${s.description}</p>
                    <a href="./stones.html?type=${a}" class="btn btn-secondary">Переглянути</a>
                </div>
            </div>
        `})}function _(){const e=u({type:"type",item:"item"});h("/stones.html")?F(e.type,e.item):k()&&R()}const v={countertops:{id:"countertops",title:"Стільниці",image:new URL("/FKS_Vite/assets/countertop-FwgoXjdK.jpg",import.meta.url).href,description:"Стільниці з натурального каменю",items:[{id:"countertops-granite",title:"Стільниця з граніту",image:new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,description:"Стільниця з граніту"},{id:"countertops-marble",title:"Стільниця з мармуру",image:new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,description:"Стільниця з мармуру"},{id:"countertops-quartzite",title:"Стільниця з кварциту",image:new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,description:"Стільниця з кварциту"},{id:"countertops-onyx",title:"Стільниця з оніксу",image:new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,description:"Стільниця з оніксу"}]},windowsills:{id:"windowsills",title:"Підвіконня",image:new URL("/FKS_Vite/assets/windowsill-DIZwQsam.jpg",import.meta.url).href,description:"Підвіконня з натурального каменю",items:[{id:"windowsills-granite",title:"Підвіконня з граніту",image:new URL("/FKS_Vite/assets/windowsill-1-CoCcsiAI.jpg",import.meta.url).href,description:"Підвіконня з граніту"},{id:"windowsills-marble",title:"Підвіконня з мармуру",image:new URL("/FKS_Vite/assets/windowsill-2-5_N-8zob.jpg",import.meta.url).href,description:"Підвіконня з мармуру"},{id:"windowsills-travertine",title:"Підвіконня з травертину",image:new URL("/FKS_Vite/assets/windowsill-3-BKr_6RJ0.jpg",import.meta.url).href,description:"Підвіконня з травертину"},{id:"windowsills-onyx",title:"Підвіконня з оніксу",image:new URL("/FKS_Vite/assets/windowsill-4-BukGO0Ca.jpg",import.meta.url).href,description:"Підвіконня з оніксу"}]},stairs:{id:"stairs",title:"Сходи",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з натурального каменю",items:[{id:"stairs-granite",title:"Сходи з граніту",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з граніту"},{id:"stairs-marble",title:"Сходи з мармуру",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з мармуру"}]}};function K(e=null){f(v,e,null,{renderCategory:(a,t)=>`
            <h2>${a.title}</h2>
            <div class="product-category-details">
                <div class="product-category-info">
                    <p class="product-category-description">${a.description}</p>
                </div>
                <div class="product-items-grid">
                    ${a.items.map(i=>`
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
        `,renderAllCategories:a=>`
            <h1 class="section-title">Вироби з каменю</h1>
            <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
            <div class="product-categories-grid">
                ${Object.entries(a).map(([t,i])=>`
                    <div class="product-category-card">
                        <div class="product-category-image">
                            <img src="${i.image}" alt="${i.title}" loading="lazy">
                        </div>
                        <div class="product-category-content">
                            <h3>${i.title}</h3>
                            <p>${i.description}</p>
                            <a href="./products.html?category=${t}" class="btn btn-primary">Переглянути</a>
                        </div>
                    </div>
                `).join("")}
            </div>
        `})}function E(){const e=u({category:"category"});h("/products.html")&&K(e.category)}function V(){const e=document.querySelector(".breadcrumbs-list");if(!e)return;for(;e.children.length>1;)e.removeChild(e.lastChild);const s=window.location.pathname,a=window.location.search;if(s==="/"||s.endsWith("/index.html"))return;const t={"products.html":"Вироби з каменю","stones.html":"Каталог каменю","portfolio.html":"Портфоліо","contacts.html":"Контакти","about.html":"Про компанію"},i=s.split("/").pop();if(t[i]){const r=document.createElement("li");if(r.className="breadcrumbs-item",!a||i!=="stones.html"&&i!=="products.html"){const n=document.createElement("span");n.className="breadcrumbs-current",n.textContent=t[i],r.appendChild(n)}else{const n=document.createElement("a");n.href=`./${i}`,n.className="breadcrumbs-link",n.textContent=t[i],r.appendChild(n),x(e,i,a);return}e.appendChild(r)}}function x(e,s,a){const t=new URLSearchParams(a);let i="",r="";if(s==="products.html"){const n=document.createElement("li");n.className="breadcrumbs-item";const o=document.createElement("a");if(o.href="./products.html",o.className="breadcrumbs-link",o.textContent="Вироби з каменю",n.appendChild(o),e.appendChild(n),r=t.get("category"),!r)return;i={countertops:"Стільниці",windowsills:"Підвіконня",stairs:"Сходи",fireplaces:"Каміни",floors:"Підлоги",bathrooms:"Ванна кімната",tiles:"Плитка",monuments:"Пам'ятники",paving:"Бруківка",slabs:"Слеби",rosettes:"Розетки пано",entrances:"Вхідні групи",church:"Церковні роботи"}[r]||r}else if(s==="stones.html"){const n=document.createElement("li");n.className="breadcrumbs-item";const o=document.createElement("a");if(o.href="./stones.html",o.className="breadcrumbs-link",o.textContent="Каталог каменю",n.appendChild(o),e.appendChild(n),r=t.get("type"),!r)return;i={"granite-ukraine":"Граніт України",granite:"Граніт",marble:"Мармур",quartzite:"Кварцит",travertine:"Травертин",onyx:"Онікс",sandstone:"Піщаник"}[r]||r}if(i){const n=document.createElement("li");n.className="breadcrumbs-item";const o=document.createElement("span");o.className="breadcrumbs-current",o.textContent=i,n.appendChild(o),e.appendChild(n)}}function D(){new b(".hero-slider",{modules:[L,y,$,S],effect:"fade",fadeEffect:{crossFade:!0},loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".hero-slider-pagination",clickable:!0},navigation:{nextEl:".hero-slider-button-next",prevEl:".hero-slider-button-prev"}})}function N(e){const s={stones:[],products:[]};return Object.entries(m).forEach(([a,t])=>{(t.title.toLowerCase().includes(e.toLowerCase())||t.description.toLowerCase().includes(e.toLowerCase()))&&s.stones.push({type:"category",title:t.title,description:t.description,image:t.image,url:`./stones.html?type=${a}`}),t.items.forEach(i=>{(i.title.toLowerCase().includes(e.toLowerCase())||i.description.toLowerCase().includes(e.toLowerCase()))&&s.stones.push({type:"item",title:i.title,description:i.description,image:i.image,url:`./stones.html?type=${a}&item=${i.id}`})})}),Object.entries(v).forEach(([a,t])=>{(t.title.toLowerCase().includes(e.toLowerCase())||t.description.toLowerCase().includes(e.toLowerCase()))&&s.products.push({type:"category",title:t.title,description:t.description,image:t.image,url:`./products.html?category=${a}`}),t.items.forEach(i=>{(i.title.toLowerCase().includes(e.toLowerCase())||i.description.toLowerCase().includes(e.toLowerCase()))&&s.products.push({type:"item",title:i.title,description:i.description,image:i.image,url:`./products.html?category=${a}`})})}),s}function P(e){const s=document.querySelector(".search-results");if(!s)return;let a="";e.stones.length===0&&e.products.length===0?a='<p class="no-results">Результатів пошуку не знайдено</p>':a=`
            <div class="search-results-container">
                ${e.stones.length>0?`
                    <div class="search-section">
                        <h3>Каталог каменю</h3>
                        <div class="search-results-grid">
                            ${e.stones.map(t=>`
                                <div class="search-result-card">
                                    <a href="${t.url}" class="search-result-link">
                                        <div class="search-result-image">
                                            <img src="${t.image}" alt="${t.title}" loading="lazy">
                                        </div>
                                        <div class="search-result-info">
                                            <h4>${t.title}</h4>
                                        </div>
                                    </a>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                `:""}
                
                ${e.products.length>0?`
                    <div class="search-section">
                        <h3>Вироби з каменю</h3>
                        <div class="search-results-grid">
                            ${e.products.map(t=>`
                                <div class="search-result-card">
                                    <a href="${t.url}" class="search-result-link">
                                        <div class="search-result-image">
                                            <img src="${t.image}" alt="${t.title}" loading="lazy">
                                        </div>
                                        <div class="search-result-info">
                                            <h4>${t.title}</h4>
                                        </div>
                                    </a>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                `:""}
            </div>
        `,d(s,a)}function z(){const e=document.querySelector(".search-form"),s=document.querySelector(".search-input");if(!e||!s){console.error("Елементи пошуку не знайдено");return}const a=document.createElement("div");a.className="search-results",e.appendChild(a);let t;s.addEventListener("input",i=>{const r=i.target.value.trim();clearTimeout(t),t=setTimeout(()=>{if(r.length>=2){const n=N(r);P(n),a.classList.add("active")}else d(a,""),a.classList.remove("active")},300)}),e.addEventListener("click",i=>{i.stopPropagation()}),document.addEventListener("click",i=>{e.contains(i.target)||(d(a,""),a.classList.remove("active"))}),e.addEventListener("submit",i=>{i.preventDefault()})}document.addEventListener("DOMContentLoaded",()=>{C(),j(),_(),E(),z(),V(),D()});
