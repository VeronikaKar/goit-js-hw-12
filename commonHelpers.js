import{i as p,S as m}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const h=document.querySelector(".loader");function l(r,e,s){p.show({iconUrl:r,titleColor:"White",titleSize:"24px",message:e,messageColor:"White",messageSize:"16px",backgroundColor:s,position:"topRight",timeout:3e3})}function y(){h.classList.remove("visually-hidden")}function b(){h.classList.add("visually-hidden")}function L(r){r.innerHTML=""}function f(r){return r.map(e=>`<li class="gallery-item">
    <a href="${e.largeImageURL}" data-lightbox="gallery-link">
      <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
    </a>
    <div class="gallery-info">
      <p><b>Likes:</b> ${e.likes}</p>
      <p><b>Views:</b> ${e.views}</p>
      <p><b>Comments:</b> ${e.comments}</p>
      <p><b>Downloads:</b> ${e.downloads}</p>
    </div></li>
  `).join("")}function g(r,e){const s="43325485-b0026802577d8a210f4fcd054",t=`https://pixabay.com/api/?${new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15})}`;return fetch(t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const v="/goit-js-hw-12/assets/bi_x-octagon-06de2d57.svg",w="/goit-js-hw-12/assets/gold-svgrepo-com-d5a26969.svg",S="/goit-js-hw-12/assets/hot-air-balloon-svgrepo-com-f596c981.svg",P=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".btn-load-more"),M=new m(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"});P.addEventListener("submit",$);u.addEventListener("click",q);let n=1,d=null;function $(r){r.preventDefault(),d=r.currentTarget.search.value.trim(),y(),u.classList.add("visually-hidden"),L(c),n=1,g(d,n).then(e=>{if(e.totalHits>0&&l(w,`We found ${e.totalHits} images `,"#32cd32"),e.hits.length===0)return l(v,"Sorry,   there are no images matching your search query. Please try again!","#8b0000");const s=f(e.hits);c.innerHTML=s,M.refresh()}).catch(e=>{console.error("Error:",e)}).finally(()=>{b()})}function q(){n+=1,g(d,n).then(r=>{c.insertAdjacentHTML("beforeend",f(r.hits));const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),Math.ceil(r.totalHits/15)===n&&(u.classList.add("visually-hidden"),l(S,"Sorry, there are no images.Thats all.","#96c8a2"))})}
//# sourceMappingURL=commonHelpers.js.map
