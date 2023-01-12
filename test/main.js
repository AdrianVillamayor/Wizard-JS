document.getElementById("create_wizard").onclick = function () {
    createWz2();
};

document.getElementById("create_wizard_form").onclick = function () {
    createWz();
};


document.addEventListener("readyWizard", function (e) {

    console.log("My body is ready")

    console.log(`↓ Target ↓`)
    console.log(e.detail.target)

    console.log(`↓ Elem ↓`)
    console.log(e.detail.elem)
});

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

    const wizard = new Wizard(args);

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

    el.addEventListener("forwardNavWizard", function (e) {
        console.log("Forward nav 1");
    });

    el.addEventListener("backwardNavWizard", function (e) {
        console.log("Backward nav 1");
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
        "navigation": "nav",
        "wz_ori": "vertical",

        "i18n": {
            "title": "Point"
        }
    };

    const wizard2 = new Wizard(args);

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

    el.addEventListener("forwardNavWizard", function (e) {
        console.log("Forward nav 2");
    });

    el.addEventListener("backwardNavWizard", function (e) {
        console.log("Backward nav 2");
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