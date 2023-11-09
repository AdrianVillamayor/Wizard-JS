/**
* 
* A lightweight wizard UI component that supports accessibility and HTML5 in JavaScript Vanilla.
*
* @link   https://github.com/AdrianVillamayor/Wizard-JS
* @author Adrii[https://github.com/AdrianVillamayor]
* 
* @class  Wizard
*/

class Wizard {

    constructor(args = {}) {

        let opts = {
            "wz_class": ".wizard",
            "wz_nav": ".wizard-nav",
            "wz_ori": ".horizontal",
            "wz_nav_style": "dots",
            "wz_content": ".wizard-content",
            "wz_buttons": ".wizard-buttons",
            "wz_button": ".wizard-btn",
            "wz_button_style": ".btn",
            "wz_step": ".wizard-step",
            "wz_form": ".wizard-form",
            "wz_next": ".next",
            "wz_prev": ".prev",
            "wz_finish": ".finish",
            "wz_highlight": ".highlight",

            "nav": true,
            "buttons": true,
            "highlight": true,

            "current_step": 0,
            "steps": 0,
            "highlight_time": 1000,
            "navigation": "all",
            "next": "Next",
            "prev": "Prev",
            "finish": "Submit",

            "highlight_type": { "error": "error", "warning": "warning", "success": "success", "info": "info" },

            "i18n": {
                "empty_wz": "No item has been found with which to generate the Wizard.",
                "empty_nav": "Nav does not exist or is empty.",
                "empty_content": "Content does not exist or is empty.",
                "empty_html": "Undefined or null content cannot be added.",
                "empty_update": "Nothing to update.",
                "no_nav": "Both the nav and the buttons are disabled, there is no navigation system.",
                "form_validation": "One or more of the form fields are invalid.",
                "diff_steps": "Discordance between the steps of nav and content.",
                "random": "There has been a problem, check the configuration and use of the wizard.",
                "already_definded": "This item is already defined",
                "title": "Step"
            }
        };

        this.prefabOpts(opts, args);

        this.wz_class = this.options.wz_class;
        this.wz_active = "active";
        this.wz_ori = this.options.wz_ori;
        this.wz_nav = this.options.wz_nav;
        this.wz_nav_style = this.options.wz_nav_style;
        this.wz_content = this.options.wz_content;
        this.wz_buttons = this.options.wz_buttons;
        this.wz_button = this.options.wz_button;
        this.wz_button_style = this.options.wz_button_style;
        this.wz_step = this.options.wz_step;
        this.wz_form = this.options.wz_form;
        this.wz_next = this.options.wz_next;
        this.wz_prev = this.options.wz_prev;
        this.wz_finish = this.options.wz_finish;
        this.wz_highlight = this.options.wz_highlight;

        this.buttons = this.options.buttons;
        this.nav = this.options.nav;
        this.highlight = this.options.highlight;

        this.highlight_time = this.options.highlight_time;
        this.highlight_type = this.options.highlight_type;

        this.steps = this.options.steps;
        this.current_step = this.options.current_step;
        this.last_step = this.current_step;
        this.navigation = this.options.navigation;
        this.prev = this.options.prev;
        this.next = this.options.next;
        this.finish = this.options.finish;
        this.form = false;
        this.locked = false;
        this.locked_step = null;
    }

    /**
    * Initializes the wizard
    * 
    * @customevent wz.ready     - Indicates that wizard has loaded and is accessible.
    * @property {object} target - wz_class
    * @property {object} elem   - DOM element
    * 
    * @throws empty_wz          - Not found any element to generate the Wizard with.
    * @throws empty_nav         - Nav does not exist or is empty.
    * @throws empty_content     - Content does not exist or is empty.
    * @throws diff_steps        - Discordance between the steps of nav and content.
    * @throws random            - There has been a problem check the configuration and use of the wizard.
    * 
    * @return {void}
    */

