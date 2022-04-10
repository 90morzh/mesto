(()=>{"use strict";var t={824:(t,e,n)=>{t.exports=n.p+"a44c74dfccdfac29a963.jpg"},764:(t,e,n)=>{t.exports=n.p+"40b06a2c64150d8b77d0.jpg"},809:(t,e,n)=>{t.exports=n.p+"c8a6dcc7e8df50e548cf.jpg"},665:(t,e,n)=>{t.exports=n.p+"619546dde4d49815a498.jpg"},630:(t,e,n)=>{t.exports=n.p+"dbaf63f0a463e309516d.jpg"},252:(t,e,n)=>{t.exports=n.p+"f52f36433aff576e5af3.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.p="",(()=>{function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t,n,r,o,i,a){var u=t.name,c=t.link,s=t.likes,l=t.owner,f=t._id;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=n,this._name=u,this._link=c,this._api=a,this._likes=s,this._userId=i,this._cardId=f,this._ownerId=l?l._id:void 0,this._popupConfirm=o,this._openPicturePopup=r}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".place").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._photo.addEventListener("click",(function(){t._openPicturePopup(t._name,t._link)})),this._deleteButton.addEventListener("click",(function(){t._popupConfirm.open({id:t._cardId,element:t._element})})),this._likeButton.addEventListener("click",(function(){t._handleLike()}))}},{key:"_handleLike",value:function(){var t=this;this._likeButton.classList.contains("place__heart_active")?(this._api.removeLike(this._cardId).then((function(e){t._likesCounter.textContent=e.likes.length})).catch((function(t){console.log(t)})),this._likeButton.classList.remove("place__heart_active")):(this._api.putLike(this._cardId).then((function(e){t._likesCounter.textContent=e.likes.length})).catch((function(t){console.log(t)})),this._likeButton.classList.add("place__heart_active"))}},{key:"_hideDeleteButton",value:function(){this._userId!==this._ownerId&&this._deleteButton.classList.add("place__button_hidden")}},{key:"_showLike",value:function(){var t=this;this._likes&&this._likes.length&&this._likes.some((function(e){return e._id===t._userId}))&&this._likeButton.classList.add("place__heart_active")}},{key:"createNewCard",value:function(){return this._element=this._getTemplate(),this._photo=this._element.querySelector(".place__img"),this._title=this._element.querySelector(".place__title"),this._deleteButton=this._element.querySelector(".place__delete"),this._likeButton=this._element.querySelector(".place__heart"),this._likesCounter=this._element.querySelector(".place__like-counter"),this._photo.setAttribute("src",this._link),this._photo.setAttribute("alt",this._name),this._title.textContent=this._name,this._likesCounter.textContent=this._likes?this._likes.length:0,this._setEventListeners(),this._hideDeleteButton(),this._showLike(),this._element}},{key:"showCard",value:function(t,e){document.querySelector(t).prepend(e)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=document.querySelector(n),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_toggleSubmitButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._activateSubmitButton()}},{key:"_activateSubmitButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidation(e),t._toggleSubmitButtonState()}))}))}},{key:"_checkInputValidation",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_showInputError",value:function(t){var e=document.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=document.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"disableSubmitButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)}},{key:"enableValidation",value:function(){this._toggleSubmitButtonState(),this._setEventListeners()}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.code&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){(e.target.classList.contains("popup_active")||e.target.classList.contains("popup__close-button"))&&t.close()}))}},{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=l(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},s.apply(this,arguments)}function l(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function p(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(o){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return p(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._submitCallback=e,n}return e=a,(n=[{key:"setEventListeners",value:function(){var t=this;s(h(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback({id:t.id,element:t.element})}))}},{key:"open",value:function(t){var e=t.id,n=t.element;s(h(a.prototype),"open",this).call(this),this.id=e,this.element=n}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(a);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=b(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function b(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function k(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return k(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._image=e._popup.querySelector(".popup__img"),e._subtitle=e._popup.querySelector(".popup__subtitle"),e}return e=a,(n=[{key:"open",value:function(t){var e=t.place,n=t.link;this._image.src=n,this._image.alt=e,this._subtitle.textContent=e,v(g(a.prototype),"open",this).call(this)}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(a);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=E(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function E(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}function C(t,e){return C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},C(t,e)}function P(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return P(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._submitButton=n._form.querySelector(".popup__button"),n._submitCallback=e,n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;j(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._getInputValues())}))}},{key:"changeButtonText",value:function(t){this._submitButton.textContent=t}},{key:"close",value:function(){this._form.reset(),j(L(a.prototype),"close",this).call(this)}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(a);function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var x=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t,e){e?this._container.append(t):this._container.prepend(t)}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var T=function(){function t(e){var n=e.authorSelector,r=e.aboutSelector,o=e.profileAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._author=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{author:this._author.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.author,n=t.about;this._author.textContent=e,this._about.textContent=n}},{key:"setUserAvatar",value:function(t){var e=t.avatar;this._avatar.src=e}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var R=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._userUrl="".concat(this._url,"users/me"),this._cardsUrl="".concat(this._url,"cards"),this._avatarUrl="".concat(this._url,"users/me/avatar"),this._headers=r}var e,n;return e=t,(n=[{key:"_responseStatus",value:function(t){return t.ok?t.json():Promise.reject("Код ошибки: ".concat(t.status))}},{key:"getUserData",value:function(){var t=this;return fetch(this._userUrl,{headers:this._headers}).then((function(e){return t._responseStatus(e)})).catch((function(t){return Promise.reject(t)}))}},{key:"getCards",value:function(){var t=this;return fetch(this._cardsUrl,{headers:this._headers}).then((function(e){return t._responseStatus(e)})).catch((function(t){return Promise.reject(t)}))}},{key:"setUserData",value:function(t){var e=this,n=t.name,r=t.about;return fetch(this._userUrl,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:r})}).then((function(t){return e._responseStatus(t)})).catch((function(t){return Promise.reject(t)}))}},{key:"addCard",value:function(t){var e=this,n=t.name,r=t.link;return fetch(this._cardsUrl,{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:r})}).then((function(t){return e._responseStatus(t)})).catch((function(t){return Promise.reject(t)}))}},{key:"removeCard",value:function(t){var e=this;return fetch(this._cardsUrl+"/".concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._responseStatus(t)})).catch((function(t){return Promise.reject(t)}))}},{key:"putLike",value:function(t){var e=this;return fetch(this._cardsUrl+"/likes/".concat(t),{method:"PUT",headers:this._headers}).then((function(t){return e._responseStatus(t)})).catch((function(t){return Promise.reject(t)}))}},{key:"removeLike",value:function(t){var e=this;return fetch(this._cardsUrl+"/likes/".concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._responseStatus(t)})).catch((function(t){return Promise.reject(t)}))}},{key:"setUserAvatar",value:function(t){var e=this;return fetch(this._avatarUrl,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return e._responseStatus(t)})).catch((function(t){return Promise.reject(t)}))}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),A=(n(809),n(764),n(824),n(630),n(665),n(252),{inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"});function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var V=document.querySelector(".profile__edit-button"),N=document.querySelector(".profile__add-button"),F=document.querySelector(".popup_profile-edit"),J=F.querySelector("#author-input"),H=F.querySelector("#about-input"),M=new R({url:"https://nomoreparties.co/v1/cohort-38/",headers:{authorization:"7846b4cc-9829-41ef-9b1b-ef32e4f41471","Content-Type":"application/json"}});document.querySelector(".profile__pencil-container").addEventListener("click",(function(){X.open(),$.disableSubmitButton()})),new o(A,"#editForm").enableValidation();var z=new o(A,"#addForm");z.enableValidation();var $=new o(A,"#avatarForm");$.enableValidation();var G=new w(".popup_picture");G.setEventListeners();var K=new B(".popup_profile-edit",(function(t){var e=t.author,n=t.about;M.setUserData({name:e,about:n}).then((function(t){Y.setUserInfo({author:t.name,about:t.about}),K.close()})).catch((function(t){console.log(t)})).finally((function(){K.changeButtonText("Сохранение...")}))}));K.setEventListeners();var Q=new B(".popup_add-card",(function(t){var e=t.place,n=t.link;M.addCard({name:e,link:n}).then((function(t){tt({name:t.name,link:t.link}),Q.close(),z.disableSubmitButton()})).catch((function(t){console.log(t)})).finally((function(){Q.changeButtonText("Сохранение...")}))}));Q.setEventListeners();var W=new _(".popup_confirm",(function(t){var e=t.id,n=t.element;M.removeCard(e).then((function(){n.remove(),W.close()})).catch((function(t){console.log(t)}))}));W.setEventListeners();var X=new B(".popup_avatar",(function(t){var e=t.link;M.setUserAvatar(e).then((function(t){Y.setUserAvatar({avatar:t.avatar}),X.close()})).catch((function(t){console.log(t)})).finally((function(){X.changeButtonText("Сохранение...")}))}));X.setEventListeners();var Y=new T({authorSelector:".profile__title",aboutSelector:".profile__subtitle",profileAvatar:".profile__avatar"});function Z(t,e){G.open({place:t,link:e})}function tt(t,n){var r=new e(t,"#place",Z,W,n,M),o=r.createNewCard();return r.showCard(".places",o),o}V.addEventListener("click",(function(){J.value=Y.getUserInfo().author,H.value=Y.getUserInfo().about,K.open()})),N.addEventListener("click",(function(){Q.open()})),Promise.all([M.getUserData(),M.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo({author:o.name,about:o.about}),Y.setUserAvatar({avatar:o.avatar});var a=new x({items:i,renderer:function(t){var e=tt(t,o._id);a.addItem(e,!0)}},".places");a.renderItems()})).catch((function(t){console.log(t)}))})()})();