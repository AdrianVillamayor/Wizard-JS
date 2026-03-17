import { DEFAULT_OPTIONS, INTERNAL_CLASSES, createOptions } from "@core/defaults.js";
import {
    addClassFromSelector,
    addClassNames,
    clampStep,
    getButtonStyleClasses,
    selectorToClassName,
    toggleActiveStep
} from "@core/dom.js";
import { validateFields } from "@core/validation.js";

class Wizard {
    constructor(args = {}) {
        this.options = createOptions(args);
        Object.assign(this, this.options, {
            last_step: this.options.current_step,
            form: false,
            locked: false,
            locked_step: null,
            root: null,
            navEventsBound: false,
            buttonEventsBound: false
        });
    }

    init() {
        const wizardRoot = document.querySelector(this.wz_class);
        if (!wizardRoot) {
            throw new Error(this.i18n.empty_wz);
        }

        if (wizardRoot.getAttribute("data-wz-load") === "true") {
            throw new Error(this.i18n.already_defined);
        }

        if (!this.buttons && !this.nav) {
            throw new Error(this.i18n.no_nav);
        }

        this.root = wizardRoot;
        this.form = wizardRoot.tagName === "FORM";

        this.decorateStructuralClasses(wizardRoot);
        wizardRoot.classList.add(this.wz_ori.replace(".", ""));
        this.checkAndPrepare(wizardRoot);
        this.bindEvents(wizardRoot);

        wizardRoot.style.display = wizardRoot.classList.contains("vertical") ? "flex" : "block";
        wizardRoot.setAttribute("data-wz-load", "true");

        document.dispatchEvent(new CustomEvent("wz.ready", {
            bubbles: this.bubbles,
            detail: {
                target: this.wz_class,
                elem: wizardRoot
            }
        }));
    }

    update() {
        const wizardRoot = this.getRoot();
        if (wizardRoot.getAttribute("data-wz-load") !== "true") {
            throw new Error(this.i18n.empty_wz);
        }

        this.decorateStructuralClasses(wizardRoot);
        this.checkAndPrepare(wizardRoot);
        wizardRoot.dispatchEvent(new CustomEvent("wz.update", {
            bubbles: this.bubbles,
            detail: {
                target: this.wz_class,
                elem: wizardRoot
            }
        }));
    }

    reset() {
        const wizardRoot = this.getRoot();
        this.setCurrentStep(0);
        this.syncUI(wizardRoot);
        wizardRoot.dispatchEvent(new Event("wz.reset", {
            bubbles: this.bubbles
        }));
    }

    lock() {
        this.locked = true;
        this.locked_step = this.getCurrentStep();
    }

    unlock() {
        const wizardRoot = this.getRoot();
        this.locked = false;
        this.locked_step = null;
        wizardRoot.dispatchEvent(new Event("wz.unlock", {
            bubbles: this.bubbles
        }));
    }

    updateToForm() {
        const wizardRoot = this.getRoot();
        const wizardContent = this.getContentElement(wizardRoot);

        if (wizardContent.tagName !== "FORM") {
            const wizardContentClass = wizardContent.getAttribute("class");
            const wizardContentMarkup = wizardContent.innerHTML;

            wizardContent.remove();

            const form = document.createElement("form");
            form.setAttribute("method", "POST");
            form.setAttribute("class", `${wizardContentClass} ${this.wz_form.replace(".", "")}`);
            form.innerHTML = wizardContentMarkup;
            wizardRoot.appendChild(form);
            this.decorateStructuralClasses(wizardRoot);
        }
    }

    checkForm() {
        const wizardContent = this.getContentElement(this.getRoot());
        const steps = Array.from(wizardContent.querySelectorAll(this.wz_step));
        const activeStep = steps[this.getCurrentStep()];

        if (!activeStep) {
            return { error: false };
        }

        const fields = Array.from(activeStep.querySelectorAll("input, textarea, select"));
        if (fields.length === 0) {
            return { error: false };
        }

        return validateFields(wizardContent, fields, {
            highlight: this.highlight,
            highlight_type: this.highlight_type,
            highlightElement: this.highlightElement.bind(this)
        });
    }

