import{p as e}from"./assets/main-Ch4GUXY0.js";import{S as u}from"./assets/vendor-B7et9L2b.js";function g(){h(),t("countertops",e.countertops.items),t("windowsills",e.windowsills.items),t("stairs",e.stairs.items),t("fireplaces",e.fireplaces.items),t("floors",e.floors.items),t("bathrooms",e.bathrooms.items),t("tiles",e.tiles.items),t("monuments",e.monuments.items),t("paving",e.paving.items),t("slabs",e.slabs.items),t("rosettes",e.rosettes.items)}function f(a){const s=document.createElement("div");s.className="portfolio-lightbox";const i=document.createElement("img");i.src=a,i.alt="Full size image",s.appendChild(i),document.body.appendChild(s),setTimeout(()=>s.classList.add("active"),10),s.addEventListener("click",()=>{s.classList.remove("active"),setTimeout(()=>s.remove(),300)})}function t(a,s){const i=`.${a}-slider`,l=document.querySelector(i);if(!l)return;const d=l.querySelector(".swiper-wrapper");s.forEach(o=>{const n=document.createElement("div");n.className="swiper-slide";const r=document.createElement("img");r.src=o.image,r.alt=o.title,r.loading="lazy",r.addEventListener("click",p=>{p.preventDefault(),f(o.image)});const m=document.createElement("div");m.className="portfolio-item-caption",m.textContent=o.title,n.appendChild(r),n.appendChild(m),d.appendChild(n)}),new u(i,{slidesPerView:3,spaceBetween:30,centeredSlides:!0,loop:!0,pagination:{el:`${i} .swiper-pagination`,clickable:!0},navigation:{nextEl:`${i} .swiper-button-next`,prevEl:`${i} .swiper-button-prev`},autoplay:{delay:5e3,disableOnInteraction:!1}});const c=l.closest(".portfolio-category");if(c&&!c.querySelector(".category-link-button")){const o=document.createElement("a");o.className="category-link-button",o.textContent="Перейти",o.href=`./product-categories.html?category=${a}`;const n=document.createElement("div");n.className="button-container",n.appendChild(o),c.appendChild(n)}}function h(){const a=new Image;a.src=e.countertops.items[0].image,a.onerror=()=>{console.log("Using placeholder images for development"),Object.keys(e).forEach(s=>{e[s].items&&e[s].items.forEach(i=>{i.image=`https://via.placeholder.com/800x500?text=${s}+image`})}),t("countertops",e.countertops.items),t("windowsills",e.windowsills.items),t("stairs",e.stairs.items),t("fireplaces",e.fireplaces.items),t("floors",e.floors.items),t("bathrooms",e.bathrooms.items),t("tiles",e.tiles.items),t("monuments",e.monuments.items),t("paving",e.paving.items),t("slabs",e.slabs.items),t("rosettes",e.rosettes.items)}}document.addEventListener("DOMContentLoaded",g);
//# sourceMappingURL=portfolio.js.map
