let args = {
    "wz_nav_style": "dots",
};

const wizard = new Wizard(args);

wizard.init();


document.addEventListener("submitWizard", function (e) {
	alert("All cookies accepted");
});