    setNav(wizardRoot) {
        let navigation = wizardRoot.querySelector(this.wz_nav);
        if (navigation && this.nav) {
            navigation.remove();
            navigation = null;
        }

        if (!navigation && this.nav) {
            const wizardContent = this.getContentElement(wizardRoot);
            const steps = Array.from(wizardContent.querySelectorAll(this.wz_step));
            const nav = document.createElement("aside");

            addClassNames(nav, [INTERNAL_CLASSES.nav]);
            addClassFromSelector(nav, this.wz_nav);

            steps.forEach((step, index) => {
                const navStep = document.createElement("div");
                const title = step.getAttribute("data-wz-title") || `${this.i18n.title} ${index + 1}`;

                addClassNames(navStep, [INTERNAL_CLASSES.step]);
                addClassFromSelector(navStep, this.wz_step);
                navStep.setAttribute("data-wz-step", String(index));
                navStep.style.setProperty("--wizard-step-index", String(index));

                if (this.navigation === "buttons") {
                    navStep.classList.add("nav-buttons");
                }

                const dot = document.createElement("span");
                dot.classList.add("dot");
                navStep.appendChild(dot);

                const titleLabel = document.createElement("span");
                titleLabel.textContent = title;
                navStep.appendChild(titleLabel);

                nav.appendChild(navStep);
            });

            wizardRoot.prepend(nav);
        }
    }

    setButtons() {
        const wizardRoot = this.getRoot();
        let buttonContainer = wizardRoot.querySelector(this.wz_buttons);

        if (buttonContainer && this.buttons) {
            buttonContainer.remove();
            buttonContainer = null;
        }

        if (!buttonContainer && this.buttons) {
            const buttons = document.createElement("aside");
            const buttonStyleClasses = getButtonStyleClasses(this.wz_button_style);

            addClassNames(buttons, [INTERNAL_CLASSES.buttons]);
            addClassFromSelector(buttons, this.wz_buttons);

            const prevButton = this.createButton(this.prev, [
                INTERNAL_CLASSES.button,
                INTERNAL_CLASSES.prev,
                ...buttonStyleClasses
            ], [this.wz_button, this.wz_prev]);
            if (this.navigation === "nav") {
                prevButton.style.display = "none";
            }

            const nextButton = this.createButton(this.next, [
                INTERNAL_CLASSES.button,
                INTERNAL_CLASSES.next,
                ...buttonStyleClasses
            ], [this.wz_button, this.wz_next]);
            if (this.navigation === "nav") {
                nextButton.style.display = "none";
            }

            const finishButton = this.createButton(this.finish, [
                INTERNAL_CLASSES.button,
                INTERNAL_CLASSES.finish,
                ...buttonStyleClasses
            ], [this.wz_button, this.wz_finish]);

            buttons.append(prevButton, nextButton, finishButton);
            wizardRoot.appendChild(buttons);
            this.checkButtons(nextButton, prevButton, finishButton);
        }
    }

    checkButtons(nextButton, prevButton, finishButton) {
        const currentStep = this.getCurrentStep();
        const finalStep = this.steps - 1;

        prevButton.toggleAttribute("disabled", currentStep === 0);

        if (currentStep === finalStep) {
            nextButton.setAttribute("disabled", "true");
            finishButton.style.display = "block";
        } else {
            finishButton.style.display = "none";
            nextButton.removeAttribute("disabled");
        }
    }

    checkAndPrepare(wizardRoot) {
        this.setNav(wizardRoot);

        const wizardContent = this.getContentElement(wizardRoot);
        const contentSteps = Array.from(wizardContent.querySelectorAll(this.wz_step));
        if (contentSteps.length === 0) {
            throw new Error(this.i18n.empty_content);
        }

        let navigation = null;
        let navigationSteps = [];
        if (this.nav) {
            navigation = wizardRoot.querySelector(this.wz_nav);
            if (!navigation) {
                throw new Error(this.i18n.empty_nav);
            }

            navigationSteps = Array.from(navigation.querySelectorAll(this.wz_step));
            if (navigationSteps.length === 0) {
                throw new Error(this.i18n.empty_nav);
            }

            if (navigationSteps.length !== contentSteps.length) {
                throw new Error(this.i18n.diff_steps);
            }
        }

        this.steps = contentSteps.length;
        this.normalizeCurrentStep();

        contentSteps.forEach((step, index) => {
            step.setAttribute("data-wz-step", String(index));
            if (this.nav && navigationSteps[index]) {
                navigationSteps[index].setAttribute("data-wz-step", String(index));
                navigationSteps[index].style.setProperty("--wizard-step-index", String(index));
            }
        });

        if (this.nav && navigation) {
            navigation.classList.add(this.wz_nav_style);
        }

        this.setButtons();
        this.syncUI(wizardRoot);
    }

