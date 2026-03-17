import type { ResolvedWizardOptions, WizardOptions } from "./types";

export const INTERNAL_CLASSES = Object.freeze({
    root: "wizard",
    nav: "wizard-nav",
    content: "wizard-content",
    buttons: "wizard-buttons",
    button: "wizard-btn",
    step: "wizard-step",
    form: "wizard-form",
    next: "next",
    prev: "prev",
    finish: "finish",
    highlight: "highlight-error"
});

export const DEFAULT_OPTIONS = Object.freeze({
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
    bubbles: true,
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
} satisfies ResolvedWizardOptions);

export function createOptions(args: WizardOptions = {}): ResolvedWizardOptions {
    return {
        ...DEFAULT_OPTIONS,
        ...args,
        highlight_type: {
            ...DEFAULT_OPTIONS.highlight_type,
            ...args.highlight_type
        },
        i18n: {
            ...DEFAULT_OPTIONS.i18n,
            ...args.i18n
        }
    };
}
