import { DEFAULT_OPTIONS, INTERNAL_CLASSES, createOptions } from "./defaults";
import {
    addClassFromSelector,
    addClassNames,
    clampStep,
    getButtonStyleClasses,
    selectorToClassName,
    toggleActiveStep
} from "./dom";
import { validateFields } from "./validation";
import type {
    BeforeStepChangeContext,
    ResolvedWizardOptions,
    ValidationResult,
    WizardErrorDetail,
    WizardField,
    WizardPendingDetail,
    WizardPendingDoneDetail,
    WizardPendingErrorDetail,
    WizardOptions,
    WizardReadyDetail,
    WizardTrigger,
    WizardUpdateDetail
} from "./types";

class Wizard implements ResolvedWizardOptions {
    options: ResolvedWizardOptions;
    wz_class!: string;
    wz_nav!: string;
    wz_ori!: string;
    wz_nav_style!: string;
    wz_content!: string;
    wz_buttons!: string;
    wz_button!: string;
    wz_button_style!: string;
    wz_step!: string;
    wz_form!: string;
    wz_next!: string;
    wz_prev!: string;
    wz_finish!: string;
    wz_highlight!: string;
    bubbles!: boolean;
    nav!: boolean;
    buttons!: boolean;
    highlight!: boolean;
    current_step!: number;
    steps!: number;
    highlight_time!: number;
    navigation!: ResolvedWizardOptions["navigation"];
    next!: string;
    prev!: string;
    finish!: string;
    before_step_change!: ResolvedWizardOptions["before_step_change"];
    highlight_type!: ResolvedWizardOptions["highlight_type"];
    i18n!: ResolvedWizardOptions["i18n"];
    last_step: number;
    form: boolean;
    locked: boolean;
    pending: boolean;
    locked_step: number | null;
    root: HTMLElement | null;
    navEventsBound: boolean;
    buttonEventsBound: boolean;

    constructor(args: WizardOptions = {}) {
        this.options = createOptions(args);
        Object.assign(this, this.options, {
            last_step: this.options.current_step,
            form: false,
            locked: false,
            pending: false,
            locked_step: null,
            root: null,
            navEventsBound: false,
            buttonEventsBound: false
        });
        this.last_step = this.options.current_step;
        this.form = false;
        this.locked = false;
        this.pending = false;
        this.locked_step = null;
        this.root = null;
        this.navEventsBound = false;
        this.buttonEventsBound = false;
    }

    init(): void {
        const wizardRoot = document.querySelector<HTMLElement>(this.wz_class);
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
        this.bindEvents();

        wizardRoot.style.display = wizardRoot.classList.contains("vertical") ? "flex" : "block";
        wizardRoot.setAttribute("data-wz-load", "true");

        document.dispatchEvent(new CustomEvent<WizardReadyDetail>("wz.ready", {
            bubbles: this.bubbles,
            detail: {
                target: this.wz_class,
                elem: wizardRoot
            }
        }));
    }

    update(): void {
        const wizardRoot = this.getRoot();
        if (wizardRoot.getAttribute("data-wz-load") !== "true") {
            throw new Error(this.i18n.empty_wz);
        }

        this.decorateStructuralClasses(wizardRoot);
        this.checkAndPrepare(wizardRoot);
        wizardRoot.dispatchEvent(new CustomEvent<WizardUpdateDetail>("wz.update", {
            bubbles: this.bubbles,
            detail: {
                target: this.wz_class,
                elem: wizardRoot
            }
        }));
    }

    reset(): void {
        const wizardRoot = this.getRoot();
        this.setCurrentStep(0);
        this.syncUI(wizardRoot);
        wizardRoot.dispatchEvent(new Event("wz.reset", {
            bubbles: this.bubbles
        }));
    }

    lock(): void {
        this.locked = true;
        this.locked_step = this.getCurrentStep();
    }

    unlock(): void {
        const wizardRoot = this.getRoot();
        this.locked = false;
        this.locked_step = null;
        wizardRoot.dispatchEvent(new Event("wz.unlock", {
            bubbles: this.bubbles
        }));
    }

    updateToForm(): void {
        const wizardRoot = this.getRoot();
        const wizardContent = this.getContentElement(wizardRoot);

        if (wizardContent.tagName !== "FORM") {
            const wizardContentClass = wizardContent.getAttribute("class") ?? "";
            const wizardContentMarkup = wizardContent.innerHTML;

            wizardContent.remove();

            const form = document.createElement("form");
            form.setAttribute("method", "POST");
            form.setAttribute("class", `${wizardContentClass} ${this.wz_form.replace(".", "")}`.trim());
            form.innerHTML = wizardContentMarkup;
            wizardRoot.appendChild(form);
            this.decorateStructuralClasses(wizardRoot);
        }
    }

