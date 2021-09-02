let error_list = {
    "empty_wz": "Not found any element to generate the Wizard with.",
    "empty_nav": "Nav does not exist or is empty.",
    "empty_content": "Content does not exist or is empty.",
    "diff_steps": "Discordance between the steps of nav and content.",
    "random": "There has been a problem, check the configuration and use of the wizard.",
    "jquery": "This plugin needs JQuery to work properly."
};

var Utils = {
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
            case '0':
            case 'n':
            case '':
            case 'null':
            case 'undefined':
                return false;
            default:
                return true;
        }
    },

    exists: function () {
        return this.length !== 0;
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

            if (($(`${form} input[name='${key}']`).attr("type") == "email") && (!$(`${form} input[name='${key}']`).hasClass("no-required"))) {
                if (!isEmail(value)) {
                    error += "-2";
                    inputValidationFormat("input", form, key, "error")
                }
            }

            if (($(`${form} input[name='${key}']`).attr("data-type") == "url") && (!$(`${form} input[name='${key}']`).hasClass("no-required"))) {
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
            current_step: (args != undefined && args.hasOwnProperty("current_step")) ? args.current_step : 0,
            navigation: (args != undefined && args.hasOwnProperty("navigation")) ? args.navigation : "all",
            buttons: (args != undefined && args.hasOwnProperty("buttons")) ? args.buttons : true
        };

        this.wz_class = opts.wz_class;
        this.wz_nav = opts.wz_nav;
        this.wz_nav_style = opts.wz_nav_style;
        this.wz_content = opts.wz_content;
        this.wz_buttons = opts.wz_buttons;
        this.wz_button = opts.wz_button;
        this.wz_step = opts.wz_step;
        this.wz_form = opts.wz_form;
        this.current_step = opts.current_step;
        this.navigation = opts.navigation;
        this.buttons = opts.buttons;
    }

    set($wz_nav, $wz_content, type) {
        var active = false;
        var active_index = 0;
        var is_form = false;

        $($wz_nav).each(function (index) {
            let $this = $(this);
            let attr = (typeof $this.attr("data-type") !== 'undefined' && $this.attr("data-type") !== false) ? $this.attr("data-type") : type;

            is_form = (attr === "form") ? true : is_form;

            active = (active === false) ? $this.hasClass("active") : active;
            active_index = ($this.hasClass("active")) ? index : active_index;

            $this.attr("data-step", index);
            $wz_content.eq(index).attr("data-step", index);

            $this.attr("data-type", attr);
            $wz_content.eq(index).attr("data-type", attr);
        });

        $wz_nav.removeClass("active").eq(active_index).addClass("active");
        $wz_content.removeClass("active").eq(active_index).addClass("active");

        $(this.wz_nav).addClass(this.wz_nav_style);

        if (is_form) {
            this.update2Form()
        }
    }

    update2Form() {
        let wz_content = $(this.wz_class).find(this.wz_content);

        if (wz_content.is("form") === false) {
            let wz_content_class = wz_content.attr("class");
            let wz_content_content = wz_content.contents()

            wz_content.remove();

            let $form = $(`<form class="${wz_content_class} ${this.wz_form}"></form>`);
            $form.append(wz_content_content);

            $(this.wz_class).append($form);
        }
    }

    createButtons() {
        let wz_content = $(this.wz_class).find(this.wz_content);

        if (wz_content.is("form") === false) {
            let wz_content_class = wz_content.attr("class");
            let wz_content_content = wz_content.contents()

            wz_content.remove();

            let $form = $(`<form class="${wz_content_class} ${this.wz_form}"></form>`);
            $form.append(wz_content_content);

            $(this.wz_class).append($form);
        }
    }

    onClick(e) {
        let $this = $(e)
        let step = $this.attr("data-step");

        let parent = $this.parents(this.wz_class);
        let nav = parent.find(this.wz_nav);
        let content = parent.find(this.wz_content);

        let type = (!parent.attr("data-type")) ? "default" : parent.attr("data-type");

        // switch (type) {
        //     case 'form':
        //         return false;
        //         break;
        //     case 'multi':

        //         break;
        // }

        nav.find(`${this.wz_step}`).removeClass("active");
        content.find(`${this.wz_step}`).removeClass("active");

        this.setStep(content, step)

        nav.find(`${this.wz_step}[data-step="${this.getCurrentStep()}"]`).addClass("active");
        content.find(`${this.wz_step}[data-step="${this.getCurrentStep()}"]`).addClass("active");
    }

    setStep(content, step) {
        let check_content = content.find(`${this.wz_step}[data-step="${step}"]`);

        if (Utils.exists(check_content) === false) {
            let content_length = (content.find(`${this.wz_step}`).length) - 1;

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
        $(document).on("click", `${this.wz_nav} ${this.wz_step}`, function (e) {
            _self.onClick(e.currentTarget)
        });
    }

    setBtnEvent() {
        let _self = this;
        $(document).on("click", `${this.wz_nav} ${this.wz_step}`, function (e) {
            _self.onClick(e.currentTarget)
        });
    }

    init() {
        try {
            let _self = this;
            let wz = (Utils.exists($(this.wz_class))) ? $(this.wz_class) : Utils.throwException(error_list.empty_wz);

            let wz_nav = (Utils.exists(wz.find(this.wz_nav))) ? wz.find(this.wz_nav) : Utils.throwException(error_list.empty_nav);

            let wz_content = (Utils.exists(wz.find(this.wz_content))) ? wz.find(this.wz_content) : Utils.throwException(error_list.empty_content);

            let wz_type = (typeof wz.attr("data-type") !== 'undefined' && wz.attr("data-type") !== false) ? wz.attr("data-type") : "default";

            var wz_nav_steps = wz_nav.find(`${this.wz_step}`);
            var wz_nav_steps_length = (wz_nav_steps.length > 0) ? wz_nav_steps.length : Utils.throwException(error_list.empty_nav);;

            var wz_content_steps = wz_content.find(`${this.wz_step}`);
            var wz_content_steps_length = (wz_content_steps.length > 0) ? wz_content_steps.length : Utils.throwException(error_list.empty_content);

            if (wz_nav_steps_length != wz_content_steps_length) {
                Utils.throwException(error_list.diff_steps);
            }

            this.set(wz_nav_steps, wz_content_steps, wz_type)

            switch (this.navigation) {
                case "all":
                case "nav":
                    $(document).on("click", `${this.wz_nav} ${this.wz_step}`, function (e) {
                        console.log(e.currentTarget)
                        _self.onClick(e.currentTarget)
                    });
                    break;
                case "buttons":
                    break;

            }

            wz.show()

        } catch (error) {
            throw error;
        }
    }
};