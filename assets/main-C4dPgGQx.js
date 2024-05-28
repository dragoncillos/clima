(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=document.querySelector(".top-banner form"),d=document.querySelector(".top-banner input"),l=document.querySelector(".top-banner .msg"),h=document.querySelector(".ajax-section .cities"),g="bcb2904747995a67eeec3d4a72f343da";p.addEventListener("submit",a=>{a.preventDefault();const s=`https://api.openweathermap.org/data/2.5/weather?q=${d.value}&lang=es&appid=${g}&units=metric`;fetch(s).then(n=>n.json()).then(n=>{const{main:e,name:t,sys:o,weather:i,rain:u}=n,m=`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${i[0].icon}.svg`,c=document.createElement("li"),f=typeof u=="object"?`${u["1h"]}mm`:"";c.classList.add("city");const y=`
        <h2 class="city-name" data-name="${t},${o.country}">
          <span>${t}</span>
          <sup>${o.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(e.temp)}<sup>°C</sup></div>
        <div>Máx. ${e.temp_max.toFixed(1)}° Min. ${e.temp_min.toFixed(1)}°</div>
        <figure>
          <img class="city-icon" src=${m} alt=${i[0].main}>
          <figcaption>${i[0].description} <span>${f}</span></figcaption>
        </figure>
      `;c.innerHTML=y,h.appendChild(c)}).catch(()=>{l.textContent="Ciudad no encontrada 😩"}),l.textContent="",p.reset(),d.focus()});
