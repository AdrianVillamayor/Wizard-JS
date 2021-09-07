let error_list = {
    "empty_wz": "Not found any element to generate the Wizard with.",
    "empty_nav": "Nav does not exist or is empty.",
    "empty_content": "Content does not exist or is empty.",
    "diff_steps": "Discordance between the steps of nav and content.",
    "random": "There has been a problem, check the configuration and use of the wizard."
};

class Wizard {

    constructor(args) {

        let opts = {
            wz_class: (args != undefined && args.hasOwnProperty("wz_class")) ? args.wz_class : ".wizard",
            wz_nav: (args != undefined && args.hasOwnProperty("wz_nav")) ? args.wz_nav : ".wizard-nav",
            wz_nav_style: (args != undefined && args.hasOwnProperty("wz_nav_style")) ? args.wz_nav_style : "dots",
            wz_content: (args != undefined && args.hasOwnProperty("wz_content")) ? args.wz_content : ".wizard-content",
            wz_buttons: (args != undefined && args.hasOwnProperty("wz_buttons")) ? args.wz_buttons : ".wizard-buttons",
            wz_button: (args != undefined && args.hasOwnProperty("wz_button")) ? args.wz_button : ".wizard-btn",
            wz_step: (args != undefined && args.hasOwnProperty("wz_step")) ? args.wz_step : ".wizard-step",
            wz_form: (args != undefined && args.hasOwnProperty("wz_form")) ? args.wz_form : ".wizard-form",
            wz_next: (args != undefined && args.hasOwnProperty("next")) ? args.wz_next : ".next",
            wz_prev: (args != undefined && args.hasOwnProperty("prev")) ? args.wz_prev : ".prev",
            
            current_step: (args != undefined && args.hasOwnProperty("current_step")) ? args.current_step : 0,
            steps: (args != undefined && args.hasOwnProperty("steps")) ? args.steps : 0,
            navigation: (args != undefined && args.hasOwnProperty("navigation")) ? args.navigation : "all",
            buttons: (args != undefined && args.hasOwnProperty("buttons")) ? args.buttons : true,
            next: (args != undefined && args.hasOwnProperty("next")) ? args.wz_form : "Next",
            prev: (args != undefined && args.hasOwnProperty("prev")) ? args.wz_form : "Prev",
        };

        this.wz_class = opts.wz_class;
        this.wz_nav = opts.wz_nav;
        this.wz_nav_style = opts.wz_nav_style;
        this.wz_content = opts.wz_content;
        this.wz_buttons = opts.wz_buttons;
        this.wz_button = opts.wz_button;
        this.wz_step = opts.wz_step;
        this.steps = opts.steps;
        this.wz_form = opts.wz_form;
        this.current_step = opts.current_step;
        this.navigation = opts.navigation;
        this.buttons = opts.buttons;
        this.prev = opts.prev;
        this.next = opts.next;
        this.wz_next = opts.wz_next;
        this.wz_prev = opts.wz_prev;
    }

    init() {
        try {
            let _self = this;

            let wz = ($.exists($.getSelector(this.wz_class))) ? $.getSelector(this.wz_class) : $.throwException(error_list.empty_wz);

            let wz_nav = ($.exists($.getSelector(this.wz_nav, wz))) ? $.getSelector(this.wz_nav, wz) : $.throwException(error_list.empty_nav);

            let wz_content = ($.exists($.getSelector(this.wz_content, wz))) ? $.getSelector(this.wz_content, wz) : $.throwException(error_list.empty_content);

            let wz_type = (typeof wz.getAttribute("data-type") !== 'undefined' && wz.getAttribute("data-type") !== false) ? wz.getAttribute("data-type") : "default";

            var wz_nav_steps = $.getSelectorAll(this.wz_step, wz_nav);
            var wz_nav_steps_length = (wz_nav_steps.length > 0) ? wz_nav_steps.length : $.throwException(error_list.empty_nav);;

            var wz_content_steps = $.getSelectorAll(this.wz_step, wz_content);
            var wz_content_steps_length = (wz_content_steps.length > 0) ? wz_content_steps.length : $.throwException(error_list.empty_content);

            if (wz_nav_steps_length != wz_content_steps_length) {
                $.throwException(error_list.diff_steps);
            }

            this.steps = wz_nav_steps_length;

            this.set(wz_nav_steps, wz_content_steps, wz_type)

            switch (this.navigation) {
                case "all":
                    this.setNavEvent()
                    this.setBtnEvent()
                    break;
                case "nav":
                    this.setNavEvent();
                    break;
                case "buttons":
                    this.setBtnEvent();
                    break;
            }

            wz.style.display = "block"

        } catch (error) {
            throw error;
        }
    }

