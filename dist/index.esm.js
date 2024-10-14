/******/ var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
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

var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0gsY0FBYyxDQUFDO0VBQzNCO0FBQ0o7QUFFQSxpRUFBZTNCLE1BQU0sRSIsInNvdXJjZXMiOlsid2VicGFjazovL0BhZHJpaV8vd2l6YXJkLWpzLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2EwYWEiLCJ3ZWJwYWNrOi8vQGFkcmlpXy93aXphcmQtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGFkcmlpXy93aXphcmQtanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BhZHJpaV8vd2l6YXJkLWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGFkcmlpXy93aXphcmQtanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AYWRyaWlfL3dpemFyZC1qcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcbi8qKlxuICogQSBsaWdodHdlaWdodCB3aXphcmQgVUkgY29tcG9uZW50IHRoYXQgc3VwcG9ydHMgYWNjZXNzaWJpbGl0eSBhbmQgSFRNTDUgaW4gVmFuaWxsYSBKYXZhU2NyaXB0LlxuICpcbiAqIEBsaW5rICAgaHR0cHM6Ly9naXRodWIuY29tL0FkcmlhblZpbGxhbWF5b3IvV2l6YXJkLUpTXG4gKiBAYXV0aG9yIEFkcmlhblxuICpcbiAqIEBjbGFzcyAgV2l6YXJkXG4gKi9cbmNsYXNzIFdpemFyZCB7XG4gICAgY29uc3RydWN0b3IoYXJncyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgd3pfY2xhc3M6IFwiLndpemFyZFwiLFxuICAgICAgICAgICAgd3pfbmF2OiBcIi53aXphcmQtbmF2XCIsXG4gICAgICAgICAgICB3el9vcmk6IFwiLmhvcml6b250YWxcIixcbiAgICAgICAgICAgIHd6X25hdl9zdHlsZTogXCJkb3RzXCIsXG4gICAgICAgICAgICB3el9jb250ZW50OiBcIi53aXphcmQtY29udGVudFwiLFxuICAgICAgICAgICAgd3pfYnV0dG9uczogXCIud2l6YXJkLWJ1dHRvbnNcIixcbiAgICAgICAgICAgIHd6X2J1dHRvbjogXCIud2l6YXJkLWJ0blwiLFxuICAgICAgICAgICAgd3pfYnV0dG9uX3N0eWxlOiBcIi5idG5cIixcbiAgICAgICAgICAgIHd6X3N0ZXA6IFwiLndpemFyZC1zdGVwXCIsXG4gICAgICAgICAgICB3el9mb3JtOiBcIi53aXphcmQtZm9ybVwiLFxuICAgICAgICAgICAgd3pfbmV4dDogXCIubmV4dFwiLFxuICAgICAgICAgICAgd3pfcHJldjogXCIucHJldlwiLFxuICAgICAgICAgICAgd3pfZmluaXNoOiBcIi5maW5pc2hcIixcbiAgICAgICAgICAgIHd6X2hpZ2hsaWdodDogXCIuaGlnaGxpZ2h0LWVycm9yXCIsXG4gICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcblxuICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgYnV0dG9uczogdHJ1ZSxcbiAgICAgICAgICAgIGhpZ2hsaWdodDogdHJ1ZSxcblxuICAgICAgICAgICAgY3VycmVudF9zdGVwOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICBoaWdobGlnaHRfdGltZTogMTAwMCxcbiAgICAgICAgICAgIG5hdmlnYXRpb246IFwiYWxsXCIsXG4gICAgICAgICAgICBuZXh0OiBcIk5leHRcIixcbiAgICAgICAgICAgIHByZXY6IFwiUHJldlwiLFxuICAgICAgICAgICAgZmluaXNoOiBcIlN1Ym1pdFwiLFxuXG4gICAgICAgICAgICBoaWdobGlnaHRfdHlwZTogeyBlcnJvcjogXCJlcnJvclwiLCB3YXJuaW5nOiBcIndhcm5pbmdcIiwgc3VjY2VzczogXCJzdWNjZXNzXCIsIGluZm86IFwiaW5mb1wiIH0sXG5cbiAgICAgICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgICAgICBlbXB0eV93ejogXCJObyBpdGVtIGhhcyBiZWVuIGZvdW5kIHdpdGggd2hpY2ggdG8gZ2VuZXJhdGUgdGhlIFdpemFyZC5cIixcbiAgICAgICAgICAgICAgICBlbXB0eV9uYXY6IFwiTmF2IGRvZXMgbm90IGV4aXN0IG9yIGlzIGVtcHR5LlwiLFxuICAgICAgICAgICAgICAgIGVtcHR5X2NvbnRlbnQ6IFwiQ29udGVudCBkb2VzIG5vdCBleGlzdCBvciBpcyBlbXB0eS5cIixcbiAgICAgICAgICAgICAgICBlbXB0eV9odG1sOiBcIlVuZGVmaW5lZCBvciBudWxsIGNvbnRlbnQgY2Fubm90IGJlIGFkZGVkLlwiLFxuICAgICAgICAgICAgICAgIGVtcHR5X3VwZGF0ZTogXCJOb3RoaW5nIHRvIHVwZGF0ZS5cIixcbiAgICAgICAgICAgICAgICBub19uYXY6IFwiQm90aCB0aGUgbmF2IGFuZCB0aGUgYnV0dG9ucyBhcmUgZGlzYWJsZWQsIHRoZXJlIGlzIG5vIG5hdmlnYXRpb24gc3lzdGVtLlwiLFxuICAgICAgICAgICAgICAgIGZvcm1fdmFsaWRhdGlvbjogXCJPbmUgb3IgbW9yZSBvZiB0aGUgZm9ybSBmaWVsZHMgYXJlIGludmFsaWQuXCIsXG4gICAgICAgICAgICAgICAgZGlmZl9zdGVwczogXCJEaXNjb3JkYW5jZSBiZXR3ZWVuIHRoZSBzdGVwcyBvZiBuYXYgYW5kIGNvbnRlbnQuXCIsXG4gICAgICAgICAgICAgICAgcmFuZG9tOiBcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSwgY2hlY2sgdGhlIGNvbmZpZ3VyYXRpb24gYW5kIHVzZSBvZiB0aGUgd2l6YXJkLlwiLFxuICAgICAgICAgICAgICAgIGFscmVhZHlfZGVmaW5lZDogXCJUaGlzIGl0ZW0gaXMgYWxyZWFkeSBkZWZpbmVkXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU3RlcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLmRlZmF1bHRzLCAuLi5hcmdzIH07XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd3pfY2xhc3MsXG4gICAgICAgICAgICB3el9uYXYsXG4gICAgICAgICAgICB3el9vcmksXG4gICAgICAgICAgICB3el9uYXZfc3R5bGUsXG4gICAgICAgICAgICB3el9jb250ZW50LFxuICAgICAgICAgICAgd3pfYnV0dG9ucyxcbiAgICAgICAgICAgIHd6X2J1dHRvbixcbiAgICAgICAgICAgIHd6X2J1dHRvbl9zdHlsZSxcbiAgICAgICAgICAgIHd6X3N0ZXAsXG4gICAgICAgICAgICB3el9mb3JtLFxuICAgICAgICAgICAgd3pfbmV4dCxcbiAgICAgICAgICAgIHd6X3ByZXYsXG4gICAgICAgICAgICB3el9maW5pc2gsXG4gICAgICAgICAgICB3el9oaWdobGlnaHQsXG4gICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICBidXR0b25zLFxuICAgICAgICAgICAgaGlnaGxpZ2h0LFxuICAgICAgICAgICAgaGlnaGxpZ2h0X3RpbWUsXG4gICAgICAgICAgICBoaWdobGlnaHRfdHlwZSxcbiAgICAgICAgICAgIGN1cnJlbnRfc3RlcCxcbiAgICAgICAgICAgIHN0ZXBzLFxuICAgICAgICAgICAgbmF2aWdhdGlvbixcbiAgICAgICAgICAgIHByZXYsXG4gICAgICAgICAgICBuZXh0LFxuICAgICAgICAgICAgZmluaXNoLFxuICAgICAgICAgICAgaTE4bixcbiAgICAgICAgICAgIGJ1YmJsZXMsXG4gICAgICAgIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAgICAgICB3el9jbGFzcyxcbiAgICAgICAgICAgIHd6X25hdixcbiAgICAgICAgICAgIHd6X29yaSxcbiAgICAgICAgICAgIHd6X25hdl9zdHlsZSxcbiAgICAgICAgICAgIHd6X2NvbnRlbnQsXG4gICAgICAgICAgICB3el9idXR0b25zLFxuICAgICAgICAgICAgd3pfYnV0dG9uLFxuICAgICAgICAgICAgd3pfYnV0dG9uX3N0eWxlLFxuICAgICAgICAgICAgd3pfc3RlcCxcbiAgICAgICAgICAgIHd6X2Zvcm0sXG4gICAgICAgICAgICB3el9uZXh0LFxuICAgICAgICAgICAgd3pfcHJldixcbiAgICAgICAgICAgIHd6X2ZpbmlzaCxcbiAgICAgICAgICAgIHd6X2hpZ2hsaWdodCxcbiAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgIGJ1dHRvbnMsXG4gICAgICAgICAgICBoaWdobGlnaHQsXG4gICAgICAgICAgICBoaWdobGlnaHRfdGltZSxcbiAgICAgICAgICAgIGhpZ2hsaWdodF90eXBlLFxuICAgICAgICAgICAgY3VycmVudF9zdGVwLFxuICAgICAgICAgICAgc3RlcHMsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uLFxuICAgICAgICAgICAgcHJldixcbiAgICAgICAgICAgIG5leHQsXG4gICAgICAgICAgICBmaW5pc2gsXG4gICAgICAgICAgICBpMThuLFxuICAgICAgICAgICAgbGFzdF9zdGVwOiBjdXJyZW50X3N0ZXAsXG4gICAgICAgICAgICBmb3JtOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2tlZDogZmFsc2UsXG4gICAgICAgICAgICBsb2NrZWRfc3RlcDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHdpemFyZFxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3el9jaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9jbGFzcyk7XG4gICAgICAgICAgICBpZiAoIXd6X2NoZWNrKSB0aHJvdyBuZXcgRXJyb3IodGhpcy5pMThuLmVtcHR5X3d6KTtcblxuICAgICAgICAgICAgaWYgKHd6X2NoZWNrLmdldEF0dHJpYnV0ZShcImRhdGEtd3otbG9hZFwiKSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7dGhpcy53el9jbGFzc30gOiAke3RoaXMuaTE4bi5hbHJlYWR5X2RlZmluZWR9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB3eiA9IHd6X2NoZWNrO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1dHRvbnMgJiYgIXRoaXMubmF2KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuaTE4bi5ub19uYXYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3ei5jbGFzc0xpc3QuYWRkKHRoaXMud3pfb3JpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcblxuICAgICAgICAgICAgaWYgKHd6LnRhZ05hbWUgPT09IFwiRk9STVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jaGVja0FuZFByZXBhcmUod3opO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubmF2aWdhdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhbGxcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwibmF2XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TmF2RXZlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCdG5FdmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYnV0dG9uc1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJ0bkV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3ei5zdHlsZS5kaXNwbGF5ID0gd3ouY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIikgPyBcImZsZXhcIiA6IFwiYmxvY2tcIjtcblxuICAgICAgICAgICAgd3ouc2V0QXR0cmlidXRlKFwiZGF0YS13ei1sb2FkXCIsIFwidHJ1ZVwiKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJ3ei5yZWFkeVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMud3pfY2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtOiB3eixcblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbmQgdXBkYXRlIGVhY2ggc2VjdGlvbiBvZiB0aGUgd2l6YXJkLlxuICAgICAqL1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3Qgd3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuICAgICAgICBpZiAoIXd6KSB0aHJvdyBuZXcgRXJyb3IodGhpcy5pMThuLmVtcHR5X3d6KTtcblxuICAgICAgICBpZiAod3ouZ2V0QXR0cmlidXRlKFwiZGF0YS13ei1sb2FkXCIpICE9PSBcInRydWVcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMuaTE4bi5lbXB0eV93eik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQW5kUHJlcGFyZSh3eik7XG5cbiAgICAgICAgdGhpcy5jb250ZW50X3VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIHd6LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJ3ei51cGRhdGVcIiwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnd6X2NsYXNzLFxuICAgICAgICAgICAgICAgICAgICBlbGVtOiB3eixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXN0YXJ0IHRoZSB3aXphcmRcbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50U3RlcCgwKTtcblxuICAgICAgICBjb25zdCB3eiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9jbGFzcyk7XG4gICAgICAgIGNvbnN0IG5hdiA9IHd6LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9uYXYpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gd3oucXVlcnlTZWxlY3Rvcih0aGlzLnd6X2NvbnRlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB3ei5xdWVyeVNlbGVjdG9yKHRoaXMud3pfYnV0dG9ucyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBidXR0b25zLnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy53el9idXR0b259JHt0aGlzLnd6X25leHR9YCk7XG4gICAgICAgICAgICBjb25zdCBwcmV2ID0gYnV0dG9ucy5xdWVyeVNlbGVjdG9yKGAke3RoaXMud3pfYnV0dG9ufSR7dGhpcy53el9wcmV2fWApO1xuICAgICAgICAgICAgY29uc3QgZmluaXNoID0gYnV0dG9ucy5xdWVyeVNlbGVjdG9yKGAke3RoaXMud3pfYnV0dG9ufSR7dGhpcy53el9maW5pc2h9YCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hlY2tCdXR0b25zKG5leHQsIHByZXYsIGZpbmlzaCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uYXYpIHtcbiAgICAgICAgICAgIGNvbnN0IHd6X25hdl9zdGVwcyA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKHRoaXMud3pfc3RlcCk7XG4gICAgICAgICAgICB3el9uYXZfc3RlcHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuXG4gICAgICAgICAgICBuYXYucXVlcnlTZWxlY3RvcihgJHt0aGlzLnd6X3N0ZXB9W2RhdGEtd3otc3RlcD1cIiR7dGhpcy5nZXRDdXJyZW50U3RlcCgpfVwiXWApLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3el9jb250ZW50X3N0ZXBzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMud3pfc3RlcCk7XG4gICAgICAgIHd6X2NvbnRlbnRfc3RlcHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuXG4gICAgICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvcihgJHt0aGlzLnd6X3N0ZXB9W2RhdGEtd3otc3RlcD1cIiR7dGhpcy5nZXRDdXJyZW50U3RlcCgpfVwiXWApLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgd3ouZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBFdmVudChcInd6LnJlc2V0XCIsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2tzIHRoZSB3aXphcmQgaW4gdGhlIGFjdGl2ZSBzdGVwXG4gICAgICovXG4gICAgbG9jaygpIHtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvY2tlZF9zdGVwID0gdGhpcy5nZXRDdXJyZW50U3RlcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVubG9jayB3aXphcmRcbiAgICAgKi9cbiAgICB1bmxvY2soKSB7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9ja2VkX3N0ZXAgPSBudWxsO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9jbGFzcykuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBFdmVudChcInd6LnVubG9ja1wiLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogdGhpcy5idWJibGVzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB0aGUgc3RlcHMgYW5kIGRlZmluZSBhIHN0YW5kYXJkIGZvciBlYWNoIHN0ZXAuXG4gICAgICovXG4gICAgcHJlZmFiU3RlcHMod3pfY29udGVudF9zdGVwcywgd3pfbmF2LCB3el9uYXZfc3RlcHMpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlX2luZGV4ID0gdGhpcy5nZXRDdXJyZW50U3RlcCgpO1xuXG4gICAgICAgIHd6X2NvbnRlbnRfc3RlcHMuZm9yRWFjaCgoc3RlcCwgaSkgPT4ge1xuICAgICAgICAgICAgc3RlcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXd6LXN0ZXBcIiwgaSk7XG4gICAgICAgICAgICBpZiAodGhpcy5uYXYpIHd6X25hdl9zdGVwc1tpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXd6LXN0ZXBcIiwgaSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLm5hdikge1xuICAgICAgICAgICAgd3pfbmF2X3N0ZXBzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgICAgIHd6X25hdl9zdGVwc1thY3RpdmVfaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB3el9uYXYuY2xhc3NMaXN0LmFkZCh0aGlzLnd6X25hdl9zdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB3el9jb250ZW50X3N0ZXBzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgd3pfY29udGVudF9zdGVwc1thY3RpdmVfaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgdGhpcy5zZXRCdXR0b25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZm9ybSB0YWcgYW5kIGNvbnZlcnRzIHRoZSB3aXphcmQgaW50byBhIDxmb3JtPlxuICAgICAqL1xuICAgIHVwZGF0ZVRvRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgd3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuICAgICAgICBjb25zdCB3el9jb250ZW50ID0gd3oucXVlcnlTZWxlY3Rvcih0aGlzLnd6X2NvbnRlbnQpO1xuXG4gICAgICAgIGlmICh3el9jb250ZW50LnRhZ05hbWUgIT09IFwiRk9STVwiKSB7XG4gICAgICAgICAgICBjb25zdCB3el9jb250ZW50X2NsYXNzID0gd3pfY29udGVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgICAgICAgICAgIGNvbnN0IHd6X2NvbnRlbnRfY29udGVudCA9IHd6X2NvbnRlbnQuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICB3el9jb250ZW50LnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcIlBPU1RcIik7XG4gICAgICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke3d6X2NvbnRlbnRfY2xhc3N9ICR7dGhpcy53el9mb3JtLnJlcGxhY2UoXCIuXCIsIFwiXCIpfWApO1xuICAgICAgICAgICAgZm9ybS5pbm5lckhUTUwgPSB3el9jb250ZW50X2NvbnRlbnQ7XG5cbiAgICAgICAgICAgIHd6LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGFuZCB2YWxpZGF0ZXMgZWFjaCBpbnB1dC9zZWxlY3QvdGV4dGFyZWEgb2YgdGhlIGFjdGl2ZSBzdGVwLlxuICAgICAqL1xuICAgIGNoZWNrRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgd3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuICAgICAgICBjb25zdCB3el9jb250ZW50ID0gd3oucXVlcnlTZWxlY3Rvcih0aGlzLnd6X2NvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IHN0ZXBzID0gd3pfY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMud3pfc3RlcCk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHN0ZXBzW3RoaXMuZ2V0Q3VycmVudFN0ZXAoKV07XG5cbiAgICAgICAgY29uc3QgaW5wdXRzID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKTtcblxuICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1WYWxpZGF0b3Iod3pfY29udGVudCwgaW5wdXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRpbmcsIHN0eWxpbmcgYW5kIHNoYXBpbmcgdGhlIE5hdlxuICAgICAqL1xuICAgIHNldE5hdih3eikge1xuICAgICAgICBsZXQgd3pfbmF2ID0gd3oucXVlcnlTZWxlY3Rvcih0aGlzLnd6X25hdik7XG5cbiAgICAgICAgaWYgKHd6X25hdiAmJiB0aGlzLm5hdikge1xuICAgICAgICAgICAgd3pfbmF2LnJlbW92ZSgpO1xuICAgICAgICAgICAgd3pfbmF2ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghd3pfbmF2ICYmIHRoaXMubmF2KSB7XG4gICAgICAgICAgICBjb25zdCB3el9jb250ZW50ID0gd3oucXVlcnlTZWxlY3Rvcih0aGlzLnd6X2NvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSB3el9jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy53el9zdGVwKTtcblxuICAgICAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQodGhpcy53el9uYXYucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuXG4gICAgICAgICAgICBzdGVwcy5mb3JFYWNoKChzdGVwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmF2X3N0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gc3RlcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXd6LXRpdGxlXCIpIHx8IGAke3RoaXMuaTE4bi50aXRsZX0gJHtpfWA7XG4gICAgICAgICAgICAgICAgbmF2X3N0ZXAuY2xhc3NMaXN0LmFkZCh0aGlzLnd6X3N0ZXAucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hdmlnYXRpb24gPT09IFwiYnV0dG9uc1wiKSBuYXZfc3RlcC5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbnNcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZChcImRvdFwiKTtcbiAgICAgICAgICAgICAgICBuYXZfc3RlcC5hcHBlbmRDaGlsZChkb3QpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgbmF2X3N0ZXAuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobmF2X3N0ZXApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHd6LnByZXBlbmQobmF2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRpbmcsIHN0eWxpbmcgYW5kIHNoYXBpbmcgQnV0dG9uc1xuICAgICAqL1xuICAgIHNldEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IHd6ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnd6X2NsYXNzKTtcbiAgICAgICAgbGV0IHd6X2J0bnMgPSB3ei5xdWVyeVNlbGVjdG9yKHRoaXMud3pfYnV0dG9ucyk7XG5cbiAgICAgICAgaWYgKHd6X2J0bnMgJiYgdGhpcy5idXR0b25zKSB7XG4gICAgICAgICAgICB3el9idG5zLnJlbW92ZSgpO1xuICAgICAgICAgICAgd3pfYnRucyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXd6X2J0bnMgJiYgdGhpcy5idXR0b25zKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xuICAgICAgICAgICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKHRoaXMud3pfYnV0dG9ucy5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ0bl9zdHlsZSA9IHRoaXMud3pfYnV0dG9uX3N0eWxlLnJlcGxhY2UoL1xcLi9nLCBcIlwiKS5zcGxpdChcIiBcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgcHJldi5pbm5lckhUTUwgPSB0aGlzLnByZXY7XG4gICAgICAgICAgICBwcmV2LmNsYXNzTGlzdC5hZGQodGhpcy53el9idXR0b24ucmVwbGFjZShcIi5cIiwgXCJcIiksIC4uLmJ0bl9zdHlsZSwgdGhpcy53el9wcmV2LnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5hdmlnYXRpb24gPT09IFwibmF2XCIpIHByZXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChwcmV2KTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBuZXh0LmlubmVySFRNTCA9IHRoaXMubmV4dDtcbiAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZCh0aGlzLnd6X2J1dHRvbi5yZXBsYWNlKFwiLlwiLCBcIlwiKSwgLi4uYnRuX3N0eWxlLCB0aGlzLnd6X25leHQucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgICAgICAgICAgaWYgKHRoaXMubmF2aWdhdGlvbiA9PT0gXCJuYXZcIikgbmV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKG5leHQpO1xuXG4gICAgICAgICAgICBjb25zdCBmaW5pc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZmluaXNoLmlubmVySFRNTCA9IHRoaXMuZmluaXNoO1xuICAgICAgICAgICAgZmluaXNoLmNsYXNzTGlzdC5hZGQodGhpcy53el9idXR0b24ucmVwbGFjZShcIi5cIiwgXCJcIiksIC4uLmJ0bl9zdHlsZSwgdGhpcy53el9maW5pc2gucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChmaW5pc2gpO1xuXG4gICAgICAgICAgICB0aGlzLmNoZWNrQnV0dG9ucyhuZXh0LCBwcmV2LCBmaW5pc2gpO1xuXG4gICAgICAgICAgICB3ei5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRpbmcsIHN0eWxpbmcgYW5kIHNoYXBpbmcgQnV0dG9uc1xuICAgICAqL1xuICAgIGNoZWNrQnV0dG9ucyhuZXh0LCBwcmV2LCBmaW5pc2gpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9zdGVwID0gdGhpcy5nZXRDdXJyZW50U3RlcCgpO1xuICAgICAgICBjb25zdCBuX3N0ZXBzID0gdGhpcy5zdGVwcyAtIDE7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRfc3RlcCA9PT0gMCkge1xuICAgICAgICAgICAgcHJldi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmV2LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRfc3RlcCA9PT0gbl9zdGVwcykge1xuICAgICAgICAgICAgbmV4dC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICBmaW5pc2guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbmlzaC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBuZXh0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tbW9uIGZ1bmN0aW9uIGZvciB3aXphcmQgY2hlY2tzIGFuZCBwcmVmYWIuXG4gICAgICovXG4gICAgY2hlY2tBbmRQcmVwYXJlKHd6KSB7XG4gICAgICAgIHRoaXMuc2V0TmF2KHd6KTtcblxuICAgICAgICBjb25zdCB3el9jb250ZW50ID0gd3oucXVlcnlTZWxlY3Rvcih0aGlzLnd6X2NvbnRlbnQpO1xuICAgICAgICBpZiAoIXd6X2NvbnRlbnQpIHRocm93IG5ldyBFcnJvcih0aGlzLmkxOG4uZW1wdHlfY29udGVudCk7XG5cbiAgICAgICAgY29uc3Qgd3pfY29udGVudF9zdGVwcyA9IHd6X2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnd6X3N0ZXApO1xuICAgICAgICBpZiAoIXd6X2NvbnRlbnRfc3RlcHMubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IodGhpcy5pMThuLmVtcHR5X2NvbnRlbnQpO1xuXG4gICAgICAgIGxldCB3el9uYXYsIHd6X25hdl9zdGVwcztcblxuICAgICAgICBpZiAodGhpcy5uYXYpIHtcbiAgICAgICAgICAgIHd6X25hdiA9IHd6LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9uYXYpO1xuICAgICAgICAgICAgaWYgKCF3el9uYXYpIHRocm93IG5ldyBFcnJvcih0aGlzLmkxOG4uZW1wdHlfbmF2KTtcblxuICAgICAgICAgICAgd3pfbmF2X3N0ZXBzID0gd3pfbmF2LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy53el9zdGVwKTtcbiAgICAgICAgICAgIGlmICghd3pfbmF2X3N0ZXBzLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKHRoaXMuaTE4bi5lbXB0eV9uYXYpO1xuXG4gICAgICAgICAgICBpZiAod3pfbmF2X3N0ZXBzLmxlbmd0aCAhPT0gd3pfY29udGVudF9zdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy5pMThuLmRpZmZfc3RlcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGVwcyA9IHd6X2NvbnRlbnRfc3RlcHMubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMucHJlZmFiU3RlcHMod3pfY29udGVudF9zdGVwcywgd3pfbmF2LCB3el9uYXZfc3RlcHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsaWNrIGV2ZW50IGhhbmRsZXIgZm9yIEJ1dHRvbnMgYW5kIE5hdi5cbiAgICAgKi9cbiAgICBvbkNsaWNrKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgd3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuXG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCAmJiB0aGlzLmxvY2tlZF9zdGVwID09PSB0aGlzLmdldEN1cnJlbnRTdGVwKCkpIHtcbiAgICAgICAgICAgIHd6LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgbmV3IEV2ZW50KFwid3oubG9ja1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQuY2xvc2VzdCh0aGlzLnd6X2NsYXNzKTtcbiAgICAgICAgY29uc3QgbmF2ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9uYXYpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9jb250ZW50KTtcblxuICAgICAgICBjb25zdCBpc19idG4gPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnd6X2J1dHRvbi5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgICAgIGNvbnN0IGlzX25hdiA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMud3pfc3RlcC5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG5cbiAgICAgICAgbGV0IHN0ZXAgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtd3otc3RlcFwiKTtcbiAgICAgICAgc3RlcCA9IHN0ZXAgIT09IG51bGwgPyBwYXJzZUludChzdGVwKSA6IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKTtcblxuICAgICAgICBpZiAoaXNfYnRuKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy53el9wcmV2LnJlcGxhY2UoXCIuXCIsIFwiXCIpKSkge1xuICAgICAgICAgICAgICAgIHN0ZXAgLT0gMTtcbiAgICAgICAgICAgICAgICB3ei5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnQoXCJ3ei5idG4ucHJldlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy53el9uZXh0LnJlcGxhY2UoXCIuXCIsIFwiXCIpKSkge1xuICAgICAgICAgICAgICAgIHN0ZXAgKz0gMTtcbiAgICAgICAgICAgICAgICB3ei5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnQoXCJ3ei5idG4ubmV4dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0ZXBfYWN0aW9uID0gc3RlcCA+IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKTtcblxuICAgICAgICBpZiAoaXNfbmF2KSB7XG4gICAgICAgICAgICBpZiAoc3RlcF9hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB3ei5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnQoXCJ3ei5uYXYuZm9yd2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RlcCA8IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKSkge1xuICAgICAgICAgICAgICAgIHd6LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudChcInd6Lm5hdi5iYWNrd2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvcm0gJiYgdGhpcy5uYXZpZ2F0aW9uICE9PSBcImJ1dHRvbnNcIikge1xuICAgICAgICAgICAgaWYgKHN0ZXBfYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgIT09IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKSArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IHN0ZXAgPj0gdGhpcy5sYXN0X3N0ZXAgPyB0aGlzLmxhc3Rfc3RlcCA6IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybSkge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tfZm9ybSA9IHRoaXMuY2hlY2tGb3JtKCk7XG4gICAgICAgICAgICBpZiAoY2hlY2tfZm9ybS5lcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChzdGVwX2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3ei5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwid3ouZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZm9ybV92YWxpZGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZzogdGhpcy5pMThuLmZvcm1fdmFsaWRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBjaGVja19mb3JtLnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3Rfc3RlcCA9IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDdXJyZW50U3RlcCgpIDwgc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0ZXAgIT09IG51bGwgJiYgc3RlcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRTdGVwKHN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYnV0dG9ucykge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9ucyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfYnV0dG9ucyk7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gYnV0dG9ucy5xdWVyeVNlbGVjdG9yKGAke3RoaXMud3pfYnV0dG9ufSR7dGhpcy53el9uZXh0fWApO1xuICAgICAgICAgICAgY29uc3QgcHJldiA9IGJ1dHRvbnMucXVlcnlTZWxlY3RvcihgJHt0aGlzLnd6X2J1dHRvbn0ke3RoaXMud3pfcHJldn1gKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaCA9IGJ1dHRvbnMucXVlcnlTZWxlY3RvcihgJHt0aGlzLnd6X2J1dHRvbn0ke3RoaXMud3pfZmluaXNofWApO1xuXG4gICAgICAgICAgICB0aGlzLmNoZWNrQnV0dG9ucyhuZXh0LCBwcmV2LCBmaW5pc2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubmF2KSB7XG4gICAgICAgICAgICBjb25zdCB3el9uYXZfc3RlcHMgPSBuYXYucXVlcnlTZWxlY3RvckFsbCh0aGlzLnd6X3N0ZXApO1xuICAgICAgICAgICAgd3pfbmF2X3N0ZXBzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgICAgIG5hdi5xdWVyeVNlbGVjdG9yKGAke3RoaXMud3pfc3RlcH1bZGF0YS13ei1zdGVwPVwiJHt0aGlzLmdldEN1cnJlbnRTdGVwKCl9XCJdYCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHd6X2NvbnRlbnRfc3RlcHMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy53el9zdGVwKTtcbiAgICAgICAgd3pfY29udGVudF9zdGVwcy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvcihgJHt0aGlzLnd6X3N0ZXB9W2RhdGEtd3otc3RlcD1cIiR7dGhpcy5nZXRDdXJyZW50U3RlcCgpfVwiXWApLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm90aWZpZXMgdGhhdCB0aGUgd2l6YXJkIGhhcyBiZWVuIGNvbXBsZXRlZC5cbiAgICAgKi9cbiAgICBvbkNsaWNrRmluaXNoKCkge1xuICAgICAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja19mb3JtID0gdGhpcy5jaGVja0Zvcm0oKTtcbiAgICAgICAgICAgIGlmICghY2hlY2tfZm9ybS5lcnJvcikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9jbGFzcykuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50KFwid3ouZm9ybS5zdWJtaXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlczogdGhpcy5idWJibGVzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICAgICAgbmV3IEV2ZW50KFwid3ouZW5kXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlczogdGhpcy5idWJibGVzLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBhY3RpdmUgc3RlcFxuICAgICAqL1xuICAgIHNldEN1cnJlbnRTdGVwKHN0ZXApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50X3N0ZXAgPSB0aGlzLnNldFN0ZXAoc3RlcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBhY3RpdmUgc3RlcFxuICAgICAqL1xuICAgIGdldEN1cnJlbnRTdGVwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50X3N0ZXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYW5kIG1hdGNoIHRoZSBzdGVwcyBvZiB0aGUgd2l6YXJkLlxuICAgICAqL1xuICAgIHNldFN0ZXAoc3RlcCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy53el9jb250ZW50KTtcblxuICAgICAgICBjb25zdCBjaGVja19jb250ZW50ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKGAke3RoaXMud3pfc3RlcH1bZGF0YS13ei1zdGVwPVwiJHtzdGVwfVwiXWApO1xuXG4gICAgICAgIGlmICghY2hlY2tfY29udGVudCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudF9sZW5ndGggPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy53el9zdGVwKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgc3RlcCA9IE1hdGgubWluKGNvbnRlbnRfbGVuZ3RoLCBzdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdF9zdGVwID0gTWF0aC5tYXgoc3RlcCwgdGhpcy5sYXN0X3N0ZXApO1xuXG4gICAgICAgIHJldHVybiBwYXJzZUludChzdGVwLCAxMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IE5hdiBldmVudHNcbiAgICAgKi9cbiAgICBzZXROYXZFdmVudCgpIHtcbiAgICAgICAgY29uc3Qgd3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuICAgICAgICB3ei5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdChgJHt0aGlzLnd6X25hdn0gJHt0aGlzLnd6X3N0ZXB9YCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2sodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEJ1dHRvbiBldmVudHNcbiAgICAgKi9cbiAgICBzZXRCdG5FdmVudCgpIHtcbiAgICAgICAgY29uc3Qgd3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3pfY2xhc3MpO1xuICAgICAgICB3ei5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdChgJHt0aGlzLnd6X2J1dHRvbnN9ICR7dGhpcy53el9idXR0b259YCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMud3pfZmluaXNoLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2tGaW5pc2goKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2sodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgZmllbGRzIG9mIHRoZSBhY3RpdmUgc3RlcCwgaW4gY2FzZSB0aGVyZSBpcyBhbiBlcnJvciBpdCBnZW5lcmF0ZXMgYSBoaWdobGlnaHQuXG4gICAgICovXG4gICAgZm9ybVZhbGlkYXRvcih3el9jb250ZW50LCBmb3JtRGF0YSkge1xuICAgICAgICBsZXQgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gW107XG5cbiAgICAgICAgZm9ybURhdGEuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGlzUmVxdWlyZWQgPSBlLnJlcXVpcmVkIHx8IGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVxdWlyZWRcIik7XG4gICAgICAgICAgICBjb25zdCBpc09uQWN0aXZlUmVxdWlyZWQgPSBlLmNsYXNzTGlzdC5jb250YWlucyhcIm9uLWFjdGl2ZS1yZXF1aXJlZFwiKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGRhdGEtcmVxdWlyZS1pZiBhdHRyaWJ1dGVcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVJZiA9IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZXF1aXJlLWlmXCIpO1xuICAgICAgICAgICAgaWYgKHJlcXVpcmVJZikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtkZXBlbmRlbmN5SWQsIHJlcXVpcmVkVmFsdWVdID0gcmVxdWlyZUlmLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBlbmRlbmN5RmllbGQgPSB3el9jb250ZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RlcGVuZGVuY3lJZH1gKTtcbiAgICAgICAgICAgICAgICBpZiAoZGVwZW5kZW5jeUZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVuY3lWYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbmN5RmllbGQudHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGRlcGVuZGVuY3lGaWVsZC50eXBlID09PSBcInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRlcGVuZGVuY3lGaWVsZC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkZXBlbmRlbmN5RmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXBlbmRlbmN5VmFsdWUgPT09IHJlcXVpcmVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoaXNSZXF1aXJlZCB8fCBpc09uQWN0aXZlUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMudmFsaWRhdGVGaWVsZChlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2goZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpZ2hsaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRFbGVtZW50KGUsIHRoaXMuaGlnaGxpZ2h0X3R5cGUuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICB2YWxpZGF0ZUZpZWxkKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJJTlBVVFwiOlxuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwiY2hlY2tib3hcIiB8fCBlLnR5cGUgPT09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5jaGVja2VkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLnZhbHVlLnRyaW0oKSAhPT0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiU0VMRUNUXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUudmFsdWUudHJpbSgpICE9PSBcIlwiO1xuICAgICAgICAgICAgY2FzZSBcIlRFWFRBUkVBXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUudmFsdWUudHJpbSgpICE9PSBcIlwiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZ2hsaWdodHMgYW4gZWxlbWVudCB0byBpbmRpY2F0ZSB2YWxpZGF0aW9uIGVycm9ycy5cbiAgICAgKi9cbiAgICBoaWdobGlnaHRFbGVtZW50KGVsZW1lbnQsIHR5cGUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMud3pfaGlnaGxpZ2h0LnJlcGxhY2UoXCIuXCIsIFwiXCIpLCB0eXBlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy53el9oaWdobGlnaHQucmVwbGFjZShcIi5cIiwgXCJcIiksIHR5cGUpO1xuICAgICAgICB9LCB0aGlzLmhpZ2hsaWdodF90aW1lKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpemFyZDtcbiJdLCJuYW1lcyI6WyJXaXphcmQiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkZWZhdWx0cyIsInd6X2NsYXNzIiwid3pfbmF2Iiwid3pfb3JpIiwid3pfbmF2X3N0eWxlIiwid3pfY29udGVudCIsInd6X2J1dHRvbnMiLCJ3el9idXR0b24iLCJ3el9idXR0b25fc3R5bGUiLCJ3el9zdGVwIiwid3pfZm9ybSIsInd6X25leHQiLCJ3el9wcmV2Iiwid3pfZmluaXNoIiwid3pfaGlnaGxpZ2h0IiwiYnViYmxlcyIsIm5hdiIsImJ1dHRvbnMiLCJoaWdobGlnaHQiLCJjdXJyZW50X3N0ZXAiLCJzdGVwcyIsImhpZ2hsaWdodF90aW1lIiwibmF2aWdhdGlvbiIsIm5leHQiLCJwcmV2IiwiZmluaXNoIiwiaGlnaGxpZ2h0X3R5cGUiLCJlcnJvciIsIndhcm5pbmciLCJzdWNjZXNzIiwiaW5mbyIsImkxOG4iLCJlbXB0eV93eiIsImVtcHR5X25hdiIsImVtcHR5X2NvbnRlbnQiLCJlbXB0eV9odG1sIiwiZW1wdHlfdXBkYXRlIiwibm9fbmF2IiwiZm9ybV92YWxpZGF0aW9uIiwiZGlmZl9zdGVwcyIsInJhbmRvbSIsImFscmVhZHlfZGVmaW5lZCIsInRpdGxlIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImxhc3Rfc3RlcCIsImZvcm0iLCJsb2NrZWQiLCJsb2NrZWRfc3RlcCIsImluaXQiLCJ3el9jaGVjayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkVycm9yIiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsIndhcm4iLCJ3eiIsImNsYXNzTGlzdCIsImFkZCIsInJlcGxhY2UiLCJ0YWdOYW1lIiwiY2hlY2tBbmRQcmVwYXJlIiwic2V0TmF2RXZlbnQiLCJzZXRCdG5FdmVudCIsInN0eWxlIiwiZGlzcGxheSIsImNvbnRhaW5zIiwic2V0QXR0cmlidXRlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwidGFyZ2V0IiwiZWxlbSIsInVwZGF0ZSIsImNvbnRlbnRfdXBkYXRlIiwicmVzZXQiLCJzZXRDdXJyZW50U3RlcCIsImNvbnRlbnQiLCJjaGVja0J1dHRvbnMiLCJ3el9uYXZfc3RlcHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwicmVtb3ZlIiwiZ2V0Q3VycmVudFN0ZXAiLCJ3el9jb250ZW50X3N0ZXBzIiwiRXZlbnQiLCJsb2NrIiwidW5sb2NrIiwicHJlZmFiU3RlcHMiLCJhY3RpdmVfaW5kZXgiLCJzdGVwIiwiaSIsInNldEJ1dHRvbnMiLCJ1cGRhdGVUb0Zvcm0iLCJ3el9jb250ZW50X2NsYXNzIiwid3pfY29udGVudF9jb250ZW50IiwiaW5uZXJIVE1MIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2hlY2tGb3JtIiwiaW5wdXRzIiwiZm9ybVZhbGlkYXRvciIsInNldE5hdiIsIm5hdl9zdGVwIiwiZG90Iiwic3BhbiIsInByZXBlbmQiLCJ3el9idG5zIiwiYnRuX3N0eWxlIiwic3BsaXQiLCJuX3N0ZXBzIiwicmVtb3ZlQXR0cmlidXRlIiwib25DbGljayIsImVsZW1lbnQiLCJwYXJlbnQiLCJjbG9zZXN0IiwiaXNfYnRuIiwiaXNfbmF2IiwicGFyc2VJbnQiLCJzdGVwX2FjdGlvbiIsImNoZWNrX2Zvcm0iLCJpZCIsIm1zZyIsIm9uQ2xpY2tGaW5pc2giLCJzZXRTdGVwIiwiY2hlY2tfY29udGVudCIsImNvbnRlbnRfbGVuZ3RoIiwiTWF0aCIsIm1pbiIsIm1heCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJlIiwiaXNSZXF1aXJlZCIsInJlcXVpcmVkIiwiaXNPbkFjdGl2ZVJlcXVpcmVkIiwicmVxdWlyZUlmIiwiZGVwZW5kZW5jeUlkIiwicmVxdWlyZWRWYWx1ZSIsImRlcGVuZGVuY3lGaWVsZCIsImRlcGVuZGVuY3lWYWx1ZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJ2YWxpZCIsInZhbGlkYXRlRmllbGQiLCJwdXNoIiwiaGlnaGxpZ2h0RWxlbWVudCIsInRyaW0iLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==