    init() {
        try {
            const wz_check = ($_.exists(document.querySelector(this.wz_class))) ? document.querySelector(this.wz_class) : $_.throwException(this.options.i18n.empty_wz);

            if ($_.str2bool(wz_check.getAttribute("data-wz-load")) && wz_check.getAttribute("data-wz-load") == true) {
                console.warn(`${this.wz_class} : ${this.options.i18n.already_definded}`);
                return false;
            }

            $_.cleanEvents(document.querySelector(this.wz_class), true);

            const wz = ($_.exists(document.querySelector(this.wz_class))) ? document.querySelector(this.wz_class) : $_.throwException(this.options.i18n.empty_wz);

            if ($_.str2bool(this.buttons) === false && $_.str2bool(this.nav) === false) {
                console.warn(this.options.i18n.no_nav);
            }

            wz.classList.add((this.wz_ori).replace(".", ""));

            if (wz.tagName === "FORM") {
                this.form = true;
            }

            this.check2Prepare(wz)

            switch (this.navigation) {
                case "all":
                case "nav":
                    this.setNavEvent()
                    this.setBtnEvent()

                    break;
                case "buttons":
                    this.setBtnEvent();
                    break;
            }

            wz.style.display = ($_.hasClass(wz, "vertical")) ? "flex" : "block";

            wz.setAttribute("data-wz-load", true)

            document.dispatchEvent(new CustomEvent("wz.ready", {
                detail: {
                    "target": this.wz_class,
                    "elem": document.querySelector(this.wz_class)
                }
            }));

        } catch (error) {
            throw error;
        }
    }


    /**
    * Check and update each section of the wizard.
    * 
    * @customevent wz.update    - Indicates that wizard has updaded and is accessible.
    * @property {object} target - wz_class
    * @property {object} elem   - DOM element
    * 
    * @throws empty_wz          - Not found any element to generate the Wizard with.
    * 
    * @return {void}
    */

    update() {
        const wz = ($_.exists(document.querySelector(this.wz_class))) ? document.querySelector(this.wz_class) : $_.throwException(this.options.i18n.empty_wz);

        if (($_.str2bool(wz.getAttribute("data-wz-load")) === false) && wz.getAttribute("data-wz-load") != true) {
            $_.throwException(this.options.i18n.empty_wz);
        }

        this.check2Prepare(wz)

        this.content_update = false;

        document.querySelector(this.wz_class).dispatchEvent(new CustomEvent("wz.update", {
            detail: {
                "target": this.wz_class,
                "elem": document.querySelector(this.wz_class)
            }
        }));

    }

    /**
    * Restart the wizard
    * 
    * @event wz.reset 
    * 
    * @return {void}
    */

    reset() {
        this.setCurrentStep(0);

        const wz = document.querySelector(this.wz_class);
        const nav = wz.querySelector(this.wz_nav);
        const content = wz.querySelector(this.wz_content);

        if ($_.str2bool(this.buttons) !== false) {
            let buttons = wz.querySelector(this.wz_buttons);

            let next = buttons.querySelector(this.wz_button + this.wz_next);
            let prev = buttons.querySelector(this.wz_button + this.wz_prev);
            let finish = buttons.querySelector(this.wz_button + this.wz_finish);

            this.checkButtons(next, prev, finish)
        }

        let $wz_nav = nav.querySelectorAll(this.wz_step);
        $_.removeClassList($wz_nav, "active");

        let $wz_content = content.querySelectorAll(this.wz_step);
        $_.removeClassList($wz_content, "active");

        nav.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active");
        content.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active");

        wz.dispatchEvent(new Event("wz.reset"));
    }

    /**
    * Locks the wizard in the active step
    * 
    * @return {void}
    */

    lock() {
        this.locked = true;
        this.locked_step = this.getCurrentStep();
    }

    /**
    * Unlock wizard
    * 
    * @event wz.unlock 
    * 
    * @return {void}
    */

    unlock() {
        this.locked = false;
        this.locked_step = null;

        document.querySelector(this.wz_class).dispatchEvent(new Event("wz.unlock"));
    }


    /**
    * Generate the steps and define a standard for each step.
    * 
    * @param {object}  $wz_nav           - Nav element
    * @param {object}  $wz_nav_steps     - Steps elements inside Nav
    * @param {object}  $wz_content_steps - Steps elements inside Content
    * 
    * @return {void}
    */

