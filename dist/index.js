(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Wizard"] = factory();
	else
		root["Wizard"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");

/**
 * A lightweight wizard UI component that supports accessibility and HTML5 in Vanilla JavaScript.
 *
 * @link   https://github.com/AdrianVillamayor/Wizard-JS
 * @author Adrian
 *
 * @class  Wizard
 */
class Wizard {
  constructor() {
    let args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const defaults = {
      wz_class: ".wizard",
      wz_nav: ".wizard-nav",
      wz_ori: ".horizontal",
      wz_nav_style: "dots",
      wz_content: ".wizard-content",
      wz_buttons: ".wizard-buttons",
      wz_button: ".wizard-btn",
      wz_button_style: ".btn",
      wz_step: ".wizard-step",
      wz_form: ".wizard-form",
      wz_next: ".next",
      wz_prev: ".prev",
      wz_finish: ".finish",
      wz_highlight: ".highlight-error",
      bubbles: false,
      nav: true,
      buttons: true,
      highlight: true,
      current_step: 0,
      steps: 0,
      highlight_time: 1000,
      navigation: "all",
      next: "Next",
      prev: "Prev",
      finish: "Submit",
      highlight_type: {
        error: "error",
        warning: "warning",
        success: "success",
        info: "info"
      },
      i18n: {
        empty_wz: "No item has been found with which to generate the Wizard.",
        empty_nav: "Nav does not exist or is empty.",
        empty_content: "Content does not exist or is empty.",
        empty_html: "Undefined or null content cannot be added.",
        empty_update: "Nothing to update.",
        no_nav: "Both the nav and the buttons are disabled, there is no navigation system.",
        form_validation: "One or more of the form fields are invalid.",
        diff_steps: "Discordance between the steps of nav and content.",
        random: "There has been a problem, check the configuration and use of the wizard.",
        already_defined: "This item is already defined",
        title: "Step"
      }
    };
    this.options = {
      ...defaults,
      ...args
    };
    const {
      wz_class,
      wz_nav,
      wz_ori,
      wz_nav_style,
      wz_content,
      wz_buttons,
      wz_button,
      wz_button_style,
      wz_step,
      wz_form,
      wz_next,
      wz_prev,
      wz_finish,
      wz_highlight,
      nav,
      buttons,
      highlight,
      highlight_time,
      highlight_type,
      current_step,
      steps,
      navigation,
      prev,
      next,
      finish,
      i18n,
      bubbles
    } = this.options;
    Object.assign(this, {
      wz_class,
      wz_nav,
      wz_ori,
      wz_nav_style,
      wz_content,
      wz_buttons,
      wz_button,
      wz_button_style,
      wz_step,
      wz_form,
      wz_next,
      wz_prev,
      wz_finish,
      wz_highlight,
      nav,
      buttons,
      highlight,
      highlight_time,
      highlight_type,
      current_step,
      steps,
      navigation,
      prev,
      next,
      finish,
      i18n,
      last_step: current_step,
      form: false,
      locked: false,
      locked_step: null
    });
  }

  /**
   * Initializes the wizard
   */
  init() {
    try {
      const wz_check = document.querySelector(this.wz_class);
      if (!wz_check) throw new Error(this.i18n.empty_wz);
      if (wz_check.getAttribute("data-wz-load") === "true") {
        console.warn(`${this.wz_class} : ${this.i18n.already_defined}`);
        return;
      }
      const wz = wz_check;
      if (!this.buttons && !this.nav) {
        console.warn(this.i18n.no_nav);
      }
      wz.classList.add(this.wz_ori.replace(".", ""));
      if (wz.tagName === "FORM") {
        this.form = true;
      }
      this.checkAndPrepare(wz);
      switch (this.navigation) {
        case "all":
        case "nav":
          this.setNavEvent();
          this.setBtnEvent();
          break;
        case "buttons":
          this.setBtnEvent();
          break;
      }
      wz.style.display = wz.classList.contains("vertical") ? "flex" : "block";
      wz.setAttribute("data-wz-load", "true");
      document.dispatchEvent(new CustomEvent("wz.ready", {
        bubbles: this.bubbles,
        detail: {
          target: this.wz_class,
          elem: wz
        }
      }));
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Check and update each section of the wizard.
   */
  update() {
    const wz = document.querySelector(this.wz_class);
    if (!wz) throw new Error(this.i18n.empty_wz);
    if (wz.getAttribute("data-wz-load") !== "true") {
      throw new Error(this.i18n.empty_wz);
    }
    this.checkAndPrepare(wz);
    this.content_update = false;
    wz.dispatchEvent(new CustomEvent("wz.update", {
      bubbles: this.bubbles,
      detail: {
        target: this.wz_class,
        elem: wz
      }
    }));
  }

  /**
   * Restart the wizard
   */
  reset() {
    this.setCurrentStep(0);
    const wz = document.querySelector(this.wz_class);
    const nav = wz.querySelector(this.wz_nav);
    const content = wz.querySelector(this.wz_content);
    if (this.buttons) {
      const buttons = wz.querySelector(this.wz_buttons);
      const next = buttons.querySelector(`${this.wz_button}${this.wz_next}`);
      const prev = buttons.querySelector(`${this.wz_button}${this.wz_prev}`);
      const finish = buttons.querySelector(`${this.wz_button}${this.wz_finish}`);
      this.checkButtons(next, prev, finish);
    }
    if (this.nav) {
      const wz_nav_steps = nav.querySelectorAll(this.wz_step);
      wz_nav_steps.forEach(el => el.classList.remove("active"));
      nav.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active");
    }
    const wz_content_steps = content.querySelectorAll(this.wz_step);
    wz_content_steps.forEach(el => el.classList.remove("active"));
    content.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active");
    wz.dispatchEvent(new Event("wz.reset", {
      bubbles: this.bubbles
    }));
  }

  /**
   * Locks the wizard in the active step
   */
  lock() {
    this.locked = true;
    this.locked_step = this.getCurrentStep();
  }

  /**
   * Unlock wizard
   */
  unlock() {
    this.locked = false;
    this.locked_step = null;
    document.querySelector(this.wz_class).dispatchEvent(new Event("wz.unlock", {
      bubbles: this.bubbles
    }));
  }

  /**
   * Generate the steps and define a standard for each step.
   */
  prefabSteps(wz_content_steps, wz_nav, wz_nav_steps) {
    const active_index = this.getCurrentStep();
    wz_content_steps.forEach((step, i) => {
      step.setAttribute("data-wz-step", i);
      if (this.nav) wz_nav_steps[i].setAttribute("data-wz-step", i);
    });
    if (this.nav) {
      wz_nav_steps.forEach(el => el.classList.remove("active"));
      wz_nav_steps[active_index].classList.add("active");
      wz_nav.classList.add(this.wz_nav_style);
    }
    wz_content_steps.forEach(el => el.classList.remove("active"));
    wz_content_steps[active_index].classList.add("active");
    this.setButtons();
  }

  /**
   * Adds the form tag and converts the wizard into a <form>
   */
  updateToForm() {
    const wz = document.querySelector(this.wz_class);
    const wz_content = wz.querySelector(this.wz_content);
    if (wz_content.tagName !== "FORM") {
      const wz_content_class = wz_content.getAttribute("class");
      const wz_content_content = wz_content.innerHTML;
      wz_content.remove();
      const form = document.createElement("form");
      form.setAttribute("method", "POST");
      form.setAttribute("class", `${wz_content_class} ${this.wz_form.replace(".", "")}`);
      form.innerHTML = wz_content_content;
      wz.appendChild(form);
    }
  }

  /**
   * Checks and validates each input/select/textarea of the active step.
   */
  checkForm() {
    const wz = document.querySelector(this.wz_class);
    const wz_content = wz.querySelector(this.wz_content);
    const steps = wz_content.querySelectorAll(this.wz_step);
    const target = steps[this.getCurrentStep()];
    const inputs = target.querySelectorAll("input, textarea, select");
    if (inputs.length > 0) {
      return this.formValidator(wz_content, inputs);
    }
    return {
      error: false
    };
  }

  /**
   * Generating, styling and shaping the Nav
   */
  setNav(wz) {
    let wz_nav = wz.querySelector(this.wz_nav);
    if (wz_nav && this.nav) {
      wz_nav.remove();
      wz_nav = null;
    }
    if (!wz_nav && this.nav) {
      const wz_content = wz.querySelector(this.wz_content);
      const steps = wz_content.querySelectorAll(this.wz_step);
      const nav = document.createElement("aside");
      nav.classList.add(this.wz_nav.replace(".", ""));
      steps.forEach((step, i) => {
        const nav_step = document.createElement("div");
        const title = step.getAttribute("data-wz-title") || `${this.i18n.title} ${i}`;
        nav_step.classList.add(this.wz_step.replace(".", ""));
        if (this.navigation === "buttons") nav_step.classList.add("nav-buttons");
        const dot = document.createElement("span");
        dot.classList.add("dot");
        nav_step.appendChild(dot);
        const span = document.createElement("span");
        span.innerHTML = title;
        nav_step.appendChild(span);
        nav.appendChild(nav_step);
      });
      wz.prepend(nav);
    }
  }

  /**
   * Generating, styling and shaping Buttons
   */
  setButtons() {
    const wz = document.querySelector(this.wz_class);
    let wz_btns = wz.querySelector(this.wz_buttons);
    if (wz_btns && this.buttons) {
      wz_btns.remove();
      wz_btns = null;
    }
    if (!wz_btns && this.buttons) {
      const buttons = document.createElement("aside");
      buttons.classList.add(this.wz_buttons.replace(".", ""));
      const btn_style = this.wz_button_style.replace(/\./g, "").split(" ");
      const prev = document.createElement("button");
      prev.innerHTML = this.prev;
      prev.classList.add(this.wz_button.replace(".", ""), ...btn_style, this.wz_prev.replace(".", ""));
      if (this.navigation === "nav") prev.style.display = "none";
      buttons.appendChild(prev);
      const next = document.createElement("button");
      next.innerHTML = this.next;
      next.classList.add(this.wz_button.replace(".", ""), ...btn_style, this.wz_next.replace(".", ""));
      if (this.navigation === "nav") next.style.display = "none";
      buttons.appendChild(next);
      const finish = document.createElement("button");
      finish.innerHTML = this.finish;
      finish.classList.add(this.wz_button.replace(".", ""), ...btn_style, this.wz_finish.replace(".", ""));
      buttons.appendChild(finish);
      this.checkButtons(next, prev, finish);
      wz.appendChild(buttons);
    }
  }

  /**
   * Generating, styling and shaping Buttons
   */
  checkButtons(next, prev, finish) {
    const current_step = this.getCurrentStep();
    const n_steps = this.steps - 1;
    if (current_step === 0) {
      prev.setAttribute("disabled", "true");
    } else {
      prev.removeAttribute("disabled");
    }
    if (current_step === n_steps) {
      next.setAttribute("disabled", "true");
      finish.style.display = "block";
    } else {
      finish.style.display = "none";
      next.removeAttribute("disabled");
    }
  }

  /**
   * Common function for wizard checks and prefab.
   */
  checkAndPrepare(wz) {
    this.setNav(wz);
    const wz_content = wz.querySelector(this.wz_content);
    if (!wz_content) throw new Error(this.i18n.empty_content);
    const wz_content_steps = wz_content.querySelectorAll(this.wz_step);
    if (!wz_content_steps.length) throw new Error(this.i18n.empty_content);
    let wz_nav, wz_nav_steps;
    if (this.nav) {
      wz_nav = wz.querySelector(this.wz_nav);
      if (!wz_nav) throw new Error(this.i18n.empty_nav);
      wz_nav_steps = wz_nav.querySelectorAll(this.wz_step);
      if (!wz_nav_steps.length) throw new Error(this.i18n.empty_nav);
      if (wz_nav_steps.length !== wz_content_steps.length) {
        throw new Error(this.i18n.diff_steps);
      }
    }
    this.steps = wz_content_steps.length;
    this.prefabSteps(wz_content_steps, wz_nav, wz_nav_steps);
  }

  /**
   * Click event handler for Buttons and Nav.
   */
  onClick(element) {
    const wz = document.querySelector(this.wz_class);
    if (this.locked && this.locked_step === this.getCurrentStep()) {
      wz.dispatchEvent(new Event("wz.lock", {
        bubbles: this.bubbles
      }));
      return;
    }
    const parent = element.closest(this.wz_class);
    const nav = parent.querySelector(this.wz_nav);
    const content = parent.querySelector(this.wz_content);
    const is_btn = element.classList.contains(this.wz_button.replace(".", ""));
    const is_nav = element.classList.contains(this.wz_step.replace(".", ""));
    let step = element.getAttribute("data-wz-step");
    step = step !== null ? parseInt(step) : this.getCurrentStep();
    if (is_btn) {
      if (element.classList.contains(this.wz_prev.replace(".", ""))) {
        step -= 1;
        wz.dispatchEvent(new Event("wz.btn.prev", {
          bubbles: this.bubbles
        }));
      } else if (element.classList.contains(this.wz_next.replace(".", ""))) {
        step += 1;
        wz.dispatchEvent(new Event("wz.btn.next", {
          bubbles: this.bubbles
        }));
      }
    }
    const step_action = step > this.getCurrentStep();
    if (is_nav) {
      if (step_action) {
        wz.dispatchEvent(new Event("wz.nav.forward", {
          bubbles: this.bubbles
        }));
      } else if (step < this.getCurrentStep()) {
        wz.dispatchEvent(new Event("wz.nav.backward", {
          bubbles: this.bubbles
        }));
      }
    }
    if (this.form && this.navigation !== "buttons") {
      if (step_action) {
        if (step !== this.getCurrentStep() + 1) {
          step = step >= this.last_step ? this.last_step : this.getCurrentStep() + 1;
        }
      }
    }
    if (this.form) {
      const check_form = this.checkForm();
      if (check_form.error) {
        if (step_action) {
          wz.dispatchEvent(new CustomEvent("wz.error", {
            bubbles: this.bubbles,
            detail: {
              id: "form_validation",
              msg: this.i18n.form_validation,
              target: check_form.target
            }
          }));
        }
        this.last_step = this.getCurrentStep();
        if (this.getCurrentStep() < step) {
          return;
        }
      }
    }
    if (step !== null && step !== undefined) {
      this.setCurrentStep(step);
    }
    if (this.buttons) {
      const buttons = parent.querySelector(this.wz_buttons);
      const next = buttons.querySelector(`${this.wz_button}${this.wz_next}`);
      const prev = buttons.querySelector(`${this.wz_button}${this.wz_prev}`);
      const finish = buttons.querySelector(`${this.wz_button}${this.wz_finish}`);
      this.checkButtons(next, prev, finish);
    }
    if (this.nav) {
      const wz_nav_steps = nav.querySelectorAll(this.wz_step);
      wz_nav_steps.forEach(el => el.classList.remove("active"));
      nav.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active");
    }
    const wz_content_steps = content.querySelectorAll(this.wz_step);
    wz_content_steps.forEach(el => el.classList.remove("active"));
    content.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active");
  }

  /**
   * Notifies that the wizard has been completed.
   */
  onClickFinish() {
    if (this.form) {
      const check_form = this.checkForm();
      if (!check_form.error) {
        document.querySelector(this.wz_class).dispatchEvent(new Event("wz.form.submit", {
          bubbles: this.bubbles
        }));
      }
    } else {
      document.querySelector(this.wz_class).dispatchEvent(new Event("wz.end", {
        bubbles: this.bubbles
      }));
    }
  }

  /**
   * Set the active step
   */
  setCurrentStep(step) {
    this.current_step = this.setStep(step);
  }

  /**
   * Return the active step
   */
  getCurrentStep() {
    return this.current_step;
  }

  /**
   * Check and match the steps of the wizard.
   */
  setStep(step) {
    const parent = document.querySelector(this.wz_class);
    const content = parent.querySelector(this.wz_content);
    const check_content = content.querySelector(`${this.wz_step}[data-wz-step="${step}"]`);
    if (!check_content) {
      const content_length = content.querySelectorAll(this.wz_step).length - 1;
      step = Math.min(content_length, step);
    }
    this.last_step = Math.max(step, this.last_step);
    return parseInt(step, 10);
  }

  /**
   * Set Nav events
   */
  setNavEvent() {
    const wz = document.querySelector(this.wz_class);
    wz.addEventListener("click", event => {
      const target = event.target.closest(`${this.wz_nav} ${this.wz_step}`);
      if (target) {
        event.preventDefault();
        this.onClick(target);
      }
    });
  }

  /**
   * Set Button events
   */
  setBtnEvent() {
    const wz = document.querySelector(this.wz_class);
    wz.addEventListener("click", event => {
      const target = event.target.closest(`${this.wz_buttons} ${this.wz_button}`);
      if (target) {
        event.preventDefault();
        if (target.classList.contains(this.wz_finish.replace(".", ""))) {
          this.onClickFinish();
        } else {
          this.onClick(target);
        }
      }
    });
  }

  /**
   * Checks the fields of the active step, in case there is an error it generates a highlight.
   */
  formValidator(wz_content, formData) {
    let error = false;
    const target = [];
    formData.forEach(e => {
      let isRequired = e.required || e.classList.contains("required");
      const isOnActiveRequired = e.classList.contains("on-active-required");

      // Check for data-require-if attribute
      const requireIf = e.getAttribute("data-require-if");
      if (requireIf) {
        const [dependencyId, requiredValue] = requireIf.split(":");
        const dependencyField = wz_content.querySelector(`#${dependencyId}`);
        if (dependencyField) {
          const dependencyValue = dependencyField.type === "checkbox" || dependencyField.type === "radio" ? dependencyField.checked : dependencyField.value;
          if (dependencyValue === requiredValue) {
            isRequired = true;
          }
        }
      }
      let valid = true;
      if (isRequired || isOnActiveRequired) {
        valid = this.validateField(e);
        if (!valid) {
          error = true;
          target.push(e);
          if (this.highlight) {
            this.highlightElement(e, this.highlight_type.error);
          }
        }
      }
    });
    return {
      error,
      target
    };
  }
  validateField(e) {
    switch (e.tagName) {
      case "INPUT":
        if (e.type === "checkbox" || e.type === "radio") {
          return e.checked;
        } else {
          return e.value.trim() !== "";
        }
      case "SELECT":
        return e.value.trim() !== "";
      case "TEXTAREA":
        return e.value.trim() !== "";
      default:
        return true;
    }
  }

  /**
   * Highlights an element to indicate validation errors.
   */
  highlightElement(element, type) {
    element.classList.add(this.wz_highlight.replace(".", ""), type);
    setTimeout(() => {
      element.classList.remove(this.wz_highlight.replace(".", ""), type);
    }, this.highlight_time);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wizard);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7O0FDVkE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxNQUFNLENBQUM7RUFDVEMsV0FBV0EsQ0FBQSxFQUFZO0lBQUEsSUFBWEMsSUFBSSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7SUFDakIsTUFBTUcsUUFBUSxHQUFHO01BQ2JDLFFBQVEsRUFBRSxTQUFTO01BQ25CQyxNQUFNLEVBQUUsYUFBYTtNQUNyQkMsTUFBTSxFQUFFLGFBQWE7TUFDckJDLFlBQVksRUFBRSxNQUFNO01BQ3BCQyxVQUFVLEVBQUUsaUJBQWlCO01BQzdCQyxVQUFVLEVBQUUsaUJBQWlCO01BQzdCQyxTQUFTLEVBQUUsYUFBYTtNQUN4QkMsZUFBZSxFQUFFLE1BQU07TUFDdkJDLE9BQU8sRUFBRSxjQUFjO01BQ3ZCQyxPQUFPLEVBQUUsY0FBYztNQUN2QkMsT0FBTyxFQUFFLE9BQU87TUFDaEJDLE9BQU8sRUFBRSxPQUFPO01BQ2hCQyxTQUFTLEVBQUUsU0FBUztNQUNwQkMsWUFBWSxFQUFFLGtCQUFrQjtNQUNoQ0MsT0FBTyxFQUFFLEtBQUs7TUFFZEMsR0FBRyxFQUFFLElBQUk7TUFDVEMsT0FBTyxFQUFFLElBQUk7TUFDYkMsU0FBUyxFQUFFLElBQUk7TUFFZkMsWUFBWSxFQUFFLENBQUM7TUFDZkMsS0FBSyxFQUFFLENBQUM7TUFDUkMsY0FBYyxFQUFFLElBQUk7TUFDcEJDLFVBQVUsRUFBRSxLQUFLO01BQ2pCQyxJQUFJLEVBQUUsTUFBTTtNQUNaQyxJQUFJLEVBQUUsTUFBTTtNQUNaQyxNQUFNLEVBQUUsUUFBUTtNQUVoQkMsY0FBYyxFQUFFO1FBQUVDLEtBQUssRUFBRSxPQUFPO1FBQUVDLE9BQU8sRUFBRSxTQUFTO1FBQUVDLE9BQU8sRUFBRSxTQUFTO1FBQUVDLElBQUksRUFBRTtNQUFPLENBQUM7TUFFeEZDLElBQUksRUFBRTtRQUNGQyxRQUFRLEVBQUUsMkRBQTJEO1FBQ3JFQyxTQUFTLEVBQUUsaUNBQWlDO1FBQzVDQyxhQUFhLEVBQUUscUNBQXFDO1FBQ3BEQyxVQUFVLEVBQUUsNENBQTRDO1FBQ3hEQyxZQUFZLEVBQUUsb0JBQW9CO1FBQ2xDQyxNQUFNLEVBQUUsMkVBQTJFO1FBQ25GQyxlQUFlLEVBQUUsNkNBQTZDO1FBQzlEQyxVQUFVLEVBQUUsbURBQW1EO1FBQy9EQyxNQUFNLEVBQUUsMEVBQTBFO1FBQ2xGQyxlQUFlLEVBQUUsOEJBQThCO1FBQy9DQyxLQUFLLEVBQUU7TUFDWDtJQUNKLENBQUM7SUFFRCxJQUFJLENBQUNDLE9BQU8sR0FBRztNQUFFLEdBQUczQyxRQUFRO01BQUUsR0FBR0o7SUFBSyxDQUFDO0lBRXZDLE1BQU07TUFDRkssUUFBUTtNQUNSQyxNQUFNO01BQ05DLE1BQU07TUFDTkMsWUFBWTtNQUNaQyxVQUFVO01BQ1ZDLFVBQVU7TUFDVkMsU0FBUztNQUNUQyxlQUFlO01BQ2ZDLE9BQU87TUFDUEMsT0FBTztNQUNQQyxPQUFPO01BQ1BDLE9BQU87TUFDUEMsU0FBUztNQUNUQyxZQUFZO01BQ1pFLEdBQUc7TUFDSEMsT0FBTztNQUNQQyxTQUFTO01BQ1RHLGNBQWM7TUFDZEssY0FBYztNQUNkUCxZQUFZO01BQ1pDLEtBQUs7TUFDTEUsVUFBVTtNQUNWRSxJQUFJO01BQ0pELElBQUk7TUFDSkUsTUFBTTtNQUNOTSxJQUFJO01BQ0poQjtJQUNKLENBQUMsR0FBRyxJQUFJLENBQUM0QixPQUFPO0lBRWhCQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7TUFDaEI1QyxRQUFRO01BQ1JDLE1BQU07TUFDTkMsTUFBTTtNQUNOQyxZQUFZO01BQ1pDLFVBQVU7TUFDVkMsVUFBVTtNQUNWQyxTQUFTO01BQ1RDLGVBQWU7TUFDZkMsT0FBTztNQUNQQyxPQUFPO01BQ1BDLE9BQU87TUFDUEMsT0FBTztNQUNQQyxTQUFTO01BQ1RDLFlBQVk7TUFDWkUsR0FBRztNQUNIQyxPQUFPO01BQ1BDLFNBQVM7TUFDVEcsY0FBYztNQUNkSyxjQUFjO01BQ2RQLFlBQVk7TUFDWkMsS0FBSztNQUNMRSxVQUFVO01BQ1ZFLElBQUk7TUFDSkQsSUFBSTtNQUNKRSxNQUFNO01BQ05NLElBQUk7TUFDSmUsU0FBUyxFQUFFM0IsWUFBWTtNQUN2QjRCLElBQUksRUFBRSxLQUFLO01BQ1hDLE1BQU0sRUFBRSxLQUFLO01BQ2JDLFdBQVcsRUFBRTtJQUNqQixDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0E7RUFDSUMsSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsSUFBSTtNQUNBLE1BQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDcEQsUUFBUSxDQUFDO01BQ3RELElBQUksQ0FBQ2tELFFBQVEsRUFBRSxNQUFNLElBQUlHLEtBQUssQ0FBQyxJQUFJLENBQUN2QixJQUFJLENBQUNDLFFBQVEsQ0FBQztNQUVsRCxJQUFJbUIsUUFBUSxDQUFDSSxZQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssTUFBTSxFQUFFO1FBQ2xEQyxPQUFPLENBQUNDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQ3hELFFBQVEsTUFBTSxJQUFJLENBQUM4QixJQUFJLENBQUNVLGVBQWUsRUFBRSxDQUFDO1FBQy9EO01BQ0o7TUFFQSxNQUFNaUIsRUFBRSxHQUFHUCxRQUFRO01BQ25CLElBQUksQ0FBQyxJQUFJLENBQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUNELEdBQUcsRUFBRTtRQUM1QndDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQzFCLElBQUksQ0FBQ00sTUFBTSxDQUFDO01BQ2xDO01BRUFxQixFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ3pELE1BQU0sQ0FBQzBELE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFFOUMsSUFBSUgsRUFBRSxDQUFDSSxPQUFPLEtBQUssTUFBTSxFQUFFO1FBQ3ZCLElBQUksQ0FBQ2YsSUFBSSxHQUFHLElBQUk7TUFDcEI7TUFFQSxJQUFJLENBQUNnQixlQUFlLENBQUNMLEVBQUUsQ0FBQztNQUV4QixRQUFRLElBQUksQ0FBQ3BDLFVBQVU7UUFDbkIsS0FBSyxLQUFLO1FBQ1YsS0FBSyxLQUFLO1VBQ04sSUFBSSxDQUFDMEMsV0FBVyxDQUFDLENBQUM7VUFDbEIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztVQUNsQjtRQUNKLEtBQUssU0FBUztVQUNWLElBQUksQ0FBQ0EsV0FBVyxDQUFDLENBQUM7VUFDbEI7TUFDUjtNQUVBUCxFQUFFLENBQUNRLEtBQUssQ0FBQ0MsT0FBTyxHQUFHVCxFQUFFLENBQUNDLFNBQVMsQ0FBQ1MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxPQUFPO01BRXZFVixFQUFFLENBQUNXLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDO01BRXZDakIsUUFBUSxDQUFDa0IsYUFBYSxDQUNsQixJQUFJQyxXQUFXLENBQUMsVUFBVSxFQUFFO1FBQ3hCeEQsT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTztRQUNyQnlELE1BQU0sRUFBRTtVQUNKQyxNQUFNLEVBQUUsSUFBSSxDQUFDeEUsUUFBUTtVQUNyQnlFLElBQUksRUFBRWhCO1FBRVY7TUFDSixDQUFDLENBQ0wsQ0FBQztJQUNMLENBQUMsQ0FBQyxPQUFPL0IsS0FBSyxFQUFFO01BQ1o2QixPQUFPLENBQUM3QixLQUFLLENBQUNBLEtBQUssQ0FBQztJQUN4QjtFQUNKOztFQUVBO0FBQ0o7QUFDQTtFQUNJZ0QsTUFBTUEsQ0FBQSxFQUFHO0lBQ0wsTUFBTWpCLEVBQUUsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDcEQsUUFBUSxDQUFDO0lBQ2hELElBQUksQ0FBQ3lELEVBQUUsRUFBRSxNQUFNLElBQUlKLEtBQUssQ0FBQyxJQUFJLENBQUN2QixJQUFJLENBQUNDLFFBQVEsQ0FBQztJQUU1QyxJQUFJMEIsRUFBRSxDQUFDSCxZQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssTUFBTSxFQUFFO01BQzVDLE1BQU0sSUFBSUQsS0FBSyxDQUFDLElBQUksQ0FBQ3ZCLElBQUksQ0FBQ0MsUUFBUSxDQUFDO0lBQ3ZDO0lBRUEsSUFBSSxDQUFDK0IsZUFBZSxDQUFDTCxFQUFFLENBQUM7SUFFeEIsSUFBSSxDQUFDa0IsY0FBYyxHQUFHLEtBQUs7SUFFM0JsQixFQUFFLENBQUNZLGFBQWEsQ0FDWixJQUFJQyxXQUFXLENBQUMsV0FBVyxFQUFFO01BQ3pCeEQsT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTztNQUNyQnlELE1BQU0sRUFBRTtRQUNKQyxNQUFNLEVBQUUsSUFBSSxDQUFDeEUsUUFBUTtRQUNyQnlFLElBQUksRUFBRWhCO01BQ1Y7SUFDSixDQUFDLENBQ0wsQ0FBQztFQUNMOztFQUVBO0FBQ0o7QUFDQTtFQUNJbUIsS0FBS0EsQ0FBQSxFQUFHO0lBQ0osSUFBSSxDQUFDQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRXRCLE1BQU1wQixFQUFFLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQ3BELFFBQVEsQ0FBQztJQUNoRCxNQUFNZSxHQUFHLEdBQUcwQyxFQUFFLENBQUNMLGFBQWEsQ0FBQyxJQUFJLENBQUNuRCxNQUFNLENBQUM7SUFDekMsTUFBTTZFLE9BQU8sR0FBR3JCLEVBQUUsQ0FBQ0wsYUFBYSxDQUFDLElBQUksQ0FBQ2hELFVBQVUsQ0FBQztJQUVqRCxJQUFJLElBQUksQ0FBQ1ksT0FBTyxFQUFFO01BQ2QsTUFBTUEsT0FBTyxHQUFHeUMsRUFBRSxDQUFDTCxhQUFhLENBQUMsSUFBSSxDQUFDL0MsVUFBVSxDQUFDO01BRWpELE1BQU1pQixJQUFJLEdBQUdOLE9BQU8sQ0FBQ29DLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQzlDLFNBQVMsR0FBRyxJQUFJLENBQUNJLE9BQU8sRUFBRSxDQUFDO01BQ3RFLE1BQU1hLElBQUksR0FBR1AsT0FBTyxDQUFDb0MsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDOUMsU0FBUyxHQUFHLElBQUksQ0FBQ0ssT0FBTyxFQUFFLENBQUM7TUFDdEUsTUFBTWEsTUFBTSxHQUFHUixPQUFPLENBQUNvQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM5QyxTQUFTLEdBQUcsSUFBSSxDQUFDTSxTQUFTLEVBQUUsQ0FBQztNQUUxRSxJQUFJLENBQUNtRSxZQUFZLENBQUN6RCxJQUFJLEVBQUVDLElBQUksRUFBRUMsTUFBTSxDQUFDO0lBQ3pDO0lBRUEsSUFBSSxJQUFJLENBQUNULEdBQUcsRUFBRTtNQUNWLE1BQU1pRSxZQUFZLEdBQUdqRSxHQUFHLENBQUNrRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUN6RSxPQUFPLENBQUM7TUFDdkR3RSxZQUFZLENBQUNFLE9BQU8sQ0FBRUMsRUFBRSxJQUFLQSxFQUFFLENBQUN6QixTQUFTLENBQUMwQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7TUFFM0RyRSxHQUFHLENBQUNxQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM1QyxPQUFPLGtCQUFrQixJQUFJLENBQUM2RSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzNCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN6RztJQUVBLE1BQU0yQixnQkFBZ0IsR0FBR1IsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUN6RSxPQUFPLENBQUM7SUFDL0Q4RSxnQkFBZ0IsQ0FBQ0osT0FBTyxDQUFFQyxFQUFFLElBQUtBLEVBQUUsQ0FBQ3pCLFNBQVMsQ0FBQzBCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUvRE4sT0FBTyxDQUFDMUIsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDNUMsT0FBTyxrQkFBa0IsSUFBSSxDQUFDNkUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMzQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFFekdGLEVBQUUsQ0FBQ1ksYUFBYSxDQUNaLElBQUlrQixLQUFLLENBQUMsVUFBVSxFQUFFO01BQ2xCekUsT0FBTyxFQUFFLElBQUksQ0FBQ0E7SUFDbEIsQ0FBQyxDQUNMLENBQUM7RUFDTDs7RUFFQTtBQUNKO0FBQ0E7RUFDSTBFLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ3pDLE1BQU0sR0FBRyxJQUFJO0lBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ3FDLGNBQWMsQ0FBQyxDQUFDO0VBQzVDOztFQUVBO0FBQ0o7QUFDQTtFQUNJSSxNQUFNQSxDQUFBLEVBQUc7SUFDTCxJQUFJLENBQUMxQyxNQUFNLEdBQUcsS0FBSztJQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJO0lBRXZCRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNwRCxRQUFRLENBQUMsQ0FBQ3FFLGFBQWEsQ0FDL0MsSUFBSWtCLEtBQUssQ0FBQyxXQUFXLEVBQUU7TUFDbkJ6RSxPQUFPLEVBQUUsSUFBSSxDQUFDQTtJQUNsQixDQUFDLENBQ0wsQ0FBQztFQUNMOztFQUVBO0FBQ0o7QUFDQTtFQUNJNEUsV0FBV0EsQ0FBQ0osZ0JBQWdCLEVBQUVyRixNQUFNLEVBQUUrRSxZQUFZLEVBQUU7SUFDaEQsTUFBTVcsWUFBWSxHQUFHLElBQUksQ0FBQ04sY0FBYyxDQUFDLENBQUM7SUFFMUNDLGdCQUFnQixDQUFDSixPQUFPLENBQUMsQ0FBQ1UsSUFBSSxFQUFFQyxDQUFDLEtBQUs7TUFDbENELElBQUksQ0FBQ3hCLFlBQVksQ0FBQyxjQUFjLEVBQUV5QixDQUFDLENBQUM7TUFDcEMsSUFBSSxJQUFJLENBQUM5RSxHQUFHLEVBQUVpRSxZQUFZLENBQUNhLENBQUMsQ0FBQyxDQUFDekIsWUFBWSxDQUFDLGNBQWMsRUFBRXlCLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUM7SUFFRixJQUFJLElBQUksQ0FBQzlFLEdBQUcsRUFBRTtNQUNWaUUsWUFBWSxDQUFDRSxPQUFPLENBQUVDLEVBQUUsSUFBS0EsRUFBRSxDQUFDekIsU0FBUyxDQUFDMEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO01BQzNESixZQUFZLENBQUNXLFlBQVksQ0FBQyxDQUFDakMsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQ2xEMUQsTUFBTSxDQUFDeUQsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDeEQsWUFBWSxDQUFDO0lBQzNDO0lBRUFtRixnQkFBZ0IsQ0FBQ0osT0FBTyxDQUFFQyxFQUFFLElBQUtBLEVBQUUsQ0FBQ3pCLFNBQVMsQ0FBQzBCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvREUsZ0JBQWdCLENBQUNLLFlBQVksQ0FBQyxDQUFDakMsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBRXRELElBQUksQ0FBQ21DLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCOztFQUVBO0FBQ0o7QUFDQTtFQUNJQyxZQUFZQSxDQUFBLEVBQUc7SUFDWCxNQUFNdEMsRUFBRSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNwRCxRQUFRLENBQUM7SUFDaEQsTUFBTUksVUFBVSxHQUFHcUQsRUFBRSxDQUFDTCxhQUFhLENBQUMsSUFBSSxDQUFDaEQsVUFBVSxDQUFDO0lBRXBELElBQUlBLFVBQVUsQ0FBQ3lELE9BQU8sS0FBSyxNQUFNLEVBQUU7TUFDL0IsTUFBTW1DLGdCQUFnQixHQUFHNUYsVUFBVSxDQUFDa0QsWUFBWSxDQUFDLE9BQU8sQ0FBQztNQUN6RCxNQUFNMkMsa0JBQWtCLEdBQUc3RixVQUFVLENBQUM4RixTQUFTO01BRS9DOUYsVUFBVSxDQUFDZ0YsTUFBTSxDQUFDLENBQUM7TUFFbkIsTUFBTXRDLElBQUksR0FBR0ssUUFBUSxDQUFDZ0QsYUFBYSxDQUFDLE1BQU0sQ0FBQztNQUMzQ3JELElBQUksQ0FBQ3NCLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO01BQ25DdEIsSUFBSSxDQUFDc0IsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHNEIsZ0JBQWdCLElBQUksSUFBSSxDQUFDdkYsT0FBTyxDQUFDbUQsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO01BQ2xGZCxJQUFJLENBQUNvRCxTQUFTLEdBQUdELGtCQUFrQjtNQUVuQ3hDLEVBQUUsQ0FBQzJDLFdBQVcsQ0FBQ3RELElBQUksQ0FBQztJQUN4QjtFQUNKOztFQUVBO0FBQ0o7QUFDQTtFQUNJdUQsU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsTUFBTTVDLEVBQUUsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDcEQsUUFBUSxDQUFDO0lBQ2hELE1BQU1JLFVBQVUsR0FBR3FELEVBQUUsQ0FBQ0wsYUFBYSxDQUFDLElBQUksQ0FBQ2hELFVBQVUsQ0FBQztJQUVwRCxNQUFNZSxLQUFLLEdBQUdmLFVBQVUsQ0FBQzZFLGdCQUFnQixDQUFDLElBQUksQ0FBQ3pFLE9BQU8sQ0FBQztJQUN2RCxNQUFNZ0UsTUFBTSxHQUFHckQsS0FBSyxDQUFDLElBQUksQ0FBQ2tFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFM0MsTUFBTWlCLE1BQU0sR0FBRzlCLE1BQU0sQ0FBQ1MsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7SUFFakUsSUFBSXFCLE1BQU0sQ0FBQ3pHLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDbkIsT0FBTyxJQUFJLENBQUMwRyxhQUFhLENBQUNuRyxVQUFVLEVBQUVrRyxNQUFNLENBQUM7SUFDakQ7SUFFQSxPQUFPO01BQUU1RSxLQUFLLEVBQUU7SUFBTSxDQUFDO0VBQzNCOztFQUVBO0FBQ0o7QUFDQTtFQUNJOEUsTUFBTUEsQ0FBQy9DLEVBQUUsRUFBRTtJQUNQLElBQUl4RCxNQUFNLEdBQUd3RCxFQUFFLENBQUNMLGFBQWEsQ0FBQyxJQUFJLENBQUNuRCxNQUFNLENBQUM7SUFFMUMsSUFBSUEsTUFBTSxJQUFJLElBQUksQ0FBQ2MsR0FBRyxFQUFFO01BQ3BCZCxNQUFNLENBQUNtRixNQUFNLENBQUMsQ0FBQztNQUNmbkYsTUFBTSxHQUFHLElBQUk7SUFDakI7SUFFQSxJQUFJLENBQUNBLE1BQU0sSUFBSSxJQUFJLENBQUNjLEdBQUcsRUFBRTtNQUNyQixNQUFNWCxVQUFVLEdBQUdxRCxFQUFFLENBQUNMLGFBQWEsQ0FBQyxJQUFJLENBQUNoRCxVQUFVLENBQUM7TUFDcEQsTUFBTWUsS0FBSyxHQUFHZixVQUFVLENBQUM2RSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUN6RSxPQUFPLENBQUM7TUFFdkQsTUFBTU8sR0FBRyxHQUFHb0MsUUFBUSxDQUFDZ0QsYUFBYSxDQUFDLE9BQU8sQ0FBQztNQUMzQ3BGLEdBQUcsQ0FBQzJDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQzFELE1BQU0sQ0FBQzJELE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFFL0N6QyxLQUFLLENBQUMrRCxPQUFPLENBQUMsQ0FBQ1UsSUFBSSxFQUFFQyxDQUFDLEtBQUs7UUFDdkIsTUFBTVksUUFBUSxHQUFHdEQsUUFBUSxDQUFDZ0QsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM5QyxNQUFNMUQsS0FBSyxHQUFHbUQsSUFBSSxDQUFDdEMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDeEIsSUFBSSxDQUFDVyxLQUFLLElBQUlvRCxDQUFDLEVBQUU7UUFDN0VZLFFBQVEsQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ25ELE9BQU8sQ0FBQ29ELE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxJQUFJLENBQUN2QyxVQUFVLEtBQUssU0FBUyxFQUFFb0YsUUFBUSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBRXhFLE1BQU0rQyxHQUFHLEdBQUd2RCxRQUFRLENBQUNnRCxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzFDTyxHQUFHLENBQUNoRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDeEI4QyxRQUFRLENBQUNMLFdBQVcsQ0FBQ00sR0FBRyxDQUFDO1FBRXpCLE1BQU1DLElBQUksR0FBR3hELFFBQVEsQ0FBQ2dELGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDM0NRLElBQUksQ0FBQ1QsU0FBUyxHQUFHekQsS0FBSztRQUN0QmdFLFFBQVEsQ0FBQ0wsV0FBVyxDQUFDTyxJQUFJLENBQUM7UUFFMUI1RixHQUFHLENBQUNxRixXQUFXLENBQUNLLFFBQVEsQ0FBQztNQUM3QixDQUFDLENBQUM7TUFFRmhELEVBQUUsQ0FBQ21ELE9BQU8sQ0FBQzdGLEdBQUcsQ0FBQztJQUNuQjtFQUNKOztFQUVBO0FBQ0o7QUFDQTtFQUNJK0UsVUFBVUEsQ0FBQSxFQUFHO0lBQ1QsTUFBTXJDLEVBQUUsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDcEQsUUFBUSxDQUFDO0lBQ2hELElBQUk2RyxPQUFPLEdBQUdwRCxFQUFFLENBQUNMLGFBQWEsQ0FBQyxJQUFJLENBQUMvQyxVQUFVLENBQUM7SUFFL0MsSUFBSXdHLE9BQU8sSUFBSSxJQUFJLENBQUM3RixPQUFPLEVBQUU7TUFDekI2RixPQUFPLENBQUN6QixNQUFNLENBQUMsQ0FBQztNQUNoQnlCLE9BQU8sR0FBRyxJQUFJO0lBQ2xCO0lBRUEsSUFBSSxDQUFDQSxPQUFPLElBQUksSUFBSSxDQUFDN0YsT0FBTyxFQUFFO01BQzFCLE1BQU1BLE9BQU8sR0FBR21DLFFBQVEsQ0FBQ2dELGFBQWEsQ0FBQyxPQUFPLENBQUM7TUFDL0NuRixPQUFPLENBQUMwQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUN0RCxVQUFVLENBQUN1RCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BRXZELE1BQU1rRCxTQUFTLEdBQUcsSUFBSSxDQUFDdkcsZUFBZSxDQUFDcUQsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQ21ELEtBQUssQ0FBQyxHQUFHLENBQUM7TUFFcEUsTUFBTXhGLElBQUksR0FBRzRCLFFBQVEsQ0FBQ2dELGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDN0M1RSxJQUFJLENBQUMyRSxTQUFTLEdBQUcsSUFBSSxDQUFDM0UsSUFBSTtNQUMxQkEsSUFBSSxDQUFDbUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDckQsU0FBUyxDQUFDc0QsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHa0QsU0FBUyxFQUFFLElBQUksQ0FBQ25HLE9BQU8sQ0FBQ2lELE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDaEcsSUFBSSxJQUFJLENBQUN2QyxVQUFVLEtBQUssS0FBSyxFQUFFRSxJQUFJLENBQUMwQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQzFEbEQsT0FBTyxDQUFDb0YsV0FBVyxDQUFDN0UsSUFBSSxDQUFDO01BRXpCLE1BQU1ELElBQUksR0FBRzZCLFFBQVEsQ0FBQ2dELGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDN0M3RSxJQUFJLENBQUM0RSxTQUFTLEdBQUcsSUFBSSxDQUFDNUUsSUFBSTtNQUMxQkEsSUFBSSxDQUFDb0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDckQsU0FBUyxDQUFDc0QsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHa0QsU0FBUyxFQUFFLElBQUksQ0FBQ3BHLE9BQU8sQ0FBQ2tELE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDaEcsSUFBSSxJQUFJLENBQUN2QyxVQUFVLEtBQUssS0FBSyxFQUFFQyxJQUFJLENBQUMyQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQzFEbEQsT0FBTyxDQUFDb0YsV0FBVyxDQUFDOUUsSUFBSSxDQUFDO01BRXpCLE1BQU1FLE1BQU0sR0FBRzJCLFFBQVEsQ0FBQ2dELGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDL0MzRSxNQUFNLENBQUMwRSxTQUFTLEdBQUcsSUFBSSxDQUFDMUUsTUFBTTtNQUM5QkEsTUFBTSxDQUFDa0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDckQsU0FBUyxDQUFDc0QsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHa0QsU0FBUyxFQUFFLElBQUksQ0FBQ2xHLFNBQVMsQ0FBQ2dELE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDcEc1QyxPQUFPLENBQUNvRixXQUFXLENBQUM1RSxNQUFNLENBQUM7TUFFM0IsSUFBSSxDQUFDdUQsWUFBWSxDQUFDekQsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sQ0FBQztNQUVyQ2lDLEVBQUUsQ0FBQzJDLFdBQVcsQ0FBQ3BGLE9BQU8sQ0FBQztJQUMzQjtFQUNKOztFQUVBO0FBQ0o7QUFDQTtFQUNJK0QsWUFBWUEsQ0FBQ3pELElBQUksRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7SUFDN0IsTUFBTU4sWUFBWSxHQUFHLElBQUksQ0FBQ21FLGNBQWMsQ0FBQyxDQUFDO0lBQzFDLE1BQU0yQixPQUFPLEdBQUcsSUFBSSxDQUFDN0YsS0FBSyxHQUFHLENBQUM7SUFFOUIsSUFBSUQsWUFBWSxLQUFLLENBQUMsRUFBRTtNQUNwQkssSUFBSSxDQUFDNkMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUM7SUFDekMsQ0FBQyxNQUFNO01BQ0g3QyxJQUFJLENBQUMwRixlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ3BDO0lBRUEsSUFBSS9GLFlBQVksS0FBSzhGLE9BQU8sRUFBRTtNQUMxQjFGLElBQUksQ0FBQzhDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDO01BQ3JDNUMsTUFBTSxDQUFDeUMsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztJQUNsQyxDQUFDLE1BQU07TUFDSDFDLE1BQU0sQ0FBQ3lDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDN0I1QyxJQUFJLENBQUMyRixlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ3BDO0VBQ0o7O0VBRUE7QUFDSjtBQUNBO0VBQ0luRCxlQUFlQSxDQUFDTCxFQUFFLEVBQUU7SUFDaEIsSUFBSSxDQUFDK0MsTUFBTSxDQUFDL0MsRUFBRSxDQUFDO0lBRWYsTUFBTXJELFVBQVUsR0FBR3FELEVBQUUsQ0FBQ0wsYUFBYSxDQUFDLElBQUksQ0FBQ2hELFVBQVUsQ0FBQztJQUNwRCxJQUFJLENBQUNBLFVBQVUsRUFBRSxNQUFNLElBQUlpRCxLQUFLLENBQUMsSUFBSSxDQUFDdkIsSUFBSSxDQUFDRyxhQUFhLENBQUM7SUFFekQsTUFBTXFELGdCQUFnQixHQUFHbEYsVUFBVSxDQUFDNkUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDekUsT0FBTyxDQUFDO0lBQ2xFLElBQUksQ0FBQzhFLGdCQUFnQixDQUFDekYsTUFBTSxFQUFFLE1BQU0sSUFBSXdELEtBQUssQ0FBQyxJQUFJLENBQUN2QixJQUFJLENBQUNHLGFBQWEsQ0FBQztJQUV0RSxJQUFJaEMsTUFBTSxFQUFFK0UsWUFBWTtJQUV4QixJQUFJLElBQUksQ0FBQ2pFLEdBQUcsRUFBRTtNQUNWZCxNQUFNLEdBQUd3RCxFQUFFLENBQUNMLGFBQWEsQ0FBQyxJQUFJLENBQUNuRCxNQUFNLENBQUM7TUFDdEMsSUFBSSxDQUFDQSxNQUFNLEVBQUUsTUFBTSxJQUFJb0QsS0FBSyxDQUFDLElBQUksQ0FBQ3ZCLElBQUksQ0FBQ0UsU0FBUyxDQUFDO01BRWpEZ0QsWUFBWSxHQUFHL0UsTUFBTSxDQUFDZ0YsZ0JBQWdCLENBQUMsSUFBSSxDQUFDekUsT0FBTyxDQUFDO01BQ3BELElBQUksQ0FBQ3dFLFlBQVksQ0FBQ25GLE1BQU0sRUFBRSxNQUFNLElBQUl3RCxLQUFLLENBQUMsSUFBSSxDQUFDdkIsSUFBSSxDQUFDRSxTQUFTLENBQUM7TUFFOUQsSUFBSWdELFlBQVksQ0FBQ25GLE1BQU0sS0FBS3lGLGdCQUFnQixDQUFDekYsTUFBTSxFQUFFO1FBQ2pELE1BQU0sSUFBSXdELEtBQUssQ0FBQyxJQUFJLENBQUN2QixJQUFJLENBQUNRLFVBQVUsQ0FBQztNQUN6QztJQUNKO0lBRUEsSUFBSSxDQUFDbkIsS0FBSyxHQUFHbUUsZ0JBQWdCLENBQUN6RixNQUFNO0lBRXBDLElBQUksQ0FBQzZGLFdBQVcsQ0FBQ0osZ0JBQWdCLEVBQUVyRixNQUFNLEVBQUUrRSxZQUFZLENBQUM7RUFDNUQ7O0VBRUE7QUFDSjtBQUNBO0VBQ0lrQyxPQUFPQSxDQUFDQyxPQUFPLEVBQUU7SUFDYixNQUFNMUQsRUFBRSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNwRCxRQUFRLENBQUM7SUFFaEQsSUFBSSxJQUFJLENBQUMrQyxNQUFNLElBQUksSUFBSSxDQUFDQyxXQUFXLEtBQUssSUFBSSxDQUFDcUMsY0FBYyxDQUFDLENBQUMsRUFBRTtNQUMzRDVCLEVBQUUsQ0FBQ1ksYUFBYSxDQUNaLElBQUlrQixLQUFLLENBQUMsU0FBUyxFQUFFO1FBQ2pCekUsT0FBTyxFQUFFLElBQUksQ0FBQ0E7TUFDbEIsQ0FBQyxDQUNMLENBQUM7TUFDRDtJQUNKO0lBRUEsTUFBTXNHLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDckgsUUFBUSxDQUFDO0lBQzdDLE1BQU1lLEdBQUcsR0FBR3FHLE1BQU0sQ0FBQ2hFLGFBQWEsQ0FBQyxJQUFJLENBQUNuRCxNQUFNLENBQUM7SUFDN0MsTUFBTTZFLE9BQU8sR0FBR3NDLE1BQU0sQ0FBQ2hFLGFBQWEsQ0FBQyxJQUFJLENBQUNoRCxVQUFVLENBQUM7SUFFckQsTUFBTWtILE1BQU0sR0FBR0gsT0FBTyxDQUFDekQsU0FBUyxDQUFDUyxRQUFRLENBQUMsSUFBSSxDQUFDN0QsU0FBUyxDQUFDc0QsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRSxNQUFNMkQsTUFBTSxHQUFHSixPQUFPLENBQUN6RCxTQUFTLENBQUNTLFFBQVEsQ0FBQyxJQUFJLENBQUMzRCxPQUFPLENBQUNvRCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXhFLElBQUlnQyxJQUFJLEdBQUd1QixPQUFPLENBQUM3RCxZQUFZLENBQUMsY0FBYyxDQUFDO0lBQy9Dc0MsSUFBSSxHQUFHQSxJQUFJLEtBQUssSUFBSSxHQUFHNEIsUUFBUSxDQUFDNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDUCxjQUFjLENBQUMsQ0FBQztJQUU3RCxJQUFJaUMsTUFBTSxFQUFFO01BQ1IsSUFBSUgsT0FBTyxDQUFDekQsU0FBUyxDQUFDUyxRQUFRLENBQUMsSUFBSSxDQUFDeEQsT0FBTyxDQUFDaUQsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQzNEZ0MsSUFBSSxJQUFJLENBQUM7UUFDVG5DLEVBQUUsQ0FBQ1ksYUFBYSxDQUNaLElBQUlrQixLQUFLLENBQUMsYUFBYSxFQUFFO1VBQ3JCekUsT0FBTyxFQUFFLElBQUksQ0FBQ0E7UUFDbEIsQ0FBQyxDQUNMLENBQUM7TUFDTCxDQUFDLE1BQU0sSUFBSXFHLE9BQU8sQ0FBQ3pELFNBQVMsQ0FBQ1MsUUFBUSxDQUFDLElBQUksQ0FBQ3pELE9BQU8sQ0FBQ2tELE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUNsRWdDLElBQUksSUFBSSxDQUFDO1FBQ1RuQyxFQUFFLENBQUNZLGFBQWEsQ0FDWixJQUFJa0IsS0FBSyxDQUFDLGFBQWEsRUFBRTtVQUNyQnpFLE9BQU8sRUFBRSxJQUFJLENBQUNBO1FBQ2xCLENBQUMsQ0FDTCxDQUFDO01BQ0w7SUFDSjtJQUVBLE1BQU0yRyxXQUFXLEdBQUc3QixJQUFJLEdBQUcsSUFBSSxDQUFDUCxjQUFjLENBQUMsQ0FBQztJQUVoRCxJQUFJa0MsTUFBTSxFQUFFO01BQ1IsSUFBSUUsV0FBVyxFQUFFO1FBQ2JoRSxFQUFFLENBQUNZLGFBQWEsQ0FDWixJQUFJa0IsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1VBQ3hCekUsT0FBTyxFQUFFLElBQUksQ0FBQ0E7UUFDbEIsQ0FBQyxDQUNMLENBQUM7TUFDTCxDQUFDLE1BQU0sSUFBSThFLElBQUksR0FBRyxJQUFJLENBQUNQLGNBQWMsQ0FBQyxDQUFDLEVBQUU7UUFDckM1QixFQUFFLENBQUNZLGFBQWEsQ0FDWixJQUFJa0IsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1VBQ3pCekUsT0FBTyxFQUFFLElBQUksQ0FBQ0E7UUFDbEIsQ0FBQyxDQUNMLENBQUM7TUFDTDtJQUNKO0lBRUEsSUFBSSxJQUFJLENBQUNnQyxJQUFJLElBQUksSUFBSSxDQUFDekIsVUFBVSxLQUFLLFNBQVMsRUFBRTtNQUM1QyxJQUFJb0csV0FBVyxFQUFFO1FBQ2IsSUFBSTdCLElBQUksS0FBSyxJQUFJLENBQUNQLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1VBQ3BDTyxJQUFJLEdBQUdBLElBQUksSUFBSSxJQUFJLENBQUMvQyxTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTLEdBQUcsSUFBSSxDQUFDd0MsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzlFO01BQ0o7SUFDSjtJQUVBLElBQUksSUFBSSxDQUFDdkMsSUFBSSxFQUFFO01BQ1gsTUFBTTRFLFVBQVUsR0FBRyxJQUFJLENBQUNyQixTQUFTLENBQUMsQ0FBQztNQUNuQyxJQUFJcUIsVUFBVSxDQUFDaEcsS0FBSyxFQUFFO1FBQ2xCLElBQUkrRixXQUFXLEVBQUU7VUFDYmhFLEVBQUUsQ0FBQ1ksYUFBYSxDQUNaLElBQUlDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDeEJ4RCxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO1lBQ3JCeUQsTUFBTSxFQUFFO2NBQ0pvRCxFQUFFLEVBQUUsaUJBQWlCO2NBQ3JCQyxHQUFHLEVBQUUsSUFBSSxDQUFDOUYsSUFBSSxDQUFDTyxlQUFlO2NBQzlCbUMsTUFBTSxFQUFFa0QsVUFBVSxDQUFDbEQ7WUFDdkI7VUFDSixDQUFDLENBQ0wsQ0FBQztRQUNMO1FBRUEsSUFBSSxDQUFDM0IsU0FBUyxHQUFHLElBQUksQ0FBQ3dDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDQSxjQUFjLENBQUMsQ0FBQyxHQUFHTyxJQUFJLEVBQUU7VUFDOUI7UUFDSjtNQUNKO0lBQ0o7SUFFQSxJQUFJQSxJQUFJLEtBQUssSUFBSSxJQUFJQSxJQUFJLEtBQUs5RixTQUFTLEVBQUU7TUFDckMsSUFBSSxDQUFDK0UsY0FBYyxDQUFDZSxJQUFJLENBQUM7SUFDN0I7SUFFQSxJQUFJLElBQUksQ0FBQzVFLE9BQU8sRUFBRTtNQUNkLE1BQU1BLE9BQU8sR0FBR29HLE1BQU0sQ0FBQ2hFLGFBQWEsQ0FBQyxJQUFJLENBQUMvQyxVQUFVLENBQUM7TUFDckQsTUFBTWlCLElBQUksR0FBR04sT0FBTyxDQUFDb0MsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDOUMsU0FBUyxHQUFHLElBQUksQ0FBQ0ksT0FBTyxFQUFFLENBQUM7TUFDdEUsTUFBTWEsSUFBSSxHQUFHUCxPQUFPLENBQUNvQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM5QyxTQUFTLEdBQUcsSUFBSSxDQUFDSyxPQUFPLEVBQUUsQ0FBQztNQUN0RSxNQUFNYSxNQUFNLEdBQUdSLE9BQU8sQ0FBQ29DLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQzlDLFNBQVMsR0FBRyxJQUFJLENBQUNNLFNBQVMsRUFBRSxDQUFDO01BRTFFLElBQUksQ0FBQ21FLFlBQVksQ0FBQ3pELElBQUksRUFBRUMsSUFBSSxFQUFFQyxNQUFNLENBQUM7SUFDekM7SUFFQSxJQUFJLElBQUksQ0FBQ1QsR0FBRyxFQUFFO01BQ1YsTUFBTWlFLFlBQVksR0FBR2pFLEdBQUcsQ0FBQ2tFLGdCQUFnQixDQUFDLElBQUksQ0FBQ3pFLE9BQU8sQ0FBQztNQUN2RHdFLFlBQVksQ0FBQ0UsT0FBTyxDQUFFQyxFQUFFLElBQUtBLEVBQUUsQ0FBQ3pCLFNBQVMsQ0FBQzBCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztNQUMzRHJFLEdBQUcsQ0FBQ3FDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQzVDLE9BQU8sa0JBQWtCLElBQUksQ0FBQzZFLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDM0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3pHO0lBRUEsTUFBTTJCLGdCQUFnQixHQUFHUixPQUFPLENBQUNHLGdCQUFnQixDQUFDLElBQUksQ0FBQ3pFLE9BQU8sQ0FBQztJQUMvRDhFLGdCQUFnQixDQUFDSixPQUFPLENBQUVDLEVBQUUsSUFBS0EsRUFBRSxDQUFDekIsU0FBUyxDQUFDMEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ETixPQUFPLENBQUMxQixhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM1QyxPQUFPLGtCQUFrQixJQUFJLENBQUM2RSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzNCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUM3Rzs7RUFFQTtBQUNKO0FBQ0E7RUFDSWtFLGFBQWFBLENBQUEsRUFBRztJQUNaLElBQUksSUFBSSxDQUFDL0UsSUFBSSxFQUFFO01BQ1gsTUFBTTRFLFVBQVUsR0FBRyxJQUFJLENBQUNyQixTQUFTLENBQUMsQ0FBQztNQUNuQyxJQUFJLENBQUNxQixVQUFVLENBQUNoRyxLQUFLLEVBQUU7UUFDbkJ5QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNwRCxRQUFRLENBQUMsQ0FBQ3FFLGFBQWEsQ0FDL0MsSUFBSWtCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtVQUN4QnpFLE9BQU8sRUFBRSxJQUFJLENBQUNBO1FBQ2xCLENBQUMsQ0FDTCxDQUFDO01BQ0w7SUFDSixDQUFDLE1BQU07TUFDSHFDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQ3BELFFBQVEsQ0FBQyxDQUFDcUUsYUFBYSxDQUMvQyxJQUFJa0IsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUNoQnpFLE9BQU8sRUFBRSxJQUFJLENBQUNBO01BQ2xCLENBQUMsQ0FDTCxDQUFDO0lBQ0w7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7RUFDSStELGNBQWNBLENBQUNlLElBQUksRUFBRTtJQUNqQixJQUFJLENBQUMxRSxZQUFZLEdBQUcsSUFBSSxDQUFDNEcsT0FBTyxDQUFDbEMsSUFBSSxDQUFDO0VBQzFDOztFQUVBO0FBQ0o7QUFDQTtFQUNJUCxjQUFjQSxDQUFBLEVBQUc7SUFDYixPQUFPLElBQUksQ0FBQ25FLFlBQVk7RUFDNUI7O0VBRUE7QUFDSjtBQUNBO0VBQ0k0RyxPQUFPQSxDQUFDbEMsSUFBSSxFQUFFO0lBQ1YsTUFBTXdCLE1BQU0sR0FBR2pFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQ3BELFFBQVEsQ0FBQztJQUNwRCxNQUFNOEUsT0FBTyxHQUFHc0MsTUFBTSxDQUFDaEUsYUFBYSxDQUFDLElBQUksQ0FBQ2hELFVBQVUsQ0FBQztJQUVyRCxNQUFNMkgsYUFBYSxHQUFHakQsT0FBTyxDQUFDMUIsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDNUMsT0FBTyxrQkFBa0JvRixJQUFJLElBQUksQ0FBQztJQUV0RixJQUFJLENBQUNtQyxhQUFhLEVBQUU7TUFDaEIsTUFBTUMsY0FBYyxHQUFHbEQsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUN6RSxPQUFPLENBQUMsQ0FBQ1gsTUFBTSxHQUFHLENBQUM7TUFDeEUrRixJQUFJLEdBQUdxQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0YsY0FBYyxFQUFFcEMsSUFBSSxDQUFDO0lBQ3pDO0lBRUEsSUFBSSxDQUFDL0MsU0FBUyxHQUFHb0YsSUFBSSxDQUFDRSxHQUFHLENBQUN2QyxJQUFJLEVBQUUsSUFBSSxDQUFDL0MsU0FBUyxDQUFDO0lBRS9DLE9BQU8yRSxRQUFRLENBQUM1QixJQUFJLEVBQUUsRUFBRSxDQUFDO0VBQzdCOztFQUVBO0FBQ0o7QUFDQTtFQUNJN0IsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsTUFBTU4sRUFBRSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNwRCxRQUFRLENBQUM7SUFDaER5RCxFQUFFLENBQUMyRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLEtBQUssSUFBSztNQUNwQyxNQUFNN0QsTUFBTSxHQUFHNkQsS0FBSyxDQUFDN0QsTUFBTSxDQUFDNkMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDcEgsTUFBTSxJQUFJLElBQUksQ0FBQ08sT0FBTyxFQUFFLENBQUM7TUFDckUsSUFBSWdFLE1BQU0sRUFBRTtRQUNSNkQsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUNwQixPQUFPLENBQUMxQyxNQUFNLENBQUM7TUFDeEI7SUFDSixDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0E7RUFDSVIsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsTUFBTVAsRUFBRSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNwRCxRQUFRLENBQUM7SUFDaER5RCxFQUFFLENBQUMyRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLEtBQUssSUFBSztNQUNwQyxNQUFNN0QsTUFBTSxHQUFHNkQsS0FBSyxDQUFDN0QsTUFBTSxDQUFDNkMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDaEgsVUFBVSxJQUFJLElBQUksQ0FBQ0MsU0FBUyxFQUFFLENBQUM7TUFDM0UsSUFBSWtFLE1BQU0sRUFBRTtRQUNSNkQsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztRQUV0QixJQUFJOUQsTUFBTSxDQUFDZCxTQUFTLENBQUNTLFFBQVEsQ0FBQyxJQUFJLENBQUN2RCxTQUFTLENBQUNnRCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7VUFDNUQsSUFBSSxDQUFDaUUsYUFBYSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxNQUFNO1VBQ0gsSUFBSSxDQUFDWCxPQUFPLENBQUMxQyxNQUFNLENBQUM7UUFDeEI7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOOztFQUVBO0FBQ0o7QUFDQTtFQUNJK0IsYUFBYUEsQ0FBQ25HLFVBQVUsRUFBRW1JLFFBQVEsRUFBRTtJQUNoQyxJQUFJN0csS0FBSyxHQUFHLEtBQUs7SUFDakIsTUFBTThDLE1BQU0sR0FBRyxFQUFFO0lBRWpCK0QsUUFBUSxDQUFDckQsT0FBTyxDQUFFc0QsQ0FBQyxJQUFLO01BQ3BCLElBQUlDLFVBQVUsR0FBR0QsQ0FBQyxDQUFDRSxRQUFRLElBQUlGLENBQUMsQ0FBQzlFLFNBQVMsQ0FBQ1MsUUFBUSxDQUFDLFVBQVUsQ0FBQztNQUMvRCxNQUFNd0Usa0JBQWtCLEdBQUdILENBQUMsQ0FBQzlFLFNBQVMsQ0FBQ1MsUUFBUSxDQUFDLG9CQUFvQixDQUFDOztNQUVyRTtNQUNBLE1BQU15RSxTQUFTLEdBQUdKLENBQUMsQ0FBQ2xGLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztNQUNuRCxJQUFJc0YsU0FBUyxFQUFFO1FBQ1gsTUFBTSxDQUFDQyxZQUFZLEVBQUVDLGFBQWEsQ0FBQyxHQUFHRixTQUFTLENBQUM3QixLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFELE1BQU1nQyxlQUFlLEdBQUczSSxVQUFVLENBQUNnRCxhQUFhLENBQUMsSUFBSXlGLFlBQVksRUFBRSxDQUFDO1FBQ3BFLElBQUlFLGVBQWUsRUFBRTtVQUNqQixNQUFNQyxlQUFlLEdBQ2pCRCxlQUFlLENBQUNFLElBQUksS0FBSyxVQUFVLElBQUlGLGVBQWUsQ0FBQ0UsSUFBSSxLQUFLLE9BQU8sR0FDakVGLGVBQWUsQ0FBQ0csT0FBTyxHQUN2QkgsZUFBZSxDQUFDSSxLQUFLO1VBQy9CLElBQUlILGVBQWUsS0FBS0YsYUFBYSxFQUFFO1lBQ25DTCxVQUFVLEdBQUcsSUFBSTtVQUNyQjtRQUNKO01BQ0o7TUFFQSxJQUFJVyxLQUFLLEdBQUcsSUFBSTtNQUVoQixJQUFJWCxVQUFVLElBQUlFLGtCQUFrQixFQUFFO1FBQ2xDUyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxhQUFhLENBQUNiLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUNZLEtBQUssRUFBRTtVQUNSMUgsS0FBSyxHQUFHLElBQUk7VUFDWjhDLE1BQU0sQ0FBQzhFLElBQUksQ0FBQ2QsQ0FBQyxDQUFDO1VBQ2QsSUFBSSxJQUFJLENBQUN2SCxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDc0ksZ0JBQWdCLENBQUNmLENBQUMsRUFBRSxJQUFJLENBQUMvRyxjQUFjLENBQUNDLEtBQUssQ0FBQztVQUN2RDtRQUNKO01BQ0o7SUFDSixDQUFDLENBQUM7SUFFRixPQUFPO01BQ0hBLEtBQUs7TUFDTDhDO0lBQ0osQ0FBQztFQUNMO0VBR0E2RSxhQUFhQSxDQUFDYixDQUFDLEVBQUU7SUFDYixRQUFRQSxDQUFDLENBQUMzRSxPQUFPO01BQ2IsS0FBSyxPQUFPO1FBQ1IsSUFBSTJFLENBQUMsQ0FBQ1MsSUFBSSxLQUFLLFVBQVUsSUFBSVQsQ0FBQyxDQUFDUyxJQUFJLEtBQUssT0FBTyxFQUFFO1VBQzdDLE9BQU9ULENBQUMsQ0FBQ1UsT0FBTztRQUNwQixDQUFDLE1BQU07VUFDSCxPQUFPVixDQUFDLENBQUNXLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO1FBQ2hDO01BQ0osS0FBSyxRQUFRO1FBQ1QsT0FBT2hCLENBQUMsQ0FBQ1csS0FBSyxDQUFDSyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7TUFDaEMsS0FBSyxVQUFVO1FBQ1gsT0FBT2hCLENBQUMsQ0FBQ1csS0FBSyxDQUFDSyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7TUFDaEM7UUFDSSxPQUFPLElBQUk7SUFDbkI7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7RUFDSUQsZ0JBQWdCQSxDQUFDcEMsT0FBTyxFQUFFOEIsSUFBSSxFQUFFO0lBQzVCOUIsT0FBTyxDQUFDekQsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDOUMsWUFBWSxDQUFDK0MsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRXFGLElBQUksQ0FBQztJQUMvRFEsVUFBVSxDQUFDLE1BQU07TUFDYnRDLE9BQU8sQ0FBQ3pELFNBQVMsQ0FBQzBCLE1BQU0sQ0FBQyxJQUFJLENBQUN2RSxZQUFZLENBQUMrQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFcUYsSUFBSSxDQUFDO0lBQ3RFLENBQUMsRUFBRSxJQUFJLENBQUM3SCxjQUFjLENBQUM7RUFDM0I7QUFDSjtBQUVBLGlFQUFlM0IsTUFBTSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2l6YXJkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9XaXphcmQvLi9zcmMvc2Nzcy9tYWluLnNjc3M/YTBhYSIsIndlYnBhY2s6Ly9XaXphcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV2l6YXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9XaXphcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XaXphcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XaXphcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiV2l6YXJkXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIldpemFyZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcbi8qKlxuICogQSBsaWdodHdlaWdodCB3aXphcmQgVUkgY29tcG9uZW50IHRoYXQgc3VwcG9ydHMgYWNjZXNzaWJpbGl0eSBhbmQgSFRNTDUgaW4gVmFuaWxsYSBKYXZhU2NyaXB0LlxuICpcbiAqIEBsaW5rICAgaHR0cHM6Ly9naXRodWIuY29tL0FkcmlhblZpbGxhbWF5b3IvV2l6YXJkLUpTXG4gKiBAYXV0aG9yIEFkcmlhblxuICpcbiAqIEBjbGFzcyAgV2l6YXJkXG4gKi9cbmNsYXNzIFdpemFyZCB7XG4gICAgY29uc3RydWN0b3IoYXJncyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgd3pfY2xhc3M6IFwiLndpemFyZFwiLFxuICAgICAgICAgICAgd3pfbmF2OiBcIi53aXphcmQtbmF2XCIsXG4gICAgICAgICAgICB3el9vcmk6IFwiLmhvcml6b250YWxcIixcbiAgICAgICAgICAgIHd6X25hdl9zdHlsZTogXCJkb3RzXCIsXG4gICAgICAgICAgICB3el9jb250ZW50OiBcIi53aXphcmQtY29udGVudFwiLFxuICAgICAgICAgICAgd3pfYnV0dG9uczogXCIud2l6YXJkLWJ1dHRvbnNcIixcbiAgICAgICAgICAgIHd6X2J1dHRvbjogXCIud2l6YXJkLWJ0blwiLFxuICAgICAgICAgICAgd3pfYnV0dG9uX3N0eWxlOiBcIi5idG5cIixcbiAgICAgICAgICAgIHd6X3N0ZXA6IFwiLndpemFyZC1zdGVwXCIsXG4gICAgICAgICAgICB3el9mb3JtOiBcIi53aXphcmQtZm9ybVwiLFxuICAgICAgICAgICAgd3pfbmV4dDogXCIubmV4dFwiLFxuICAgICAgICAgICAgd3pfcHJldjogXCIucHJldlwiLFxuICAgICAgICAgICAgd3pfZmluaXNoOiBcIi5maW5pc2hcIixcbiAgICAgICAgICAgIHd6X2hpZ2hsaWdodDogXCIuaGlnaGxpZ2h0LWVycm9yXCIsXG4gICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcblxuICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgYnV0dG9uczogdHJ1ZSxcbiAgICAgICAgICAgIGhpZ2hsaWdodDogdHJ1ZSxcblxuICAgICAgICAgICAgY3VycmVudF9zdGVwOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICBoaWdobGlnaHRfdGltZTogMTAwMCxcbiAgICAgICAgICAgIG5hdmlnYXRpb246IFwiYWxsXCIsXG4gICAgICAgICAgICBuZXh0OiBcIk5leHRcIixcbiAgICAgICAgICAgIHByZXY6IFwiUHJldlwiLFxuICAgICAgICAgICAgZmluaXNoOiBcIlN1Ym1pdFwiLFxuXG4gICAgICAgICAgICBoaWdobGlnaHRfdHlwZTogeyBlcnJvcjogXCJlcnJvclwiLCB3YXJuaW5nOiBcIndhcm5pbmdcIiwgc3VjY2VzczogXCJzdWNjZXNzXCIsIGluZm86IFwiaW5mb1wiIH0sXG5cbiAgICAgICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgICAgICBlbXB0eV93ejogXCJObyBpdGVtIGhhcyBiZWVuIGZvdW5kIHdpdGggd2hpY2ggdG8gZ2VuZXJhdGUgdGhlIFdpemFyZC5cIixcbiAgICAgICAgICAgICAgICBlbXB0eV9uYXY6IFwiTmF2IGRvZXMgbm90IGV4aXN0IG9yIGlzIGVtcHR5LlwiLFxuICAgICAgICAgICAgICAgIGVtcHR5X2NvbnRlbnQ6IFwiQ29udGVudCBkb2VzIG5vdCBleGlzdCBvciBpcyBlbXB0eS5cIixcbiAgICAgICAgICAgICAgICBlbXB0eV9odG1sOiBcIlVuZGVmaW5lZCBvciBudWxsIGNvbnRlbnQgY2Fubm90IGJlIGFkZGVkLlwiLFxuICAgICAgICAgICAgICAgIGVtcHR5X3VwZGF0ZTogXCJOb3RoaW5nIHRvIHVwZGF0ZS5cIixcbiAgICAgICAgICAgICAgICBub19uYXY6IFwiQm90aCB0aGUgbmF2IGFuZCB0aGUgYnV0dG9ucyBhcmUgZGlzYWJsZWQsIHRoZXJlIGlzIG5vIG5hdmlnYXRpb24gc3lzdGVtLlwiLFxuICAgICAgICAgICAgICAgIGZvcm1fdmFsaWRhdGlvbjogXCJPbmUgb3IgbW9yZSBvZiB0aGUgZm9ybSBmaWVsZHMgYXJlIGludmFsaWQuXCIsXG4gICAgICAgICAgICAgICAgZGlmZl9zdGVwczogXCJEaXNjb3JkYW5jZSBiZXR3ZWVuIHRoZSBzdGVwcyBvZiBuYXYgYW5kIGNvbnRlbnQuXCIsXG4gICAgICAgICAgICAgICAgcmFuZG9tOiBcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSwgY2hlY2sgdGhlIGNvbmZpZ3VyYXRpb24gYW5kIHVzZSBvZiB0aGUgd2l6YXJkLlwiLFxuICAgICAgICAgICAgICAgIGFscmVhZHlfZGVmaW5lZDogXCJUaGlzIGl0ZW0gaXMgYWxyZWFkeSBkZWZpbmVkXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU3RlcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLmRlZmF1bHRzLCAuLi5hcmdzIH07XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd3pfY2xhc3MsXG4gICAgICAgICAgICB3el9uYXYsXG4gICAgICAgICAgICB3el9vcmksXG4gICAgICAgICAgICB3el9uYXZfc3R5bGUsXG4gICAgICAgICAgICB3el9jb250ZW50LFxuICAgICAgICAgICAgd3pfYnV0dG9ucyxcbiAgICAgICAgICAgIHd6X2J1dHRvbixcbiAgICAgICAgICAgIHd6X2J1dHRvbl9zdHlsZSxcbiAgICAgICAgICAgIHd6X3N0ZXAsXG4gICAgICAgICAgICB3el9mb3JtLFxuICAgICAgICAgICAgd3pfbmV4dCxcbiAgICAgICAgICAgIHd6X3ByZXYsXG4gICAgICAgICAgICB3el9maW5pc2gsXG4gICAgICAgICAgICB3el9oaWdobGlnaHQsXG4gICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICBidXR0b25zLFxuICAgICAgICAgICAgaGlnaGxpZ2h0LFxuICAgICAgICAgICAgaGlnaGxpZ2h0X3RpbWUsXG4gICAgICAgICAgICBoaWdobGlnaHRfdHlwZSxcbiAgICAgICAgICAgIGN1cnJlbnRfc3RlcCxcbiAgICAgICAgICAgIHN0ZXBzLFxuICAgICAgICAgICAgbmF2aWdhdGlvbixcbiAgICAgICAgICAgIHByZXYsXG4gICAgICAgICAgICBuZXh0LFxuICAgICAgICAgICAgZmluaXNoLFxuICAgICAgICAgICAgaTE4bixcbiAgICAgICAgICAgIGJ1YmJsZXMsXG4gICAgICAgIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAgICAgICB3el9jbGFzcyxcbiAgICAgICAgICAgIHd6X25hdixcbiAgICAgICAgICAgIHd6X29yaSxcbiAgICAgICAgICAgIHd6X25hdl9zdHlsZSxcbiAgICAgICAgICAgIHd6X2NvbnRlbnQsXG4gICAgICAgICAgICB3el9idXR0b25zLFxuICAgICAgICAgICAgd3pfYnV0dG9uLFxuICAgICAgICAgICAgd3pfYnV0dG9uX3N0eWxlLFxuICAgICAgICAgICAgd3pfc3RlcCxcbiAgICAgICAgICAgIHd6X2Zvcm0sXG4gICAgICAgICAgICB3el9uZXh0LFxuICAgICAgICAgICAgd3pfcHJldixcbiAgICAgICAgICAgIHd6X2ZpbmlzaCxcbiAgICAgICAgICAgIHd6X2hpZ2hsaWdodCxcbiAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgIGJ1dHRvbnMsXG4gICAgICAgICAgICBoaWdobGlnaHQsXG4gICAgICAgICAgICBoaWdobGlnaHRfdGltZSxcbiAgICAgICAgICAgIGhpZ2hsaWdodF90eXBlLFxuICAgICAgICAgICAgY3VycmVudF9zdGVwLFxuICAgICAgICAgICAgc3RlcHMsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uLFxuICAgICAgICAgICAgcHJldixcbiAgICAgICAgICAgIG5leHQsXG4gICAgICAgICAgICBmaW5pc2gsXG4gICAgICAgICAgICBpMThuLFxuICAgICAgICAgICAgbGFzdF9zdGVwOiBjdXJyZW50X3N0ZXAsXG4gICAgICAgICAgICBmb3JtOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2tlZDogZmFsc2UsXG4gICAgICAgICAgICBsb2NrZWRfc3RlcDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHdpemFyZFxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3el9jaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9jbGFzcyk7XG4gICAgICAgICAgICBpZiAoIXd6X2NoZWNrKSB0aHJvdyBuZXcgRXJyb3IodGhpcy5pMThuLmVtcHR5X3d6KTtcblxuICAgICAgICAgICAgaWYgKHd6X2NoZWNrLmdldEF0dHJpYnV0ZShcImRhdGEtd3otbG9hZFwiKSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7dGhpcy53el9jbGFzc30gOiAke3RoaXMuaTE4bi5hbHJlYWR5X2RlZmluZWR9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB3eiA9IHd6X2NoZWNrO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1dHRvbnMgJiYgIXRoaXMubmF2KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuaTE4bi5ub19uYXYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3ei5jbGFzc0xpc3QuYWRkKHRoaXMud3pfb3JpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcblxuICAgICAgICAgICAgaWYgKHd6LnRhZ05hbWUgPT09IFwiRk9STVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jaGVja0FuZFByZXBhcmUod3opO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubmF2aWdhdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhbGxcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwibmF2XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TmF2RXZlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCdG5FdmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYnV0dG9uc1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJ0bkV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3ei5zdHlsZS5kaXNwbGF5ID0gd3ouY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIikgPyBcImZsZXhcIiA6IFwiYmxvY2tcIjtcblxuICAgICAgICAgICAgd3ouc2V0QXR0cmlidXRlKFwiZGF0YS13ei1sb2FkXCIsIFwidHJ1ZVwiKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJ3ei5yZWFkeVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMud3pfY2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtOiB3eixcblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbmQgdXBkYXRlIGVhY2ggc2VjdGlvbiBvZiB0aGUgd2l6YXJkLlxuICAgICAqL1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3Qgd3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuICAgICAgICBpZiAoIXd6KSB0aHJvdyBuZXcgRXJyb3IodGhpcy5pMThuLmVtcHR5X3d6KTtcblxuICAgICAgICBpZiAod3ouZ2V0QXR0cmlidXRlKFwiZGF0YS13ei1sb2FkXCIpICE9PSBcInRydWVcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMuaTE4bi5lbXB0eV93eik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQW5kUHJlcGFyZSh3eik7XG5cbiAgICAgICAgdGhpcy5jb250ZW50X3VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIHd6LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJ3ei51cGRhdGVcIiwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnd6X2NsYXNzLFxuICAgICAgICAgICAgICAgICAgICBlbGVtOiB3eixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXN0YXJ0IHRoZSB3aXphcmRcbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50U3RlcCgwKTtcblxuICAgICAgICBjb25zdCB3eiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9jbGFzcyk7XG4gICAgICAgIGNvbnN0IG5hdiA9IHd6LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9uYXYpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gd3oucXVlcnlTZWxlY3Rvcih0aGlzLnd6X2NvbnRlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB3ei5xdWVyeVNlbGVjdG9yKHRoaXMud3pfYnV0dG9ucyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBidXR0b25zLnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy53el9idXR0b259JHt0aGlzLnd6X25leHR9YCk7XG4gICAgICAgICAgICBjb25zdCBwcmV2ID0gYnV0dG9ucy5xdWVyeVNlbGVjdG9yKGAke3RoaXMud3pfYnV0dG9ufSR7dGhpcy53el9wcmV2fWApO1xuICAgICAgICAgICAgY29uc3QgZmluaXNoID0gYnV0dG9ucy5xdWVyeVNlbGVjdG9yKGAke3RoaXMud3pfYnV0dG9ufSR7dGhpcy53el9maW5pc2h9YCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hlY2tCdXR0b25zKG5leHQsIHByZXYsIGZpbmlzaCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uYXYpIHtcbiAgICAgICAgICAgIGNvbnN0IHd6X25hdl9zdGVwcyA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKHRoaXMud3pfc3RlcCk7XG4gICAgICAgICAgICB3el9uYXZfc3RlcHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuXG4gICAgICAgICAgICBuYXYucXVlcnlTZWxlY3RvcihgJHt0aGlzLnd6X3N0ZXB9W2RhdGEtd3otc3RlcD1cIiR7dGhpcy5nZXRDdXJyZW50U3RlcCgpfVwiXWApLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3el9jb250ZW50X3N0ZXBzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMud3pfc3RlcCk7XG4gICAgICAgIHd6X2NvbnRlbnRfc3RlcHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuXG4gICAgICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvcihgJHt0aGlzLnd6X3N0ZXB9W2RhdGEtd3otc3RlcD1cIiR7dGhpcy5nZXRDdXJyZW50U3RlcCgpfVwiXWApLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgd3ouZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBFdmVudChcInd6LnJlc2V0XCIsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2tzIHRoZSB3aXphcmQgaW4gdGhlIGFjdGl2ZSBzdGVwXG4gICAgICovXG4gICAgbG9jaygpIHtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvY2tlZF9zdGVwID0gdGhpcy5nZXRDdXJyZW50U3RlcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVubG9jayB3aXphcmRcbiAgICAgKi9cbiAgICB1bmxvY2soKSB7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9ja2VkX3N0ZXAgPSBudWxsO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9jbGFzcykuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBFdmVudChcInd6LnVubG9ja1wiLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogdGhpcy5idWJibGVzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB0aGUgc3RlcHMgYW5kIGRlZmluZSBhIHN0YW5kYXJkIGZvciBlYWNoIHN0ZXAuXG4gICAgICovXG4gICAgcHJlZmFiU3RlcHMod3pfY29udGVudF9zdGVwcywgd3pfbmF2LCB3el9uYXZfc3RlcHMpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlX2luZGV4ID0gdGhpcy5nZXRDdXJyZW50U3RlcCgpO1xuXG4gICAgICAgIHd6X2NvbnRlbnRfc3RlcHMuZm9yRWFjaCgoc3RlcCwgaSkgPT4ge1xuICAgICAgICAgICAgc3RlcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXd6LXN0ZXBcIiwgaSk7XG4gICAgICAgICAgICBpZiAodGhpcy5uYXYpIHd6X25hdl9zdGVwc1tpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXd6LXN0ZXBcIiwgaSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLm5hdikge1xuICAgICAgICAgICAgd3pfbmF2X3N0ZXBzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgICAgIHd6X25hdl9zdGVwc1thY3RpdmVfaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB3el9uYXYuY2xhc3NMaXN0LmFkZCh0aGlzLnd6X25hdl9zdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB3el9jb250ZW50X3N0ZXBzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgd3pfY29udGVudF9zdGVwc1thY3RpdmVfaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgdGhpcy5zZXRCdXR0b25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZm9ybSB0YWcgYW5kIGNvbnZlcnRzIHRoZSB3aXphcmQgaW50byBhIDxmb3JtPlxuICAgICAqL1xuICAgIHVwZGF0ZVRvRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgd3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuICAgICAgICBjb25zdCB3el9jb250ZW50ID0gd3oucXVlcnlTZWxlY3Rvcih0aGlzLnd6X2NvbnRlbnQpO1xuXG4gICAgICAgIGlmICh3el9jb250ZW50LnRhZ05hbWUgIT09IFwiRk9STVwiKSB7XG4gICAgICAgICAgICBjb25zdCB3el9jb250ZW50X2NsYXNzID0gd3pfY29udGVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgICAgICAgICAgIGNvbnN0IHd6X2NvbnRlbnRfY29udGVudCA9IHd6X2NvbnRlbnQuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICB3el9jb250ZW50LnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcIlBPU1RcIik7XG4gICAgICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke3d6X2NvbnRlbnRfY2xhc3N9ICR7dGhpcy53el9mb3JtLnJlcGxhY2UoXCIuXCIsIFwiXCIpfWApO1xuICAgICAgICAgICAgZm9ybS5pbm5lckhUTUwgPSB3el9jb250ZW50X2NvbnRlbnQ7XG5cbiAgICAgICAgICAgIHd6LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGFuZCB2YWxpZGF0ZXMgZWFjaCBpbnB1dC9zZWxlY3QvdGV4dGFyZWEgb2YgdGhlIGFjdGl2ZSBzdGVwLlxuICAgICAqL1xuICAgIGNoZWNrRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgd3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuICAgICAgICBjb25zdCB3el9jb250ZW50ID0gd3oucXVlcnlTZWxlY3Rvcih0aGlzLnd6X2NvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IHN0ZXBzID0gd3pfY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMud3pfc3RlcCk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHN0ZXBzW3RoaXMuZ2V0Q3VycmVudFN0ZXAoKV07XG5cbiAgICAgICAgY29uc3QgaW5wdXRzID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKTtcblxuICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1WYWxpZGF0b3Iod3pfY29udGVudCwgaW5wdXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRpbmcsIHN0eWxpbmcgYW5kIHNoYXBpbmcgdGhlIE5hdlxuICAgICAqL1xuICAgIHNldE5hdih3eikge1xuICAgICAgICBsZXQgd3pfbmF2ID0gd3oucXVlcnlTZWxlY3Rvcih0aGlzLnd6X25hdik7XG5cbiAgICAgICAgaWYgKHd6X25hdiAmJiB0aGlzLm5hdikge1xuICAgICAgICAgICAgd3pfbmF2LnJlbW92ZSgpO1xuICAgICAgICAgICAgd3pfbmF2ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghd3pfbmF2ICYmIHRoaXMubmF2KSB7XG4gICAgICAgICAgICBjb25zdCB3el9jb250ZW50ID0gd3oucXVlcnlTZWxlY3Rvcih0aGlzLnd6X2NvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSB3el9jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy53el9zdGVwKTtcblxuICAgICAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQodGhpcy53el9uYXYucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuXG4gICAgICAgICAgICBzdGVwcy5mb3JFYWNoKChzdGVwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmF2X3N0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gc3RlcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXd6LXRpdGxlXCIpIHx8IGAke3RoaXMuaTE4bi50aXRsZX0gJHtpfWA7XG4gICAgICAgICAgICAgICAgbmF2X3N0ZXAuY2xhc3NMaXN0LmFkZCh0aGlzLnd6X3N0ZXAucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hdmlnYXRpb24gPT09IFwiYnV0dG9uc1wiKSBuYXZfc3RlcC5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbnNcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZChcImRvdFwiKTtcbiAgICAgICAgICAgICAgICBuYXZfc3RlcC5hcHBlbmRDaGlsZChkb3QpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgbmF2X3N0ZXAuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobmF2X3N0ZXApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHd6LnByZXBlbmQobmF2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRpbmcsIHN0eWxpbmcgYW5kIHNoYXBpbmcgQnV0dG9uc1xuICAgICAqL1xuICAgIHNldEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IHd6ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnd6X2NsYXNzKTtcbiAgICAgICAgbGV0IHd6X2J0bnMgPSB3ei5xdWVyeVNlbGVjdG9yKHRoaXMud3pfYnV0dG9ucyk7XG5cbiAgICAgICAgaWYgKHd6X2J0bnMgJiYgdGhpcy5idXR0b25zKSB7XG4gICAgICAgICAgICB3el9idG5zLnJlbW92ZSgpO1xuICAgICAgICAgICAgd3pfYnRucyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXd6X2J0bnMgJiYgdGhpcy5idXR0b25zKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xuICAgICAgICAgICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKHRoaXMud3pfYnV0dG9ucy5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ0bl9zdHlsZSA9IHRoaXMud3pfYnV0dG9uX3N0eWxlLnJlcGxhY2UoL1xcLi9nLCBcIlwiKS5zcGxpdChcIiBcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgcHJldi5pbm5lckhUTUwgPSB0aGlzLnByZXY7XG4gICAgICAgICAgICBwcmV2LmNsYXNzTGlzdC5hZGQodGhpcy53el9idXR0b24ucmVwbGFjZShcIi5cIiwgXCJcIiksIC4uLmJ0bl9zdHlsZSwgdGhpcy53el9wcmV2LnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5hdmlnYXRpb24gPT09IFwibmF2XCIpIHByZXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChwcmV2KTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBuZXh0LmlubmVySFRNTCA9IHRoaXMubmV4dDtcbiAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZCh0aGlzLnd6X2J1dHRvbi5yZXBsYWNlKFwiLlwiLCBcIlwiKSwgLi4uYnRuX3N0eWxlLCB0aGlzLnd6X25leHQucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgICAgICAgICAgaWYgKHRoaXMubmF2aWdhdGlvbiA9PT0gXCJuYXZcIikgbmV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKG5leHQpO1xuXG4gICAgICAgICAgICBjb25zdCBmaW5pc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZmluaXNoLmlubmVySFRNTCA9IHRoaXMuZmluaXNoO1xuICAgICAgICAgICAgZmluaXNoLmNsYXNzTGlzdC5hZGQodGhpcy53el9idXR0b24ucmVwbGFjZShcIi5cIiwgXCJcIiksIC4uLmJ0bl9zdHlsZSwgdGhpcy53el9maW5pc2gucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChmaW5pc2gpO1xuXG4gICAgICAgICAgICB0aGlzLmNoZWNrQnV0dG9ucyhuZXh0LCBwcmV2LCBmaW5pc2gpO1xuXG4gICAgICAgICAgICB3ei5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRpbmcsIHN0eWxpbmcgYW5kIHNoYXBpbmcgQnV0dG9uc1xuICAgICAqL1xuICAgIGNoZWNrQnV0dG9ucyhuZXh0LCBwcmV2LCBmaW5pc2gpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9zdGVwID0gdGhpcy5nZXRDdXJyZW50U3RlcCgpO1xuICAgICAgICBjb25zdCBuX3N0ZXBzID0gdGhpcy5zdGVwcyAtIDE7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRfc3RlcCA9PT0gMCkge1xuICAgICAgICAgICAgcHJldi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmV2LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRfc3RlcCA9PT0gbl9zdGVwcykge1xuICAgICAgICAgICAgbmV4dC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICBmaW5pc2guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbmlzaC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBuZXh0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tbW9uIGZ1bmN0aW9uIGZvciB3aXphcmQgY2hlY2tzIGFuZCBwcmVmYWIuXG4gICAgICovXG4gICAgY2hlY2tBbmRQcmVwYXJlKHd6KSB7XG4gICAgICAgIHRoaXMuc2V0TmF2KHd6KTtcblxuICAgICAgICBjb25zdCB3el9jb250ZW50ID0gd3oucXVlcnlTZWxlY3Rvcih0aGlzLnd6X2NvbnRlbnQpO1xuICAgICAgICBpZiAoIXd6X2NvbnRlbnQpIHRocm93IG5ldyBFcnJvcih0aGlzLmkxOG4uZW1wdHlfY29udGVudCk7XG5cbiAgICAgICAgY29uc3Qgd3pfY29udGVudF9zdGVwcyA9IHd6X2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnd6X3N0ZXApO1xuICAgICAgICBpZiAoIXd6X2NvbnRlbnRfc3RlcHMubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IodGhpcy5pMThuLmVtcHR5X2NvbnRlbnQpO1xuXG4gICAgICAgIGxldCB3el9uYXYsIHd6X25hdl9zdGVwcztcblxuICAgICAgICBpZiAodGhpcy5uYXYpIHtcbiAgICAgICAgICAgIHd6X25hdiA9IHd6LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9uYXYpO1xuICAgICAgICAgICAgaWYgKCF3el9uYXYpIHRocm93IG5ldyBFcnJvcih0aGlzLmkxOG4uZW1wdHlfbmF2KTtcblxuICAgICAgICAgICAgd3pfbmF2X3N0ZXBzID0gd3pfbmF2LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy53el9zdGVwKTtcbiAgICAgICAgICAgIGlmICghd3pfbmF2X3N0ZXBzLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKHRoaXMuaTE4bi5lbXB0eV9uYXYpO1xuXG4gICAgICAgICAgICBpZiAod3pfbmF2X3N0ZXBzLmxlbmd0aCAhPT0gd3pfY29udGVudF9zdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy5pMThuLmRpZmZfc3RlcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGVwcyA9IHd6X2NvbnRlbnRfc3RlcHMubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMucHJlZmFiU3RlcHMod3pfY29udGVudF9zdGVwcywgd3pfbmF2LCB3el9uYXZfc3RlcHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsaWNrIGV2ZW50IGhhbmRsZXIgZm9yIEJ1dHRvbnMgYW5kIE5hdi5cbiAgICAgKi9cbiAgICBvbkNsaWNrKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgd3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuXG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCAmJiB0aGlzLmxvY2tlZF9zdGVwID09PSB0aGlzLmdldEN1cnJlbnRTdGVwKCkpIHtcbiAgICAgICAgICAgIHd6LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgbmV3IEV2ZW50KFwid3oubG9ja1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQuY2xvc2VzdCh0aGlzLnd6X2NsYXNzKTtcbiAgICAgICAgY29uc3QgbmF2ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9uYXYpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9jb250ZW50KTtcblxuICAgICAgICBjb25zdCBpc19idG4gPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnd6X2J1dHRvbi5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgICAgIGNvbnN0IGlzX25hdiA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMud3pfc3RlcC5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG5cbiAgICAgICAgbGV0IHN0ZXAgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtd3otc3RlcFwiKTtcbiAgICAgICAgc3RlcCA9IHN0ZXAgIT09IG51bGwgPyBwYXJzZUludChzdGVwKSA6IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKTtcblxuICAgICAgICBpZiAoaXNfYnRuKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy53el9wcmV2LnJlcGxhY2UoXCIuXCIsIFwiXCIpKSkge1xuICAgICAgICAgICAgICAgIHN0ZXAgLT0gMTtcbiAgICAgICAgICAgICAgICB3ei5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnQoXCJ3ei5idG4ucHJldlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy53el9uZXh0LnJlcGxhY2UoXCIuXCIsIFwiXCIpKSkge1xuICAgICAgICAgICAgICAgIHN0ZXAgKz0gMTtcbiAgICAgICAgICAgICAgICB3ei5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnQoXCJ3ei5idG4ubmV4dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0ZXBfYWN0aW9uID0gc3RlcCA+IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKTtcblxuICAgICAgICBpZiAoaXNfbmF2KSB7XG4gICAgICAgICAgICBpZiAoc3RlcF9hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB3ei5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnQoXCJ3ei5uYXYuZm9yd2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RlcCA8IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKSkge1xuICAgICAgICAgICAgICAgIHd6LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudChcInd6Lm5hdi5iYWNrd2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvcm0gJiYgdGhpcy5uYXZpZ2F0aW9uICE9PSBcImJ1dHRvbnNcIikge1xuICAgICAgICAgICAgaWYgKHN0ZXBfYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgIT09IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKSArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IHN0ZXAgPj0gdGhpcy5sYXN0X3N0ZXAgPyB0aGlzLmxhc3Rfc3RlcCA6IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybSkge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tfZm9ybSA9IHRoaXMuY2hlY2tGb3JtKCk7XG4gICAgICAgICAgICBpZiAoY2hlY2tfZm9ybS5lcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChzdGVwX2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3ei5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwid3ouZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZm9ybV92YWxpZGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZzogdGhpcy5pMThuLmZvcm1fdmFsaWRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBjaGVja19mb3JtLnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3Rfc3RlcCA9IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDdXJyZW50U3RlcCgpIDwgc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0ZXAgIT09IG51bGwgJiYgc3RlcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRTdGVwKHN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYnV0dG9ucykge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9ucyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfYnV0dG9ucyk7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gYnV0dG9ucy5xdWVyeVNlbGVjdG9yKGAke3RoaXMud3pfYnV0dG9ufSR7dGhpcy53el9uZXh0fWApO1xuICAgICAgICAgICAgY29uc3QgcHJldiA9IGJ1dHRvbnMucXVlcnlTZWxlY3RvcihgJHt0aGlzLnd6X2J1dHRvbn0ke3RoaXMud3pfcHJldn1gKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaCA9IGJ1dHRvbnMucXVlcnlTZWxlY3RvcihgJHt0aGlzLnd6X2J1dHRvbn0ke3RoaXMud3pfZmluaXNofWApO1xuXG4gICAgICAgICAgICB0aGlzLmNoZWNrQnV0dG9ucyhuZXh0LCBwcmV2LCBmaW5pc2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubmF2KSB7XG4gICAgICAgICAgICBjb25zdCB3el9uYXZfc3RlcHMgPSBuYXYucXVlcnlTZWxlY3RvckFsbCh0aGlzLnd6X3N0ZXApO1xuICAgICAgICAgICAgd3pfbmF2X3N0ZXBzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgICAgIG5hdi5xdWVyeVNlbGVjdG9yKGAke3RoaXMud3pfc3RlcH1bZGF0YS13ei1zdGVwPVwiJHt0aGlzLmdldEN1cnJlbnRTdGVwKCl9XCJdYCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHd6X2NvbnRlbnRfc3RlcHMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy53el9zdGVwKTtcbiAgICAgICAgd3pfY29udGVudF9zdGVwcy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvcihgJHt0aGlzLnd6X3N0ZXB9W2RhdGEtd3otc3RlcD1cIiR7dGhpcy5nZXRDdXJyZW50U3RlcCgpfVwiXWApLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm90aWZpZXMgdGhhdCB0aGUgd2l6YXJkIGhhcyBiZWVuIGNvbXBsZXRlZC5cbiAgICAgKi9cbiAgICBvbkNsaWNrRmluaXNoKCkge1xuICAgICAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja19mb3JtID0gdGhpcy5jaGVja0Zvcm0oKTtcbiAgICAgICAgICAgIGlmICghY2hlY2tfZm9ybS5lcnJvcikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9jbGFzcykuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50KFwid3ouZm9ybS5zdWJtaXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlczogdGhpcy5idWJibGVzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgbmV3IEV2ZW50KFwid3ouZW5kXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlczogdGhpcy5idWJibGVzLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBhY3RpdmUgc3RlcFxuICAgICAqL1xuICAgIHNldEN1cnJlbnRTdGVwKHN0ZXApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50X3N0ZXAgPSB0aGlzLnNldFN0ZXAoc3RlcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBhY3RpdmUgc3RlcFxuICAgICAqL1xuICAgIGdldEN1cnJlbnRTdGVwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50X3N0ZXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYW5kIG1hdGNoIHRoZSBzdGVwcyBvZiB0aGUgd2l6YXJkLlxuICAgICAqL1xuICAgIHNldFN0ZXAoc3RlcCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9jb250ZW50KTtcblxuICAgICAgICBjb25zdCBjaGVja19jb250ZW50ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKGAke3RoaXMud3pfc3RlcH1bZGF0YS13ei1zdGVwPVwiJHtzdGVwfVwiXWApO1xuXG4gICAgICAgIGlmICghY2hlY2tfY29udGVudCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudF9sZW5ndGggPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy53el9zdGVwKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgc3RlcCA9IE1hdGgubWluKGNvbnRlbnRfbGVuZ3RoLCBzdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdF9zdGVwID0gTWF0aC5tYXgoc3RlcCwgdGhpcy5sYXN0X3N0ZXApO1xuXG4gICAgICAgIHJldHVybiBwYXJzZUludChzdGVwLCAxMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IE5hdiBldmVudHNcbiAgICAgKi9cbiAgICBzZXROYXZFdmVudCgpIHtcbiAgICAgICAgY29uc3Qgd3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuICAgICAgICB3ei5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdChgJHt0aGlzLnd6X25hdn0gJHt0aGlzLnd6X3N0ZXB9YCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2sodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEJ1dHRvbiBldmVudHNcbiAgICAgKi9cbiAgICBzZXRCdG5FdmVudCgpIHtcbiAgICAgICAgY29uc3Qgd3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuICAgICAgICB3ei5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdChgJHt0aGlzLnd6X2J1dHRvbnN9ICR7dGhpcy53el9idXR0b259YCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMud3pfZmluaXNoLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2tGaW5pc2goKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2sodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgZmllbGRzIG9mIHRoZSBhY3RpdmUgc3RlcCwgaW4gY2FzZSB0aGVyZSBpcyBhbiBlcnJvciBpdCBnZW5lcmF0ZXMgYSBoaWdobGlnaHQuXG4gICAgICovXG4gICAgZm9ybVZhbGlkYXRvcih3el9jb250ZW50LCBmb3JtRGF0YSkge1xuICAgICAgICBsZXQgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gW107XG5cbiAgICAgICAgZm9ybURhdGEuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGlzUmVxdWlyZWQgPSBlLnJlcXVpcmVkIHx8IGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVxdWlyZWRcIik7XG4gICAgICAgICAgICBjb25zdCBpc09uQWN0aXZlUmVxdWlyZWQgPSBlLmNsYXNzTGlzdC5jb250YWlucyhcIm9uLWFjdGl2ZS1yZXF1aXJlZFwiKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGRhdGEtcmVxdWlyZS1pZiBhdHRyaWJ1dGVcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVJZiA9IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZXF1aXJlLWlmXCIpO1xuICAgICAgICAgICAgaWYgKHJlcXVpcmVJZikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtkZXBlbmRlbmN5SWQsIHJlcXVpcmVkVmFsdWVdID0gcmVxdWlyZUlmLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBlbmRlbmN5RmllbGQgPSB3el9jb250ZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RlcGVuZGVuY3lJZH1gKTtcbiAgICAgICAgICAgICAgICBpZiAoZGVwZW5kZW5jeUZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVuY3lWYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbmN5RmllbGQudHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGRlcGVuZGVuY3lGaWVsZC50eXBlID09PSBcInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRlcGVuZGVuY3lGaWVsZC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkZXBlbmRlbmN5RmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXBlbmRlbmN5VmFsdWUgPT09IHJlcXVpcmVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoaXNSZXF1aXJlZCB8fCBpc09uQWN0aXZlUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMudmFsaWRhdGVGaWVsZChlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2goZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpZ2hsaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRFbGVtZW50KGUsIHRoaXMuaGlnaGxpZ2h0X3R5cGUuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICB2YWxpZGF0ZUZpZWxkKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJJTlBVVFwiOlxuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwiY2hlY2tib3hcIiB8fCBlLnR5cGUgPT09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5jaGVja2VkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLnZhbHVlLnRyaW0oKSAhPT0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiU0VMRUNUXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUudmFsdWUudHJpbSgpICE9PSBcIlwiO1xuICAgICAgICAgICAgY2FzZSBcIlRFWFRBUkVBXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUudmFsdWUudHJpbSgpICE9PSBcIlwiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZ2hsaWdodHMgYW4gZWxlbWVudCB0byBpbmRpY2F0ZSB2YWxpZGF0aW9uIGVycm9ycy5cbiAgICAgKi9cbiAgICBoaWdobGlnaHRFbGVtZW50KGVsZW1lbnQsIHR5cGUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMud3pfaGlnaGxpZ2h0LnJlcGxhY2UoXCIuXCIsIFwiXCIpLCB0eXBlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy53el9oaWdobGlnaHQucmVwbGFjZShcIi5cIiwgXCJcIiksIHR5cGUpO1xuICAgICAgICB9LCB0aGlzLmhpZ2hsaWdodF90aW1lKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpemFyZDtcbiJdLCJuYW1lcyI6WyJXaXphcmQiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkZWZhdWx0cyIsInd6X2NsYXNzIiwid3pfbmF2Iiwid3pfb3JpIiwid3pfbmF2X3N0eWxlIiwid3pfY29udGVudCIsInd6X2J1dHRvbnMiLCJ3el9idXR0b24iLCJ3el9idXR0b25fc3R5bGUiLCJ3el9zdGVwIiwid3pfZm9ybSIsInd6X25leHQiLCJ3el9wcmV2Iiwid3pfZmluaXNoIiwid3pfaGlnaGxpZ2h0IiwiYnViYmxlcyIsIm5hdiIsImJ1dHRvbnMiLCJoaWdobGlnaHQiLCJjdXJyZW50X3N0ZXAiLCJzdGVwcyIsImhpZ2hsaWdodF90aW1lIiwibmF2aWdhdGlvbiIsIm5leHQiLCJwcmV2IiwiZmluaXNoIiwiaGlnaGxpZ2h0X3R5cGUiLCJlcnJvciIsIndhcm5pbmciLCJzdWNjZXNzIiwiaW5mbyIsImkxOG4iLCJlbXB0eV93eiIsImVtcHR5X25hdiIsImVtcHR5X2NvbnRlbnQiLCJlbXB0eV9odG1sIiwiZW1wdHlfdXBkYXRlIiwibm9fbmF2IiwiZm9ybV92YWxpZGF0aW9uIiwiZGlmZl9zdGVwcyIsInJhbmRvbSIsImFscmVhZHlfZGVmaW5lZCIsInRpdGxlIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImxhc3Rfc3RlcCIsImZvcm0iLCJsb2NrZWQiLCJsb2NrZWRfc3RlcCIsImluaXQiLCJ3el9jaGVjayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkVycm9yIiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsIndhcm4iLCJ3eiIsImNsYXNzTGlzdCIsImFkZCIsInJlcGxhY2UiLCJ0YWdOYW1lIiwiY2hlY2tBbmRQcmVwYXJlIiwic2V0TmF2RXZlbnQiLCJzZXRCdG5FdmVudCIsInN0eWxlIiwiZGlzcGxheSIsImNvbnRhaW5zIiwic2V0QXR0cmlidXRlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwidGFyZ2V0IiwiZWxlbSIsInVwZGF0ZSIsImNvbnRlbnRfdXBkYXRlIiwicmVzZXQiLCJzZXRDdXJyZW50U3RlcCIsImNvbnRlbnQiLCJjaGVja0J1dHRvbnMiLCJ3el9uYXZfc3RlcHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwicmVtb3ZlIiwiZ2V0Q3VycmVudFN0ZXAiLCJ3el9jb250ZW50X3N0ZXBzIiwiRXZlbnQiLCJsb2NrIiwidW5sb2NrIiwicHJlZmFiU3RlcHMiLCJhY3RpdmVfaW5kZXgiLCJzdGVwIiwiaSIsInNldEJ1dHRvbnMiLCJ1cGRhdGVUb0Zvcm0iLCJ3el9jb250ZW50X2NsYXNzIiwid3pfY29udGVudF9jb250ZW50IiwiaW5uZXJIVE1MIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2hlY2tGb3JtIiwiaW5wdXRzIiwiZm9ybVZhbGlkYXRvciIsInNldE5hdiIsIm5hdl9zdGVwIiwiZG90Iiwic3BhbiIsInByZXBlbmQiLCJ3el9idG5zIiwiYnRuX3N0eWxlIiwic3BsaXQiLCJuX3N0ZXBzIiwicmVtb3ZlQXR0cmlidXRlIiwib25DbGljayIsImVsZW1lbnQiLCJwYXJlbnQiLCJjbG9zZXN0IiwiaXNfYnRuIiwiaXNfbmF2IiwicGFyc2VJbnQiLCJzdGVwX2FjdGlvbiIsImNoZWNrX2Zvcm0iLCJpZCIsIm1zZyIsIm9uQ2xpY2tGaW5pc2giLCJzZXRTdGVwIiwiY2hlY2tfY29udGVudCIsImNvbnRlbnRfbGVuZ3RoIiwiTWF0aCIsIm1pbiIsIm1heCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJlIiwiaXNSZXF1aXJlZCIsInJlcXVpcmVkIiwiaXNPbkFjdGl2ZVJlcXVpcmVkIiwicmVxdWlyZUlmIiwiZGVwZW5kZW5jeUlkIiwicmVxdWlyZWRWYWx1ZSIsImRlcGVuZGVuY3lGaWVsZCIsImRlcGVuZGVuY3lWYWx1ZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJ2YWxpZCIsInZhbGlkYXRlRmllbGQiLCJwdXNoIiwiaGlnaGxpZ2h0RWxlbWVudCIsInRyaW0iLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==