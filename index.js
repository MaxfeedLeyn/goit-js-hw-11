import{a as i,S as c,i as d}from"./assets/vendor-DQq26VV5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(r){return i.get("https://pixabay.com/api/",{params:{key:"53361470-387588d6f5d48c87f9e06e518",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function f(r){const o=document.querySelector(".gallery"),a=r.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="gallery-info-item">Likes <span>${e.likes}</span></p>
                <p class="gallery-info-item">Views <span>${e.views}</span></p>
                <p class="gallery-info-item">Comments <span>${e.comments}</span></p>
                <p class="gallery-info-item">Downloads <span>${e.downloads}</span></p>
            </div>
        </li>`).join("");o.insertAdjacentHTML("beforeend",a),new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function y(){const r=document.querySelector(".gallery");r.innerHTML=""}function p(){document.querySelector(".loader").classList.remove("visually-hidden")}function m(){document.querySelector(".loader").classList.add("visually-hidden")}const n=document.querySelector(".form"),g=document.querySelector(".form-input");n.addEventListener("submit",r=>{r.preventDefault(),y(),p(),u(g.value).then(o=>{o.data.hits.length===0?d.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):f(o.data.hits)}).catch(o=>{console.error("Error fetching images:",o)}).finally(()=>{m()}),n.reset()});
//# sourceMappingURL=index.js.map
