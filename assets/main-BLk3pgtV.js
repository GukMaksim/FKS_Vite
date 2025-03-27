const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sliders-DBy9L0G8.js","assets/vendor-CewXoDoy.js","assets/vendor-BoE8i44X.css","assets/catalog-utils-BsbcXxa5.js"])))=>i.map(i=>d[i]);
import{s as E,i as S,a as C,b as x}from"./sliders-DBy9L0G8.js";import{g as _,i as $,r as T,u as K,e as y,s as j}from"./catalog-utils-BsbcXxa5.js";import{I as k}from"./vendor-CewXoDoy.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();function R(){const e=document.querySelector(".menu-button"),n=document.querySelector(".menu-container"),o=document.body;if(!e||!n)return;e.addEventListener("click",t),document.addEventListener("click",s=>{!(n.contains(s.target)||e.contains(s.target))&&n.classList.contains("is-open")&&i()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&n.classList.contains("is-open")&&i()});function t(){const s=n.classList.toggle("is-open");e.setAttribute("aria-expanded",s),o.style.overflow=s?"hidden":""}function i(){n.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),o.style.overflow=""}}function F(){const e=window.location.pathname,n=document.querySelectorAll(".nav-link");n.forEach(o=>{o.classList.remove("current")}),n.forEach(o=>{const t=o.getAttribute("href");(t===e||t===`.${e}`||t===e.replace(/^\//,"./")||e.endsWith("/")&&t==="./"||e.endsWith("/index.html")&&t==="./")&&o.classList.add("current")})}const f={countertops:{id:"countertops",title:"Стільниці",image:new URL("/FKS_Vite/assets/countertop-FwgoXjdK.jpg",import.meta.url).href,description:"Стільниці з натурального каменю",items:[{id:"countertops-granite",title:"Стільниці з граніту",image:new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,description:"Гранітні стільниці – це ідеальне поєднання природної краси, міцності та практичності. ",description2:"Вони надають інтер’єру розкішного вигляду, зберігаючи при цьому високу функціональність та стійкість до впливу вологи, подряпин і температурних змін.",description3:"Ми пропонуємо індивідуальне виготовлення стільниць за вашими розмірами та побажаннями. Вибирайте форму, відтінок і тип обробки країв – і ми створимо для вас унікальний виріб, який доповнить ваш інтер’єр.",pics:[new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href]},{id:"countertops-marble",title:"Стільниці з мармуру",image:new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,description:"Мармурові стільниці – це ідеальне поєднання природної краси, міцності та практичності. ",description2:"Вони надають інтер’єру розкішного вигляду, зберігаючи при цьому високу функціональність та стійкість до впливу вологи, подряпин і температурних змін.",description3:"Ми пропонуємо індивідуальне виготовлення стільниць за вашими розмірами та побажаннями. Вибирайте форму, відтінок і тип обробки країв – і ми створимо для вас унікальний виріб, який доповнить ваш інтер’єр.",pics:[new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href]},{id:"countertops-quartzite",title:"Стільниці з кварциту",image:new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,description:"Стільниці з кварциту",description2:"",description3:""},{id:"countertops-onyx",title:"Стільниці з оніксу",image:new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,description:"Стільниці з оніксу",description2:"",description3:""}]},windowsills:{id:"windowsills",title:"Підвіконня",image:new URL("/FKS_Vite/assets/windowsill-DIZwQsam.jpg",import.meta.url).href,description:"Підвіконня з натурального каменю",items:[{id:"windowsills-granite",title:"Підвіконня з граніту",image:new URL("/FKS_Vite/assets/windowsill-1-CoCcsiAI.jpg",import.meta.url).href,description:"Підвіконня з граніту",description2:"",description3:""},{id:"windowsills-marble",title:"Підвіконня з мармуру",image:new URL("/FKS_Vite/assets/windowsill-2-5_N-8zob.jpg",import.meta.url).href,description:"Підвіконня з мармуру",description2:"",description3:""},{id:"windowsills-travertine",title:"Підвіконня з травертину",image:new URL("/FKS_Vite/assets/windowsill-3-BKr_6RJ0.jpg",import.meta.url).href,description:"Підвіконня з травертину",description2:"",description3:""},{id:"windowsills-onyx",title:"Підвіконня з оніксу",image:new URL("/FKS_Vite/assets/windowsill-4-BukGO0Ca.jpg",import.meta.url).href,description:"Підвіконня з оніксу",description2:"",description3:""}]},stairs:{id:"stairs",title:"Сходи",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з натурального каменю",items:[{id:"stairs-granite",title:"Сходи з граніту",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з граніту",description2:"",description3:""},{id:"stairs-marble",title:"Сходи з мармуру",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з мармуру",description2:"",description3:""}]}},U=Object.freeze(Object.defineProperty({__proto__:null,productCategories:f},Symbol.toStringTag,{value:"Module"}));function V(){const e=document.getElementById("product-gallery");if(!e)return;const n=e.querySelectorAll(".product-gallery-item"),o=document.getElementById("product-lightbox"),t=document.getElementById("lightbox-image"),i=document.querySelector(".lightbox-close"),s=document.querySelector(".lightbox-prev"),r=document.querySelector(".lightbox-next");let a=0;function c(l){const m=n[l].querySelector("img").src;t.src=m,o.style.display="flex",setTimeout(()=>{o.classList.add("active")},10),a=l}function h(){o.classList.remove("active"),setTimeout(()=>{o.style.display="none"},300)}function p(){a=(a-1+n.length)%n.length,c(a)}function d(){a=(a+1)%n.length,c(a)}n.forEach((l,u)=>{l.addEventListener("click",()=>c(u))}),i.addEventListener("click",h),s.addEventListener("click",p),r.addEventListener("click",d),o.addEventListener("click",function(l){l.target===o&&h()}),document.addEventListener("keydown",function(l){o.style.display==="flex"&&(l.key==="Escape"?h():l.key==="ArrowLeft"?p():l.key==="ArrowRight"&&d())})}function B(e=null,n=null){P(e,n),T(f,e,n,{renderItemDetails:(t,i,s)=>`
            <h1 class="section-title">${t.title}</h1>
            <div class="product-category-details">
                <div class="product-category-info">
                    <div class="product-main-content">
                        <div class="product-item-image-big">
                            <img src="${t.image}" alt="${t.title}" loading="lazy">
                        </div>
                        <div class="product-description-container">
                            <p class="product-category-description">${t.description}</p>
                            <p class="product-category-description">${t.description2}</p>
                            <p class="product-category-description">${t.description3}</p>
                        </div>
                    </div>
                    <div class="product-order-button-container">
                        <button class="btn btn-primary btn-calc pulse">ЗАМОВИТИ ПРОРАХУНОК</button>
                    </div>
                    
                    ${t.pics?`
                        <div class="product-gallery-section">
                            <h3 class="product-gallery-title">Фото ${t.title}:</h3>
                            <div class="product-gallery" id="product-gallery">
                                ${t.pics.map((r,a)=>`
                                    <div class="product-gallery-item" data-index="${a}">
                                        <img src="${r}" alt="${t.title} - фото ${a+1}" loading="lazy">
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    `:""}
                </div>
            </div>
            <a href="./products.html?category=${s}" class="btn btn-primary">Повернутися до ${i.title}</a>
            
            <!-- Product Lightbox -->
            <div id="product-lightbox" class="product-lightbox">
                <span class="lightbox-close">&times;</span>
                <img class="lightbox-image" id="lightbox-image">
                <div class="lightbox-nav">
                    <button class="lightbox-prev">&#10094;</button>
                    <button class="lightbox-next">&#10095;</button>
                </div>
            </div>
        `,renderCategory:(t,i)=>`
            <h2 class="section-title">${t.title}</h2>
            <div class="product-category-details">
                <div class="product-category-info">
                    <p class="product-category-description">${t.description}</p>
                </div>
                <div class="product-items-grid">
                    ${t.items.map(s=>`
                        <div class="product-item-card">
                            <a href="./products.html?category=${i}&item=${s.id}" class="product-item-link">
                                <div class="product-item-image">
                                    <img src="${s.image}" alt="${s.title}" loading="lazy">
                                </div>
                                <div class="product-item-info">
                                    <h3>${s.title}</h3>
                                </div>
                            </a>
                        </div>
                    `).join("")}
                </div>
            </div>
            <div class="product-order-button-container">
                        <button class="btn btn-primary btn-calc pulse">ЗАМОВИТИ ПРОРАХУНОК</button>
                    </div>
        `,renderAllCategories:t=>`
            <h1 class="section-title">Вироби з каменю</h1>
            <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
            <div class="product-categories-grid">
                ${Object.entries(t).map(([i,s])=>`
                    <div class="card">
                        <div class="card-image">
                            <img src="${s.image}" alt="${s.title}" loading="lazy">
                        </div>
                        <div class="card-info">
                            <h3 class="products-title">${s.title}</h3>
                            <p>${s.description}</p>
                            <a href="./products.html?category=${i}" class="btn btn-primary">Переглянути</a>
                        </div>
                    </div>
                `).join("")}
            </div>
        `,backUrl:"./products.html"})}function P(e,n){K(f,e,n,{baseTitle:"Вироби з каменю - ФКС",baseDescription:"Каталог виробів з природного каменю від ТОВ «ФКС» - стільниці, підвіконня, сходи, каміни та інші вироби",baseKeywords:"вироби з каменю, ФКС, природний камінь",itemTitleTemplate:"{itemTitle} - Вироби з каменю - ФКС",categoryTitleTemplate:"{categoryTitle} - Вироби з каменю - ФКС",catalogTitleTemplate:"{baseTitle}",itemDescriptionTemplate:"{itemTitle} - {itemDescription} Замовляйте {categoryTitle} від ФКС.",categoryDescriptionTemplate:"{categoryTitle} від ФКС - {categoryDescription} Замовляйте вироби з природного каменю.",catalogDescriptionTemplate:"Каталог виробів з природного каменю від ТОВ «ФКС» - стільниці, підвіконня, сходи, каміни та інші вироби",itemKeywordsTemplate:"{itemTitle}, {categoryTitle}, вироби з каменю, ФКС, природний камінь",categoryKeywordsTemplate:"{categoryTitle}, вироби з каменю, ФКС, природний камінь",catalogKeywordsTemplate:"вироби з каменю, стільниці, підвіконня, сходи, каміни, підлоги, вироби з природного каменю",typeParam:"category",itemParam:"item"})}function D(){const e=_({category:"category",item:"item"});$("/products.html")&&(B(e.category,e.item),V())}const I="modulepreload",N=function(e){return"/FKS_Vite/"+e},v={},L=function(n,o,t){let i=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.allSettled(o.map(c=>{if(c=N(c),c in v)return;v[c]=!0;const h=c.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":I,h||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),h)return new Promise((l,u)=>{d.addEventListener("load",l),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return n().catch(s)})};function O(){const e=document.querySelector(".breadcrumbs-list");if(!e)return;for(;e.children.length>1;)e.removeChild(e.lastChild);const n=window.location.pathname,o=window.location.search;if(n==="/"||n.endsWith("/index.html"))return;const t={"products.html":"Вироби з каменю","stones.html":"Каталог каменю","portfolio.html":"Портфоліо","contacts.html":"Контакти","about.html":"Про компанію"},i=n.split("/").pop();if(t[i]){const s=document.createElement("li");if(s.className="breadcrumbs-item",!o||i!=="stones.html"&&i!=="products.html"){const r=document.createElement("span");r.className="breadcrumbs-current",r.textContent=t[i],s.appendChild(r)}else{const r=document.createElement("a");r.href=`./${i}`,r.className="breadcrumbs-link",r.textContent=t[i],s.appendChild(r),q(e,i,o);return}e.appendChild(s)}}function q(e,n,o){const t=new URLSearchParams(o);let i="",s="",r=t.get("item");if(n==="products.html"){const a=document.createElement("li");a.className="breadcrumbs-item";const c=document.createElement("a");if(c.href="./products.html",c.className="breadcrumbs-link",c.textContent="Вироби з каменю",a.appendChild(c),e.appendChild(a),s=t.get("category"),!s)return;if(i={countertops:"Стільниці",windowsills:"Підвіконня",stairs:"Сходи",fireplaces:"Каміни",floors:"Підлоги",bathrooms:"Ванна кімната",tiles:"Плитка",monuments:"Пам'ятники",paving:"Бруківка",slabs:"Слеби",rosettes:"Розетки пано",entrances:"Вхідні групи",church:"Церковні роботи"}[s]||s,r){const p=document.createElement("li");p.className="breadcrumbs-item";const d=document.createElement("a");d.href=`./products.html?category=${s}`,d.className="breadcrumbs-link",d.textContent=i,p.appendChild(d),e.appendChild(p),L(async()=>{const{productCategories:l}=await Promise.resolve().then(()=>U);return{productCategories:l}},void 0).then(({productCategories:l})=>{if(l[s]){const u=l[s].items.find(m=>m.id===r);if(u){const m=document.createElement("li");m.className="breadcrumbs-item";const g=document.createElement("span");g.className="breadcrumbs-current",g.textContent=u.title,m.appendChild(g),e.appendChild(m)}}});return}}else if(n==="stones.html"){const a=document.createElement("li");a.className="breadcrumbs-item";const c=document.createElement("a");if(c.href="./stones.html",c.className="breadcrumbs-link",c.textContent="Каталог каменю",a.appendChild(c),e.appendChild(a),s=t.get("type"),!s)return;if(i={"granite-ukraine":"Граніт України",granite:"Граніт",marble:"Мармур",quartzite:"Кварцит",travertine:"Травертин",onyx:"Онікс",sandstone:"Піщаник"}[s]||s,r){const p=document.createElement("li");p.className="breadcrumbs-item";const d=document.createElement("a");d.href=`./stones.html?type=${s}`,d.className="breadcrumbs-link",d.textContent=i,p.appendChild(d),e.appendChild(p),L(async()=>{const{stoneTypes:l}=await import("./sliders-DBy9L0G8.js").then(u=>u.d);return{stoneTypes:l}},__vite__mapDeps([0,1,2,3])).then(({stoneTypes:l})=>{if(l[s]){const u=l[s].items.find(m=>m.id===r);if(u){const m=document.createElement("li");m.className="breadcrumbs-item";const g=document.createElement("span");g.className="breadcrumbs-current",g.textContent=u.title,m.appendChild(g),e.appendChild(m)}}});return}}if(i){const a=document.createElement("li");a.className="breadcrumbs-item";const c=document.createElement("span");c.className="breadcrumbs-current",c.textContent=i,a.appendChild(c),e.appendChild(a)}}function A(e){const n={stones:[],products:[]};return Object.entries(E).forEach(([o,t])=>{(t.title.toLowerCase().includes(e.toLowerCase())||t.description.toLowerCase().includes(e.toLowerCase()))&&n.stones.push({type:"category",title:t.title,description:t.description,image:t.image,url:`./stones.html?type=${o}`}),t.items.forEach(i=>{(i.title.toLowerCase().includes(e.toLowerCase())||i.description.toLowerCase().includes(e.toLowerCase()))&&n.stones.push({type:"item",title:i.title,description:i.description,image:i.image,url:`./stones.html?type=${o}&item=${i.id}`})})}),Object.entries(f).forEach(([o,t])=>{(t.title.toLowerCase().includes(e.toLowerCase())||t.description.toLowerCase().includes(e.toLowerCase()))&&n.products.push({type:"category",title:t.title,description:t.description,image:t.image,url:`./products.html?category=${o}`}),t.items.forEach(i=>{(i.title.toLowerCase().includes(e.toLowerCase())||i.description.toLowerCase().includes(e.toLowerCase()))&&n.products.push({type:"item",title:i.title,description:i.description,image:i.image,url:`./products.html?category=${o}`})})}),n}function z(e){const n=document.querySelector(".search-results");if(!n)return;let o="";e.stones.length===0&&e.products.length===0?o='<p class="no-results">Результатів пошуку не знайдено</p>':o=`
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
        `,y(n,o)}function G(){const e=document.querySelector(".search-form"),n=document.querySelector(".search-input");if(!e||!n){console.error("Елементи пошуку не знайдено");return}const o=document.createElement("div");o.className="search-results",e.appendChild(o);let t;n.addEventListener("input",i=>{const s=i.target.value.trim();clearTimeout(t),t=setTimeout(()=>{if(s.length>=2){const r=A(s);z(r),o.classList.add("active")}else y(o,""),o.classList.remove("active")},300)}),e.addEventListener("click",i=>{i.stopPropagation()}),document.addEventListener("click",i=>{e.contains(i.target)||(y(o,""),o.classList.remove("active"))}),e.addEventListener("submit",i=>{i.preventDefault()})}function Q(){document.querySelectorAll('input[type="tel"]').forEach(n=>{k(n,{mask:"+38 (000) 000-00-00",lazy:!1,placeholderChar:"_"})}),console.log("Phone input masks initialized")}function H(){const e=document.querySelector(".contacts-form"),n=document.querySelector(".consultation-form");e&&w(e,"contact"),n&&w(n,"consultation"),console.log("Form handlers initialized")}function w(e,n){e.addEventListener("submit",async o=>{if(o.preventDefault(),!e.checkValidity()){e.reportValidity();return}const t=new FormData(e),i={};t.append("formType",n);for(let[s,r]of t.entries())i[s]=r;i.recipient="maksim.guk@gmail.com";try{const s=e.querySelector('button[type="submit"]'),r=s.textContent;s.disabled=!0,s.textContent="Відправляємо...",i._captcha=!1,i._autoresponse="Дякуємо за ваше повідомлення! Ми зв'яжемося з вами найближчим часом.",i._template="table",i._subject=`Нове повідомлення: ${n}`,(await fetch("https://formsubmit.co/bcf45db3be53c06d24bc765c9cf47365",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)})).ok?(fetch("https://formsubmit.co/confirm/b4ad7bf2998d51f1f79ae45df30baa50"),b(e,"Дякуємо! Ваше повідомлення відправлено.","success"),e.reset()):b(e,"Виникла помилка при відправці. Спробуйте пізніше.","error"),s.disabled=!1,s.textContent=r}catch(s){console.error("Error sending form:",s),b(e,"Виникла помилка при відправці. Спробуйте пізніше.","error");const r=e.querySelector('button[type="submit"]');r.disabled=!1,r.textContent=originalBtnText}})}function b(e,n,o){let t=e.querySelector(".form-notification");t||(t=document.createElement("div"),t.className="form-notification",e.appendChild(t)),t.className=`form-notification ${o}`,t.textContent=n,t.style.display="block",setTimeout(()=>{t.style.display="none"},5e3)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".animate-on-scroll"),n=document.querySelectorAll(".stagger-item"),o=()=>{e.forEach(s=>{const r=s.getBoundingClientRect().top,a=window.innerHeight;r<a-100&&s.classList.add("visible")}),n.forEach((s,r)=>{const a=s.getBoundingClientRect().top,c=window.innerHeight;a<c-50&&setTimeout(()=>{s.classList.add("visible")},150*r)})},t=()=>{document.querySelectorAll(".hero-title, .hero-description, .hero-buttons").forEach(r=>{(r.classList.contains("fade-in")||r.classList.contains("slide-up"))&&setTimeout(()=>{r.style.opacity="1",r.style.transform="translateY(0)"},100)})};o(),t();let i;window.addEventListener("scroll",()=>{i||(i=setTimeout(()=>{o(),i=null},10))})});document.addEventListener("DOMContentLoaded",()=>{j(),R(),F(),S(),D(),G(),C(),O(),x(),Q(),H()});
