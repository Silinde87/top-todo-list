(()=>{"use strict";var n={604:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(645),i=t.n(o)()((function(n){return n[1]}));i.push([n.id,"@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css);"]),i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),i.push([n.id,"html,\nbody,\n#content {\n\theight: 100vh;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: 'Roboto', sans-serif;\n}\n\n",""]);const r=i},890:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(645),i=t.n(o)()((function(n){return n[1]}));i.push([n.id,"/* NAV BAR STYLES */\n#nav-bar{\n    background-color: #DB4C3F;\n    padding: 5px 40px;\n    display: flex;\n    justify-content: space-between;\n    z-index: top;    \n}\n.nav-icon-group{\n    display: flex;\n}\n.nav-icon{\n    color: #FFFFFF;\n    font-size: 22px;    \n    padding: 0px 4px;\n}\n.nav-icon:hover{\n    background-color: #E27065;\n    border-radius: 5px;\n}\n\n/* LATERAL BAR STYLES */\n#lateral-bar{    \n    background-color: #F7F7F7;\n    position: absolute;\n    bottom: 0;\n    left: 0;    \n    height: calc(100% - 43px);\n    transition: all .2s ease;\n    transform: translateX(-335px);\n}\n.active-lateral-bar{\n    transform: translateX(0px) !important;\n}\n.list-menu-elem{\n    list-style-type: none;    \n    margin-right: 4px;\n    padding: 4px 0px 4px 6px;\n    transition: background-color .3s;\n    display: flex;\n}\n.list-menu-elem:hover,\n.accordion-list-elem:hover{\n    background-color: white;\n    border-radius: 3px;\n}\n#list-menu{\n    padding-top: 30px;\n    font-size: 16px;\n    margin-bottom: 5px;\n}\n.menu-icon{\n    margin-right: 10px;\n    font-size: 18px;\n}\n#today-icon{\n    color: #058527;\n\n}\n#inbox-icon{\n    color: #246FE0;\n\n}\n#projects-text{\n    font-weight: 700;\n    margin-right: 170px;\n}\n#projects-icon::before{\n    transition: transform 0.1s;\n}\n.rotate::before{\n    transform: rotate(-90deg);    \n}\n#project-add{\n    margin-right: 15px;\n    opacity: 0;\n    transition: opacity 0.3s;\n    font-size: 18px;\n}\n#project-add:hover{\n    color: #058527;\n}\n.project-add-show{\n    opacity: 1 !important;\n}\n#accordion-list{\n    list-style-type: none;\n    padding-left: 65px;\n}\n.accordion-list-elem{\n    padding: 4px 0px 4px 6px;\n    margin-right: 4px;\n    min-width: 260px;\n    color: #444;\n}\n.remove-icon{\n    float: right;\n    margin-right: 15px;\n    opacity: 0;\n    transition: opacity 0.3s;\n    font-size: 18px;\n}\n.remove-icon:hover{\n    color: #E27065;\n}\n.remove-icon-show{\n    opacity: 1 !important;\n}\n\n/* CONTAINER LIST STYLES */\n#container-list{\n    width: 100%;\n    height: 90%;\n    display: flex;\n    justify-content: center;\n    transition: padding .2s;\n}\n.toggle-container{\n    padding-left: 335px;\n}",""]);const r=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{var o,i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function a(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},o=[],i=0;i<n.length;i++){var l=n[i],s=e.base?l[0]+e.base:l[0],c=t[s]||0,d="".concat(s," ").concat(c);t[s]=c+1;var p=a(d),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(r[p].references++,r[p].updater(u)):r.push({identifier:d,updater:m(u,e),references:1}),o.push(d)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,d=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function p(n,e,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function u(n,e,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var h=null,f=0;function m(n,e){var t,o,i;if(e.singleton){var r=f++;t=h||(h=s(e)),o=p.bind(null,t,r,!1),i=p.bind(null,t,r,!0)}else t=s(e),o=u.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var i=a(t[o]);r[i].references--}for(var s=l(n,e),c=0;c<t.length;c++){var d=a(t[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}t=s}}}}},e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var o={};(()=>{t.d(o,{r:()=>u});var n=t(379),e=t.n(n),i=t(604);function r(n,e,t,o){const i=document.createElement(n);return e&&(i.id=e),t&&t.forEach((n=>i.classList.add(n))),o&&(i.innerText=o),i}e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const a=n=>{let e="_"+Math.random().toString(36).substr(2,9),t=n,o=[];return{getProjectId:()=>e,getProjectName:()=>t,getProjectTasks:()=>o,setProjectName:n=>t=n,addTaskToProject:n=>{o.push(n)}}};let l;var s=t(890);let c,d;e()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;const p=document.querySelector("#content");let u=[];u.push(a("Project One")),u.push(a("Project Two")),u.push(a("Project Three")),u.push(a("Project Four")),p.appendChild(function(){l=r("nav","nav-bar",null,null);const n=r("div","left-group-icon",["nav-icon-group"],null),e=r("div","right-group-icon",["nav-icon-group"],null),t=r("div","ham-btn",["nav-icon"],null);t.innerHTML='<i class="bi bi-list"></i>';const o=r("div",null,["nav-icon"],null);o.innerHTML='<i class="bi bi-house-door"></i>';const i=r("div",null,["nav-icon"],null);i.innerHTML='<i class="bi bi-plus"></i>';const a=r("div",null,["nav-icon"],null);return a.innerHTML='<i class="bi bi-calendar-check"></i>',n.appendChild(t),n.appendChild(o),e.appendChild(i),e.appendChild(a),l.appendChild(n),l.appendChild(e),l}()),p.appendChild(function(){c=r("div","lateral-bar",["user-select-none"],null);const n=r("ul","list-menu",null,null),e=r("li",null,["list-menu-elem"],null),t=r("li",null,["list-menu-elem"],null),o=r("div","projects-list",["list-menu-elem"],null),i=r("span","inbox-icon",["menu-icon"],null);i.innerHTML='<i class="bi bi-inboxes"></i>';const a=r("span",null,["menu-text"],"Inbox"),l=r("span","today-icon",["menu-icon"],null);l.innerHTML='<i class="bi bi-calendar-day"></i>';const s=r("span",null,["menu-text"],"Today"),d=r("span",null,["menu-icon"],null);d.innerHTML='<i id="projects-icon" class="bi bi-chevron-down"></i>';const p=r("span","projects-text",["menu-text"],"Projects"),h=r("span","project-add",null,null);h.innerHTML='<i class="bi bi-plus-circle"></i>',o.setAttribute("data-bs-toggle","collapse"),o.setAttribute("data-bs-target","#collapseOne"),o.setAttribute("aria-expanded","false"),o.setAttribute("aria-controls","collapseOne");const f=r("div","accordion",["accordion","accordion-flush"],null),m=r("div","collapseOne",["accordion-collapse","collapse","show"],null);return m.setAttribute("data-bs-parent","#accordion"),m.appendChild(function(n){const e=r("ul","accordion-list",null,null);return n.forEach((n=>{const t=r("li",null,["accordion-list-elem"],null);t.dataset.id=n.getProjectId();const o=r("span",null,null,n.getProjectName()),i=r("span",null,["remove-icon"],null);i.dataset.id=n.getProjectId(),i.innerHTML='<i class="bi bi-dash-circle"></i>',t.appendChild(o),t.appendChild(i),e.appendChild(t),t.onmouseover=()=>i.classList.add("remove-icon-show"),t.onmouseout=()=>i.classList.remove("remove-icon-show")})),e}(u)),f.appendChild(m),e.appendChild(i),e.appendChild(a),t.appendChild(l),t.appendChild(s),o.appendChild(d),o.appendChild(p),o.appendChild(h),n.appendChild(e),n.appendChild(t),n.appendChild(o),c.appendChild(n),c.appendChild(f),o.onclick=()=>document.querySelector("#projects-icon").classList.toggle("rotate"),o.onmouseover=()=>h.classList.add("project-add-show"),o.onmouseout=()=>h.classList.remove("project-add-show"),c}()),p.appendChild(function(){d=r("div","container-list",null,null);const n=r("span",null,null,"THIS IS FOR TESTING PURPOSES");return d.appendChild(n),d}()),document.querySelector("#ham-btn").onclick=()=>{document.querySelector("#lateral-bar").classList.toggle("active-lateral-bar"),document.querySelector("#container-list").classList.toggle("toggle-container")}})()})();