    prefabSteps($wz_content_steps, $wz_nav, $wz_nav_steps) {
        let active_index = this.getCurrentStep();

        for (let i = 0; i < $wz_content_steps.length; i++) {
            let $this = $wz_content_steps[i];

            $this.setAttribute("data-wz-step", i);

            if ($_.str2bool(this.nav) !== false) {
                $wz_nav_steps[i].setAttribute("data-wz-step", i);
            }
        };

        if ($_.str2bool(this.nav) !== false) {
            $_.removeClassList($wz_nav_steps, "active");
            $wz_nav_steps[active_index].classList.add("active");
            $wz_nav.classList.add(this.wz_nav_style);
        }

        $_.removeClassList($wz_content_steps, "active");
        $wz_content_steps[active_index].classList.add("active");

        // if (this.form) this.update2Form();

        this.setButtons();
    }

    /**
    * Adds the form tag and converts the wizard into a <form>
    * 
    * @return {void}
    */

    update2Form() {
        let wz = document.querySelector(this.wz_class);
        let wz_content = wz.querySelector(this.wz_content);

        if (wz_content.tagName !== "FORM") {
            let wz_content_class = wz_content.getAttribute("class");
            let wz_content_content = wz_content.innerHTML

            wz_content.remove();
            const $form = document.createElement("form");

            $form.setAttribute("method", "POST");
            $form.setAttribute("class", wz_content_class + " " + (this.wz_form).replace(".", ""));

            $form.innerHTML = wz_content_content;

            wz.appendChild($form)
        }
    }

    /**
    * Checks and validates each input/select/textarea of the active step.
    * If the step has no inputs, the checks will be ignored.
    * 
    * @throws random    - There has been a problem check the configuration and use of the wizard.
    * 
    * @return {boolean} - If everything is OK, it returns false
    */

    checkForm() {
        let wz = document.querySelector(this.wz_class);
        let wz_content = wz.querySelector(this.wz_content);

        let steps = wz_content.querySelectorAll(this.wz_step);
        let target = steps[this.getCurrentStep()];
        let validation = false;

        let inputs = target.querySelectorAll("input,textarea,select");

        if (inputs.length > 0) {
            validation = this.formValidator(wz_content, inputs);
        }

        return validation;
    }

    /**
    * Generating, styling and shaping the Nav
    * 
    * @param {object} $wz - Wizard element
    * 
    * @return {void}
    */

    setNav($wz) {
        let wz_nav = $wz.querySelector(this.wz_nav);

        if ($_.exists(wz_nav) !== false && $_.str2bool(this.nav) !== false) {
            wz_nav.remove()
            wz_nav = $wz.querySelector(this.wz_nav);
        }

        if ($_.exists(wz_nav) === false && $_.str2bool(this.nav) !== false) {

            let wz_content = $wz.querySelector(this.wz_content);
            let steps = wz_content.querySelectorAll(this.wz_step);

            const nav = document.createElement("ASIDE");
            nav.classList.add((this.wz_nav).replace(".", ""));

            const wz_content_steps = wz_content.querySelectorAll(this.wz_step);
            const steps_length = wz_content_steps.length;

            for (let i = 0; i < steps_length; i++) {
                const nav_step = document.createElement("DIV");
                let title = (steps[i].hasAttribute("data-wz-title")) ? steps[i].getAttribute("data-wz-title") : `${this.options.i18n.title} ${i}`;
                nav_step.classList.add((this.wz_step).replace(".", ""));

                if (this.navigation === "buttons") nav_step.classList.add("nav-buttons");

                const dot = document.createElement("SPAN");
                dot.classList.add('dot');
                nav_step.appendChild(dot);

                const span = document.createElement("SPAN");
                span.innerHTML = title;
                nav_step.appendChild(span);

                nav.appendChild(nav_step);
            }

            $wz.prepend(nav);
        }
    }

    /**
    * Generating, styling and shaping Buttons
    * 
    * @return {void}
    */

