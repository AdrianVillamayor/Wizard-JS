
document.addEventListener("wz.ready", function (e) {
    console.log(`
        My body is ready

        - Target -
        ${e.detail.target}

        - Elem -
        ${e.detail.elem}
    `)
});

let args = {
    highlight: true,
    highlight_time: 1000,
    // wz_highlight: ".alert",
    // highlight_type: { "error": "danger" }
};

const wizard = new Wizard(args);

wizard.init();

let el = document.querySelector('.wizard');


el.addEventListener("wz.lock", function (e) {
    console.log("Wizard is locked");
});

el.addEventListener("wz.unlock", function (e) {
    console.log("Wizard is unlocked");
});

el.addEventListener("wz.btn.prev", function (e) {
    console.log("Prev Step");
});

el.addEventListener("wz.btn.next", function (e) {
    console.log("Next Step");
});

el.addEventListener("wz.nav.forward", function (e) {
    console.log("Forward nav");
});

el.addEventListener("wz.nav.backward", function (e) {
    console.log("Backward nav");
});

el.addEventListener("wz.form.submit", function (e) {
    console.log("Form Submit");
});

el.addEventListener("wz.end", function (e) {
    console.log("Wizard is finished");
});

el.addEventListener("wz.reset", function (e) {
    console.log("Wizard has restarted");
});

el.addEventListener("wz.error", function (e) {
    console.log(`
        id => ${e.detail.id}
    
        msg => ${e.detail.msg}
    `);

    console.log(e.detail.target)
});


el.addEventListener("wz.update", function (e) {
    console.log(`
        My body is updated

        - Target -
        ${e.detail.target}

        - Elem -
        ${e.detail.elem}
    `)
});



var boton = document.getElementById("setStep");

boton.onclick = function () {
    setStep(wizard)
    console.log("Se ha hecho clic en el botón");
};


function setStep(wizard) {
    $html = `<div class="card card-body m-4 wizard-step" data-id="patata" data-title="Adrii"> <label class="question"> Embedded step </label> <input type="text" maxlength="100" name="patata" class="form-control required" placeholder="Embedded step"> </div>`;

    const wz = document.querySelector(wizard.wz_class);
    const wz_content = wz.querySelector(wizard.wz_content);

    let target = wz_content.querySelector(`${wizard.wz_step}[data-step="8"]`)

    target.insertAdjacentHTML('beforebegin', $html);

    wizard.update();
}