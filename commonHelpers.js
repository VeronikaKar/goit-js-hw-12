import{i as m,a as g,S as b}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const p=document.querySelector(".loader");function a(t,e,s){m.show({iconUrl:t,titleColor:"White",titleSize:"24px",message:e,messageColor:"White",messageSize:"16px",backgroundColor:s,position:"topRight",timeout:3e3})}function v(){p.classList.remove("visually-hidden")}function f(){p.classList.add("visually-hidden")}function w(t){t.innerHTML=""}function h(t){return t.map(e=>`<li class="gallery-item">
    <a href="${e.largeImageURL}" data-lightbox="gallery-link">
      <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
    </a>
    <div class="gallery-info">
      <p><b>Likes:</b> ${e.likes}</p>
      <p><b>Views:</b> ${e.views}</p>
      <p><b>Comments:</b> ${e.comments}</p>
      <p><b>Downloads:</b> ${e.downloads}</p>
    </div></li>
  `).join("")}g.defaults.pixaBay="https://pixabay.com/api/";async function y(t,e){const s="43325485-b0026802577d8a210f4fcd054";return await g.get("https://pixabay.com/api/",{params:{key:s,q:t,image_type:"photo",orintation:"horizontal",safesearch:!0,page:e,per_page:15}})}const L="/goit-js-hw-12/assets/bi_x-octagon-06de2d57.svg",S="/goit-js-hw-12/assets/gold-svgrepo-com-d5a26969.svg",P="/goit-js-hw-12/assets/broadcast-svgrepo-com-a706cf0d.svg",x="/goit-js-hw-12/assets/9960966_error_warning_delete_problem_sign_icon-59657019.svg",I="/goit-js-hw-12/assets/loss-svgrepo-com-ec2c401a.svg",_="/goit-js-hw-12/assets/hot-air-balloon-svgrepo-com-f596c981.svg",M=document.querySelector(".form"),d=document.querySelector(".gallery"),l=document.querySelector(".btn-load-more"),j=new b(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"});M.addEventListener("submit",q);l.addEventListener("click",$);let i=1,u=null;async function q(t){t.preventDefault(),u=t.currentTarget.search.value.trim(),v(),l.classList.add("visually-hidden"),w(d),i=1;try{const{data:{hits:e,totalHits:s}}=await y(u,i);if(s>0&&a(S,`We found ${s} images `,"#32cd32"),e.length===0)return a(L,"Sorry,   there are no images matching your search query. Please try again!","#8b0000");const n=h(e);d.innerHTML=n,s>15&&(console.log(1),l.classList.remove("visually-hidden")),j.refresh()}catch(e){if(console.log(e.response.status),e.response.status===401)return a(P,"You are not authorized. Please try again!","#004242");if(e.response.status===404)return a(x,"You are not authorized. Please try again!","#b8b8b8");if(e.response.status===500)return a(I,"Internal server error. Please try again!","#5f9ea0")}finally{f()}}async function $(){i+=1;try{const{data:{hits:t,totalHits:e}}=await y(u,i);d.insertAdjacentHTML("beforeend",h(t)),l.classList.remove("visually-hidden");const{height:s}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"}),Math.ceil(e/15)===i&&(l.classList.add("visually-hidden"),a(_,"Sorry, there are no images.Thats all.","#96c8a2"))}catch(t){console.log(t.response.status)}finally{f()}}
//# sourceMappingURL=commonHelpers.js.map