    set($wz_nav, $wz_content, type) {
        var active = false;
        var active_index = 0;
        var is_form = false;

        for (let i = 0; i < $wz_nav.length; i++) {
            let $this = $wz_nav[i];
            let attr = (typeof $this.getAttribute("data-type") !== undefined && $.str2bool($this.getAttribute("data-type")) !== false) ? $this.getAttribute("data-type") : "default";

            is_form = (attr === "form") ? true : is_form;

            active = (active === false) ? $.hasClass($this, "active") : active;
            active_index = ($.hasClass($this, "active")) ? i : active_index;

            $this.setAttribute("data-step", i);
            $wz_content[i].setAttribute("data-step", i);

            $this.setAttribute("data-type", attr);
            $wz_content[i].setAttribute("data-type", attr);
        };

        $.removeClassList($wz_nav, "active");
        $wz_nav[active_index].classList.add("active");

        $.removeClassList($wz_content, "active");
        $wz_content[active_index].classList.add("active");

        $.getSelector(this.wz_nav).classList.add(this.wz_nav_style);

        if (is_form) {
            this.update2Form();
        }

        this.setButtons();
    }

    update2Form() {
        let wz = $.getSelector(this.wz_class);
        let wz_content = $.getSelector(this.wz_content, wz);

        if (wz_content.tagName !== "FORM") {
            let wz_content_class = wz_content.getAttribute("class");
            let wz_content_content = wz_content.innerHTML

            wz_content.remove();
            var $form = document.createElement("form");

            $form.setAttribute("method", "POST");
            $form.setAttribute("class", wz_content_class + " " + this.wz_form);

            $form.innerHTML = wz_content_content;

            wz.appendChild($form)
        }
    }

    setButtons() {
        let wz = $.getSelector(this.wz_class);
        let wz_btns = $.getSelector(this.wz_buttons, wz);

        if ($.exists(wz_btns) === false && $.str2bool(this.buttons)) {
            var buttons = document.createElement("ASIDE");
            buttons.classList.add((this.wz_buttons).replace(".", ""));

            var prev = document.createElement("BUTTON");
            prev.innerHTML = this.prev;
            prev.classList.add((this.wz_button).replace(".", ""));
            prev.classList.add((this.wz_prev).replace(".", ""));
            buttons.appendChild(prev);

            var next = document.createElement("BUTTON");
            next.innerHTML = this.next;
            next.classList.add((this.wz_button).replace(".", ""));
            next.classList.add((this.wz_next).replace(".", ""));
            buttons.appendChild(next);

            this.checkButtons(next, prev)

            wz.appendChild(buttons);
        }

        return true;
    }

    checkButtons(next, prev) {
        let current_step = this.getCurrentStep();
        let n_steps = this.steps - 1;

        if (current_step == 0) {
            prev.setAttribute("disabled", true);
        } else {
            prev.removeAttribute("disabled");
        }

        if (current_step == n_steps) {
            next.setAttribute("disabled", true);
        } else {
            next.removeAttribute("disabled");
        }
    }

    onClick(e) {
        let $this = e
        var is_btn = false;

        let step = ($.str2bool($this.getAttribute("data-step")) !== false) ? $this.getAttribute("data-step") : this.getCurrentStep();

        if ($.hasClass($this, this.wz_button)) {
            is_btn = true;

            if ($.hasClass($this, this.wz_prev)) {
                step = step - 1;
            } else if ($.hasClass($this, this.wz_next)) {
                step = step + 1;
            }
        }

        let parent = $.getParent($this, this.wz_class);

        let nav = $.getSelector(this.wz_nav, parent);

        let content = $.getSelector(this.wz_content, parent);

        let type = (!nav.getAttribute("data-type")) ? "default" : nav.getAttribute("data-type");

        if ($.str2bool(step)) {
            this.setStep(content, step)
        }

        if (is_btn) {
            let buttons = $.getSelector(this.wz_buttons, parent);
            let next = $.getSelector(this.wz_button + this.wz_next, buttons);
            let prev = $.getSelector(this.wz_button + this.wz_prev, buttons);

            this.checkButtons(next, prev)
        }

        let $wz_nav = $.getSelectorAll(this.wz_step, nav)
        $.removeClassList($wz_nav, "active");

        let $wz_content = $.getSelectorAll(this.wz_step, content)
        $.removeClassList($wz_content, "active");

        $.getSelector(`${this.wz_step}[data-step="${this.getCurrentStep()}"]`, nav).classList.add("active");
        $.getSelector(`${this.wz_step}[data-step="${this.getCurrentStep()}"]`, content).classList.add("active");
    }

