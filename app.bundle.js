!function(e){var A={};function n(t){if(A[t])return A[t].exports;var r=A[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=A,n.d=function(e,A,t){n.o(e,A)||Object.defineProperty(e,A,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,A){if(1&A&&(e=n(e)),8&A)return e;if(4&A&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&A&&"string"!=typeof e)for(var r in e)n.d(t,r,function(A){return e[A]}.bind(null,r));return t},n.n=function(e){var A=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(A,"a",A),A},n.o=function(e,A){return Object.prototype.hasOwnProperty.call(e,A)},n.p="",n(n.s=0)}([function(e,A,n){"use strict";n.r(A);n(1),n(2);const t={};let r=16;const o=document.querySelector(".frames"),i=document.querySelector("#canvas-main"),a=i.getContext("2d"),c=document.querySelector("#canvas-drawing"),s=c.getContext("2d"),d=document.querySelector("#canvas-position"),l=c.getContext("2d");let u,f=null;function p(e){const A=e.toString(16);return 1===A.length?`0${A}`:A}function m(){return document.querySelector(".active-frame")}function h(){clearInterval(u);const e=document.querySelector("#fps-text"),{value:A}=document.querySelector("#fps__preview");e.innerHTML=`${A} fps`;const n=document.querySelectorAll(".frame"),t=Array.from(n).map(e=>e.children[0].style.backgroundImage),{length:r}=t,o=document.querySelector(".preview__img");let i=0;if(u=setInterval(()=>{o.style.backgroundImage=t[i%r],i+=1},1e3/A),A<1){clearInterval(u);const e=m().children[0].style.backgroundImage;o.style.backgroundImage=e}}function g(){t.prevPixel=r;const{value:e}=document.querySelector("#size__preview");return r=16*2**(e-1),document.querySelector("#size-text").innerHTML=`${r}x${r} size`,t.truePixel=r,r}function v(){a.clearRect(0,0,i.width,i.height);const e=new Image,A=`${m().children[0].style.backgroundImage.slice(5,-2)}`;e.src=A,a.drawImage(e,0,0)}function x(){const e=[];return e.push(document.querySelector("#main-color").value),e.push(document.querySelector("#second-color").value),e}function b(e){for(;document.querySelector(".active-frame");)document.querySelector(".active-frame").classList.remove("active-frame");e.classList.add("active-frame"),v(),h()}function w(){const e=o.children;for(let A=0;A+1<e.length;A+=1){const n=e[A];n.id=`frame${A+1}`,n.querySelector(".num-frame__text").innerHTML=A+1}}function y(e){this.style.opacity="0.4",f=this,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/html",this.innerHTML)}function L(){this.classList.add("over")}function E(e){return e.preventDefault&&e.preventDefault(),e.dataTransfer.dropEffect="move",!1}function S(){this.classList.remove("over")}function _(e){return e.stopPropagation&&e.stopPropagation(),f!==this&&(f.innerHTML=this.innerHTML,this.innerHTML=e.dataTransfer.getData("text/html")),w(),!1}function k(){const e=o.children;[].forEach.call(e,e=>{e.classList.remove("over"),f.style.opacity="1"}),v(),h()}function q(e){e.addEventListener("dragstart",y),e.addEventListener("dragenter",L),e.addEventListener("dragover",E),e.addEventListener("dragleave",S),e.addEventListener("drop",_),e.addEventListener("dragend",k)}function R(e){const A=e.parentNode;if(A.classList.contains("active-frame")){let e=A.id.replace(/\D+/g,"");e<2?e=2:e-=1,document.querySelector(`#frame${e}`).classList.add("active-frame")}A.parentElement.removeChild(A),w(),v(),function(e){e.removeEventListener("dragstart",y),e.removeEventListener("dragenter",L),e.removeEventListener("dragover",E),e.removeEventListener("dragleave",S),e.removeEventListener("drop",_),e.removeEventListener("dragend",k)}(A),h()}function M(){const e=document.querySelector("#pen-size"),{value:A}=e;return document.querySelector("#pen-text").innerHTML=`${A} size`,A}function U(){return document.querySelector(".active-instrument").dataset.instrument}function I(e,A,n){const t=M();let r=x();2===window.event.buttons&&(r=r.reverse());for(let o=0;o<t;o+=1)for(let i=0;i<t;i+=1)s.fillStyle=(e+i)%2==0&&(A+o)%2==0||(e+i)%2==1&&(A+o)%2==1?r[0]:r[1],s.fillRect((e+i)*n,(A+o)*n,n,n)}!function(){const e=document.querySelector(".canvas");i.width=e.clientWidth,i.height=e.clientHeight,c.width=e.clientWidth,c.height=e.clientHeight,d.width=e.clientWidth,d.height=e.clientHeight}(),g(),q(document.querySelector(".frame")),t.W=i.width,t.W=c.width,t.H=i.height,t.H=c.width,h(),document.querySelector(".main__instriments").addEventListener("click",function(){let e,A=window.event.target;for(;A!==this;){if("DIV"===A.tagName){e=A.dataset.instrument;break}A=A.parentElement}return function(e){for(;document.querySelector(".active-instrument");)document.querySelector(".active-instrument").classList.remove("active-instrument");e.classList.add("active-instrument")}(A),e}),c.addEventListener("contextmenu",e=>{e.preventDefault()}),c.addEventListener("mousedown",function(){if("pen"!==U()&&"eraser"!==U()&&"mirror"!==U()&&"square"!==U()&&"line"!==U()&&"dithering"!==U())return"hand"===U()?void function(){let e=window.event.layerX,A=window.event.layerY;const n=t.W/g(),r=Math.floor(e/n),o=Math.floor(A/n);let s=0,d=0,l=i.toDataURL();const u=new Image;function f(){e=window.event.layerX,A=window.event.layerY;const t=Math.floor(e/n),a=Math.floor(A/n);d=(t-r)*n,s=(a-o)*n,i.style.top=`${s}px`,i.style.left=`${d}px`}u.src=l,c.addEventListener("mousemove",f),c.addEventListener("mouseup",function e(){l=i.toDataURL();const A=document.querySelector(".active-frame");c.removeEventListener("mousemove",f),a.clearRect(0,0,i.width,i.height),a.drawImage(u,d,s),l=i.toDataURL(),A.children[0].setAttribute("style",`background: url('${l}');  background-size: cover`),i.style.top=0,i.style.left=0,c.removeEventListener("mouseup",e),h()})}():void 0;a.globalCompositeOperation="source-over";const e=x();1===window.event.buttons?(s.fillStyle=e[0],s.strokeStyle=e[0]):2===window.event.buttons&&(s.fillStyle=e[1],s.strokeStyle=e[1]),"eraser"===U()&&(a.globalCompositeOperation="destination-out");let A=window.event.layerX,n=window.event.layerY;const r=t.W/g(),o=M();let d=Math.floor(A/r),u=Math.floor(n/r),f=d,p=u;const m=f,v=p;function b(){if("line"!==U()&&"square"!==U()||(s.clearRect(0,0,t.W,t.H),f=m,p=v),A=window.event.layerX,n=window.event.layerY,d=Math.floor(A/r),u=Math.floor(n/r),document.querySelector("#coordnates-text").innerHTML=`X:${d+1} Y:${u+1}`,"square"===U())return void function(e,A,n,t,r,o){s.lineWidth=o*r,s.strokeRect(e*r+r/2,A*r+r/2,(n-e)*r,(t-A)*r)}(f,p,d,u,r,o);const e=Math.abs(d-f),i=Math.abs(u-p),c=f<d?1:-1,h=p<u?1:-1;let g=e-i;for(;window&&("dithering"===U()&&I(f,p,r),"eraser"===U()?(a.fillRect(f*r,p*r,r*o,r*o),l.clearRect(0,0,t.W,t.H)):"dithering"!==U()&&s.fillRect(f*r,p*r,r*o,r*o),"mirror"===U()&&s.fillRect(t.W-f*r-o*r,p*r,r*o,r*o),f!==d||p!==u);){const A=2*g;A>-i&&(g-=i,f+=c),A<e&&(g+=e,p+=h)}}function w(){c.removeEventListener("mousemove",b),function(e){const A=document.querySelector(".active-frame");let n=e;const t=new Image;t.src=n,t.onload=()=>{a.drawImage(t,0,0),s.clearRect(0,0,i.width,i.height),n=i.toDataURL(),A.children[0].setAttribute("style",`background: url('${n}');  background-size: cover`),h()}}(c.toDataURL()),a.globalCompositeOperation="source-over",c.removeEventListener("mouseup",w),c.removeEventListener("mouseout",w)}"dithering"===U()&&I(f,p,r),"eraser"===U()?(a.fillRect(f*r,p*r,r*o,r*o),l.clearRect(0,0,t.W,t.H)):"dithering"!==U()&&s.fillRect(f*r,p*r,r*o,r*o),"mirror"===U()&&s.fillRect(t.W-f*r-o*r,p*r,r*o,r*o),c.addEventListener("mouseup",w),c.addEventListener("mouseout",w),c.addEventListener("mousemove",b)}),c.addEventListener("mousedown",function(){if("dropper"===U()){const t=a.getImageData(window.event.layerX,window.event.layerY,1,1).data,r=(e=t[0],A=t[1],n=t[2],`#${p(e)}${p(A)}${p(n)}`);1===window.event.buttons?document.querySelector("#main-color").value=r:2===window.event.buttons&&(document.querySelector("#second-color").value=r)}else if("brighter"===U()){const e=window.event.layerX,A=window.event.layerY,n=t.W/g(),r=M(),o=Math.floor(e/n),i=Math.floor(A/n),c=a.getImageData(o*n,i*n,n*r,n*r);if(1===window.event.buttons)for(let e=0;e<c.data.length;e+=4)c.data[e]+=10,c.data[e+1]+=10,c.data[e+2]+=10,c.data[e+3]=c.data[e+3];else if(2===window.event.buttons)for(let e=0;e<c.data.length;e+=4)c.data[e]-=10,c.data[e+1]-=10,c.data[e+2]-=10,c.data[e+3]=c.data[e+3];a.putImageData(c,o*n,i*n)}var e,A,n}),document.querySelector(".frames").addEventListener("click",function(){let e,A=window.event.target;for(;A!==this;){if("DIV"===A.tagName){e=A.dataset.frameAction;break}A=A.parentElement}"changeActiveFrame"===e?b(A.parentElement):"none"===e||("delFrame"===e?R(A.parentElement):"copyFrame"===e?function(e){const A=e.parentNode,n=A.cloneNode(!0);A.parentNode.insertBefore(n,A.nextSibling),w(),b(n),q(n),h()}(A.parentElement):A.hasAttribute("data-frame-action")||b(A))}),document.querySelector("#add-frame-button").addEventListener("click",function(){const e=o.childElementCount,A=document.createElement("div");A.setAttribute("draggable","true"),A.className="frame",A.id=`frame${o.childElementCount}`,A.innerHTML=`\n  <div class="frame-wrapper" data-frame-action='changeActiveFrame'>\n    <div class="num-frame" data-frame-action='changeActiveFrame'>\n      <p class="num-frame__text">${o.childElementCount}</p>\n    </div>\n    <div class="del-frame" data-frame-action='delFrame'>\n      <p class="del-frame__text">del</p>\n    </div>\n    <div class="copy-frame" data-frame-action='copyFrame'>\n      <p class="copy-frame__text">copy</p>\n    </div>\n  </div>`,o.insertBefore(A,o.children[e-1]),A.style.backgroundImage="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAED0lEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4DcC8AAB2WfxiAAAAABJRU5ErkJggg==",b(A),q(A),h()}),document.querySelector("#pen-size").addEventListener("change",M),document.querySelector("#size__preview").addEventListener("change",function(){g();const e=document.querySelector(".active-frame"),A=t.truePixel/t.prevPixel,n=new Image,r=i.toDataURL();a.clearRect(0,0,i.width,i.height),n.src=r,a.drawImage(n,0,0,i.width/A,i.height/A);const o=i.toDataURL();e.children[0].setAttribute("style",`background: url('${o}');  background-size: cover`)}),document.querySelector("#fps__preview").addEventListener("change",h),c.addEventListener("mousemove",function e(){const A=M();l.clearRect(0,0,t.W,t.H),l.fillStyle="rgba(10, 10, 10, 0.3)";const n=t.W/g(),r=Math.floor(window.event.layerX/n),o=Math.floor(window.event.layerY/n);document.querySelector("#coordnates-text").innerHTML=`X:${r+1} Y:${o+1}`,l.fillRect(r*n,o*n,n*A,n*A),c.addEventListener("mousedown",()=>{document.querySelector("#coordnates-text").innerHTML=`X:${r+1} Y:${o+1}`,c.removeEventListener("mousemove",e)}),c.addEventListener("mouseup",()=>{c.addEventListener("mousemove",e)})}),document.querySelector("#preview__img").addEventListener("dblclick",function(){const e=document.querySelector("#preview__img");e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()})},function(e,A){},function(e,A,n){var t=n(3);"string"==typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(5)(t,r);t.locals&&(e.exports=t.locals)},function(e,A,n){(e.exports=n(4)(!1)).push([e.i,"*{\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\n.active-instrument,\n.active-frame{\n  -webkit-box-shadow: 0px 0px 10px 7px rgba(237,99,0,1);\n  -moz-box-shadow: 0px 0px 10px 7px rgba(237,99,0,1);\n  box-shadow: 0px 0px 10px 7px rgba(237,99,0,1);\n}\n#preview__img:fullscreen{\n  width: 100%;\n  height: 100%;\n  background: rgba(237,99,0,1);\n  background-size:contain;\n  background: no-repeat;\n  margin: auto;\n  padding: auto;\n}\n\n#preview__img:-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  background: rgba(237,99,0,1);\n  background-size:contain;\n  background: no-repeat;\n  margin: auto;\n  padding: auto;\n}\n#preview__img:-moz-full-screen {\n  width: 100%;\n  height: 100%;\n  background: rgba(237,99,0,1);\n  background-size:contain;\n  background: no-repeat;\n  margin: auto;\n  padding: auto;\n\n}\n\nbody{\n  margin: 0 auto;\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.header{\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24), 0px 0px 4px rgba(0, 0, 0, 0.12);\n  margin: 0 0 0 0;\n}\n\n.header__primary-menu{\n  margin: 4px 0 0 8px;\n  height: 42px;\n  order: 1;\n  flex-grow: 2;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.burger-menu {\n  width: 94%;\n  height: 4px;\n  background-color: black;\n  margin: 3px 0;\n  padding: 0 3%;\n}\n.header__primary-menu>div:nth-child(2){\n  margin: 4px 0;\n}\n\n.header__logo{\n  font-style: normal;\n  height: 100%;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 40px;\n  order: 2;\n  flex-grow: 20;\n  text-align: center;\n  justify-content: center;\n\n}\n.header__secondary-menu{\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex-grow: 40;\n  order: 3;\n  text-align: end;\n  margin: 0 8px 0 0;\n  justify-content: center;\n  align-items: flex-end;\n}\n.header__secondary-menu>div {\n  width: 4px;\n  height: 4px;\n  background-color: black;\n  border-radius: 50%;\n}\n.header__secondary-menu>div:nth-child(2){\n  margin: 4px 0;\n}\n\n.main{\n  width: 100%;\n  margin: 50px auto 0;\n  flex-wrap: wrap;\n  background: #0004;\n  height: 100%;\n}\n\n.instruments{\n  width: 150px;\n  float: left;\n  margin-right: 20px;\n}\n\n.main__instriments{\n  width: 150px;\n  min-height: 230px;\n  order: 1;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24), 0px 0px 4px rgba(0, 0, 0, 0.12);\n}\n.instriments__item{\n  width: 50px;\n  height: 50px;\n  padding: 10px;\n  margin: 2.5px;\n}\n.instriments__item:hover{\n  background: rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24), 0px 0px 4px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n}\n\n.instriments__item>i{\n  font-size: 50px;\n  color: rgba(0, 0, 0, 0.541327);\n}\n\n.instriments__item--line{\n  width: 100%;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.main__colors{\n  width: 150px;\n  min-height: 100px;\n  margin: 30px 0 0 0;\n  order: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24), 0px 0px 4px rgba(0, 0, 0, 0.12);\n}\n\n.colors__item{\n  width: 130px;\n  margin: 0 10px;\n  font-size: 16px;\n  line-height: 46px;\n  display: flex;\n  height: 46px;\n}\n\n.choise-color{\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  margin: 10px 10px 0 10px;\n}\n\n.choise-color:hover{\n  cursor: pointer;\n}\n\n/* .colors__item:hover{\n  background: rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24), 0px 0px 4px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n} */\n\n.colors__item--line{\n  width: 100%;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.colors__item-circle{\n  margin: 0 22px 0 0;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.541327);\n}\n\n.canvas{\n  width: 512px;\n  height: 512px;\n  float: left;\n  position: relative;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABlBMVEVMTExVVVUnhsEkAAAAHUlEQVR4AWOAAUYoQOePEAUj3v9oYDQ9gMBoegAAJFwCAbLaTIMAAAAASUVORK5CYII=);\n  background-position: 0% 0%;\n  background-repeat: repeat;\n  background-size: 32px;\n  overflow: hidden;\n}\n\n.canvas-main{\n  position: absolute;\n  z-index: 8;\n}\n.canvas-drawing{\n  position: absolute;\n  z-index: 9;\n}\n.canvas-drawing{\n  position: absolute;\n  z-index: 10;\n}\n\n.secondary-panel{\n  max-height: 60%;\n  width: 200px;\n  display: flex;\n  background: #F333;\n  height: 100%;\n  min-height: 500px;\n  float: right;\n}\n\n.frames{\n  width: 150px;\n  background: #0003;\n  float: left;\n  margin-right: 20px;\n}\n.frame{\n  width: 128px;\n  height: 128px;\n  margin: 10px auto;\n  position: relative;\n  background: #0003;\n  text-align: end;\n  cursor: move;\n}\n.frame-wrapper{\n  width: 100%;\n  height: 100%;\n}\n.frame[draggble=true]{\n  transition: all 0.7s;\n}\n.frame.over {\n  border: 2px dashed #000;\n}\n.num-frame{\n  top: 0px;\n  left: 0px;\n}\n.del-frame{\n  top: 0px;\n  right: 0px;\n}\n.copy-frame{\n  bottom: 0px;\n  right: 0px;\n}\n\n.num-frame,\n.del-frame,\n.copy-frame{\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  text-align: center;\n  background: #fff4;\n}\n.num-frame>p,\n.del-frame>p,\n.copy-frame>p{\n  padding: 5px 0 0 0;\n}\n\n.add-frame-button{\n  width: 100%;\n  height: 80px;\n  margin: 30px 0 0 0;\n}\n.add-frame-text{\n  width: 100%;\n  text-align: center;\n  background: #0004;\n  padding: 20px 0;\n}\n\n.preview__img{\n  width: 200px;\n  height: 200px;\n  background: #1234;\n  background-size: cover;\n}\n\n.none{\n  display: none;\n}\n",""])},function(e,A,n){"use strict";e.exports=function(e){var A=[];return A.toString=function(){return this.map(function(A){var n=function(e,A){var n=e[1]||"",t=e[3];if(!t)return n;if(A&&"function"==typeof btoa){var r=(i=t,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=t.sources.map(function(e){return"/*# sourceURL="+t.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}var i;return[n].join("\n")}(A,e);return A[2]?"@media "+A[2]+"{"+n+"}":n}).join("")},A.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var t={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(t[o]=!0)}for(r=0;r<e.length;r++){var i=e[r];null!=i[0]&&t[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),A.push(i))}},A}},function(e,A,n){var t,r,o={},i=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=t.apply(this,arguments)),r}),a=function(e){var A={};return function(e,n){if("function"==typeof e)return e();if(void 0===A[e]){var t=function(e,A){return A?A.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}A[e]=t}return A[e]}}(),c=null,s=0,d=[],l=n(6);function u(e,A){for(var n=0;n<e.length;n++){var t=e[n],r=o[t.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](t.parts[i]);for(;i<t.parts.length;i++)r.parts.push(v(t.parts[i],A))}else{var a=[];for(i=0;i<t.parts.length;i++)a.push(v(t.parts[i],A));o[t.id]={id:t.id,refs:1,parts:a}}}}function f(e,A){for(var n=[],t={},r=0;r<e.length;r++){var o=e[r],i=A.base?o[0]+A.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};t[i]?t[i].parts.push(a):n.push(t[i]={id:i,parts:[a]})}return n}function p(e,A){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=d[d.length-1];if("top"===e.insertAt)t?t.nextSibling?n.insertBefore(A,t.nextSibling):n.appendChild(A):n.insertBefore(A,n.firstChild),d.push(A);else if("bottom"===e.insertAt)n.appendChild(A);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,n);n.insertBefore(A,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var A=d.indexOf(e);A>=0&&d.splice(A,1)}function h(e){var A=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var t=function(){0;return n.nc}();t&&(e.attrs.nonce=t)}return g(A,e.attrs),p(e,A),A}function g(e,A){Object.keys(A).forEach(function(n){e.setAttribute(n,A[n])})}function v(e,A){var n,t,r,o;if(A.transform&&e.css){if(!(o="function"==typeof A.transform?A.transform(e.css):A.transform.default(e.css)))return function(){};e.css=o}if(A.singleton){var i=s++;n=c||(c=h(A)),t=w.bind(null,n,i,!1),r=w.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var A=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(A,e.attrs),p(e,A),A}(A),t=function(e,A,n){var t=n.css,r=n.sourceMap,o=void 0===A.convertToAbsoluteUrls&&r;(A.convertToAbsoluteUrls||o)&&(t=l(t));r&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([t],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}.bind(null,n,A),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(A),t=function(e,A){var n=A.css,t=A.media;t&&e.setAttribute("media",t);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return t(e),function(A){if(A){if(A.css===e.css&&A.media===e.media&&A.sourceMap===e.sourceMap)return;t(e=A)}else r()}}e.exports=function(e,A){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(A=A||{}).attrs="object"==typeof A.attrs?A.attrs:{},A.singleton||"boolean"==typeof A.singleton||(A.singleton=i()),A.insertInto||(A.insertInto="head"),A.insertAt||(A.insertAt="bottom");var n=f(e,A);return u(n,A),function(e){for(var t=[],r=0;r<n.length;r++){var i=n[r];(a=o[i.id]).refs--,t.push(a)}e&&u(f(e,A),A);for(r=0;r<t.length;r++){var a;if(0===(a=t[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var x,b=(x=[],function(e,A){return x[e]=A,x.filter(Boolean).join("\n")});function w(e,A,n,t){var r=n?"":t.css;if(e.styleSheet)e.styleSheet.cssText=b(A,r);else{var o=document.createTextNode(r),i=e.childNodes;i[A]&&e.removeChild(i[A]),i.length?e.insertBefore(o,i[A]):e.appendChild(o)}}},function(e,A){e.exports=function(e){var A="undefined"!=typeof window&&window.location;if(!A)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=A.protocol+"//"+A.host,t=n+A.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,A){var r,o=A.trim().replace(/^"(.*)"$/,function(e,A){return A}).replace(/^'(.*)'$/,function(e,A){return A});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:t+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}]);
//# sourceMappingURL=app.bundle.js.map