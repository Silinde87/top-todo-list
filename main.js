(()=>{"use strict";var n={604:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,"@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css);"]),i.push([n.id,"html,\nbody,\n#content {\n\theight: 100vh;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n",""]);const o=i},890:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,"#nav-bar{\n    background-color: #DB4C3F;\n    padding: 5px 40px;\n    display: flex;\n    justify-content: space-between;\n    z-index: top;    \n}\n.nav-icon-group{\n    display: flex;\n}\n.nav-icon{\n    color: #FFFFFF;\n    font-size: 22px;    \n    padding: 0px 4px;\n}\n.nav-icon:hover{\n    background-color: #E27065;\n    border-radius: 5px;\n}\n#lateral-bar{\n    background-color: black;\n    position: fixed;\n    bottom: 0;\n    left: 0;    \n    height: calc(100% - 43px);\n    width: 0px;\n    transition: all .3s ease;    \n}\n.lateral-bar-active{    \n    width: 305px !important; \n    padding-left: 35px;\n}",""]);const o=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var r,i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function a(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},r=[],i=0;i<n.length;i++){var l=n[i],c=e.base?l[0]+e.base:l[0],s=t[c]||0,d="".concat(c," ").concat(s);t[c]=s+1;var u=a(d),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:h(p,e),references:1}),r.push(d)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,d=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function u(n,e,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function p(n,e,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,v=0;function h(n,e){var t,r,i;if(e.singleton){var o=v++;t=f||(f=c(e)),r=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=c(e),r=p.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var c=l(n,e),s=0;s<t.length;s++){var d=a(t[s]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=c}}}}},e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var r={};(()=>{t.d(r,{b:()=>s});var n=t(379),e=t.n(n),i=t(604);e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var o=t(890);function a(n,e,t,r){const i=document.createElement(n);return e&&(i.id=e),t&&t.forEach((n=>i.classList.add(n))),r&&(i.innerText=r),i}let l,c;e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const s=document.querySelector("#content");s.appendChild(function(){l=a("nav","nav-bar",null,null);const n=a("div","left-group-icon",["nav-icon-group"],null),e=a("div","right-group-icon",["nav-icon-group"],null),t=a("div",null,["nav-icon"],null);t.innerHTML='<i class="bi bi-list"></i>';const r=a("div",null,["nav-icon"],null);r.innerHTML='<i class="bi bi-house-door"></i>';const i=a("div",null,["nav-icon"],null);i.innerHTML='<i class="bi bi-plus"></i>';const o=a("div",null,["nav-icon"],null);return o.innerHTML='<i class="bi bi-calendar-check"></i>',n.appendChild(t),n.appendChild(r),e.appendChild(i),e.appendChild(o),l.appendChild(n),l.appendChild(e),t.onclick=()=>c.classList.toggle("lateral-bar-active"),l}()),s.appendChild(function(){c=a("div","lateral-bar",null,null);const n=a("li","list-menu",null,null);return c.appendChild(n),c}())})()})();