    setStep(content, step) {
        let check_content = $.getSelector(`${this.wz_step}[data-step="${step}"]`, content);

        if ($.exists(check_content) === false) {
            let content_length = ($.getSelectorAll(this.wz_step, content).length) - 1;

            let diff = this.closetNubmer(content_length, step)

            step = diff;
        }

        this.setCurrentStep(step);
    }

    setCurrentStep(step) {
        this.current_step = parseInt(step);
    }

    getCurrentStep() {
        return this.current_step;
    }

    closetNubmer(length, step) {
        var counts = [];

        for (let index = 0; index <= length; index++) {
            counts.push(index)
        }

        let closet = counts.reduce(function (prev, curr) {
            return (Math.abs(curr - step) < Math.abs(prev - step) ? curr : prev);
        });

        return closet;
    }

    setNavEvent() {
        let _self = this;

        $.delegate(document, "click", this.wz_nav + " " + this.wz_step, function (event) {
            _self.onClick(this)
        });

    }

    setBtnEvent() {
        let _self = this;

        $.delegate(document, "click", this.wz_buttons + " " + this.wz_button, function (event) {
            _self.onClick(this)
        });
    }
};

var $ = {

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
        var parent = undefined;

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
            var t = event.target;
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
        var str = '';
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + ':' + obj[p] + delimiter;
            }
        }
        return str;
    },

    str2bool: function (str) {
        str = String(str);
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
        var err;
        try {
            throw new Error('myError');
        } catch (e) {
            err = e;
        }
        if (!err) return;

        var aux = err.stack.split("\n");
        aux.splice(0, 2); //removing the line that we force to generate the error (var err = new Error();) from the message
        aux = aux.join('\n"');
        throw message + ' \n' + aux;
    },

    checkJQuery() {
        if (typeof jQuery != 'undefined') {
            this.throwException(error_list.jquery);
        }
    }
}

var Validator = {

    checkForm: function (id) {
        let form = $(id);

        if (form.length > 0) {
            let formData = form.formData();
            let validator = formValidator(formData, id);

            if (validator === "") {
                return true;
            }
        }

        return false;
    },

    formValidator: function (formData, form) {
        var error = "0";

        for (var [key, value] of formData.entries()) {
            if (($(`${form} input[name='${key}']`).val() == "") && (!$(`${form} input[name='${key}']`).hasClass("no-required"))) {
                inputValidationFormat("input", form, key, "error")
                error += "-1";
            } else {
                inputValidationFormat("input", form, key, "correct")
            }

            if ($(`${form} textarea[name='${key}']`).val() == "" && (!$(`${form} textarea[name='${key}']`).hasClass("no-required"))) {
                inputValidationFormat("textarea", form, key, "error")
                error += "-1";
            } else {
                inputValidationFormat("textarea", form, key, "correct")
            }

            if ($(`${form} select[name='${key}']`).val() == "" && (!$(`${form} select[name='${key}']`).hasClass("no-required"))) {
                inputValidationFormat("select", form, key, "error")
                error += "-1";
            } else {
                inputValidationFormat("select", form, key, "correct")
            }

            if (($(`${form} input[name='${key}']`).getAttribute("type") == "email") && (!$(`${form} input[name='${key}']`).hasClass("no-required"))) {
                if (!isEmail(value)) {
                    error += "-2";
                    inputValidationFormat("input", form, key, "error")
                }
            }

            if (($(`${form} input[name='${key}']`).getAttribute("data-type") == "url") && (!$(`${form} input[name='${key}']`).hasClass("no-required"))) {
                if (!isValidURL(value)) {
                    error += "-3";
                    inputValidationFormat("input", form, key, "error")
                }
            }
        }

        var validator = unique(error.split('-'));
        var message = "";

        $.each(validator, function (i, e) {
            if (e == "1") {
                message += `<li>${msg_required}</li>`;
            }

            if (e == "2") {
                message += `<li>${msg_email}</li>`;
            }

        });

        return message;
    },

    inputValidationFormat: function (type, form, key, action) {
        switch (action) {
            case "error":
                if (type == "select") {
                    $(`${form} .select`).css("border-color", "#dc3545");
                } else {
                    $(`${form} ${type}[name='${key}']`).css("border-color", "#dc3545");
                }
                break;

            case "correct":
                if (type == "select") {
                    $(`${form} .select`).css("border-color", "#ced4da");
                } else {
                    $(`${form} ${type}[name='${key}']`).css("border-color", "#ced4da");
                }
                break;
        }
    },

    isEmail: function (email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    },

    isValidURL: function (str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

        return !!pattern.test(str);
    }
}