    checkForm(): ValidationResult {
        const wizardContent = this.getContentElement(this.getRoot());
        const steps = Array.from(wizardContent.querySelectorAll<HTMLElement>(this.wz_step));
        const activeStep = steps[this.getCurrentStep()];

        if (!activeStep) {
            return { error: false, target: [] };
        }

        const fields = Array.from(activeStep.querySelectorAll<WizardField>("input, textarea, select"));
        if (fields.length === 0) {
            return { error: false, target: [] };
        }

        return validateFields(wizardContent, fields, {
            highlight: this.highlight,
            highlight_type: this.highlight_type,
            highlightElement: this.highlightElement.bind(this)
        });
    }

    setNav(wizardRoot: HTMLElement): void {
        let navigation = wizardRoot.querySelector<HTMLElement>(this.wz_nav);
        if (navigation && this.nav) {
            navigation.remove();
            navigation = null;
        }

        if (!navigation && this.nav) {
            const wizardContent = this.getContentElement(wizardRoot);
            const steps = Array.from(wizardContent.querySelectorAll<HTMLElement>(this.wz_step));
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

    setButtons(): void {
        const wizardRoot = this.getRoot();
        let buttonContainer = wizardRoot.querySelector<HTMLElement>(this.wz_buttons);

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

    checkButtons(nextButton: HTMLButtonElement, prevButton: HTMLButtonElement, finishButton: HTMLButtonElement): void {
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

    checkAndPrepare(wizardRoot: HTMLElement): void {
        this.setNav(wizardRoot);

        const wizardContent = this.getContentElement(wizardRoot);
        const contentSteps = Array.from(wizardContent.querySelectorAll<HTMLElement>(this.wz_step));
        if (contentSteps.length === 0) {
            throw new Error(this.i18n.empty_content);
        }

        let navigation: HTMLElement | null = null;
        let navigationSteps: HTMLElement[] = [];
        if (this.nav) {
            navigation = wizardRoot.querySelector<HTMLElement>(this.wz_nav);
            if (!navigation) {
                throw new Error(this.i18n.empty_nav);
            }

            navigationSteps = Array.from(navigation.querySelectorAll<HTMLElement>(this.wz_step));
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

    async onClick(element: HTMLElement): Promise<void> {
        const wizardRoot = this.getRoot();
        if (this.pending) {
            return;
        }

        if (this.locked && this.locked_step === this.getCurrentStep()) {
            wizardRoot.dispatchEvent(new Event("wz.lock", {
                bubbles: this.bubbles
            }));
            return;
        }

        const parent = element.closest<HTMLElement>(this.wz_class) ?? wizardRoot;
        const isButton = element.classList.contains(selectorToClassName(this.wz_button) ?? "");
        const isNavigationStep = element.classList.contains(selectorToClassName(this.wz_step) ?? "");

        const step = element.getAttribute("data-wz-step");
        let nextStep = step !== null ? parseInt(step, 10) : this.getCurrentStep();
        let trigger: WizardTrigger | null = null;

        if (isButton) {
            if (element.classList.contains(selectorToClassName(this.wz_prev) ?? "")) {
                nextStep -= 1;
                trigger = "prev";
            } else if (element.classList.contains(selectorToClassName(this.wz_next) ?? "")) {
                nextStep += 1;
                trigger = "next";
            }
        }

        const movingForward = nextStep > this.getCurrentStep();
        if (isNavigationStep) {
            if (movingForward) {
                trigger = "nav.forward";
            } else if (nextStep < this.getCurrentStep()) {
                trigger = "nav.backward";
            }
        }

        if (this.form && this.navigation !== "buttons" && movingForward && nextStep !== this.getCurrentStep() + 1) {
            nextStep = nextStep >= this.last_step ? this.last_step : this.getCurrentStep() + 1;
        }

        if (this.form) {
            const checkForm = this.checkForm();
            if (checkForm.error) {
                if (movingForward) {
                    wizardRoot.dispatchEvent(new CustomEvent<WizardErrorDetail>("wz.error", {
                        bubbles: this.bubbles,
                        detail: {
                            id: "form_validation",
                            msg: this.i18n.form_validation,
                            target: checkForm.target
                        }
                    }));
                }

                this.last_step = this.getCurrentStep();
                if (this.getCurrentStep() < nextStep) {
                    return;
                }
            }
        }

        if (movingForward && trigger) {
            const shouldProceed = await this.runBeforeStepChange(nextStep, trigger, wizardRoot);
            if (!shouldProceed) {
                return;
            }
        }

        if (trigger) {
            this.dispatchStepEvent(trigger, wizardRoot);
        }

        this.setCurrentStep(nextStep);
        this.syncUI(parent);
    }

    onClickFinish(): void {
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

    setCurrentStep(step: number): void {
        this.current_step = this.setStep(step);
    }

    getCurrentStep(): number {
        return this.current_step;
    }

    setStep(step: number): number {
        const totalSteps = this.steps || this.getTotalSteps();
        const currentStep = clampStep(Number(step), totalSteps);
        this.last_step = Math.max(currentStep, clampStep(this.last_step, totalSteps));
        return currentStep;
    }

    setNavEvent(): void {
        const wizardRoot = this.getRoot();
        wizardRoot.addEventListener("click", (event) => {
            if (!(event.target instanceof Element)) {
                return;
            }

            const target = event.target.closest<HTMLElement>(`${this.wz_nav} ${this.wz_step}`);
            if (target) {
                event.preventDefault();
                void this.onClick(target);
            }
        });
        this.navEventsBound = true;
    }

    setBtnEvent(): void {
        const wizardRoot = this.getRoot();
        wizardRoot.addEventListener("click", (event) => {
            if (!(event.target instanceof Element)) {
                return;
            }

            const target = event.target.closest<HTMLElement>(`${this.wz_buttons} ${this.wz_button}`);
            if (target) {
                event.preventDefault();
                if (target.classList.contains(selectorToClassName(this.wz_finish) ?? "")) {
                    this.onClickFinish();
                } else {
                    void this.onClick(target);
                }
            }
        });
        this.buttonEventsBound = true;
    }

    highlightElement(element: WizardField, type: string): void {
        const customHighlightClass = selectorToClassName(this.wz_highlight);
        const classes = [INTERNAL_CLASSES.highlight, customHighlightClass, type].filter(Boolean) as string[];

        element.classList.add(...classes);
        setTimeout(() => {
            element.classList.remove(...classes);
        }, this.highlight_time);
    }

    bindEvents(): void {
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

    createButton(text: string, internalClasses: string[], selectorClasses: string[]): HTMLButtonElement {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = text;
        addClassNames(button, internalClasses);
        selectorClasses.forEach((selector) => addClassFromSelector(button, selector));
        return button;
    }

    decorateStructuralClasses(wizardRoot: HTMLElement): void {
        addClassNames(wizardRoot, [INTERNAL_CLASSES.root]);

        const wizardContent = wizardRoot.querySelector<HTMLElement>(this.wz_content);
        if (wizardContent) {
            addClassNames(wizardContent, [INTERNAL_CLASSES.content]);
        }

        const navigation = wizardRoot.querySelector<HTMLElement>(this.wz_nav);
        if (navigation) {
            addClassNames(navigation, [INTERNAL_CLASSES.nav]);
        }

        wizardRoot.querySelectorAll<HTMLElement>(this.wz_step).forEach((step) => {
            addClassNames(step, [INTERNAL_CLASSES.step]);
        });

        const buttons = wizardRoot.querySelector<HTMLElement>(this.wz_buttons);
        if (buttons) {
            addClassNames(buttons, [INTERNAL_CLASSES.buttons]);
        }

        wizardRoot.querySelectorAll<HTMLElement>(`${this.wz_buttons} ${this.wz_button}`).forEach((button) => {
            addClassNames(button, [INTERNAL_CLASSES.button]);
        });
    }

    getRoot(): HTMLElement {
        if (this.root && this.root.isConnected) {
            return this.root;
        }

        const wizardRoot = document.querySelector<HTMLElement>(this.wz_class);
        if (!wizardRoot) {
            throw new Error(this.i18n.empty_wz);
        }

        this.root = wizardRoot;
        return wizardRoot;
    }

    getContentElement(wizardRoot: ParentNode): HTMLElement {
        const wizardContent = wizardRoot.querySelector<HTMLElement>(this.wz_content);
        if (!wizardContent) {
            throw new Error(this.i18n.empty_content);
        }

        return wizardContent;
    }

    getTotalSteps(): number {
        const wizardContent = this.getContentElement(this.getRoot());
        return wizardContent.querySelectorAll(this.wz_step).length;
    }

    getStepElement(index: number, wizardRoot: ParentNode = this.getRoot()): HTMLElement | null {
        const wizardContent = this.getContentElement(wizardRoot);
        const steps = Array.from(wizardContent.querySelectorAll<HTMLElement>(this.wz_step));
        return steps[index] ?? null;
    }

    isAsyncStep(index: number, wizardRoot: ParentNode = this.getRoot()): boolean {
        const stepElement = this.getStepElement(index, wizardRoot);
        if (!stepElement) {
            return false;
        }

        const asyncMarkers = [
            stepElement.getAttribute("data-wz-async"),
            stepElement.getAttribute("data-async-step")
        ];

        return asyncMarkers.some((value) => value === "" || value === "true");
    }

    createBeforeStepChangeContext(nextStep: number, trigger: WizardTrigger, wizardRoot: HTMLElement): BeforeStepChangeContext {
        const currentStep = this.getCurrentStep();

        return {
            wizard: this,
            currentStep,
            nextStep,
            trigger,
            currentStepElement: this.getStepElement(currentStep, wizardRoot),
            nextStepElement: this.getStepElement(nextStep, wizardRoot),
            isAsyncStep: this.isAsyncStep(currentStep, wizardRoot)
        };
    }

    setPendingState(isPending: boolean, wizardRoot: HTMLElement): void {
        this.pending = isPending;
        wizardRoot.setAttribute("data-wz-pending", String(isPending));
    }

    dispatchStepEvent(trigger: WizardTrigger, wizardRoot: HTMLElement): void {
        const eventNameMap: Record<WizardTrigger, string> = {
            next: "wz.btn.next",
            prev: "wz.btn.prev",
            "nav.forward": "wz.nav.forward",
            "nav.backward": "wz.nav.backward"
        };

        wizardRoot.dispatchEvent(new Event(eventNameMap[trigger], {
            bubbles: this.bubbles
        }));
    }

    async runBeforeStepChange(nextStep: number, trigger: WizardTrigger, wizardRoot: HTMLElement): Promise<boolean> {
        if (!this.before_step_change) {
            return true;
        }

        const context = this.createBeforeStepChangeContext(nextStep, trigger, wizardRoot);
        const detail: WizardPendingDetail = {
            target: this.wz_class,
            elem: wizardRoot,
            currentStep: context.currentStep,
            nextStep: context.nextStep,
            trigger: context.trigger,
            isAsyncStep: context.isAsyncStep
        };

        this.setPendingState(true, wizardRoot);
        wizardRoot.dispatchEvent(new CustomEvent<WizardPendingDetail>("wz.pending", {
            bubbles: this.bubbles,
            detail
        }));

        try {
            const result = await this.before_step_change(context);
            const allowed = result !== false;

            wizardRoot.dispatchEvent(new CustomEvent<WizardPendingDoneDetail>("wz.pending.done", {
                bubbles: this.bubbles,
                detail: {
                    ...detail,
                    allowed
                }
            }));

            return allowed;
        } catch (error) {
            wizardRoot.dispatchEvent(new CustomEvent<WizardPendingErrorDetail>("wz.pending.error", {
                bubbles: this.bubbles,
                detail: {
                    ...detail,
                    error
                }
            }));

            return false;
        } finally {
            this.setPendingState(false, wizardRoot);
        }
    }

    normalizeCurrentStep(): void {
        const totalSteps = this.steps || this.getTotalSteps();
        this.current_step = clampStep(this.current_step, totalSteps);
        this.last_step = clampStep(this.last_step, totalSteps);
    }

    syncUI(wizardRoot: HTMLElement): void {
        const wizardContent = this.getContentElement(wizardRoot);
        const contentSteps = Array.from(wizardContent.querySelectorAll<HTMLElement>(this.wz_step));

        this.normalizeCurrentStep();
        toggleActiveStep(contentSteps, this.getCurrentStep());

        if (this.nav) {
            const navigation = wizardRoot.querySelector<HTMLElement>(this.wz_nav);
            if (navigation) {
                const navigationSteps = Array.from(navigation.querySelectorAll<HTMLElement>(this.wz_step));
                toggleActiveStep(navigationSteps, this.getCurrentStep());
            }
        }

        if (this.buttons) {
            const buttons = wizardRoot.querySelector<HTMLElement>(this.wz_buttons);
            if (buttons) {
                const nextButton = buttons.querySelector<HTMLButtonElement>(`${this.wz_button}${this.wz_next}`);
                const prevButton = buttons.querySelector<HTMLButtonElement>(`${this.wz_button}${this.wz_prev}`);
                const finishButton = buttons.querySelector<HTMLButtonElement>(`${this.wz_button}${this.wz_finish}`);

                if (nextButton && prevButton && finishButton) {
                    this.checkButtons(nextButton, prevButton, finishButton);
                }
            }
        }
    }
}

export { DEFAULT_OPTIONS, Wizard };
export default Wizard;