    setButtons() {
        let wz = document.querySelector(this.wz_class);
        let wz_btns = wz.querySelector(this.wz_buttons);;


        if ($_.exists(wz_btns) !== false && $_.str2bool(this.buttons) !== false) {
            wz_btns.remove()
            wz_btns = wz.querySelector(this.wz_buttons);;
        }

        if ($_.exists(wz_btns) === false && $_.str2bool(this.buttons) !== false) {
            const buttons = document.createElement("ASIDE");
            buttons.classList.add((this.wz_buttons).replace(".", ""));

            let btn_style = (this.wz_button_style).replaceAll(".", "");
            btn_style = btn_style.split(" ");

            const prev = document.createElement("BUTTON");
            prev.innerHTML = this.prev;
            prev.classList.add((this.wz_button).replace(".", ""));
            prev.classList.add(...btn_style);
            prev.classList.add((this.wz_prev).replace(".", ""));

            if (this.navigation === "nav") prev.style.display = "none";

            buttons.appendChild(prev);

            const next = document.createElement("BUTTON");
            next.innerHTML = this.next;
            next.classList.add((this.wz_button).replace(".", ""));
            next.classList.add(...btn_style);
            next.classList.add((this.wz_next).replace(".", ""));

            if (this.navigation === "nav") next.style.display = "none";

            buttons.appendChild(next);

            const finish = document.createElement("BUTTON");
            finish.innerHTML = this.finish;
            finish.classList.add((this.wz_button).replace(".", ""));
            finish.classList.add(...btn_style);
            finish.classList.add((this.wz_finish).replace(".", ""));
            buttons.appendChild(finish);

            this.checkButtons(next, prev, finish)

            wz.appendChild(buttons);
        }
    }

    /**
    * Generating, styling and shaping Buttons
    * 
    * @param {object} next   - Next button element
    * @param {object} prev   - Prev button element
    * @param {object} finish - Finish button element
    * 
    * @return {void}
    */

    checkButtons(next, prev, finish) {
        let current_step = this.getCurrentStep();
        let n_steps = this.steps - 1;

        if (current_step == 0) {
            prev.setAttribute("disabled", true);
        } else {
            prev.removeAttribute("disabled");
        }

        if (current_step == n_steps) {
            next.setAttribute("disabled", true);
            finish.style.display = "block";
        } else {
            finish.style.display = "none";
            next.removeAttribute("disabled");
        }
    }


    /**
   * Common function for wizard checks and prefab.
   * 
   * @param {object} wz - Wizard element
   * 
   * @return {void}
   */

    check2Prepare(wz) {

        this.setNav(wz);

        const wz_content = ($_.exists(wz.querySelector(this.wz_content))) ? wz.querySelector(this.wz_content) : $_.throwException(this.options.i18n.empty_content);
        const wz_content_steps = wz_content.querySelectorAll(this.wz_step);
        const wz_content_steps_length = (wz_content_steps.length > 0) ? wz_content_steps.length : $_.throwException(this.options.i18n.empty_content);

        let wz_nav = undefined;
        let wz_nav_steps = undefined;

        if ($_.str2bool(this.nav) !== false) {
            wz_nav = ($_.exists(wz.querySelector(this.wz_nav))) ? wz.querySelector(this.wz_nav) : $_.throwException(this.options.i18n.empty_nav);
            wz_nav_steps = wz_nav.querySelectorAll(this.wz_step);
            const wz_nav_steps_length = (wz_nav_steps.length > 0) ? wz_nav_steps.length : $_.throwException(this.options.i18n.empty_nav);

            if (wz_nav_steps_length != wz_content_steps_length) {
                $_.throwException(this.options.i18n.diff_steps);
            }
        }

        this.steps = wz_content_steps_length;

        this.prefabSteps(wz_content_steps, wz_nav, wz_nav_steps);
    }

