import{f}from"./assets/vendor-992cd48f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const a=document.querySelector("[data-start]"),m=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let i;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){new Date<o[0]?(i=o[0],console.log(i),a.disabled=!1):(u(),alert("Please choose a date in the future"))}};f("#datetime-picker",T);a.addEventListener("click",()=>{u();let o=i.getTime();const r=setInterval(()=>{const c=g(o-new Date),{days:s,hours:e,minutes:t,seconds:n}=c;m.innerHTML=s,y.innerHTML=e,h.innerHTML=t,p.innerHTML=n,o=o-100,console.log(o)},1e3);setTimeout(()=>clearInterval(r),o-new Date-100)});function u(){a.disabled=!0}function g(o){const t=Math.floor(o/864e5),n=Math.floor(o%864e5/36e5),l=Math.floor(o%864e5%36e5/6e4),d=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:n,minutes:l,seconds:d}}
//# sourceMappingURL=commonHelpers.js.map