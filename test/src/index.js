import Wizard from "@adrii_/wizard-js"

let wz_class = ".wizard";

document.addEventListener("wz.ready", function (e) {
  console.log("My body is ready");

  console.log(`↓ Target ↓`);
  console.log(e.detail.target);

  console.log(`↓ Elem ↓`);
  console.log(e.detail.elem);
});

const args = {
  "wz_class": ".wizard",
  "wz_nav_style": "dots",
  "wz_button_style": ".btn .btn-sm .mx-3",
  "wz_ori": "vertical",
  "buttons": true,
  "navigation": 'all',
  "finish": "Save iie!",
  "bubble": true,
};

const wizard = new Wizard(args);
wizard.init();

document.getElementById("btn_reset").onclick = function () {
  wizard.reset();
};

document.getElementById("btn_lock").onclick = function () {
  wizard.lock();
};

document.getElementById("btn_unlock").onclick = function () {
  wizard.unlock();
};

let $wz_doc = document.querySelector(wz_class);

$wz_doc.addEventListener("wz.btn.prev", function (e) {
  console.log("Prev Step");
});

$wz_doc.addEventListener("wz.btn.next", function (e) {
  console.log("Next Step");
});

$wz_doc.addEventListener("wz.nav.forward", function (e) {
  console.log("Forward Nav");
});

$wz_doc.addEventListener("wz.nav.backward", function (e) {
  console.log("Backward Nav");
});

$wz_doc.addEventListener("wz.form.submit", function (e) {
  alert("Form Submit");
});

$wz_doc.addEventListener("wz.end", function (e) {
  alert("Wizard End");
});

$wz_doc.addEventListener("wz.error", function (e) {
  console.log(`↓ ID ↓`)
  console.log(e.detail.id) // form_validaton

  console.log(`↓ Message ↓`)
  console.log(e.detail.msg) //options.i18n.form_validation
});

$wz_doc.addEventListener("wz.lock", function (e) {
  alert("Wizard locked");
});

$wz_doc.addEventListener("wz.unlock", function (e) {
  alert("Wizard unlocked");
});

$wz_doc.addEventListener("wz.reset", function (e) {
  document.getElementById("formWizard").reset();
  alert("Wizard has restarted");
});

$wz_doc.addEventListener("wz.update", function (e) {
  alert("The Wizard has been updated !");
  console.log(`↓ Target ↓`)
  console.log(e.detail.target) // .wizard

  console.log(`↓ DOM Elem ↓`)
  console.log(e.detail.elem) // DOM form#wizard.wizard.horizontal
});


document.getElementById("btn_append").onclick = function () {
  setStep(wizard);
};

function setStep(wizard) {
  const html = `<div class="card card-body m-4 wizard-step" data-id="patata" data-title="Adrii"> <label class="question"> Embedded step </label> <input type="text" maxlength="100" name="patata" class="form-control required" placeholder="Embedded step"> </div>`;

  const wz = document.querySelector(wizard.wz_class);
  const wz_content = wz.querySelector(wizard.wz_content);

  let target = wz_content.querySelector(`${wizard.wz_step}[data-wz-step="2"]`);

  target.insertAdjacentHTML("beforebegin", html);

  wizard.update();
}
