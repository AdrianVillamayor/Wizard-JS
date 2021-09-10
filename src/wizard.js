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
            wz_finish: (args != undefined && args.hasOwnProperty("prev")) ? args.wz_prev : ".finish",

            current_step: (args != undefined && args.hasOwnProperty("current_step")) ? args.current_step : 0,
            steps: (args != undefined && args.hasOwnProperty("steps")) ? args.steps : 0,
            navigation: (args != undefined && args.hasOwnProperty("navigation")) ? args.navigation : "all",
            buttons: (args != undefined && args.hasOwnProperty("buttons")) ? args.buttons : true,
            next: (args != undefined && args.hasOwnProperty("next")) ? args.next : "Next",
            prev: (args != undefined && args.hasOwnProperty("prev")) ? args.prev : "Prev",
            finish: (args != undefined && args.hasOwnProperty("finish")) ? args.finish : "Submit",
        };

        this.wz_class = opts.wz_class;
        this.wz_nav = opts.wz_nav;
        this.wz_nav_style = opts.wz_nav_style;
        this.wz_content = opts.wz_content;
        this.wz_buttons = opts.wz_buttons;
        this.wz_button = opts.wz_button;
        this.wz_step = opts.wz_step;
        this.wz_form = opts.wz_form;
        this.wz_next = opts.wz_next;
        this.wz_prev = opts.wz_prev;
        this.wz_finish = opts.wz_finish;

        this.steps = opts.steps;
        this.current_step = opts.current_step;
        this.last_step = this.current_step;
        this.navigation = opts.navigation;
        this.buttons = opts.buttons;
        this.prev = opts.prev;
        this.next = opts.next;
        this.finish = opts.finish;
        this.form = false;
    }

    init() {
        try {
            let _self = this;

            let wz = ($_.exists($_.getSelector(this.wz_class))) ? $_.getSelector(this.wz_class) : $_.throwException(error_list.empty_wz);

            let wz_nav = ($_.exists($_.getSelector(this.wz_nav, wz))) ? $_.getSelector(this.wz_nav, wz) : $_.throwException(error_list.empty_nav);

            let wz_content = ($_.exists($_.getSelector(this.wz_content, wz))) ? $_.getSelector(this.wz_content, wz) : $_.throwException(error_list.empty_content);

            let wz_type = (typeof wz.getAttribute("data-type") !== 'undefined' && wz.getAttribute("data-type") !== false) ? wz.getAttribute("data-type") : "default";

            var wz_nav_steps = $_.getSelectorAll(this.wz_step, wz_nav);
            var wz_nav_steps_length = (wz_nav_steps.length > 0) ? wz_nav_steps.length : $_.throwException(error_list.empty_nav);;

            var wz_content_steps = $_.getSelectorAll(this.wz_step, wz_content);
            var wz_content_steps_length = (wz_content_steps.length > 0) ? wz_content_steps.length : $_.throwException(error_list.empty_content);

            if (wz_nav_steps_length != wz_content_steps_length) {
                $_.throwException(error_list.diff_steps);
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

        for (let i = 0; i < $wz_nav.length; i++) {
            let $this = $wz_nav[i];
            let attr = (typeof $this.getAttribute("data-type") !== undefined && $_.str2bool($this.getAttribute("data-type")) !== false) ? $this.getAttribute("data-type") : "default";

            this.form = (attr === "form") ? true : is_form;

            active = (active === false) ? $_.hasClass($this, "active") : active;
            active_index = ($_.hasClass($this, "active")) ? i : active_index;

            $this.setAttribute("data-step", i);
            $wz_content[i].setAttribute("data-step", i);

            $this.setAttribute("data-type", attr);
            $wz_content[i].setAttribute("data-type", attr);
        };

        $_.removeClassList($wz_nav, "active");
        $wz_nav[active_index].classList.add("active");

        $_.removeClassList($wz_content, "active");
        $wz_content[active_index].classList.add("active");

        $_.getSelector(this.wz_nav).classList.add(this.wz_nav_style);

        if (this.form) {
            this.update2Form();
        }

        this.setButtons();
    }

    update2Form() {
        let wz = $_.getSelector(this.wz_class);
        let wz_content = $_.getSelector(this.wz_content, wz);

        if (wz_content.tagName !== "FORM") {
            let wz_content_class = wz_content.getAttribute("class");
            let wz_content_content = wz_content.innerHTML

            wz_content.remove();
            var $form = document.createElement("form");

            $form.setAttribute("method", "POST");
            $form.setAttribute("class", wz_content_class + " " + (this.wz_form).replace(".", ""));

            $form.innerHTML = wz_content_content;

            wz.appendChild($form)
        }
    }

    checkForm() {
        let wz = $_.getSelector(this.wz_class);
        let wz_content = $_.getSelector(this.wz_content, wz);

        let steps = $_.getSelectorAll(this.wz_step, wz_content);
        let target = steps[this.getCurrentStep()];
        var validation = false;

        let inputs = $_.getSelectorAll("input,textarea,select", target);

        if (inputs.length > 0) {
            validation = $_.formValidator(inputs);
        } else {
            this.throwException(error_list.random);
        }


        return validation;
    }

    setButtons() {
        let wz = $_.getSelector(this.wz_class);
        let wz_btns = $_.getSelector(this.wz_buttons, wz);

        if ($_.exists(wz_btns) === false && $_.str2bool(this.buttons)) {
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

            if (this.form) {
                var finish = document.createElement("BUTTON");
                finish.innerHTML = this.finish;
                finish.classList.add((this.wz_button).replace(".", ""));
                finish.classList.add((this.wz_finish).replace(".", ""));
                buttons.appendChild(finish);
            }

            this.checkButtons(next, prev, finish)

            wz.appendChild(buttons);
        }

        return true;
    }

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

    onClick(e) {
        let $this = e

        let parent = $_.getParent($this, this.wz_class);
        let nav = $_.getSelector(this.wz_nav, parent);
        let content = $_.getSelector(this.wz_content, parent);
        let steps = $_.getSelectorAll(this.wz_step, content);

        var is_btn = ($_.hasClass($this, this.wz_button));

        let step = ($_.str2bool($this.getAttribute("data-step")) !== false) ? parseInt($this.getAttribute("data-step")) : this.getCurrentStep();
        let type = steps[this.getCurrentStep()].getAttribute("data-type");

        if (is_btn) {
            if ($_.hasClass($this, this.wz_prev)) {
                step = step - 1;
                document.dispatchEvent(new Event("prevWizard"));
            } else if ($_.hasClass($this, this.wz_next)) {
                step = step + 1;
                document.dispatchEvent(new Event("nextWizard"));
            }
        }
        if (this.form && this.navigation != "buttons") {
            if (step > this.getCurrentStep()) {
                if ((step !== this.getCurrentStep() + 1)) {
                    if (step >= this.last_step) {
                        step = this.last_step;
                    } else {
                        step = this.getCurrentStep() + 1;
                    }
                }
            }
        }

        switch (type) {
            case "form":
                if (this.checkForm() === true) {
                    this.last_step = this.getCurrentStep();
                    if (this.getCurrentStep() < step) {
                        return false;
                    }
                }
                break;
        }


        if ($_.str2bool(step)) {
            this.setCurrentStep(step)
        }

        if (is_btn) {
            let buttons = $_.getSelector(this.wz_buttons, parent);
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
    }

    setCurrentStep(step) {
        this.current_step = this.setStep(step);
    }

    getCurrentStep() {
        return this.current_step;
    }

    setStep(step) {
        let parent = $_.getSelector(this.wz_class);
        let content = $_.getSelector(this.wz_content, parent);

        let check_content = $_.getSelector(`${this.wz_step}[data-step="${step}"]`, content);

        if ($_.exists(check_content) === false) {
            let content_length = ($_.getSelectorAll(this.wz_step, content).length) - 1;

            let diff = this.closetNubmer(content_length, step)

            step = diff;
        }

        this.last_step = (step > this.last_step) ? step : this.last_step;

        return parseInt(step);
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

        $_.delegate(document, "click", this.wz_nav + " " + this.wz_step, function (event) {
            _self.onClick(this)
        });
    }

    setBtnEvent() {
        let _self = this;

        $_.delegate(document, "click", this.wz_buttons + " " + this.wz_button, function (event) {
            if ($_.hasClass(event.target, _self.wz_finish)) {
                if (_self.checkForm() !== true) {
                    document.dispatchEvent(new Event("submitWizard"))
                }
            } else {
                _self.onClick(this)

            }
        });
    }
};

var $_ = {

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

    isHidden: function (el) {
        var style = window.getComputedStyle(el);
        return (style.display === 'none')
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

    formValidator: function (formData) {
        var error = false;
        for (let e of formData) {
            if ($_.hasClass(e, "required") || $_.exists(e.getAttribute("required"))) {

                var check = false
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
                    console.log(e);
                    $_.highlight(e, "error");
                }
            }
        }

        return error;
    },

    highlight: function (e, highlight = "error") {
        let classHigh = "highlight-" + highlight

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
        var check = false;

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