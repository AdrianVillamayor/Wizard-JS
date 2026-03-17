export type WizardNavigation = "all" | "nav" | "buttons";
export type WizardTrigger = "next" | "prev" | "nav.forward" | "nav.backward";

export interface WizardInstance {
    getCurrentStep(): number;
    getRoot(): HTMLElement;
    setCurrentStep(step: number): void;
    steps: number;
}

export interface BeforeStepChangeContext {
    wizard: WizardInstance;
    currentStep: number;
    nextStep: number;
    trigger: WizardTrigger;
    currentStepElement: HTMLElement | null;
    nextStepElement: HTMLElement | null;
    isAsyncStep: boolean;
}

export type BeforeStepChangeResult = boolean | void | Promise<boolean | void>;
export type BeforeStepChangeHook = (context: BeforeStepChangeContext) => BeforeStepChangeResult;

export interface HighlightTypeMap {
    error: string;
    warning: string;
    success: string;
    info: string;
    [key: string]: string;
}

export interface WizardI18n {
    empty_wz: string;
    empty_nav: string;
    empty_content: string;
    empty_html: string;
    empty_update: string;
    no_nav: string;
    form_validation: string;
    diff_steps: string;
    random: string;
    already_defined: string;
    title: string;
}

export interface ResolvedWizardOptions {
    wz_class: string;
    wz_nav: string;
    wz_ori: string;
    wz_nav_style: string;
    wz_content: string;
    wz_buttons: string;
    wz_button: string;
    wz_button_style: string;
    wz_step: string;
    wz_form: string;
    wz_next: string;
    wz_prev: string;
    wz_finish: string;
    wz_highlight: string;
    bubbles: boolean;
    nav: boolean;
    buttons: boolean;
    highlight: boolean;
    current_step: number;
    steps: number;
    highlight_time: number;
    navigation: WizardNavigation;
    next: string;
    prev: string;
    finish: string;
    before_step_change: BeforeStepChangeHook | null;
    highlight_type: HighlightTypeMap;
    i18n: WizardI18n;
}

export interface WizardOptions extends Partial<Omit<ResolvedWizardOptions, "highlight_type" | "i18n">> {
    highlight_type?: Partial<HighlightTypeMap>;
    i18n?: Partial<WizardI18n>;
}

export type WizardField = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export interface ValidationOptions {
    highlight: boolean;
    highlight_type: HighlightTypeMap;
    highlightElement: (element: WizardField, type: string) => void;
}

export interface ValidationResult {
    error: boolean;
    target: WizardField[];
}

export interface WizardReadyDetail {
    target: string;
    elem: HTMLElement;
}

export interface WizardUpdateDetail {
    target: string;
    elem: HTMLElement;
}

export interface WizardErrorDetail {
    id: string;
    msg: string;
    target: WizardField[];
}

export interface WizardPendingDetail {
    target: string;
    elem: HTMLElement;
    currentStep: number;
    nextStep: number;
    trigger: WizardTrigger;
    isAsyncStep: boolean;
}

export interface WizardPendingDoneDetail extends WizardPendingDetail {
    allowed: boolean;
}

export interface WizardPendingErrorDetail extends WizardPendingDetail {
    error: unknown;
}
