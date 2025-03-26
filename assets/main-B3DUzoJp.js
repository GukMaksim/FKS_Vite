import{S as j,N as E,P as U,A as R,E as K,I as F}from"./vendor-CewXoDoy.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();function V(){const t=document.querySelector(".menu-button"),i=document.querySelector(".menu-container"),a=document.body;if(!t||!i)return;t.addEventListener("click",e),document.addEventListener("click",r=>{!(i.contains(r.target)||t.contains(r.target))&&i.classList.contains("is-open")&&s()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&i.classList.contains("is-open")&&s()});function e(){const r=i.classList.toggle("is-open");t.setAttribute("aria-expanded",r),a.style.overflow=r?"hidden":""}function s(){i.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),a.style.overflow=""}}function x(){const t=window.location.pathname,i=document.querySelectorAll(".nav-link");i.forEach(a=>{a.classList.remove("current")}),i.forEach(a=>{const e=a.getAttribute("href");(e===t||e===`.${t}`||e===t.replace(/^\//,"./")||t.endsWith("/")&&e==="./"||t.endsWith("/index.html")&&e==="./")&&a.classList.add("current")})}const h={marble:{id:"marble",title:"Мармур",image:new URL("/FKS_Vite/assets/marble-CwLMy0qY.jpg",import.meta.url).href,description:"Мармур - це елегантний натуральний камінь, що формується протягом мільйонів років під впливом високих температур і тиску.",items:[{id:"marble-1",title:"Мармур 1",image:new URL("/FKS_Vite/assets/marble-1-DSpdXQCF.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"marble-2",title:"Мармур 2",image:new URL("/FKS_Vite/assets/marble-2-C3vf0YNe.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"marble-3",title:"Мармур 3",image:new URL("/FKS_Vite/assets/marble-3-DtrW2_yk.jpg",import.meta.url).href,description:"Мармур - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1}]},granite:{id:"granite",title:"Граніт",image:new URL("/FKS_Vite/assets/granite-CMC5QR09.jpg",import.meta.url).href,description:"Граніт - це природний камінь, який має глибокий та насичений зовнішній вигляд. Він має різні види та кольори, які відповідають різним природним властивостям та етапам розвитку.",items:[{id:"granite-baltic-brown",title:"Baltic Brown",image:new URL("/FKS_Vite/assets/granite-baltic-brown-CRi-aMvH.jpg",import.meta.url).href,description:"Цей граніт має теплий коричневий відтінок з характерними круглими візерунками, що надають йому унікального вигляду. Використовується для стільниць, підлогових покриттів та облицювання.",characteristics:{origin:"Фінляндія",color:"Коричневий з чорними та сірими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"granite-verde-ubatuba",title:"Verde Ubatuba",image:new URL("/FKS_Vite/assets/granite-verde-ubatuba-DCY7dmfW.jpeg",import.meta.url).href,description:"Цей граніт відомий своїм насиченим темно-зеленим кольором з дрібними золотистими вкрапленнями, що додають йому глибини. Часто використовується для стільниць, підвіконь та облицювання стін.",characteristics:{origin:"Бразилія",color:"Темно-зелений з дрібними золотистими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"granite-black-galaxy",title:"Black Galaxy",image:new URL("/FKS_Vite/assets/granite-black-galaxy-C-4Nv-GF.jpg",import.meta.url).href,description:"Цей граніт має глибокий чорний фон з дрібними золотистими та сріблястими вкрапленнями, що нагадують зоряне небо. Використовується для стільниць, підлог та декоративних елементів.",characteristics:{origin:"Індія",color:"Чорний з золотистими та сріблястими вкрапленнями",thickness:"20-30 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1}]},"granite-ukraine":{id:"granite-ukraine",title:"Граніт України",image:new URL("/FKS_Vite/assets/granite-ukraine-BdXwwtne.jpg",import.meta.url).href,description:"Граніт України - це природний камінь, який має різні види та кольори, які відповідають різним природним властивостям та етапам розвитку.",items:[{id:"granite-ukraine-tanskyi",title:'Граніт "Танський"',image:new URL("/FKS_Vite/assets/granite-ukraine-tanskyi-DY0OTmi7.jpg",import.meta.url).href,description:"Танський граніт видобувається в селищі Танське Черкаської області. Цей камінь має дрібнозернисту структуру та приємний сірий колір.",characteristics:{origin:"Україна",color:"сірий із зеленувато-блакитним відтінком",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"granite-ukraine-pivnichni_osnyky",title:'Граніт "Північні осники"',image:new URL("/FKS_Vite/assets/granite-ukraine-pivnichni_osnyky-Cuw7CttM.jpg",import.meta.url).href,description:"інформація про цей граніт обмежена",characteristics:{origin:"Україна",color:"немає даних",thickness:"немає даних",format:"Квадратний",price:"немає даних"},hit:!1},{id:"granite-ukraine-kapustyanskiy",title:'Граніт "Капустинський"',image:new URL("/FKS_Vite/assets/granite-ukraine-kapustyanskiy-pTgODTYa.jpg",import.meta.url).href,description:"Видобувається на Капустянському гранітному кар'єрі, відомий відмінними фізико-механічними властивостями та привабливим зовнішнім виглядом.",characteristics:{origin:"Україна",color:"немає даних",thickness:"немає даних",format:"Квадратний",price:"залежить від виробу та обробки"},hit:!1},{id:"granite-ukraine-pokostovka",title:'Граніт "Покостовка"',image:new URL("/FKS_Vite/assets/granite-ukraine-pokostovka-CGNpGuXp.jpg",import.meta.url).href,description:"Видобувається в селі Покостівка Житомирської області, відомий високою міцністю та естетичними якостями.",characteristics:{origin:"Україна",color:"сірий",thickness:"20-30 мм",format:"Квадратний",price:"від 1500 грн/м²"},hit:!1},{id:"granite-ukraine-didkovychy-kornynskyi",title:'Граніт "Дідковичі"',image:new URL("/FKS_Vite/assets/granite-ukraine-didkovychy-DSvkh-wQ.jpg",import.meta.url).href,description:"інформація про цей граніт обмежена",characteristics:{origin:"Україна",color:"немає даних",thickness:"немає даних",format:"Квадратний",price:"немає даних"},hit:!1},{id:"granite-ukraine-kornynskyi",title:'Граніт "Корнинський"',image:new URL("/FKS_Vite/assets/granite-ukraine-kornynskyi-CPr7knN0.jpg",import.meta.url).href,description:"інформація про цей граніт обмежена.",characteristics:{origin:"Україна",color:"немає даних",thickness:"немає даних",format:"Квадратний",price:"немає даних"},hit:!1},{id:"granite-ukraine-vasylivskyi",title:'Граніт "Василівський"',image:new URL("/FKS_Vite/assets/granite-ukraine-vasylivskyi-qWER7mhf.jpg",import.meta.url).href,description:"інформація про цей граніт обмежена.",characteristics:{origin:"Україна",color:"немає даних",thickness:"немає даних",format:"Квадратний",price:"немає даних"},hit:!1},{id:"granite-ukraine-chelnovskyi",title:'Граніт "Челновський"',image:new URL("/FKS_Vite/assets/granite-ukraine-chelnovskyi-CM9jNBbZ.jpg",import.meta.url).href,description:"інформація про цей граніт обмежена.",characteristics:{origin:"Україна",color:"немає даних",thickness:"немає даних",format:"Квадратний",price:"немає даних"},hit:!1},{id:"granite-ukraine-omelyanovskyi",title:'Граніт "Омеляновський"',image:new URL("/FKS_Vite/assets/granite-ukraine-omelyanovskyi-C2U3UujM.jpg",import.meta.url).href,description:"інформація про цей граніт обмежена.",characteristics:{origin:"Україна",color:"немає даних",thickness:"немає даних",format:"Квадратний",price:"немає даних"},hit:!1},{id:"granite-ukraine-tokivskyi",title:'Граніт "Токівський"',image:new URL("/FKS_Vite/assets/granite-ukraine-tokivskyi-BlMkCren.jpg",import.meta.url).href,description:"Видобувається в селі Ток Дніпропетровської області, має червоно-коричневий колір з темними вкрапленнями та дрібнозернисту структуру.",characteristics:{origin:"Україна",color:"червоний з коричневим відтінком та темними вкрапленнями",thickness:"немає даних",format:"Квадратний",price:"залежить від виробу та обробки"},hit:!1},{id:"granite-ukraine-zhadivskyi",title:'Граніт "Жадівський"',image:new URL("/FKS_Vite/assets/granite-ukraine-zhadivskyi-CRIwmNy4.jpg",import.meta.url).href,description:"Класичний граніт із рівномірною текстурою, чудово підходить для мощення, облицювання фасадів та внутрішніх приміщень. Дуже міцний і довговічний.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"granite-ukraine-leznyky",title:'Граніт "Лезники"',image:new URL("/FKS_Vite/assets/granite-ukraine-leznyky-DEX8_4a9.jpg",import.meta.url).href,description:"Класичний граніт із рівномірною текстурою, чудово підходить для мощення, облицювання фасадів та внутрішніх приміщень. Дуже міцний і довговічний.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"granite-ukraine-novoselivka",title:'Граніт "Новоселівка"',image:new URL("/FKS_Vite/assets/granite-ukraine-novoselivka-DPiMe9FN.jpg",import.meta.url).href,description:"Класичний граніт із рівномірною текстурою, чудово підходить для мощення, облицювання фасадів та внутрішніх приміщень. Дуже міцний і довговічний.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"granite-ukraine-starobabanskyi",title:'Граніт "Старобабанський"',image:new URL("/FKS_Vite/assets/granite-ukraine-starobabanskyi-C_5OJrfA.jpg",import.meta.url).href,description:"Класичний граніт із рівномірною текстурою, чудово підходить для мощення, облицювання фасадів та внутрішніх приміщень. Дуже міцний і довговічний.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"granite-ukraine-bukynskyi",title:'Граніт "Букинський"',image:new URL("/FKS_Vite/assets/granite-ukraine-bukynskyi-JgwJAupN.jpg",import.meta.url).href,description:"Класичний граніт із рівномірною текстурою, чудово підходить для мощення, облицювання фасадів та внутрішніх приміщень. Дуже міцний і довговічний.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"granite-ukraine-krupskyi",title:'Граніт "Крупський"',image:new URL("/FKS_Vite/assets/granite-ukraine-krupskyi-DzmP-72X.jpg",import.meta.url).href,description:"Класичний граніт із рівномірною текстурою, чудово підходить для мощення, облицювання фасадів та внутрішніх приміщень. Дуже міцний і довговічний.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1}]},onyx:{id:"onyx",title:"Онікс",image:new URL("/FKS_Vite/assets/onyx-CNkw8Evi.jpg",import.meta.url).href,description:"Онікс - це натуральний напівдорогоцінний камінь, який з давніх-давен відомий своєю надзвичайною красою й розмаїттям кольорів.",items:[{id:"onyx-1",title:"Онікс 1",image:new URL("/FKS_Vite/assets/onyx-CNkw8Evi.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"onyx-2",title:"Онікс 2",image:new URL("/FKS_Vite/assets/onyx-CNkw8Evi.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"onyx-3",title:"Онікс 3",image:new URL("/FKS_Vite/assets/onyx-CNkw8Evi.jpg",import.meta.url).href,description:"Онікс - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1}]},travertine:{id:"travertine",title:"Травертин",image:new URL("/FKS_Vite/assets/travertine-WTEyFNQr.jpg",import.meta.url).href,description:"Травертин, або вапняний туф, це гірська осадова порода, яка займає проміжне положення між вапняком і мармуром.",items:[{id:"travertine-1",title:"Травертин 1",image:new URL("/FKS_Vite/assets/travertine-WTEyFNQr.jpg",import.meta.url).href,description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"travertine-2",title:"Травертин 2",image:new URL("/FKS_Vite/assets/travertine-WTEyFNQr.jpg",import.meta.url).href,description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"travertine-3",title:"Травертин 3",image:new URL("/FKS_Vite/assets/travertine-WTEyFNQr.jpg",import.meta.url).href,description:"Травертин - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1}]},quartzite:{id:"quartzite",title:"Кварцит",image:new URL("/FKS_Vite/assets/quartzite-De3XwWi1.jpg",import.meta.url).href,description:"Камінь кварцит є одним із найтвердіших природних каменів. Завдяки такій винятковій твердості кварцит дуже стійкий до подряпин і зношування.",items:[{id:"quartzite-1",title:"Кварцит 1",image:new URL("/FKS_Vite/assets/quartzite-De3XwWi1.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"quartzite-2",title:"Кварцит 2",image:new URL("/FKS_Vite/assets/quartzite-De3XwWi1.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1},{id:"quartzite-3",title:"Кварцит 3",image:new URL("/FKS_Vite/assets/quartzite-De3XwWi1.jpg",import.meta.url).href,description:"Кварцит - це натуральний камінь, який має унікальну природну форму та характеристики.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!1}]},slabs:{id:"slabs",title:"Слеби",image:new URL("/FKS_Vite/assets/slabs-Cnlj2ffu.jpg",import.meta.url).href,description:"Слеби.",items:[{id:"slabs-1",title:"Слеби 1",image:new URL("/FKS_Vite/assets/slabs-1-BapRknTi.jpg",import.meta.url).href,description:"Слеби.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!0},{id:"slabs-2",title:"Слеби 2",image:new URL("/FKS_Vite/assets/slabs-2-anpNHFi6.jpg",import.meta.url).href,description:"Слеби.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!0},{id:"slabs-3",title:"Слеби 3",image:new URL("/FKS_Vite/assets/slabs-3-CvfckbKR.jpg",import.meta.url).href,description:"Слеби.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!0},{id:"slabs-4",title:"Слеби 4",image:new URL("/FKS_Vite/assets/slabs-4-COdAPFv9.jpg",import.meta.url).href,description:"Слеби.",characteristics:{origin:"Україна",color:"Світло-сірий із чорними вкрапленнями",thickness:"20-50 мм",format:"Квадратний",price:"від 1200 грн/м²"},hit:!0}]}},T=Object.freeze(Object.defineProperty({__proto__:null,stoneTypes:h},Symbol.toStringTag,{value:"Module"}));function L(t){const i=new URLSearchParams(window.location.search),a={};return Object.entries(t).forEach(([e,s])=>{a[e]=i.get(s)}),a}function S(t){const i=document.querySelector(t);return i||(console.error(`Container element not found: ${t}`),null)}function w(t,i){t&&(t.innerHTML=i)}function C(t){const i=window.location.pathname;return Array.isArray(t)?t.some(a=>i.includes(a)):i.includes(t)}function D(){const t=window.location.pathname;return t.includes("/index.html")||t==="/"||t.endsWith("/")}function b(t,i,a,e={}){var o,n,c;const s=S(".dataContainer");if(!s)return;let r="";if(i&&a&&t[i]){const p=t[i],m=p.items.find(l=>l.id===a);m?r=((o=e.renderItemDetails)==null?void 0:o.call(e,m,p,i))||"":r=`<p>Елемент не знайдено</p><a href="${e.backUrl}?type=${i}" class="back-link">Повернутися до ${p.title}</a>`}else if(i&&t[i]){const p=t[i];r=((n=e.renderCategory)==null?void 0:n.call(e,p,i))||""}else r=((c=e.renderAllCategories)==null?void 0:c.call(e,t))||"";w(s,r)}function _(t,i,a={}){const e=S(i);if(!e)return;const r=Object.entries(t).slice(0,a.limit||6).map(([o,n])=>{var c;return((c=a.renderMainPageItem)==null?void 0:c.call(a,n,o))||""}).join("");w(e,r)}function v({title:t=null,description:i=null,keywords:a=null,ogTitle:e=null,ogDescription:s=null,ogImage:r=null,ogUrl:o=null}){if(t&&(document.title=t),i){let n=document.querySelector('meta[name="description"]');n||(n=document.createElement("meta"),n.setAttribute("name","description"),document.head.appendChild(n)),n.setAttribute("content",i)}if(a){let n=document.querySelector('meta[name="keywords"]');n||(n=document.createElement("meta"),n.setAttribute("name","keywords"),document.head.appendChild(n)),n.setAttribute("content",a)}if(e){let n=document.querySelector('meta[property="og:title"]');n||(n=document.createElement("meta"),n.setAttribute("property","og:title"),document.head.appendChild(n)),n.setAttribute("content",e)}if(s){let n=document.querySelector('meta[property="og:description"]');n||(n=document.createElement("meta"),n.setAttribute("property","og:description"),document.head.appendChild(n)),n.setAttribute("content",s)}if(r){let n=document.querySelector('meta[property="og:image"]');n||(n=document.createElement("meta"),n.setAttribute("property","og:image"),document.head.appendChild(n)),n.setAttribute("content",r)}if(o){let n=document.querySelector('meta[property="og:url"]');n||(n=document.createElement("meta"),n.setAttribute("property","og:url"),document.head.appendChild(n)),n.setAttribute("content",o)}}function P(){let t=document.querySelector('meta[property="og:type"]');t||(t=document.createElement("meta"),t.setAttribute("property","og:type"),t.setAttribute("content","website"),document.head.appendChild(t));let i=document.querySelector('meta[property="og:site_name"]');i||(i=document.createElement("meta"),i.setAttribute("property","og:site_name"),i.setAttribute("content","ФКС - Вироби з природного каменю"),document.head.appendChild(i));let a=document.querySelector('meta[name="twitter:card"]');a||(a=document.createElement("meta"),a.setAttribute("name","twitter:card"),a.setAttribute("content","summary_large_image"),document.head.appendChild(a))}function M(t=null,i=null){N(t,i),b(h,t,i,{renderItemDetails:(e,s,r)=>`
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
            <a href="./stones.html?type=${r}" class="btn btn-primary">Повернутися до ${s.title}</a>
        `,renderCategory:(e,s)=>`
            <h1 class="section-title">${e.title}</h1>
            <div class="stone-variants-grid">
                ${e.items.map(r=>`
                    <div class="stone-variant-card">
                        <a href="./stones.html?type=${s}&item=${r.id}" class="stone-variant-link">
                            <div class="stone-variant-image">
                                <img src="${r.image}" alt="${r.title}" />
                            </div>
                            <div class="stone-variant-info">
                                <h4>${r.title}</h4>
                                <p>${r.characteristics.price}</p>
                            </div>
                        </a>
                    </div>
                `).join("")}
            </div>
        `,renderAllCategories:e=>`
            <h1 class="section-title">Каталог каменю</h1>
            <div class="stone-types-grid">
                ${Object.entries(e).map(([s,r])=>`
                    <div class="stone-type-card">
                        <div class="stone-type-image">
                            <img src="${r.image}" alt="${r.title}" />
                        </div>
                        <div class="stone-type-info">
                            <h3>${r.title}</h3>
                            <p>${r.description}</p>
                            <a href="./stones.html?type=${s}" class="btn btn-primary">Переглянути</a>
                        </div>
                    </div>
                `).join("")}
            </div>
        `,backUrl:"./stones.html"})}function A(){_(h,".stone-types-grid",{renderMainPageItem:(i,a)=>`
            <div class="stone-type-card">
                <div class="stone-type-image">
                    <img src="${i.image}" alt="${i.title}" loading="lazy" />
                </div>
                <div class="stone-type-info">
                    <h3>${i.title}</h3>
                    <p>${i.description}</p>
                    <a href="./stones.html?type=${a}" class="btn btn-secondary">Переглянути</a>
                </div>
            </div>
        `})}function N(t,i){var e;const a=window.location.origin+window.location.pathname;if(t&&i&&h[t]){const s=h[t],r=s.items.find(o=>o.id===i);r&&v({title:`${r.title} - Каталог каменю - ФКС`,description:`${r.title} - ${r.description.substring(0,150)}... Замовляйте ${s.title.toLowerCase()} від ФКС.`,keywords:`${r.title}, ${s.title}, природний камінь, ФКС, ${((e=r.characteristics)==null?void 0:e.color)||""}`,ogTitle:`${r.title} - ФКС`,ogDescription:r.description.substring(0,200),ogImage:r.image,ogUrl:`${a}?type=${t}&item=${i}`})}else if(t&&h[t]){const s=h[t];v({title:`${s.title} - Каталог каменю - ФКС`,description:`Каталог ${s.title.toLowerCase()} від ФКС. ${s.description.substring(0,150)}...`,keywords:`${s.title}, природний камінь, ФКС, каталог каменю`,ogTitle:`${s.title} - ФКС`,ogDescription:s.description.substring(0,200),ogImage:s.image,ogUrl:`${a}?type=${t}`})}else v({title:"Каталог каменю - ФКС",description:"Каталог природного каменю від ТОВ «ФКС» - граніт, мармур, онікс, травертин та інші види каменю",keywords:"каталог каменю, природний камінь, граніт, мармур, онікс, травертин, кварцит, піщаник",ogTitle:"Каталог каменю - ФКС",ogDescription:"Широкий вибір природного каменю найвищої якості: граніт, мармур, онікс, травертин та інші види каменю для вашого інтер'єру та екстер'єру.",ogImage:`${window.location.origin}/img/logo.png`,ogUrl:a})}function q(){const t=L({type:"type",item:"item"});C("/stones.html")?M(t.type,t.item):D()&&A()}const y={countertops:{id:"countertops",title:"Стільниці",image:new URL("/FKS_Vite/assets/countertop-FwgoXjdK.jpg",import.meta.url).href,description:"Стільниці з натурального каменю",items:[{id:"countertops-granite",title:"Стільниці з граніту",image:new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,description:"Гранітні стільниці – це ідеальне поєднання природної краси, міцності та практичності. ",description2:"Вони надають інтер’єру розкішного вигляду, зберігаючи при цьому високу функціональність та стійкість до впливу вологи, подряпин і температурних змін.",description3:"Ми пропонуємо індивідуальне виготовлення стільниць за вашими розмірами та побажаннями. Вибирайте форму, відтінок і тип обробки країв – і ми створимо для вас унікальний виріб, який доповнить ваш інтер’єр.",pics:[new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href]},{id:"countertops-marble",title:"Стільниці з мармуру",image:new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,description:"Мармурові стільниці – це ідеальне поєднання природної краси, міцності та практичності. ",description2:"Вони надають інтер’єру розкішного вигляду, зберігаючи при цьому високу функціональність та стійкість до впливу вологи, подряпин і температурних змін.",description3:"Ми пропонуємо індивідуальне виготовлення стільниць за вашими розмірами та побажаннями. Вибирайте форму, відтінок і тип обробки країв – і ми створимо для вас унікальний виріб, який доповнить ваш інтер’єр.",pics:[new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-1-KLBEDEpo.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-2-DKQg-xQG.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href]},{id:"countertops-quartzite",title:"Стільниці з кварциту",image:new URL("/FKS_Vite/assets/countertop-3-iGnIXLxT.jpg",import.meta.url).href,description:"Стільниці з кварциту",description2:"",description3:""},{id:"countertops-onyx",title:"Стільниці з оніксу",image:new URL("/FKS_Vite/assets/countertop-4-BeBs_vd8.jpg",import.meta.url).href,description:"Стільниці з оніксу",description2:"",description3:""}]},windowsills:{id:"windowsills",title:"Підвіконня",image:new URL("/FKS_Vite/assets/windowsill-DIZwQsam.jpg",import.meta.url).href,description:"Підвіконня з натурального каменю",items:[{id:"windowsills-granite",title:"Підвіконня з граніту",image:new URL("/FKS_Vite/assets/windowsill-1-CoCcsiAI.jpg",import.meta.url).href,description:"Підвіконня з граніту",description2:"",description3:""},{id:"windowsills-marble",title:"Підвіконня з мармуру",image:new URL("/FKS_Vite/assets/windowsill-2-5_N-8zob.jpg",import.meta.url).href,description:"Підвіконня з мармуру",description2:"",description3:""},{id:"windowsills-travertine",title:"Підвіконня з травертину",image:new URL("/FKS_Vite/assets/windowsill-3-BKr_6RJ0.jpg",import.meta.url).href,description:"Підвіконня з травертину",description2:"",description3:""},{id:"windowsills-onyx",title:"Підвіконня з оніксу",image:new URL("/FKS_Vite/assets/windowsill-4-BukGO0Ca.jpg",import.meta.url).href,description:"Підвіконня з оніксу",description2:"",description3:""}]},stairs:{id:"stairs",title:"Сходи",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з натурального каменю",items:[{id:"stairs-granite",title:"Сходи з граніту",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з граніту",description2:"",description3:""},{id:"stairs-marble",title:"Сходи з мармуру",image:new URL("/FKS_Vite/assets/stairs-DTHb4-bN.jpg",import.meta.url).href,description:"Сходи з мармуру",description2:"",description3:""}]}},B=Object.freeze(Object.defineProperty({__proto__:null,productCategories:y},Symbol.toStringTag,{value:"Module"}));function O(){const t=document.getElementById("product-gallery");if(!t)return;const i=t.querySelectorAll(".product-gallery-item"),a=document.getElementById("product-lightbox"),e=document.getElementById("lightbox-image"),s=document.querySelector(".lightbox-close"),r=document.querySelector(".lightbox-prev"),o=document.querySelector(".lightbox-next");let n=0;function c(d){const g=i[d].querySelector("img").src;e.src=g,a.style.display="flex",setTimeout(()=>{a.classList.add("active")},10),n=d}function p(){a.classList.remove("active"),setTimeout(()=>{a.style.display="none"},300)}function m(){n=(n-1+i.length)%i.length,c(n)}function l(){n=(n+1)%i.length,c(n)}i.forEach((d,u)=>{d.addEventListener("click",()=>c(u))}),s.addEventListener("click",p),r.addEventListener("click",m),o.addEventListener("click",l),a.addEventListener("click",function(d){d.target===a&&p()}),document.addEventListener("keydown",function(d){a.style.display==="flex"&&(d.key==="Escape"?p():d.key==="ArrowLeft"?m():d.key==="ArrowRight"&&l())})}function I(t=null,i=null){z(t,i),b(y,t,i,{renderItemDetails:(e,s,r)=>`
            <h1 class="section-title">${e.title}</h1>
            <div class="product-category-details">
                <div class="product-category-info">
                    <div class="product-main-content">
                        <div class="product-item-image-big">
                            <img src="${e.image}" alt="${e.title}" loading="lazy">
                        </div>
                        <div class="product-description-container">
                            <p class="product-category-description">${e.description}</p>
                            <p class="product-category-description">${e.description2}</p>
                            <p class="product-category-description">${e.description3}</p>
                        </div>
                    </div>
                    ${e.pics?`
                        <div class="product-gallery-section">
                            <h3 class="product-gallery-title">Фото ${e.title}:</h3>
                            <div class="product-gallery" id="product-gallery">
                                ${e.pics.map((o,n)=>`
                                    <div class="product-gallery-item" data-index="${n}">
                                        <img src="${o}" alt="${e.title} - фото ${n+1}" loading="lazy">
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    `:""}
                </div>
            </div>
            <a href="./products.html?category=${r}" class="btn btn-primary">Повернутися до ${s.title}</a>
            
            <!-- Product Lightbox -->
            <div id="product-lightbox" class="product-lightbox">
                <span class="lightbox-close">&times;</span>
                <img class="lightbox-image" id="lightbox-image">
                <div class="lightbox-nav">
                    <button class="lightbox-prev">&#10094;</button>
                    <button class="lightbox-next">&#10095;</button>
                </div>
            </div>
        `,renderCategory:(e,s)=>`
            <h2>${e.title}</h2>
            <div class="product-category-details">
                <div class="product-category-info">
                    <p class="product-category-description">${e.description}</p>
                </div>
                <div class="product-items-grid">
                    ${e.items.map(r=>`
                        <div class="product-item-card">
                            <a href="./products.html?category=${s}&item=${r.id}" class="product-item-link">
                                <div class="product-item-image">
                                    <img src="${r.image}" alt="${r.title}" loading="lazy">
                                </div>
                                <div class="product-item-info">
                                    <h3>${r.title}</h3>
                                </div>
                            </a>
                        </div>
                    `).join("")}
                </div>
            </div>
        `,renderAllCategories:e=>`
            <h1 class="section-title">Вироби з каменю</h1>
            <p class="section-description">Широкий асортимент виробів з натурального каменю найвищої якості</p>
            <div class="product-categories-grid">
                ${Object.entries(e).map(([s,r])=>`
                    <div class="product-category-card">
                        <div class="product-category-image">
                            <img src="${r.image}" alt="${r.title}" loading="lazy">
                        </div>
                        <div class="product-category-content">
                            <h3>${r.title}</h3>
                            <p>${r.description}</p>
                            <a href="./products.html?category=${s}" class="btn btn-primary">Переглянути</a>
                        </div>
                    </div>
                `).join("")}
            </div>
        `,backUrl:"./products.html"})}function z(t,i){const a=window.location.origin+window.location.pathname;if(t&&i&&y[t]){const e=y[t],s=e.items.find(r=>r.id===i);s&&v({title:`${s.title} - Вироби з каменю - ФКС`,description:`${s.title} - ${s.description.substring(0,150)}... Замовляйте ${e.title.toLowerCase()} від ФКС.`,keywords:`${s.title}, ${e.title}, вироби з каменю, ФКС, природний камінь`,ogTitle:`${s.title} - ФКС`,ogDescription:s.description.substring(0,200),ogImage:s.image,ogUrl:`${a}?category=${t}&item=${i}`})}else if(t&&y[t]){const e=y[t];v({title:`${e.title} - Вироби з каменю - ФКС`,description:`${e.title} від ФКС - ${e.description.substring(0,150)}... Замовляйте вироби з природного каменю.`,keywords:`${e.title}, вироби з каменю, ФКС, природний камінь`,ogTitle:`${e.title} - ФКС`,ogDescription:e.description.substring(0,200),ogImage:e.image,ogUrl:`${a}?category=${t}`})}else v({title:"Вироби з каменю - ФКС",description:"Каталог виробів з природного каменю від ТОВ «ФКС» - стільниці, підвіконня, сходи, каміни та інші вироби",keywords:"вироби з каменю, стільниці, підвіконня, сходи, каміни, підлоги, вироби з природного каменю",ogTitle:"Вироби з каменю - ФКС",ogDescription:"Широкий асортимент виробів з натурального каменю найвищої якості для вашого інтер'єру та екстер'єру.",ogImage:`${window.location.origin}/img/logo.png`,ogUrl:a})}function W(){const t=L({category:"category",item:"item"});C("/products.html")&&(I(t.category,t.item),O())}const Q="modulepreload",G=function(t){return"/FKS_Vite/"+t},k={},$=function(i,a,e){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),n=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(a.map(c=>{if(c=G(c),c in k)return;k[c]=!0;const p=c.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const l=document.createElement("link");if(l.rel=p?"stylesheet":Q,p||(l.as="script"),l.crossOrigin="",l.href=c,n&&l.setAttribute("nonce",n),document.head.appendChild(l),p)return new Promise((d,u)=>{l.addEventListener("load",d),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return s.then(o=>{for(const n of o||[])n.status==="rejected"&&r(n.reason);return i().catch(r)})};function X(){const t=document.querySelector(".breadcrumbs-list");if(!t)return;for(;t.children.length>1;)t.removeChild(t.lastChild);const i=window.location.pathname,a=window.location.search;if(i==="/"||i.endsWith("/index.html"))return;const e={"products.html":"Вироби з каменю","stones.html":"Каталог каменю","portfolio.html":"Портфоліо","contacts.html":"Контакти","about.html":"Про компанію"},s=i.split("/").pop();if(e[s]){const r=document.createElement("li");if(r.className="breadcrumbs-item",!a||s!=="stones.html"&&s!=="products.html"){const o=document.createElement("span");o.className="breadcrumbs-current",o.textContent=e[s],r.appendChild(o)}else{const o=document.createElement("a");o.href=`./${s}`,o.className="breadcrumbs-link",o.textContent=e[s],r.appendChild(o),H(t,s,a);return}t.appendChild(r)}}function H(t,i,a){const e=new URLSearchParams(a);let s="",r="",o=e.get("item");if(i==="products.html"){const n=document.createElement("li");n.className="breadcrumbs-item";const c=document.createElement("a");if(c.href="./products.html",c.className="breadcrumbs-link",c.textContent="Вироби з каменю",n.appendChild(c),t.appendChild(n),r=e.get("category"),!r)return;if(s={countertops:"Стільниці",windowsills:"Підвіконня",stairs:"Сходи",fireplaces:"Каміни",floors:"Підлоги",bathrooms:"Ванна кімната",tiles:"Плитка",monuments:"Пам'ятники",paving:"Бруківка",slabs:"Слеби",rosettes:"Розетки пано",entrances:"Вхідні групи",church:"Церковні роботи"}[r]||r,o){const m=document.createElement("li");m.className="breadcrumbs-item";const l=document.createElement("a");l.href=`./products.html?category=${r}`,l.className="breadcrumbs-link",l.textContent=s,m.appendChild(l),t.appendChild(m),$(async()=>{const{productCategories:d}=await Promise.resolve().then(()=>B);return{productCategories:d}},void 0).then(({productCategories:d})=>{if(d[r]){const u=d[r].items.find(g=>g.id===o);if(u){const g=document.createElement("li");g.className="breadcrumbs-item";const f=document.createElement("span");f.className="breadcrumbs-current",f.textContent=u.title,g.appendChild(f),t.appendChild(g)}}});return}}else if(i==="stones.html"){const n=document.createElement("li");n.className="breadcrumbs-item";const c=document.createElement("a");if(c.href="./stones.html",c.className="breadcrumbs-link",c.textContent="Каталог каменю",n.appendChild(c),t.appendChild(n),r=e.get("type"),!r)return;if(s={"granite-ukraine":"Граніт України",granite:"Граніт",marble:"Мармур",quartzite:"Кварцит",travertine:"Травертин",onyx:"Онікс",sandstone:"Піщаник"}[r]||r,o){const m=document.createElement("li");m.className="breadcrumbs-item";const l=document.createElement("a");l.href=`./stones.html?type=${r}`,l.className="breadcrumbs-link",l.textContent=s,m.appendChild(l),t.appendChild(m),$(async()=>{const{stoneTypes:d}=await Promise.resolve().then(()=>T);return{stoneTypes:d}},void 0).then(({stoneTypes:d})=>{if(d[r]){const u=d[r].items.find(g=>g.id===o);if(u){const g=document.createElement("li");g.className="breadcrumbs-item";const f=document.createElement("span");f.className="breadcrumbs-current",f.textContent=u.title,g.appendChild(f),t.appendChild(g)}}});return}}if(s){const n=document.createElement("li");n.className="breadcrumbs-item";const c=document.createElement("span");c.className="breadcrumbs-current",c.textContent=s,n.appendChild(c),t.appendChild(n)}}function Y(){new j(".hero-slider",{modules:[E,U,R,K],effect:"fade",fadeEffect:{crossFade:!0},loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".hero-slider-pagination",clickable:!0},navigation:{nextEl:".hero-slider-button-next",prevEl:".hero-slider-button-prev"}})}function J(t){const i={stones:[],products:[]};return Object.entries(h).forEach(([a,e])=>{(e.title.toLowerCase().includes(t.toLowerCase())||e.description.toLowerCase().includes(t.toLowerCase()))&&i.stones.push({type:"category",title:e.title,description:e.description,image:e.image,url:`./stones.html?type=${a}`}),e.items.forEach(s=>{(s.title.toLowerCase().includes(t.toLowerCase())||s.description.toLowerCase().includes(t.toLowerCase()))&&i.stones.push({type:"item",title:s.title,description:s.description,image:s.image,url:`./stones.html?type=${a}&item=${s.id}`})})}),Object.entries(y).forEach(([a,e])=>{(e.title.toLowerCase().includes(t.toLowerCase())||e.description.toLowerCase().includes(t.toLowerCase()))&&i.products.push({type:"category",title:e.title,description:e.description,image:e.image,url:`./products.html?category=${a}`}),e.items.forEach(s=>{(s.title.toLowerCase().includes(t.toLowerCase())||s.description.toLowerCase().includes(t.toLowerCase()))&&i.products.push({type:"item",title:s.title,description:s.description,image:s.image,url:`./products.html?category=${a}`})})}),i}function Z(t){const i=document.querySelector(".search-results");if(!i)return;let a="";t.stones.length===0&&t.products.length===0?a='<p class="no-results">Результатів пошуку не знайдено</p>':a=`
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
        `,w(i,a)}function ee(){const t=document.querySelector(".search-form"),i=document.querySelector(".search-input");if(!t||!i){console.error("Елементи пошуку не знайдено");return}const a=document.createElement("div");a.className="search-results",t.appendChild(a);let e;i.addEventListener("input",s=>{const r=s.target.value.trim();clearTimeout(e),e=setTimeout(()=>{if(r.length>=2){const o=J(r);Z(o),a.classList.add("active")}else w(a,""),a.classList.remove("active")},300)}),t.addEventListener("click",s=>{s.stopPropagation()}),document.addEventListener("click",s=>{t.contains(s.target)||(w(a,""),a.classList.remove("active"))}),t.addEventListener("submit",s=>{s.preventDefault()})}class te{constructor(i,a){this.catalogData=i,this.catalogType=a,this.baseUrl=window.location.origin+window.location.pathname}updateMetaTags(i,a){i&&a&&this.catalogData[i]?this.updateItemMetaTags(i,a):i&&this.catalogData[i]?this.updateCategoryMetaTags(i):this.updateDefaultMetaTags()}updateItemMetaTags(i,a){}updateCategoryMetaTags(i){}updateDefaultMetaTags(){}renderCatalog(i=null,a=null){this.updateMetaTags(i,a);const e=this.getRenderOptions(i,a);b(this.catalogData,i,a,e)}getRenderOptions(i,a){return{}}renderMainPageCatalog(i,a={}){_(this.catalogData,i,a)}}class ie extends te{constructor(){super(h,"stones")}updateItemMetaTags(i,a){var r;const e=this.catalogData[i],s=e.items.find(o=>o.id===a);s&&updateMetaTags({title:`${s.title} - Каталог каменю - ФКС`,description:`${s.title} - ${s.description.substring(0,150)}... Замовляйте ${e.title.toLowerCase()} від ФКС.`,keywords:`${s.title}, ${e.title}, природний камінь, ФКС, ${((r=s.characteristics)==null?void 0:r.color)||""}`,ogTitle:`${s.title} - ФКС`,ogDescription:s.description.substring(0,200),ogImage:s.image,ogUrl:`${this.baseUrl}?type=${i}&item=${a}`})}updateCategoryMetaTags(i){const a=this.catalogData[i];updateMetaTags({title:`${a.title} - Каталог каменю - ФКС`,description:`Каталог ${a.title.toLowerCase()} від ФКС. ${a.description.substring(0,150)}...`,keywords:`${a.title}, природний камінь, ФКС, каталог каменю`,ogTitle:`${a.title} - ФКС`,ogDescription:a.description.substring(0,200),ogImage:a.image,ogUrl:`${this.baseUrl}?type=${i}`})}updateDefaultMetaTags(){updateMetaTags({title:"Каталог каменю - ФКС",description:"Каталог природного каменю від ТОВ «ФКС» - граніт, мармур, онікс, травертин та інші види каменю",keywords:"каталог каменю, природний камінь, граніт, мармур, онікс, травертин, кварцит, піщаник",ogTitle:"Каталог каменю - ФКС",ogDescription:"Широкий вибір природного каменю найвищої якості: граніт, мармур, онікс, травертин та інші види каменю для вашого інтер'єру та екстер'єру.",ogImage:`${window.location.origin}/img/logo.png`,ogUrl:this.baseUrl})}getRenderOptions(i,a){return{renderItemDetails:(e,s,r)=>`
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
            <a href="./stones.html?type=${r}" class="btn btn-primary">Повернутися до ${s.title}</a>
        `,renderCategory:(e,s)=>`
            <h1 class="section-title">${e.title}</h1>
            <div class="stone-variants-grid">
                ${e.items.map(r=>`
                    <div class="stone-variant-card">
                        <a href="./stones.html?type=${s}&item=${r.id}" class="stone-variant-link">
                            <div class="stone-variant-image">
                                <img src="${r.image}" alt="${r.title}" />
                            </div>
                            <div class="stone-variant-info">
                                <h4>${r.title}</h4>
                                <p>${r.characteristics.price}</p>
                            </div>
                        </a>
                    </div>
                `).join("")}
            </div>
        `,renderAllCategories:e=>`
            <h1 class="section-title">Каталог каменю</h1>
            <div class="stone-types-grid">
                ${Object.entries(e).map(([s,r])=>`
                    <div class="stone-type-card">
                        <div class="stone-type-image">
                            <img src="${r.image}" alt="${r.title}" />
                        </div>
                        <div class="stone-type-info">
                            <h3>${r.title}</h3>
                            <p>${r.description}</p>
                            <a href="./stones.html?type=${s}" class="btn btn-primary">Переглянути</a>
                        </div>
                    </div>
                `).join("")}
            </div>
        `,backUrl:"./stones.html"}}getMainPageRenderOptions(){return{renderMainPageItem:(i,a)=>`
            <div class="stone-type-card">
                <div class="stone-type-image">
                    <img src="${i.image}" alt="${i.title}" loading="lazy" />
                </div>
                <div class="stone-type-info">
                    <h3>${i.title}</h3>
                    <p>${i.description}</p>
                    <a href="./stones.html?type=${a}" class="btn btn-secondary">Переглянути</a>
                </div>
            </div>
        `}}renderMainPage(){this.renderMainPageCatalog(".stone-types-grid",this.getMainPageRenderOptions())}getHitProducts(){const i=[];return Object.entries(this.catalogData).forEach(([a,e])=>{e.items.forEach(s=>{s.hit&&i.push({...s,type:a,category:e.title})})}),i}}const se=new ie;function re(t){const i=document.querySelector(".hits-track");if(!i)return;const a=t.map(e=>`
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
    `).join("");i.innerHTML=a}function ae(){const t=document.querySelector(".hits-track"),i=document.querySelector(".prev-slide"),a=document.querySelector(".next-slide");if(!t||!i||!a)return;let e=0,s=4;function r(){window.innerWidth<=767?s=1:window.innerWidth<=991?s=2:window.innerWidth<=1199?s=3:s=4}function o(){const n=t.querySelector(".hit-card").offsetWidth+24;t.style.transform=`translateX(-${e*n}px)`}i.addEventListener("click",()=>{e>0&&(e--,o())}),a.addEventListener("click",()=>{const n=t.children.length;e<n-s&&(e++,o())}),window.addEventListener("resize",()=>{r(),e=0,o()}),r()}function ne(){const t=se.getHitProducts();t.length>0&&(re(t),ae())}function oe(){document.querySelectorAll('input[type="tel"]').forEach(i=>{F(i,{mask:"+38 (000) 000-00-00",lazy:!1,placeholderChar:"_"})}),console.log("Phone input masks initialized")}document.addEventListener("DOMContentLoaded",()=>{P(),V(),x(),q(),W(),ee(),ne(),X(),Y(),oe()});export{v as u};