    /**
    * Click event handler for Buttons and Nav.
    * 
    * @param {object} e         - Event
    * 
    * @event wz.btn.prev        - In case the wizard goes backwards, the wz.btn.prev event will be fired.
    * @event wz.btn.next        - In case the wizard advances, the nextWizard event will be fired.
    * @event wz.nav.forward     - In case of moving forward with the navbar, the forwardNavWizard event will be fired.
    * @event wz.nav.backward    - In case of moving backward with the navbar, the backwardNavWizard event will be fired.
    * @event wz.lock            - In case it is blocked, it will fire the wz.lock event.
    * 
    * @customevent wz.error     - If the form is not correctly filled in, the wz.error event will be fired.
    * @property {string} id     - Eror id
    * @property {string} msg    - Error message
    * @property {object} target - Contains all the elements that have given error
    * 
    * @return {void}
    */

    onClick(e) {
        const $this = e
        const wz = document.querySelector(this.wz_class);

        // const stepEl = content.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`);
        // const isAsync = stepEl.getAttribute("data-wz-async-step");

        if (this.locked && this.locked_step === this.getCurrentStep()) {
            wz.dispatchEvent(new Event("wz.lock"));
            return false;
        }

        const parent = $_.getParent($this, this.wz_class);

        const nav = parent.querySelector(this.wz_nav);
        const content = parent.querySelector(this.wz_content);

        const is_btn = ($_.hasClass($this, this.wz_button));
        const is_nav = ($_.hasClass($this, this.wz_step));


        let step = ($_.str2bool($this.getAttribute("data-wz-step")) !== false) ? parseInt($this.getAttribute("data-wz-step")) : this.getCurrentStep();

        if (is_btn) {
            if ($_.hasClass($this, this.wz_prev)) {
                step = step - 1;
                wz.dispatchEvent(new Event("wz.btn.prev"));
            } else if ($_.hasClass($this, this.wz_next)) {
                step = step + 1;
                wz.dispatchEvent(new Event("wz.btn.next"));
            }
        }

        let step_action = step > this.getCurrentStep()

        if (is_nav) {
            if (step_action) {
                wz.dispatchEvent(new Event("wz.nav.forward"));
            } else if (step < this.getCurrentStep()) {
                wz.dispatchEvent(new Event("wz.nav.backward"));
            }
        }

        if (this.form && this.navigation != "buttons") {
            if (step_action) {
                if ((step !== this.getCurrentStep() + 1)) {
                    if (step >= this.last_step) {
                        step = this.last_step;
                    } else {
                        step = this.getCurrentStep() + 1;
                    }
                }
            }
        }

        if (this.form) {
            const check_form = this.checkForm()
            if (check_form.error === true) {

                if (step_action) {
                    wz.dispatchEvent(new CustomEvent("wz.error", {
                        detail: {
                            "id": "form_validaton",
                            "msg": this.options.i18n.form_validation,
                            "target": check_form.target
                        }
                    }));
                }

                this.last_step = this.getCurrentStep();
                if (this.getCurrentStep() < step) {
                    return false;
                }
            }
        }

        if ($_.str2bool(step)) {
            this.setCurrentStep(step)
        }

        if ($_.str2bool(this.buttons) !== false) {
            const buttons = parent.querySelector(this.wz_buttons);
            const next = buttons.querySelector(this.wz_button + this.wz_next);;
            const prev = buttons.querySelector(this.wz_button + this.wz_prev);
            const finish = buttons.querySelector(this.wz_button + this.wz_finish);

            this.checkButtons(next, prev, finish)
        }

        if ($_.str2bool(this.nav) !== false) {
            const $wz_nav = nav.querySelectorAll(this.wz_step);
            $_.removeClassList($wz_nav, "active");
            nav.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active");
        }

        const $wz_content = content.querySelectorAll(this.wz_step);
        $_.removeClassList($wz_content, "active");
        content.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active");
    }


    /**
    * Notifies that the wizard has been completed.
    * 
    * @param {object} e     - Event
    * 
    * @event wz.form.submit - If the wizard is a form it will fire submitWizard
    * @event wz.end         - If the wizard is not a form it will fire endWizard
    * 
    * @return {void}
    */

