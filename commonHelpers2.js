import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as s}from"./assets/vendor-651d7991.js";const t=document.querySelector(".form"),i=t.querySelector(".js-delay");let r;t.addEventListener("click",e=>{e.target.type==="radio"&&(r=e.target.value)});t.addEventListener("submit",e=>{e.preventDefault();const o=i.value;switch(r){case"fulfilled":c(o);break;case"rejected":n(o);break}});function c(e){return Promise.resolve(l(e))}function l(e){setTimeout(()=>{s.show({message:`✅ Fulfilled promise in ${e}ms`,color:"green",position:"topRight",close:!1})},e)}function n(e){return Promise.reject(a(e))}function a(e){setTimeout(()=>{s.show({message:`❌ Rejected promise in ${e}ms`,color:"red",position:"topRight",close:!1})},e)}
//# sourceMappingURL=commonHelpers2.js.map
