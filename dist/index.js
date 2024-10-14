!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Wizard=e():t.Wizard=e()}(self,(()=>(()=>{"use strict";var t={d:(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>i});const s=new class{hasClass(t,e){return t.classList.contains(e.replace(".",""))}getParent(t,e){for(;t&&"BODY"!==t.tagName;){if(t.matches(e))return t;t=t.parentElement}return null}delegate(t,e,s,i){t.addEventListener(e,(function(t){let e=t.target;for(;e&&e!==this;){if(e.matches(s))return void i.call(e,t);e=e.parentElement}}))}removeClassList(t,e){t.forEach((t=>t.classList.remove(e)))}objToString(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:";";return Object.entries(t).map((t=>{let[e,s]=t;return`${e}:${s}`})).join(e)}isHidden(t){return"none"===window.getComputedStyle(t).display}str2bool(t){return!["false","no","n","","null","undefined"].includes(String(t).toLowerCase())}exists(t){return null!=t}throwException(t){throw new Error(`wz.error: ${t}`)}closestNumber(t,e){return Math.max(0,Math.min(t,e))}highlight(t,e,s,i){const n=`${e.replace(".","")}-${s}`;t.classList.add(n),setTimeout((()=>{t.classList.forEach((s=>{s.startsWith(e.replace(".",""))&&t.classList.remove(s)}))}),i)}dispatchInput(t,e){let s=!1;switch(e.getAttribute("type")){case"email":s=this.isEmail(e.value);break;case"url":s=this.isValidURL(e.value);break;case"checkbox":s=e.name.endsWith("[]")?t.querySelectorAll(`input[name="${e.name}"]:checked`).length>0:e.checked;break;case"radio":s=t.querySelectorAll(`input[name="${e.name}"]:checked`).length>0;break;default:s=this.isNotEmpty(e.value)}return s}checkSelect(t){return this.isNotEmpty(t.value)}isNotEmpty(t){return null!=t&&t.trim().length>0}isEmptyObj(t){return 0===Object.keys(t).length}isEmail(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}isValidURL(t){try{const e=new URL(t);return["http:","https:"].includes(e.protocol)}catch{return!1}}cleanEvents(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.exists(t)){const s=t.cloneNode(!e);if(e)t.parentNode.replaceChild(s,t);else{for(;t.firstChild;)s.appendChild(t.firstChild);t.parentNode.replaceChild(s,t)}}}},i=class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.prefabOpts({wz_class:".wizard",wz_nav:".wizard-nav",wz_ori:".horizontal",wz_nav_style:"dots",wz_content:".wizard-content",wz_buttons:".wizard-buttons",wz_button:".wizard-btn",wz_button_style:".btn",wz_step:".wizard-step",wz_form:".wizard-form",wz_next:".next",wz_prev:".prev",wz_finish:".finish",wz_highlight:".highlight",nav:!0,buttons:!0,highlight:!0,current_step:0,steps:0,highlight_time:1e3,navigation:"all",next:"Next",prev:"Prev",finish:"Submit",highlight_type:{error:"error",warning:"warning",success:"success",info:"info"},i18n:{empty_wz:"No item has been found with which to generate the Wizard.",empty_nav:"Nav does not exist or is empty.",empty_content:"Content does not exist or is empty.",empty_html:"Undefined or null content cannot be added.",empty_update:"Nothing to update.",no_nav:"Both the nav and the buttons are disabled, there is no navigation system.",form_validation:"One or more of the form fields are invalid.",diff_steps:"Discordance between the steps of nav and content.",random:"There has been a problem, check the configuration and use of the wizard.",already_definded:"This item is already defined",title:"Step"}},t),this.wz_class=this.options.wz_class,this.wz_active="active",this.wz_ori=this.options.wz_ori,this.wz_nav=this.options.wz_nav,this.wz_nav_style=this.options.wz_nav_style,this.wz_content=this.options.wz_content,this.wz_buttons=this.options.wz_buttons,this.wz_button=this.options.wz_button,this.wz_button_style=this.options.wz_button_style,this.wz_step=this.options.wz_step,this.wz_form=this.options.wz_form,this.wz_next=this.options.wz_next,this.wz_prev=this.options.wz_prev,this.wz_finish=this.options.wz_finish,this.wz_highlight=this.options.wz_highlight,this.buttons=this.options.buttons,this.nav=this.options.nav,this.highlight=this.options.highlight,this.highlight_time=this.options.highlight_time,this.highlight_type=this.options.highlight_type,this.steps=this.options.steps,this.current_step=this.options.current_step,this.last_step=this.current_step,this.navigation=this.options.navigation,this.prev=this.options.prev,this.next=this.options.next,this.finish=this.options.finish,this.form=!1,this.locked=!1,this.locked_step=null}init(){try{const t=s.exists(document.querySelector(this.wz_class))?document.querySelector(this.wz_class):s.throwException(this.options.i18n.empty_wz);if(s.str2bool(t.getAttribute("data-wz-load"))&&1==t.getAttribute("data-wz-load"))return console.warn(`${this.wz_class} : ${this.options.i18n.already_definded}`),!1;s.cleanEvents(document.querySelector(this.wz_class),!0);const e=s.exists(document.querySelector(this.wz_class))?document.querySelector(this.wz_class):s.throwException(this.options.i18n.empty_wz);switch(!1===s.str2bool(this.buttons)&&!1===s.str2bool(this.nav)&&console.warn(this.options.i18n.no_nav),e.classList.add(this.wz_ori.replace(".","")),"FORM"===e.tagName&&(this.form=!0),this.check2Prepare(e),this.navigation){case"all":case"nav":this.setNavEvent(),this.setBtnEvent();break;case"buttons":this.setBtnEvent()}e.style.display=s.hasClass(e,"vertical")?"flex":"block",e.setAttribute("data-wz-load",!0),document.dispatchEvent(new CustomEvent("wz.ready",{detail:{target:this.wz_class,elem:document.querySelector(this.wz_class)}}))}catch(t){throw t}}update(){const t=s.exists(document.querySelector(this.wz_class))?document.querySelector(this.wz_class):s.throwException(this.options.i18n.empty_wz);!1===s.str2bool(t.getAttribute("data-wz-load"))&&1!=t.getAttribute("data-wz-load")&&s.throwException(this.options.i18n.empty_wz),this.check2Prepare(t),this.content_update=!1,document.querySelector(this.wz_class).dispatchEvent(new CustomEvent("wz.update",{detail:{target:this.wz_class,elem:document.querySelector(this.wz_class)}}))}reset(){this.setCurrentStep(0);const t=document.querySelector(this.wz_class),e=t.querySelector(this.wz_nav),i=t.querySelector(this.wz_content);if(!1!==s.str2bool(this.buttons)){let e=t.querySelector(this.wz_buttons),s=e.querySelector(this.wz_button+this.wz_next),i=e.querySelector(this.wz_button+this.wz_prev),n=e.querySelector(this.wz_button+this.wz_finish);this.checkButtons(s,i,n)}let n=e.querySelectorAll(this.wz_step);s.removeClassList(n,"active");let o=i.querySelectorAll(this.wz_step);s.removeClassList(o,"active"),e.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active"),i.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active"),t.dispatchEvent(new Event("wz.reset"))}lock(){this.locked=!0,this.locked_step=this.getCurrentStep()}unlock(){this.locked=!1,this.locked_step=null,document.querySelector(this.wz_class).dispatchEvent(new Event("wz.unlock"))}prefabSteps(t,e,i){let n=this.getCurrentStep();for(let e=0;e<t.length;e++)t[e].setAttribute("data-wz-step",e),!1!==s.str2bool(this.nav)&&i[e].setAttribute("data-wz-step",e);!1!==s.str2bool(this.nav)&&(s.removeClassList(i,"active"),i[n].classList.add("active"),e.classList.add(this.wz_nav_style)),s.removeClassList(t,"active"),t[n].classList.add("active"),this.setButtons()}update2Form(){let t=document.querySelector(this.wz_class),e=t.querySelector(this.wz_content);if("FORM"!==e.tagName){let s=e.getAttribute("class"),i=e.innerHTML;e.remove();const n=document.createElement("form");n.setAttribute("method","POST"),n.setAttribute("class",s+" "+this.wz_form.replace(".","")),n.innerHTML=i,t.appendChild(n)}}checkForm(){let t=document.querySelector(this.wz_class).querySelector(this.wz_content),e=!1,s=t.querySelectorAll(this.wz_step)[this.getCurrentStep()].querySelectorAll("input,textarea,select");return s.length>0&&(e=this.formValidator(t,s)),e}setNav(t){let e=t.querySelector(this.wz_nav);if(!1!==s.exists(e)&&!1!==s.str2bool(this.nav)&&(e.remove(),e=t.querySelector(this.wz_nav)),!1===s.exists(e)&&!1!==s.str2bool(this.nav)){let e=t.querySelector(this.wz_content),s=e.querySelectorAll(this.wz_step);const i=document.createElement("ASIDE");i.classList.add(this.wz_nav.replace(".",""));const n=e.querySelectorAll(this.wz_step).length;for(let t=0;t<n;t++){const e=document.createElement("DIV");let n=s[t].hasAttribute("data-wz-title")?s[t].getAttribute("data-wz-title"):`${this.options.i18n.title} ${t}`;e.classList.add(this.wz_step.replace(".","")),"buttons"===this.navigation&&e.classList.add("nav-buttons");const o=document.createElement("SPAN");o.classList.add("dot"),e.appendChild(o);const r=document.createElement("SPAN");r.innerHTML=n,e.appendChild(r),i.appendChild(e)}t.prepend(i)}}setButtons(){let t=document.querySelector(this.wz_class),e=t.querySelector(this.wz_buttons);if(!1!==s.exists(e)&&!1!==s.str2bool(this.buttons)&&(e.remove(),e=t.querySelector(this.wz_buttons)),!1===s.exists(e)&&!1!==s.str2bool(this.buttons)){const e=document.createElement("ASIDE");e.classList.add(this.wz_buttons.replace(".",""));let s=this.wz_button_style.replaceAll(".","");s=s.split(" ");const i=document.createElement("BUTTON");i.innerHTML=this.prev,i.classList.add(this.wz_button.replace(".","")),i.classList.add(...s),i.classList.add(this.wz_prev.replace(".","")),"nav"===this.navigation&&(i.style.display="none"),e.appendChild(i);const n=document.createElement("BUTTON");n.innerHTML=this.next,n.classList.add(this.wz_button.replace(".","")),n.classList.add(...s),n.classList.add(this.wz_next.replace(".","")),"nav"===this.navigation&&(n.style.display="none"),e.appendChild(n);const o=document.createElement("BUTTON");o.innerHTML=this.finish,o.classList.add(this.wz_button.replace(".","")),o.classList.add(...s),o.classList.add(this.wz_finish.replace(".","")),e.appendChild(o),this.checkButtons(n,i,o),t.appendChild(e)}}checkButtons(t,e,s){let i=this.getCurrentStep(),n=this.steps-1;0==i?e.setAttribute("disabled",!0):e.removeAttribute("disabled"),i==n?(t.setAttribute("disabled",!0),s.style.display="block"):(s.style.display="none",t.removeAttribute("disabled"))}check2Prepare(t){this.setNav(t);const e=(s.exists(t.querySelector(this.wz_content))?t.querySelector(this.wz_content):s.throwException(this.options.i18n.empty_content)).querySelectorAll(this.wz_step),i=e.length>0?e.length:s.throwException(this.options.i18n.empty_content);let n,o;!1!==s.str2bool(this.nav)&&(n=s.exists(t.querySelector(this.wz_nav))?t.querySelector(this.wz_nav):s.throwException(this.options.i18n.empty_nav),o=n.querySelectorAll(this.wz_step),(o.length>0?o.length:s.throwException(this.options.i18n.empty_nav))!=i&&s.throwException(this.options.i18n.diff_steps)),this.steps=i,this.prefabSteps(e,n,o)}onClick(t){const e=t,i=document.querySelector(this.wz_class);if(this.locked&&this.locked_step===this.getCurrentStep())return i.dispatchEvent(new Event("wz.lock")),!1;const n=s.getParent(e,this.wz_class),o=n.querySelector(this.wz_nav),r=n.querySelector(this.wz_content),a=s.hasClass(e,this.wz_button),h=s.hasClass(e,this.wz_step);let l=!1!==s.str2bool(e.getAttribute("data-wz-step"))?parseInt(e.getAttribute("data-wz-step")):this.getCurrentStep();a&&(s.hasClass(e,this.wz_prev)?(l-=1,i.dispatchEvent(new Event("wz.btn.prev"))):s.hasClass(e,this.wz_next)&&(l+=1,i.dispatchEvent(new Event("wz.btn.next"))));let c=l>this.getCurrentStep();if(h&&(c?i.dispatchEvent(new Event("wz.nav.forward")):l<this.getCurrentStep()&&i.dispatchEvent(new Event("wz.nav.backward"))),this.form&&"buttons"!=this.navigation&&c&&l!==this.getCurrentStep()+1&&(l=l>=this.last_step?this.last_step:this.getCurrentStep()+1),this.form){const t=this.checkForm();if(!0===t.error&&(c&&i.dispatchEvent(new CustomEvent("wz.error",{detail:{id:"form_validaton",msg:this.options.i18n.form_validation,target:t.target}})),this.last_step=this.getCurrentStep(),this.getCurrentStep()<l))return!1}if(s.str2bool(l)&&this.setCurrentStep(l),!1!==s.str2bool(this.buttons)){const t=n.querySelector(this.wz_buttons),e=t.querySelector(this.wz_button+this.wz_next),s=t.querySelector(this.wz_button+this.wz_prev),i=t.querySelector(this.wz_button+this.wz_finish);this.checkButtons(e,s,i)}if(!1!==s.str2bool(this.nav)){const t=o.querySelectorAll(this.wz_step);s.removeClassList(t,"active"),o.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active")}const p=r.querySelectorAll(this.wz_step);s.removeClassList(p,"active"),r.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active")}onClickFinish(t){this.form?!0!==this.checkForm().error&&document.querySelector(this.wz_class).dispatchEvent(new Event("wz.form.submit")):document.querySelector(this.wz_class).dispatchEvent(new Event("wz.end"))}setCurrentStep(t){this.current_step=this.setStep(t)}getCurrentStep(){return this.current_step}setStep(t){let e=document.querySelector(this.wz_class).querySelector(this.wz_content),i=e.querySelector(`${this.wz_step}[data-wz-step="${t}"]`);if(!1===s.exists(i)){let i=e.querySelectorAll(this.wz_step).length-1;t=s.closetNubmer(i,t)}return this.last_step=t>this.last_step?t:this.last_step,parseInt(t)}setNavEvent(){let t=this,e=document.querySelector(this.wz_class);s.delegate(e,"click",`${this.wz_nav} ${this.wz_step}`,(function(e){e.preventDefault(),t.onClick(this)}))}setBtnEvent(){let t=this,e=document.querySelector(this.wz_class);s.delegate(e,"click",`${this.wz_buttons} ${this.wz_button}`,(function(e){e.preventDefault(),s.hasClass(e.target,t.wz_finish)?t.onClickFinish(this):t.onClick(this)}))}set_options(t){this.options=t}prefabOpts(t,e){!1!==s.isEmptyObj(e)&&Object.entries(e).forEach((e=>{let[s,i]=e;"object"==typeof i?Object.entries(i).forEach((e=>{let[i,n]=e;t[s][i]=n})):t[s]=i})),this.set_options(t)}formValidator(t,e){let i=!1,n=[];for(let o of e)if(s.hasClass(o,"required")||s.exists(o.getAttribute("required"))){let e=!1;switch(o.tagName){case"INPUT":e=s.dispatchInput(t,o);break;case"SELECT":e=s.checkSelect(o);break;case"TEXTAREA":e=s.isEmpty(o.value)}!1===e&&(i=!0,n.push(o),!0===s.str2bool(this.highlight)&&s.highlight(o,this.wz_highlight,this.highlight_type.error,this.highlight_time))}return{error:i,target:n}}};return e.default})()));