    onClickFinish(e) {
        if (this.form) {
            const check_form = this.checkForm()
            if (check_form.error !== true) {
                document.querySelector(this.wz_class).dispatchEvent(new Event("wz.form.submit"));
            }
        } else {
            document.querySelector(this.wz_class).dispatchEvent(new Event("wz.end"));
        }
    }

    /**
    * Set the active step 
    * 
    * @param {int} step - The active step 
    * 
    * @return {void}
    */

    setCurrentStep(step) {
        this.current_step = this.setStep(step);
    }

    /**
    * Return the active step 
    * 
    * @return {int} The active step 
    */

    getCurrentStep() {
        return this.current_step;
    }

    /**
    * Check and match the steps of the wizard.
    * 
    * @param {int} step - Step 
    * 
    * @return {int} Step
    */

    setStep(step) {
        let parent = document.querySelector(this.wz_class);
        let content = parent.querySelector(this.wz_content);

        let check_content = content.querySelector(`${this.wz_step}[data-wz-step="${step}"]`);

        if ($_.exists(check_content) === false) {
            let content_length = (content.querySelectorAll(this.wz_step).length) - 1;

            let diff = $_.closetNubmer(content_length, step)

            step = diff;
        }

        this.last_step = (step > this.last_step) ? step : this.last_step;

        return parseInt(step);
    }

    /**
    * Set Nav events
    * 
    * @return {void}
    */

    setNavEvent() {
        let _self = this;
        let el = document.querySelector(this.wz_class);

        $_.delegate(el, "click", `${this.wz_nav} ${this.wz_step}`, function (event) {
            event.preventDefault()
            _self.onClick(this)
        });
    }


    /**
    * Set Button events
    * 
    * @return {void}
    */

    setBtnEvent() {
        let _self = this;
        let el = document.querySelector(this.wz_class);

        $_.delegate(el, "click", `${this.wz_buttons} ${this.wz_button}`, function clickFunction(event) {
            event.preventDefault()

            if ($_.hasClass(event.target, _self.wz_finish)) {
                _self.onClickFinish(this)
            } else {
                _self.onClick(this)

            }
        });
    }

    /**
    * Set options of wizard
    * 
    * @param {object} options - List of options to build the wizard 
    * 
    * @return {void}
    */

    set_options(options) {
        this.options = options;
    }

    /**
    * Check and match the options of the wizard with args definieds
    * 
    * @param {object} options - List of options to build the wizard 
    * @param {object} args    - List of arguments modifying the base options
    *
    * @return {void}
    */

    prefabOpts(options, args) {
        if ($_.isEmptyObj(args) !== false) {
            Object.entries(args).forEach(([key, value]) => {
                if (typeof value === 'object') {
                    Object.entries(value).forEach(([key_1, value_1]) => {
                        options[key][key_1] = value_1;
                    });
                } else {
                    options[key] = value;
                }
            });
        }

        this.set_options(options);
    }

    /**
   * Checks the fields of the active step, in case there is an error it generates a highlight. 
   * Returns an array with all the fields that have given error.
   * 
   * @param {object} wz_content  - Active wizard content 
   * @param {object} formData    - All inputs, textarea and select of the active content 
   * 
   * @return {object} 
   * @property {bool} error      - There is an error or not
   * @property {array} target    - Contains all the elements that have given error
   */

    formValidator(wz_content, formData) {

        let error = false;
        let target = [];

        for (let e of formData) {
            if ($_.hasClass(e, "required") || $_.exists(e.getAttribute("required"))) {

                let check = false
                switch (e.tagName) {
                    case "INPUT":
                        check = $_.dispatchInput(wz_content, e);
                        break;
                    case "SELECT":
                        check = $_.checkSelect(e);
                        break;
                    case "TEXTAREA":
                        check = $_.isEmpty(e.value);
                        break;
                }

                if (check === false) {
                    error = true;
                    target.push(e);

                    if ($_.str2bool(this.highlight) === true) {
                        $_.highlight(e, this.wz_highlight, this.highlight_type['error'], this.highlight_time);
                    }
                }
            }
        }

        return {
            "error": error,
            "target": target
        };
    }
};

export default Wizard;