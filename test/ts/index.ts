import Wizard, { type WizardOptions } from "@adrii_/wizard-js";

const options: WizardOptions = {
    wz_class: ".wizard",
    navigation: "all",
    buttons: true,
    nav: true
};

const wizard = new Wizard(options);

void wizard;
