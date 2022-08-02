
var wizard, wizard2;

document.getElementById("create_wizard").onclick = function () {
    createWz2();
};

document.getElementById("create_wizard_form").onclick = function () {
    createWz();
};

function createWz() {

    let args = {
        "wz_class": "#wizard",
        "wz_nav_style": "dots",
        "navigation": "all",
        "wz_ori": "horizontal",

        "i18n": {
            "title": "Progress"
        }
    };

    wizard = new Wizard(args);

    wizard.init();

    let el = document.querySelector('#wizard');


    el.addEventListener("lockWizard", function (e) {
        console.log("Wizard is locked 1");
    });

    el.addEventListener("unlockWizard", function (e) {
        console.log("Wizard is unlocked 1");
    });

    el.addEventListener("prevWizard", function (e) {
        console.log("Prev Step 1");
    });


    el.addEventListener("nextWizard", function (e) {
        console.log("Next Step 1");
    });

    el.addEventListener("submitWizard", function (e) {
        console.log("Form Submit 1");
    });


    el.addEventListener("endWizard", function (e) {
        console.log("Wizard is finished 1");
    });


    el.addEventListener("resetWizard", function (e) {
        console.log("Wizard has restarted 1");
    });

    el.addEventListener("errorFormValidatorWizard", function (e) {
        console.log("errorFormValidatorWizard 1");
    });
}

function createWz2() {

    let args = {
        "wz_class": ".wizard2",
        "wz_nav_style": "dots",
        "navigation": "all",
        "wz_ori": "horizontal",

        "i18n": {
            "title": "Progress"
        }
    };

    wizard2 = new Wizard(args);

    wizard2.init();

    let el = document.querySelector('.wizard2');

    el.addEventListener("lockWizard", function (e) {
        console.log("Wizard is locked 2");
    });

    el.addEventListener("unlockWizard", function (e) {
        console.log("Wizard is unlocked 2");
    });

    el.addEventListener("prevWizard", function (e) {
        console.log("Prev Step 2");
    });


    el.addEventListener("nextWizard", function (e) {
        console.log("Next Step 2");
    });


    el.addEventListener("submitWizard", function (e) {
        console.log("Form Submit 2");
    });


    el.addEventListener("endWizard", function (e) {
        console.log("Wizard is finished 2");
    });


    el.addEventListener("resetWizard", function (e) {
        console.log("Wizard has restarted 2");
    });
}