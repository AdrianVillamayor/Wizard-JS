import Wizard from "@adrii_/wizard-js";
import "@adrii_/wizard-js/style.css";

const wizard = new Wizard({
    wz_class: ".wizard",
    navigation: "all",
    buttons: true,
    nav: true,
    finish: "Done"
});

wizard.init();

const status = document.getElementById("status");
if (status) {
    status.textContent = `JS browser test ready: ${typeof wizard.init}`;
}
