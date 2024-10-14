import "./scss/main.scss";
/**
 * A lightweight wizard UI component that supports accessibility and HTML5 in Vanilla JavaScript.
 *
 * @link   https://github.com/AdrianVillamayor/Wizard-JS
 * @author Adrian
 *
 * @class  Wizard
 */
class Wizard {
    constructor(args = {}) {
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

            highlight_type: { error: "error", warning: "warning", success: "success", info: "info" },

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
                title: "Step",
            },
        };

        this.options = { ...defaults, ...args };

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
            bubbles,
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
            locked_step: null,
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

            document.dispatchEvent(
                new CustomEvent("wz.ready", {
                    bubbles: this.bubbles,
                    detail: {
                        target: this.wz_class,
                        elem: wz,

                    },
                })
            );
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

        wz.dispatchEvent(
            new CustomEvent("wz.update", {
                bubbles: this.bubbles,
                detail: {
                    target: this.wz_class,
                    elem: wz,
                },
            })
        );
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
            wz_nav_steps.forEach((el) => el.classList.remove("active"));

            nav.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active");
        }

        const wz_content_steps = content.querySelectorAll(this.wz_step);
        wz_content_steps.forEach((el) => el.classList.remove("active"));

        content.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active");

        wz.dispatchEvent(
            new Event("wz.reset", {
                bubbles: this.bubbles,
            })
        );
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

        document.querySelector(this.wz_class).dispatchEvent(
            new Event("wz.unlock", {
                bubbles: this.bubbles,
            })
        );
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
            wz_nav_steps.forEach((el) => el.classList.remove("active"));
            wz_nav_steps[active_index].classList.add("active");
            wz_nav.classList.add(this.wz_nav_style);
        }

        wz_content_steps.forEach((el) => el.classList.remove("active"));
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

        return { error: false };
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
            wz.dispatchEvent(
                new Event("wz.lock", {
                    bubbles: this.bubbles,
                })
            );
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
                wz.dispatchEvent(
                    new Event("wz.btn.prev", {
                        bubbles: this.bubbles,
                    })
                );
            } else if (element.classList.contains(this.wz_next.replace(".", ""))) {
                step += 1;
                wz.dispatchEvent(
                    new Event("wz.btn.next", {
                        bubbles: this.bubbles,
                    })
                );
            }
        }

        const step_action = step > this.getCurrentStep();

        if (is_nav) {
            if (step_action) {
                wz.dispatchEvent(
                    new Event("wz.nav.forward", {
                        bubbles: this.bubbles,
                    })
                );
            } else if (step < this.getCurrentStep()) {
                wz.dispatchEvent(
                    new Event("wz.nav.backward", {
                        bubbles: this.bubbles,
                    })
                );
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
                    wz.dispatchEvent(
                        new CustomEvent("wz.error", {
                            bubbles: this.bubbles,
                            detail: {
                                id: "form_validation",
                                msg: this.i18n.form_validation,
                                target: check_form.target,
                            },
                        })
                    );
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
            wz_nav_steps.forEach((el) => el.classList.remove("active"));
            nav.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active");
        }

        const wz_content_steps = content.querySelectorAll(this.wz_step);
        wz_content_steps.forEach((el) => el.classList.remove("active"));
        content.querySelector(`${this.wz_step}[data-wz-step="${this.getCurrentStep()}"]`).classList.add("active");
    }

    /**
     * Notifies that the wizard has been completed.
     */
    onClickFinish() {
        if (this.form) {
            const check_form = this.checkForm();
            if (!check_form.error) {
                document.querySelector(this.wz_class).dispatchEvent(
                    new Event("wz.form.submit", {
                        bubbles: this.bubbles,
                    })
                );
            }
        } else {
            document.querySelector(this.wz_class).dispatchEvent(
                new Event("wz.end", {
                    bubbles: this.bubbles,
                })
            );
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
        wz.addEventListener("click", (event) => {
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
        wz.addEventListener("click", (event) => {
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

        formData.forEach((e) => {
            if (e.required || e.classList.contains("required")) {
                let valid = true;

                switch (e.tagName) {
                    case "INPUT":
                        if (e.type === "checkbox" || e.type === "radio") {
                            valid = e.checked;
                        } else {
                            valid = e.value.trim() !== "";
                        }
                        break;
                    case "SELECT":
                        valid = e.value.trim() !== "";
                        break;
                    case "TEXTAREA":
                        valid = e.value.trim() !== "";
                        break;
                    default:
                        valid = true;
                }

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
            target,
        };
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

export default Wizard;