    onClick(element) {
        const wizardRoot = this.getRoot();
        if (this.locked && this.locked_step === this.getCurrentStep()) {
            wizardRoot.dispatchEvent(new Event("wz.lock", {
                bubbles: this.bubbles
            }));
            return;
        }

        const parent = element.closest(this.wz_class) || wizardRoot;
        const isButton = element.classList.contains(selectorToClassName(this.wz_button) || "");
        const isNavigationStep = element.classList.contains(selectorToClassName(this.wz_step) || "");

        let step = element.getAttribute("data-wz-step");
        step = step !== null ? parseInt(step, 10) : this.getCurrentStep();

        if (isButton) {
            if (element.classList.contains(selectorToClassName(this.wz_prev) || "")) {
                step -= 1;
                wizardRoot.dispatchEvent(new Event("wz.btn.prev", {
                    bubbles: this.bubbles
                }));
            } else if (element.classList.contains(selectorToClassName(this.wz_next) || "")) {
                step += 1;
                wizardRoot.dispatchEvent(new Event("wz.btn.next", {
                    bubbles: this.bubbles
                }));
            }
        }

        const movingForward = step > this.getCurrentStep();
        if (isNavigationStep) {
            if (movingForward) {
                wizardRoot.dispatchEvent(new Event("wz.nav.forward", {
                    bubbles: this.bubbles
                }));
            } else if (step < this.getCurrentStep()) {
                wizardRoot.dispatchEvent(new Event("wz.nav.backward", {
                    bubbles: this.bubbles
                }));
            }
        }

        if (this.form && this.navigation !== "buttons" && movingForward && step !== this.getCurrentStep() + 1) {
            step = step >= this.last_step ? this.last_step : this.getCurrentStep() + 1;
        }

        if (this.form) {
            const checkForm = this.checkForm();
            if (checkForm.error) {
                if (movingForward) {
                    wizardRoot.dispatchEvent(new CustomEvent("wz.error", {
                        bubbles: this.bubbles,
                        detail: {
                            id: "form_validation",
                            msg: this.i18n.form_validation,
                            target: checkForm.target
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

        this.syncUI(parent);
    }

    onClickFinish() {
        const wizardRoot = this.getRoot();
        if (this.form) {
            const checkForm = this.checkForm();
            if (!checkForm.error) {
                wizardRoot.dispatchEvent(new Event("wz.form.submit", {
                    bubbles: this.bubbles
                }));
            }
            return;
        }

        wizardRoot.dispatchEvent(new Event("wz.end", {
            bubbles: this.bubbles
        }));
    }

    setCurrentStep(step) {
        this.current_step = this.setStep(step);
    }

    getCurrentStep() {
        return this.current_step;
    }

    setStep(step) {
        const currentStep = clampStep(Number(step), this.steps || this.getTotalSteps());
        this.last_step = Math.max(currentStep, clampStep(this.last_step, this.steps || this.getTotalSteps()));
        return currentStep;
    }

    setNavEvent() {
        const wizardRoot = this.getRoot();
        wizardRoot.addEventListener("click", (event) => {
            const target = event.target.closest(`${this.wz_nav} ${this.wz_step}`);
            if (target) {
                event.preventDefault();
                this.onClick(target);
            }
        });
        this.navEventsBound = true;
    }

    setBtnEvent() {
        const wizardRoot = this.getRoot();
        wizardRoot.addEventListener("click", (event) => {
            const target = event.target.closest(`${this.wz_buttons} ${this.wz_button}`);
            if (target) {
                event.preventDefault();
                if (target.classList.contains(selectorToClassName(this.wz_finish) || "")) {
                    this.onClickFinish();
                } else {
                    this.onClick(target);
                }
            }
        });
        this.buttonEventsBound = true;
    }

    highlightElement(element, type) {
        const customHighlightClass = selectorToClassName(this.wz_highlight);
        const classes = [INTERNAL_CLASSES.highlight, customHighlightClass, type].filter(Boolean);

        element.classList.add(...classes);
        setTimeout(() => {
            element.classList.remove(...classes);
        }, this.highlight_time);
    }

    bindEvents() {
        switch (this.navigation) {
            case "all":
            case "nav":
                if (!this.navEventsBound) {
                    this.setNavEvent();
                }
                if (!this.buttonEventsBound) {
                    this.setBtnEvent();
                }
                break;
            case "buttons":
                if (!this.buttonEventsBound) {
                    this.setBtnEvent();
                }
                break;
            default:
                break;
        }
    }

    createButton(text, internalClasses, selectorClasses) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = text;
        addClassNames(button, internalClasses);
        selectorClasses.forEach((selector) => addClassFromSelector(button, selector));
        return button;
    }

    decorateStructuralClasses(wizardRoot) {
        addClassNames(wizardRoot, [INTERNAL_CLASSES.root]);

        const wizardContent = wizardRoot.querySelector(this.wz_content);
        if (wizardContent) {
            addClassNames(wizardContent, [INTERNAL_CLASSES.content]);
        }

        const navigation = wizardRoot.querySelector(this.wz_nav);
        if (navigation) {
            addClassNames(navigation, [INTERNAL_CLASSES.nav]);
        }

        wizardRoot.querySelectorAll(this.wz_step).forEach((step) => {
            addClassNames(step, [INTERNAL_CLASSES.step]);
        });

        const buttons = wizardRoot.querySelector(this.wz_buttons);
        if (buttons) {
            addClassNames(buttons, [INTERNAL_CLASSES.buttons]);
        }

        wizardRoot.querySelectorAll(`${this.wz_buttons} ${this.wz_button}`).forEach((button) => {
            addClassNames(button, [INTERNAL_CLASSES.button]);
        });
    }

    getRoot() {
        if (this.root && this.root.isConnected) {
            return this.root;
        }

        const wizardRoot = document.querySelector(this.wz_class);
        if (!wizardRoot) {
            throw new Error(this.i18n.empty_wz);
        }

        this.root = wizardRoot;
        return wizardRoot;
    }

    getContentElement(wizardRoot) {
        const wizardContent = wizardRoot.querySelector(this.wz_content);
        if (!wizardContent) {
            throw new Error(this.i18n.empty_content);
        }

        return wizardContent;
    }

    getTotalSteps() {
        const wizardContent = this.getContentElement(this.getRoot());
        return wizardContent.querySelectorAll(this.wz_step).length;
    }

    normalizeCurrentStep() {
        const totalSteps = this.steps || this.getTotalSteps();
        this.current_step = clampStep(this.current_step, totalSteps);
        this.last_step = clampStep(this.last_step, totalSteps);
    }

    syncUI(wizardRoot) {
        const wizardContent = this.getContentElement(wizardRoot);
        const contentSteps = Array.from(wizardContent.querySelectorAll(this.wz_step));

        this.normalizeCurrentStep();
        toggleActiveStep(contentSteps, this.getCurrentStep());

        if (this.nav) {
            const navigation = wizardRoot.querySelector(this.wz_nav);
            if (navigation) {
                const navigationSteps = Array.from(navigation.querySelectorAll(this.wz_step));
                toggleActiveStep(navigationSteps, this.getCurrentStep());
            }
        }

        if (this.buttons) {
            const buttons = wizardRoot.querySelector(this.wz_buttons);
            if (buttons) {
                const nextButton = buttons.querySelector(`${this.wz_button}${this.wz_next}`);
                const prevButton = buttons.querySelector(`${this.wz_button}${this.wz_prev}`);
                const finishButton = buttons.querySelector(`${this.wz_button}${this.wz_finish}`);

                if (nextButton && prevButton && finishButton) {
                    this.checkButtons(nextButton, prevButton, finishButton);
                }
            }
        }
    }
}

export { DEFAULT_OPTIONS };
export default Wizard;
