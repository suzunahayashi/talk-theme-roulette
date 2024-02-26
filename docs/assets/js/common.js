!function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}var i=0,a=n((function e(t){var n=t.title,o=t.completed;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"id",void 0),r(this,"title",void 0),r(this,"completed",void 0),this.id=i++,this.title=n,this.completed=o}));function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,i=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===u(i)?i:String(i)),r)}var o,i}function l(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function f(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}(e,t,"get");return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,n)}var s=new WeakMap,d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,s,{writable:!0,value:new Map})}var t,n,r;return t=e,(n=[{key:"addEventListener",value:function(e,t){f(this,s).has(e)||f(this,s).set(e,new Set),f(this,s).get(e).add(t)}},{key:"emit",value:function(e){var t=this,n=f(this,s).get(e);n&&n.forEach((function(e){e.call(t)}))}},{key:"removeEventListener",value:function(e,t){var n=f(this,s).get(e);n&&n.forEach((function(e){e===t&&n.delete(t)}))}}])&&c(t.prototype,n),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,i=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===m(i)?i:String(i)),r)}var o,i}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,n)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function w(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function g(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,k(e,t,"get"))}function T(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,k(e,t,"set"),n),n}function k(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var S=new WeakMap,E=new WeakMap,j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(i,e);var t,n,r,o=y(i);function i(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),w(v(e=o.call(this)),S,{writable:!0,value:void 0}),w(v(e),E,{writable:!0,value:void 0}),T(v(e),S,t),T(v(e),E,[]),e.defaultThemes(),e}return t=i,(n=[{key:"defaultThemes",value:function(){this.addTalkTheme(new a({title:"今週末の予定は？または先週末は何をした？🏖",completed:!1})),this.addTalkTheme(new a({title:"学生時代の部活は？",completed:!1})),this.addTalkTheme(new a({title:"今まで行って良かった旅行先",completed:!1})),this.addTalkTheme(new a({title:"オススメのカフェやごはん屋さん🍴☕️",completed:!1})),this.addTalkTheme(new a({title:"オススメの映画やドラマ、アニメ",completed:!1})),this.emitChange()}},{key:"getTotalCount",value:function(){return g(this,S).length}},{key:"getTalkThemeItems",value:function(){return g(this,S)}},{key:"onChange",value:function(e){this.addEventListener("change",e),g(this,E).push(e)}},{key:"emitChange",value:function(){this.emit("change"),g(this,E).forEach((function(e){e()}))}},{key:"addTalkTheme",value:function(e){g(this,S).push(e),this.emitChange()}},{key:"updateTalkTheme",value:function(e){var t=g(this,S).find((function(t){return t.id===e.id}));t&&(t.completed=e.completed,this.emitChange())}},{key:"deleteTalkTheme",value:function(e){T(this,S,g(this,S).filter((function(t){return t.id!==e}))),this.emitChange()}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(d);(function(){var e,t=new j,n=document.querySelector("#js-theme-from"),r=document.querySelector("#js-theme-form-input"),o=document.querySelector("#js-theme-list"),i=document.querySelector("#js-theme-display"),u=document.querySelector("#js-start-button"),c=document.querySelector("#js-stop-button");function l(){var e=document.createElement("ul");t.getTalkThemeItems().forEach((function(n){var r=function(e){var n=document.createElement("li"),r=document.createElement("input");n.classList.add("theme__list"),r.classList.add("theme__checkbox"),r.type="checkbox",r.checked=e.completed,r.addEventListener("change",(function(){t.updateTalkTheme({id:e.id,completed:r.checked})}));var o=document.createElement("button");o.classList.add("theme__delete"),o.textContent="削除",o.addEventListener("click",(function(){t.deleteTalkTheme(e.id)}));var i=document.createElement("span");return i.classList.add("theme__text"),i.textContent=e.title,n.appendChild(r),n.appendChild(i),n.appendChild(o),n}(n);e.appendChild(r)})),o.innerHTML="",o.appendChild(e)}function f(){var e,n=t.getTalkThemeItems();return n[(e=n.length,Math.floor(Math.random()*e))]}t.onChange((function(){l()})),t.emitChange(),n.addEventListener("submit",(function(e){e.preventDefault(),t.addTalkTheme(new a({title:r.value,completed:!1})),r.value="",l()})),u.addEventListener("click",(function(){u.disabled=!0,e=setInterval((function(){var e=f();i.textContent=e.title}),100)})),c.addEventListener("click",(function(){u.disabled=!1,clearInterval(e)}))})()}();