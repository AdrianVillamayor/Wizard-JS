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

    constructor(args) {

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

            "current_step": 0,
            "steps": 0,
            "navigation": "all",
            "buttons": true,
            "next": "Next",
            "prev": "Prev",
            "finish": "Submit",

            "i18n": {
                "empty_wz": "Not found any element to generate the Wizard with.",
                "empty_nav": "Nav does not exist or is empty.",
                "empty_content": "Content does not exist or is empty.",
                "diff_steps": "Discordance between the steps of nav and content.",
                "random": "There has been a problem, check the configuration and use of the wizard.",
                "already_definded": "This item is already defined",
                "title": "Step"
            }
        };

        this.prefabOpts(opts, args);

        this.wz_class = this.options.wz_class;
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

        this.steps = this.options.steps;
        this.current_step = this.options.current_step;
        this.last_step = this.current_step;
        this.navigation = this.options.navigation;
        this.buttons = this.options.buttons;
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
    * @customevent readyWizard => Indicates that wizard has loaded and is accessible.
    * @customevent_params      => target: wz_class | elem: DOM element
    * 
    * @throws empty_wz      => Not found any element to generate the Wizard with.
    * @throws empty_nav     => Nav does not exist or is empty.
    * @throws empty_content => Content does not exist or is empty.
    * @throws diff_steps    => Discordance between the steps of nav and content.
    * @throws random        => There has been a problem check the configuration and use of the wizard.
    * 
    * @return {void}
    */

    init() {
        try {
            $_.cleanEvents($_.getSelector(this.wz_class), true);

            let wz = ($_.exists($_.getSelector(this.wz_class))) ? $_.getSelector(this.wz_class) : $_.throwException(this.options.i18n.empty_wz);


            if ($_.str2bool(wz.getAttribute("data-wizard"))) {
                $_.throwException(`${this.wz_class} => ${this.options.i18n.already_definded} `);
            }

            wz.classList.add((this.wz_ori).replace(".", ""));

            if (wz.tagName === "FORM") {
                this.form = true;
            }

            this.setNav(wz);

            let wz_nav = ($_.exists($_.getSelector(this.wz_nav, wz))) ? $_.getSelector(this.wz_nav, wz) : $_.throwException(this.options.i18n.empty_nav);

            let wz_content = ($_.exists($_.getSelector(this.wz_content, wz))) ? $_.getSelector(this.wz_content, wz) : $_.throwException(this.options.i18n.empty_content);

            const wz_nav_steps = $_.getSelectorAll(this.wz_step, wz_nav);
            const wz_nav_steps_length = (wz_nav_steps.length > 0) ? wz_nav_steps.length : $_.throwException(this.options.i18n.empty_nav);;

            const wz_content_steps = $_.getSelectorAll(this.wz_step, wz_content);
            const wz_content_steps_length = (wz_content_steps.length > 0) ? wz_content_steps.length : $_.throwException(this.options.i18n.empty_content);

            if (wz_nav_steps_length != wz_content_steps_length) {
                $_.throwException(this.options.i18n.diff_steps);
            }

            this.steps = wz_nav_steps_length;

            this.prefabSteps(wz_nav, wz_nav_steps, wz_content_steps)

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

            wz.setAttribute("data-wizard", "active")

            document.dispatchEvent(new CustomEvent("readyWizard", {
                detail: {
                    "target": this.wz_class,
                    "elem": $_.getSelector(this.wz_class)
                }
            }));

        } catch (error) {
            throw error;
        }
    }

    /**
    * Generate the steps and define a standard for each step.
    * 
    * @param {object}  $wz_nav           => Nav element
    * @param {object}  $wz_nav_steps     => Steps elements inside Nav
    * @param {object}  $wz_content_steps => Steps elements inside Content
    * 
    * @return {void}
    */

    prefabSteps($wz_nav, $wz_nav_steps, $wz_content_steps) {
        let active = false;
        let active_index = 0;

        for (let i = 0; i < $wz_nav_steps.length; i++) {
            let $this = $wz_nav_steps[i];

            active = (active === false) ? $_.hasClass($this, "active") : active;
            active_index = ($_.hasClass($this, "active")) ? i : active_index;

            $this.setAttribute("data-step", i);
            $wz_content_steps[i].setAttribute("data-step", i);
        };

        $_.removeClassList($wz_nav_steps, "active");
        $wz_nav_steps[active_index].classList.add("active");

        $_.removeClassList($wz_content_steps, "active");
        $wz_content_steps[active_index].classList.add("active");

        $wz_nav.classList.add(this.wz_nav_style);

        // if (this.form) this.update2Form();

        this.setButtons();
    }

    /**
    * Restart the wizard
    * 
    * @event resetWizard 
    * 
    * @return {void}
    */

    reset() {
        this.setCurrentStep(0);

        let wz = $_.getSelector(this.wz_class);
        let nav = $_.getSelector(this.wz_nav, wz);
        let content = $_.getSelector(this.wz_content, wz);

        if ($_.str2bool(this.buttons) !== false) {
            let buttons = $_.getSelector(this.wz_buttons, wz);
            let next = $_.getSelector(this.wz_button + this.wz_next, buttons);
            let prev = $_.getSelector(this.wz_button + this.wz_prev, buttons);
            let finish = $_.getSelector(this.wz_button + this.wz_finish, buttons);

            this.checkButtons(next, prev, finish)
        }

        let $wz_nav = $_.getSelectorAll(this.wz_step, nav)
        $_.removeClassList($wz_nav, "active");

        let $wz_content = $_.getSelectorAll(this.wz_step, content)
        $_.removeClassList($wz_content, "active");

        $_.getSelector(`${this.wz_step}[data-step="${this.getCurrentStep()}"]`, nav).classList.add("active");
        $_.getSelector(`${this.wz_step}[data-step="${this.getCurrentStep()}"]`, content).classList.add("active");

        $_.getSelector(this.wz_class).dispatchEvent(new Event("resetWizard"));
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
    * @event unlockWizard 
    * 
    * @return {void}
    */

    unlock() {
        this.locked = false;
        this.locked_step = null;

        $_.getSelector(this.wz_class).dispatchEvent(new Event("unlockWizard"));
    }

    /**
    * Adds the form tag and converts the wizard into a <form>
    * 
    * @return {void}
    */

    update2Form() {
        let wz = $_.getSelector(this.wz_class);
        let wz_content = $_.getSelector(this.wz_content, wz);

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
    * Checks and validates each input/select/textarea of the active step
    * 
    * @throws random => There has been a problem check the configuration and use of the wizard.
    * 
    * @return {boolean} If everything is OK, it returns false
    */

    checkForm() {
        let wz = $_.getSelector(this.wz_class);
        let wz_content = $_.getSelector(this.wz_content, wz);

        let steps = $_.getSelectorAll(this.wz_step, wz_content);
        let target = steps[this.getCurrentStep()];
        let validation = false;

        let inputs = $_.getSelectorAll("input,textarea,select", target);

        if (inputs.length > 0) {
            validation = $_.formValidator(inputs);
        } else {
            this.throwException(this.options.i18n.random);
        }

        return validation;
    }

    /**
    * Generating, styling and shaping the Nav
    * 
    * @param {object} $wz => Wizard element
    * 
    * @return {void}
    */

    setNav($wz) {
        let wz_nav = $_.getSelector(this.wz_nav, $wz);

        if ($_.exists(wz_nav) === false) {
            let wz_content = $_.getSelector(this.wz_content, $wz);
            let steps = $_.getSelectorAll(this.wz_step, wz_content);

            const nav = document.createElement("ASIDE");
            nav.classList.add((this.wz_nav).replace(".", ""));

            const wz_content_steps = $_.getSelectorAll(this.wz_step, wz_content);
            const steps_length = wz_content_steps.length;

            for (let i = 0; i < steps_length; i++) {
                const nav_step = document.createElement("DIV");
                let title = (steps[i].hasAttribute("data-title")) ? steps[i].getAttribute("data-title") : `${this.options.i18n.title} ${i}`;
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
        let wz = $_.getSelector(this.wz_class);
        let wz_btns = $_.getSelector(this.wz_buttons, wz);

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
    * @param {object} next    => Next button element
    * @param {object} prev    => Prev button element
    * @param {object} finish  => Finish button element
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
    * Click event handler for Buttons and Nav.
    * 
    * @param {object} e  => Event
    * 
    * @event prevWizard               => In case the wizard goes backwards, the prevWizard event will be fired.
    * @event nextWizard               => In case the wizard advances, the nextWizard event will be fired.
    * @event forwardNavWizard         => In case of moving forward with the navbar, the forwardNavWizard event will be fired.
    * @event backwardNavWizard        => In case of moving backward with the navbar, the backwardNavWizard event will be fired.
    * @event lockWizard               => In case it is blocked, it will fire the lockWizard event.
    * @event errorFormValidatorWizard => If the form is not correctly filled in, the errorFormValidatorWizard event will be fired.
    * 
    * @return {void}
    */

    onClick(e) {
        const $this = e

        if (this.locked && this.locked_step === this.getCurrentStep()) {
            $_.getSelector(this.wz_class).dispatchEvent(new Event("lockWizard"));
            return false;
        }

        const parent = $_.getParent($this, this.wz_class);
        const nav = $_.getSelector(this.wz_nav, parent);
        const content = $_.getSelector(this.wz_content, parent);

        const is_btn = ($_.hasClass($this, this.wz_button));
        const is_nav = ($_.hasClass($this, this.wz_step));


        let step = ($_.str2bool($this.getAttribute("data-step")) !== false) ? parseInt($this.getAttribute("data-step")) : this.getCurrentStep();

        if (is_btn) {
            if ($_.hasClass($this, this.wz_prev)) {
                step = step - 1;
                $_.getSelector(this.wz_class).dispatchEvent(new Event("prevWizard"));
            } else if ($_.hasClass($this, this.wz_next)) {
                step = step + 1;
                $_.getSelector(this.wz_class).dispatchEvent(new Event("nextWizard"));
            }
        }

        let step_action = step > this.getCurrentStep()

        if (is_nav) {
            if (step_action) {
                $_.getSelector(this.wz_class).dispatchEvent(new Event("forwardNavWizard"));
            } else if (step < this.getCurrentStep()) {
                $_.getSelector(this.wz_class).dispatchEvent(new Event("backwardNavWizard"));
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
            if (this.checkForm() === true) {
                if (step_action) {
                    $_.getSelector(this.wz_class).dispatchEvent(new Event("errorFormValidatorWizard"));
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
            const buttons = $_.getSelector(this.wz_buttons, parent);
            const next = $_.getSelector(this.wz_button + this.wz_next, buttons);
            const prev = $_.getSelector(this.wz_button + this.wz_prev, buttons);
            const finish = $_.getSelector(this.wz_button + this.wz_finish, buttons);

            this.checkButtons(next, prev, finish)
        }

        const $wz_nav = $_.getSelectorAll(this.wz_step, nav)
        $_.removeClassList($wz_nav, "active");

        const $wz_content = $_.getSelectorAll(this.wz_step, content)
        $_.removeClassList($wz_content, "active");

        $_.getSelector(`${this.wz_step}[data-step="${this.getCurrentStep()}"]`, nav).classList.add("active");
        $_.getSelector(`${this.wz_step}[data-step="${this.getCurrentStep()}"]`, content).classList.add("active");
    }


    /**
    * Notifies that the wizard has been completed.
    * 
    * @param {object} e  => Event
    * 
    * @event submitWizard => If the wizard is a form it will fire submitWizard
    * @event endWizard    => If the wizard is not a form it will fire endWizard
    * 
    * @return {void}
    */

    onClickFinish(e) {
        if (this.form) {
            if (this.checkForm() !== true) {
                $_.getSelector(this.wz_class).dispatchEvent(new Event("submitWizard"));
            }
        } else {
            $_.getSelector(this.wz_class).dispatchEvent(new Event("endWizard"));
        }
    }

    /**
    * Set the active step 
    * 
    * @param {int} step  => The active step 
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
    * @param {int} step  => Step 
    * 
    * @return {int} Step
    */

    setStep(step) {
        let parent = $_.getSelector(this.wz_class);
        let content = $_.getSelector(this.wz_content, parent);

        let check_content = $_.getSelector(`${this.wz_step}[data-step="${step}"]`, content);

        if ($_.exists(check_content) === false) {
            let content_length = ($_.getSelectorAll(this.wz_step, content).length) - 1;

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
        let el = $_.getSelector(this.wz_class);

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
        let el = $_.getSelector(this.wz_class);

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
    * @return {void}
    */

    set_options(options) {
        this.options = options;
    }

    /**
    * Check and match the options of the wizard with args definieds
    * 
    * @return {void}
    */

    prefabOpts(options, args) {
        Object.entries(args).forEach(([key, value]) => {
            if (typeof value === 'object') {
                Object.entries(value).forEach(([key_1, value_1]) => {
                    options[key][key_1] = value_1;
                });
            } else {
                options[key] = value;
            }
        });

        this.set_options(options);
    }
};


const $_ = {
    getID: function (e, n = document) {
        return n.getElementById(e);
    },

    getClass: function (e, n = document) {
        return n.getElementsByClassName(e);
    },

    getTag: function (e, n = document) {
        return n.getElementsByTagName(e);
    },

    getSelector: function (e, n = document) {
        return n.querySelector(e);
    },

    getSelectorAll: function (e, n = document) {
        return n.querySelectorAll(e);
    },

    hasClass: function (e, className) {
        className = className.replace(".", "");
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(e.className);
    },

    getParent: function (elem, selector) {
        let parent = undefined;

        while (elem.parentNode.tagName !== "BODY" && parent === undefined) {
            elem = elem.parentNode;

            if (elem.matches(selector)) {
                parent = elem;
            }
        }

        return parent;
    },

    delegate: function (el, evt, sel, handler) {
        el.addEventListener(evt, function (event) {
            let t = event.target;
            while (t && t !== this) {
                if (t.matches(sel)) {
                    handler.call(t, event);
                }
                t = t.parentNode;
            }
        });
    },

    removeClassList: function (e, className) {
        for (let element of e) {
            element.classList.remove(className);
        };
    },

    objToString: function (obj, delimiter = ";") {
        let str = '';
        for (const p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + ':' + obj[p] + delimiter;
            }
        }
        return str;
    },

    isHidden: function (el) {
        const style = window.getComputedStyle(el);
        return (style.display === 'none')
    },

    str2bool: function (value) {
        const str = String(value);
        switch (str.toLowerCase()) {
            case 'false':
            case 'no':
            case 'n':
            case '':
            case 'null':
            case 'undefined':
                return false;
            default:
                return true;
        }
    },

    exists: function (element) {
        return (typeof (element) != 'undefined' && element != null);
    },

    throwException: function (message) {
        let err;
        try {
            throw new Error('myError');
        } catch (e) {
            err = e;
        }
        if (!err) return;

        let aux = err.stack.split("\n");
        aux.splice(0, 2); //removing the line that we force to generate the error (var err = new Error();) from the message
        aux = aux.join('\n"');
        throw message + ' \n' + aux;
    },

    formValidator: function (formData) {
        let error = false;

        for (let e of formData) {
            if ($_.hasClass(e, "required") || $_.exists(e.getAttribute("required"))) {

                let check = false
                switch (e.tagName) {
                    case "INPUT":
                        check = $_.dispatchInput(e);
                        break;
                    case "SELECT":
                    case "TEXTAREA":
                        check = $_.isEmpty(e.value);
                        break;
                }

                if (check === false) {
                    error = true;
                    $_.highlight(e, "error");
                }
            }
        }

        return error;
    },

    closetNubmer: function (length, step) {
        let counts = [];

        for (let index = 0; index <= length; index++) {
            counts.push(index)
        }

        let closet = counts.reduce(function (prev, curr) {
            return (Math.abs(curr - step) < Math.abs(prev - step) ? curr : prev);
        });

        return closet;
    },

    highlight: function (e, highlight = "error") {
        let classHigh = `highlight-${highlight}`;

        e.classList.add(classHigh)
        setTimeout(function () {
            document.querySelectorAll('[class*="highlight"]')
                .forEach((el) => {
                    for (let i = el.classList.length - 1; i >= 0; i--) {
                        let className = el.classList[i];
                        if (className.startsWith('highlight')) {
                            el.classList.remove(className);
                        }
                    }
                });
        }, 1000);

    },

    dispatchInput: function (e) {
        let type = e.getAttribute("type");
        let check = false;

        switch (type) {
            case "email":
                check = $_.isEmail(e.value);
                break;
            case "url":
                check = $_.isValidURL(e.value);
                break;
            case "checkbox":
            case "radio":
                check = e.checked;
                break;
            default:
                check = $_.isEmpty(e.value);
                break;
        }

        return check
    },

    isEmpty: function (val) {
        return (val != undefined && val != null && val.length > 0);
    },

    isEmail: function (email) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    },

    isValidURL: function (str) {
        let url;

        try {
            url = new URL(str);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    },

    cleanEvents: function (el, withChildren = false) {
        if ($_.exists(el)) {
            if (withChildren) {
                el.parentNode.replaceChild(el.cloneNode(true), el);
            } else {
                const newEl = el.cloneNode(false);
                while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
                el.parentNode.replaceChild(newEl, el);
            }
        }
    }
}