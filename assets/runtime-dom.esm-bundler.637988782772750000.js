import{i as b,j as P,k as l,l as h,m as R,n as I,p as B,q as H,s as z,u as M,v as D,x as q,y as U,z as x,A as W}from"./runtime-core.esm-bundler.637988782772750000.js";const $="http://www.w3.org/2000/svg",a=typeof document!="undefined"?document:null,S=a&&a.createElement("template"),j={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const o=e?a.createElementNS($,t):a.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,o,s){const r=n?n.previousSibling:e.lastChild;if(o&&(o===s||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{S.innerHTML=i?`<svg>${t}</svg>`:t;const c=S.content;if(i){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}e.insertBefore(c,n)}return[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function F(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function X(t,e,n){const i=t.style,o=l(n);if(n&&!o){for(const s in n)d(i,s,n[s]);if(e&&!l(e))for(const s in e)n[s]==null&&d(i,s,"")}else{const s=i.display;o?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const E=/\s*!important$/;function d(t,e,n){if(h(n))n.forEach(i=>d(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=J(t,e);E.test(n)?t.setProperty(M(i),n.replace(E,""),"important"):t[i]=n}}const A=["Webkit","Moz","ms"],m={};function J(t,e){const n=m[e];if(n)return n;let i=D(e);if(i!=="filter"&&i in t)return m[e]=i;i=q(i);for(let o=0;o<A.length;o++){const s=A[o]+i;if(s in t)return m[e]=s}return e}const v="http://www.w3.org/1999/xlink";function K(t,e,n,i,o){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(v,e.slice(6,e.length)):t.setAttributeNS(v,e,n);else{const s=U(e);n==null||s&&!x(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Q(t,e,n,i,o,s,r){if(e==="innerHTML"||e==="textContent"){i&&r(i,o,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const f=n==null?"":n;(t.value!==f||t.tagName==="OPTION")&&(t.value=f),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=x(n):n==null&&f==="string"?(n="",c=!0):f==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}const[L,Y]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let g=0;const Z=Promise.resolve(),G=()=>{g=0},V=()=>g||(Z.then(G),g=L());function u(t,e,n,i){t.addEventListener(e,n,i)}function y(t,e,n,i){t.removeEventListener(e,n,i)}function k(t,e,n,i,o=null){const s=t._vei||(t._vei={}),r=s[e];if(i&&r)r.value=i;else{const[c,f]=tt(e);if(i){const O=s[e]=et(i,o);u(t,c,O,f)}else r&&(y(t,c,r,f),s[e]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function tt(t){let e;if(C.test(t)){e={};let n;for(;n=t.match(C);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[M(t.slice(2)),e]}function et(t,e){const n=i=>{const o=i.timeStamp||L();(Y||o>=n.attached-1)&&W(nt(i,n.value),e,5,[i])};return n.value=t,n.attached=V(),n}function nt(t,e){if(h(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>o=>!o._stopped&&i&&i(o))}else return e}const N=/^on[a-z]/,it=(t,e,n,i,o=!1,s,r,c,f)=>{e==="class"?F(t,i,o):e==="style"?X(t,n,i):H(e)?z(e)||k(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ot(t,e,i,o))?Q(t,e,i,s,r,c,f):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),K(t,e,i,o))};function ot(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&N.test(e)&&P(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||N.test(e)&&l(n)?!1:e in t}const _=t=>{const e=t.props["onUpdate:modelValue"]||!1;return h(e)?n=>R(e,n):e};function st(t){t.target.composing=!0}function w(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ut={created(t,{modifiers:{lazy:e,trim:n,number:i}},o){t._assign=_(o);const s=i||o.props&&o.props.type==="number";u(t,e?"change":"input",r=>{if(r.target.composing)return;let c=t.value;n&&(c=c.trim()),s&&(c=b(c)),t._assign(c)}),n&&u(t,"change",()=>{t.value=t.value.trim()}),e||(u(t,"compositionstart",st),u(t,"compositionend",w),u(t,"change",w))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:o}},s){if(t._assign=_(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(o||t.type==="number")&&b(t.value)===e))return;const r=e==null?"":e;t.value!==r&&(t.value=r)}},pt={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):p(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),p(t,!0),i.enter(t)):i.leave(t,()=>{p(t,!1)}):p(t,e))},beforeUnmount(t,{value:e}){p(t,e)}};function p(t,e){t.style.display=e?t._vod:"none"}const rt=B({patchProp:it},j);let T;function ct(){return T||(T=I(rt))}const lt=(...t)=>{const e=ct().createApp(...t),{mount:n}=e;return e.mount=i=>{const o=ft(i);if(!o)return;const s=e._component;!P(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const r=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},e};function ft(t){return l(t)?document.querySelector(t):t}export{pt as a,lt as c,ut as v};
