(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Wizard",[],e):"object"==typeof exports?exports.Wizard=e():t.Wizard=e()}(this,(function(){return function(){"use strict";var t={d:function(e,s){for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e={};t.d(e,{default:function(){return s}});var s=class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options={wz_class:".wizard",wz_nav:".wizard-nav",wz_ori:".horizontal",wz_nav_style:"dots",wz_content:".wizard-content",wz_buttons:".wizard-buttons",wz_button:".wizard-btn",wz_button_style:".btn",wz_step:".wizard-step",wz_form:".wizard-form",wz_next:".next",wz_prev:".prev",wz_finish:".finish",wz_highlight:".highlight-error",bubbles:!1,nav:!0,buttons:!0,highlight:!0,current_step:0,steps:0,highlight_time:1e3,navigation:"all",next:"Next",prev:"Prev",finish:"Submit",highlight_type:{error:"error",warning:"warning",success:"success",info:"info"},i18n:{empty_wz:"No item has been found with which to generate the Wizard.",empty_nav:"Nav does not exist or is empty.",empty_content:"Content does not exist or is empty.",empty_html:"Undefined or null content cannot be added.",empty_update:"Nothing to update.",no_nav:"Both the nav and the buttons are disabled, there is no navigation system.",form_validation:"One or more of the form fields are invalid.",diff_steps:"Discordance between the steps of nav and content.",random:"There has been a problem, check the configuration and use of the wizard.",already_defined:"This item is already defined",title:"Step"},...t};const{wz_class:e,wz_nav:s,wz_ori:i,wz_nav_style:n,wz_content:r,wz_buttons:o,wz_button:a,wz_button_style:c,wz_step:h,wz_form:l,wz_next:u,wz_prev:d,wz_finish:p,wz_highlight:w,nav:_,buttons:b,highlight:z,highlight_time:v,highlight_type:m,current_step:f,steps:y,navigation:g,prev:S,next:E,finish:q,i18n:L,bubbles:k}=this.options;Object.assign(this,{wz_class:e,wz_nav:s,wz_ori:i,wz_nav_style:n,wz_content:r,wz_buttons:o,wz_button:a,wz_button_style:c,wz_step:h,wz_form:l,wz_next:u,wz_prev:d,wz_finish:p,wz_highlight:w,nav:_,buttons:b,highlight:z,highlight_time:v,highlight_type:m,current_step:f,steps:y,navigation:g,prev:S,next:E,finish:q,i18n:L,last_step:f,form:!1,locked:!1,locked_step:null})}init(){try{const t=document.querySelector(this.wz_class);if(!t)throw new Error(this.i18n.empty_wz);if("true"===t.getAttribute("data-wz-load"))return void console.warn(`${this.wz_class} : ${this.i18n.already_defined}`);const e=t;switch(this.buttons||this.nav||console.warn(this.i18n.no_nav),e.classList.add(this.wz_ori.replace(".","")),"FORM"===e.tagName&&(this.form=!0),this.checkAndPrepare(e),this.navigation){case"all":case"nav":this.setNavEvent(),this.setBtnEvent();break;case"buttons":this.setBtnEvent()}e.style.display=e.classList.contains("vertical")?"flex":"block",e.setAttribute("data-wz-load","true"),document.dispatchEvent(new CustomEvent("wz.ready",{bubbles:this.bubbles,detail:{target:this.wz_class,elem:e}}))}catch(t){console.error(t)}}update(){const t=document.querySelector(this.wz_class);if(!t)throw new Error(this.i18n.empty_wz);if("true"!==t.getAttribute("data-wz-load"))throw new Error(this.i18n.empty_wz);this.checkAndPrepare(t),this.content_update=!1,t.dispatchEvent(new CustomEvent("wz.update",{bubbles:this.bubbles,detail:{target:this.wz_class,elem:t}}))}reset(){this.setCurrentStep(0);const t=document.querySelector(this.wz_class),e=t.querySelector(this.wz_nav),s=t.querySelector(this.wz_content);if(this.buttons){const e=t.querySelector(this.wz_buttons),s=e.querySelector(`${this.wz_button}${this.wz_next}`),i=e.querySelector(`${this.wz_button}${this.wz_prev}`),n=e.querySelector(`${this.wz_button}${this.wz_finish}`);this.checkButtons(s,i,n)}if(this.nav){e.querySelectorAll(this.wz_step).forEach((t=>t.classList.remove("active"))),e.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active")}s.querySelectorAll(this.wz_step).forEach((t=>t.classList.remove("active"))),s.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active"),t.dispatchEvent(new Event("wz.reset",{bubbles:this.bubbles}))}lock(){this.locked=!0,this.locked_step=this.getCurrentStep()}unlock(){this.locked=!1,this.locked_step=null,document.querySelector(this.wz_class).dispatchEvent(new Event("wz.unlock",{bubbles:this.bubbles}))}prefabSteps(t,e,s){const i=this.getCurrentStep();t.forEach(((t,e)=>{t.setAttribute("data-wz-step",e),this.nav&&s[e].setAttribute("data-wz-step",e)})),this.nav&&(s.forEach((t=>t.classList.remove("active"))),s[i].classList.add("active"),e.classList.add(this.wz_nav_style)),t.forEach((t=>t.classList.remove("active"))),t[i].classList.add("active"),this.setButtons()}updateToForm(){const t=document.querySelector(this.wz_class),e=t.querySelector(this.wz_content);if("FORM"!==e.tagName){const s=e.getAttribute("class"),i=e.innerHTML;e.remove();const n=document.createElement("form");n.setAttribute("method","POST"),n.setAttribute("class",`${s} ${this.wz_form.replace(".","")}`),n.innerHTML=i,t.appendChild(n)}}checkForm(){const t=document.querySelector(this.wz_class).querySelector(this.wz_content),e=t.querySelectorAll(this.wz_step)[this.getCurrentStep()].querySelectorAll("input, textarea, select");return e.length>0?this.formValidator(t,e):{error:!1}}setNav(t){let e=t.querySelector(this.wz_nav);if(e&&this.nav&&(e.remove(),e=null),!e&&this.nav){const e=t.querySelector(this.wz_content).querySelectorAll(this.wz_step),s=document.createElement("aside");s.classList.add(this.wz_nav.replace(".","")),e.forEach(((t,e)=>{const i=document.createElement("div"),n=t.getAttribute("data-wz-title")||`${this.i18n.title} ${e}`;i.classList.add(this.wz_step.replace(".","")),"buttons"===this.navigation&&i.classList.add("nav-buttons");const r=document.createElement("span");r.classList.add("dot"),i.appendChild(r);const o=document.createElement("span");o.innerHTML=n,i.appendChild(o),s.appendChild(i)})),t.prepend(s)}}setButtons(){const t=document.querySelector(this.wz_class);let e=t.querySelector(this.wz_buttons);if(e&&this.buttons&&(e.remove(),e=null),!e&&this.buttons){const e=document.createElement("aside");e.classList.add(this.wz_buttons.replace(".",""));const s=this.wz_button_style.replace(/\./g,"").split(" "),i=document.createElement("button");i.innerHTML=this.prev,i.classList.add(this.wz_button.replace(".",""),...s,this.wz_prev.replace(".","")),"nav"===this.navigation&&(i.style.display="none"),e.appendChild(i);const n=document.createElement("button");n.innerHTML=this.next,n.classList.add(this.wz_button.replace(".",""),...s,this.wz_next.replace(".","")),"nav"===this.navigation&&(n.style.display="none"),e.appendChild(n);const r=document.createElement("button");r.innerHTML=this.finish,r.classList.add(this.wz_button.replace(".",""),...s,this.wz_finish.replace(".","")),e.appendChild(r),this.checkButtons(n,i,r),t.appendChild(e)}}checkButtons(t,e,s){const i=this.getCurrentStep(),n=this.steps-1;0===i?e.setAttribute("disabled","true"):e.removeAttribute("disabled"),i===n?(t.setAttribute("disabled","true"),s.style.display="block"):(s.style.display="none",t.removeAttribute("disabled"))}checkAndPrepare(t){this.setNav(t);const e=t.querySelector(this.wz_content);if(!e)throw new Error(this.i18n.empty_content);const s=e.querySelectorAll(this.wz_step);if(!s.length)throw new Error(this.i18n.empty_content);let i,n;if(this.nav){if(i=t.querySelector(this.wz_nav),!i)throw new Error(this.i18n.empty_nav);if(n=i.querySelectorAll(this.wz_step),!n.length)throw new Error(this.i18n.empty_nav);if(n.length!==s.length)throw new Error(this.i18n.diff_steps)}this.steps=s.length,this.prefabSteps(s,i,n)}onClick(t){const e=document.querySelector(this.wz_class);if(this.locked&&this.locked_step===this.getCurrentStep())return void e.dispatchEvent(new Event("wz.lock",{bubbles:this.bubbles}));const s=t.closest(this.wz_class),i=s.querySelector(this.wz_nav),n=s.querySelector(this.wz_content),r=t.classList.contains(this.wz_button.replace(".","")),o=t.classList.contains(this.wz_step.replace(".",""));let a=t.getAttribute("data-wz-step");a=null!==a?parseInt(a):this.getCurrentStep(),r&&(t.classList.contains(this.wz_prev.replace(".",""))?(a-=1,e.dispatchEvent(new Event("wz.btn.prev",{bubbles:this.bubbles}))):t.classList.contains(this.wz_next.replace(".",""))&&(a+=1,e.dispatchEvent(new Event("wz.btn.next",{bubbles:this.bubbles}))));const c=a>this.getCurrentStep();if(o&&(c?e.dispatchEvent(new Event("wz.nav.forward",{bubbles:this.bubbles})):a<this.getCurrentStep()&&e.dispatchEvent(new Event("wz.nav.backward",{bubbles:this.bubbles}))),this.form&&"buttons"!==this.navigation&&c&&a!==this.getCurrentStep()+1&&(a=a>=this.last_step?this.last_step:this.getCurrentStep()+1),this.form){const t=this.checkForm();if(t.error&&(c&&e.dispatchEvent(new CustomEvent("wz.error",{bubbles:this.bubbles,detail:{id:"form_validation",msg:this.i18n.form_validation,target:t.target}})),this.last_step=this.getCurrentStep(),this.getCurrentStep()<a))return}if(null!=a&&this.setCurrentStep(a),this.buttons){const t=s.querySelector(this.wz_buttons),e=t.querySelector(`${this.wz_button}${this.wz_next}`),i=t.querySelector(`${this.wz_button}${this.wz_prev}`),n=t.querySelector(`${this.wz_button}${this.wz_finish}`);this.checkButtons(e,i,n)}if(this.nav){i.querySelectorAll(this.wz_step).forEach((t=>t.classList.remove("active"))),i.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active")}n.querySelectorAll(this.wz_step).forEach((t=>t.classList.remove("active"))),n.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active")}onClickFinish(){if(this.form){this.checkForm().error||document.querySelector(this.wz_class).dispatchEvent(new Event("wz.form.submit",{bubbles:this.bubbles}))}else document.querySelector(this.wz_class).dispatchEvent(new Event("wz.end",{bubbles:this.bubbles}))}setCurrentStep(t){this.current_step=this.setStep(t)}getCurrentStep(){return this.current_step}setStep(t){const e=document.querySelector(this.wz_class).querySelector(this.wz_content);if(!e.querySelector(`${this.wz_step}[data-wz-step="${t}"]`)){const s=e.querySelectorAll(this.wz_step).length-1;t=Math.min(s,t)}return this.last_step=Math.max(t,this.last_step),parseInt(t,10)}setNavEvent(){document.querySelector(this.wz_class).addEventListener("click",(t=>{const e=t.target.closest(`${this.wz_nav} ${this.wz_step}`);e&&(t.preventDefault(),this.onClick(e))}))}setBtnEvent(){document.querySelector(this.wz_class).addEventListener("click",(t=>{const e=t.target.closest(`${this.wz_buttons} ${this.wz_button}`);e&&(t.preventDefault(),e.classList.contains(this.wz_finish.replace(".",""))?this.onClickFinish():this.onClick(e))}))}formValidator(t,e){let s=!1;const i=[];return e.forEach((e=>{let n=e.required||e.classList.contains("required");const r=e.classList.contains("on-active-required"),o=e.getAttribute("data-require-if");if(o){const[e,s]=o.split(":"),i=t.querySelector(`#${e}`);if(i){("checkbox"===i.type||"radio"===i.type?i.checked:i.value)===s&&(n=!0)}}let a=!0;(n||r)&&(a=this.validateField(e),a||(s=!0,i.push(e),this.highlight&&this.highlightElement(e,this.highlight_type.error)))})),{error:s,target:i}}validateField(t){switch(t.tagName){case"INPUT":return"checkbox"===t.type||"radio"===t.type?t.checked:""!==t.value.trim();case"SELECT":case"TEXTAREA":return""!==t.value.trim();default:return!0}}highlightElement(t,e){t.classList.add(this.wz_highlight.replace(".",""),e),setTimeout((()=>{t.classList.remove(this.wz_highlight.replace(".",""),e)}),this.highlight_time)}};return e=e.default}()}));
},{}],2:[function(require,module,exports){
"use strict";

var _wizardJs = _interopRequireDefault(require("@adrii_/wizard-js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var wz_class = ".wizard";
document.addEventListener("wz.ready", function (e) {
  console.log("My body is ready");
  console.log("\u2193 Target \u2193");
  console.log(e.detail.target);
  console.log("\u2193 Elem \u2193");
  console.log(e.detail.elem);
});
var args = {
  "wz_class": ".wizard",
  "wz_nav_style": "dots",
  "wz_button_style": ".btn .btn-sm .mx-3",
  "wz_ori": "vertical",
  "buttons": true,
  "navigation": 'all',
  "finish": "Save iie!",
  "bubble": true
};
var wizard = new _wizardJs["default"](args);
wizard.init();
document.getElementById("btn_reset").onclick = function () {
  wizard.reset();
};
document.getElementById("btn_lock").onclick = function () {
  wizard.lock();
};
document.getElementById("btn_unlock").onclick = function () {
  wizard.unlock();
};
var $wz_doc = document.querySelector(wz_class);
$wz_doc.addEventListener("wz.btn.prev", function (e) {
  console.log("Prev Step");
});
$wz_doc.addEventListener("wz.btn.next", function (e) {
  console.log("Next Step");
});
$wz_doc.addEventListener("wz.nav.forward", function (e) {
  console.log("Forward Nav");
});
$wz_doc.addEventListener("wz.nav.backward", function (e) {
  console.log("Backward Nav");
});
$wz_doc.addEventListener("wz.form.submit", function (e) {
  alert("Form Submit");
});
$wz_doc.addEventListener("wz.end", function (e) {
  alert("Wizard End");
});
$wz_doc.addEventListener("wz.error", function (e) {
  console.log("\u2193 ID \u2193");
  console.log(e.detail.id); // form_validaton

  console.log("\u2193 Message \u2193");
  console.log(e.detail.msg); //options.i18n.form_validation
});
$wz_doc.addEventListener("wz.lock", function (e) {
  alert("Wizard locked");
});
$wz_doc.addEventListener("wz.unlock", function (e) {
  alert("Wizard unlocked");
});
$wz_doc.addEventListener("wz.reset", function (e) {
  document.getElementById("formWizard").reset();
  alert("Wizard has restarted");
});
$wz_doc.addEventListener("wz.update", function (e) {
  alert("The Wizard has been updated !");
  console.log("\u2193 Target \u2193");
  console.log(e.detail.target); // .wizard

  console.log("\u2193 DOM Elem \u2193");
  console.log(e.detail.elem); // DOM form#wizard.wizard.horizontal
});
document.getElementById("btn_append").onclick = function () {
  setStep(wizard);
};
function setStep(wizard) {
  var html = "<div class=\"card card-body m-4 wizard-step\" data-id=\"patata\" data-title=\"Adrii\"> <label class=\"question\"> Embedded step </label> <input type=\"text\" maxlength=\"100\" name=\"patata\" class=\"form-control required\" placeholder=\"Embedded step\"> </div>";
  var wz = document.querySelector(wizard.wz_class);
  var wz_content = wz.querySelector(wizard.wz_content);
  var target = wz_content.querySelector("".concat(wizard.wz_step, "[data-wz-step=\"2\"]"));
  target.insertAdjacentHTML("beforebegin", html);
  wizard.update();
}

},{"@adrii_/wizard-js":1}]},{},[2])

//# sourceMappingURL=bundle.js.map