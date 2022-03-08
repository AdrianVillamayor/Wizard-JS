let args = {
    "wz_nav_style": "dots",
    "navigation": "all",
    "wz_ori": "horizontal"
};

const wizard = new Wizard(args);

wizard.init();


document.addEventListener("submitWizard", function (e) {
	alert("FORM SUBMIT");
});

document.addEventListener("endWizard", function (e) {
	alert("WIZARD END");
});