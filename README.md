![Badge-glow](https://img.shields.io/badge/WizardJS-v1.9.6-blue?style=flat-square) [![jsDelivr hits (GitHub)](https://data.jsdelivr.com/v1/package/gh/AdrianVillamayor/Wizard-JS/badge)](https://www.jsdelivr.com/package/gh/AdrianVillamayor/Wizard-JS) ![GitHub repo size](https://img.shields.io/github/repo-size/AdrianVillamayor/Wizard-JS?style=flat-square)

# Wizard-JS - Wizard Vanilla JavaScript

A lightweight wizard UI component that supports accessibility and HTML5 in JavaScript Vanilla.

<br>

# Installation 
Add this code. [cdn](https://www.jsdelivr.com/package/gh/AdrianVillamayor/Wizard-JS)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AdrianVillamayor/Wizard-JS@1.9.6/styles/css/main.css">
```

```html
<script src="https://cdn.jsdelivr.net/gh/AdrianVillamayor/Wizard-JS@1.9.6/src/wizard.min.js"></script>
```
<br>

# Usage

To display content without field control
```html
<div class="wizard">
    <aside class="wizard-content container">
        <div class="wizard-step">
            <!-- Step content -->
        </div>
    </aside>
</div>
```
<br>

For wizards with form purpose, it manages the required fields and validates them.
```html
<form class="wizard" method="POST">
    <aside class="wizard-content container">
        <div class="wizard-step">
	   <input type="text" name="name" class="required" placeholder="Enter a short campaign name">
        </div>
    </aside>
</form>
```
<br>

To **launch** the wizard
```javascript
let args = {
	"wz_class": ".wizard",
	"wz_nav_style": "dots",
	"wz_button_style": ".btn .btn-sm .mx-3",
	"wz_ori": "vertical",
	"buttons": true,
	"navigation": 'buttons',
	"finish": "Save!"
};

const wizard = new Wizard(args);

wizard.init();
```
<br>

To **restart** the wizard
```javascript
wizard.reset();
```
<br>

Allows to **update** the wizard, deleting or adding steps 
```javascript
wizard.update();
```
<br>

To **lock** the wizard in one step
```javascript
wizard.lock();
```
<br>

To **unlock** the wizard
```javascript
wizard.unlock();
```
<br>

## HTML Tags
 `[data-title]` => Set the step title for the nav, if left blank the system will automatically add `Step + step number` as the title.
```html
<div class="wizard-step" data-title="Configuration"> 
```
If not defined, it is treated as `default`.

<br>

## Config Wizard
Options allowing to modify the behavior and actions
| Parameter      | Type   | Default          |  Definition / Value   |
| -------------  | ------ | ---------------- | --------------------- |
| `wz_class`     | String | .wizard          | Wizard main container target |
| `wz_ori`       | String | .horizontal      | Wizard orientation |
| `wz_nav`       | String | .wizard-nav      | Nav container class |
| `wz_nav_style` | String | dots             | Style of navigation steps / `dots`, `tabs`, `progress` |
| `wz_content`   | String | .wizard-content  | Body container class |
| `wz_buttons`   | String | .wizard-buttons  | Action button container class |
| `wz_button`    | String | .wizard-btn      | Class of Prev, Next and Finish action buttons |
| `wz_button_style`    | String | .btn       | Basic button style |
| `wz_step`      | String | .wizard-step     | Class for both nav and body steps |
| `wz_form`      | String | .wizard-form     | Class of the form that contains the wizard |
| `wz_next`      | String | .next            | Class of Next action button |
| `wz_prev`      | String | .prev            | Class of Prev action button |
| `wz_finish`    | String | .finish          | Class of Finish action button |
| `current_step` | int    | 0                | Active wizard step |
| `steps`        | int    | 0                | Number of wizard steps |
| `navigation`   | String | all              | Allows you to change the navigation mode / `buttons`, `nav`, `all` |
| `buttons`      | Bool   | true             | Allows you to show or hide the action buttons |
| `nav`          | Bool   | true             | Allows you to show or hide the header navigation |
| `next`         | String | Next             | Next button text |
| `prev`         | String | Prev             | Prev button text |
| `finish`       | String | Submit           | Finish button text |


<br>

# Events Management

To identify when the wizard is fully generated and loaded.

This event is a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) and has as custom parameters inside details:

- target: wz_class
- elem: DOM element

```javascript
document.addEventListener("wz.ready", function (e) {
    console.log(`↓ Target ↓`)
    console.log(e.detail.target) // .wizard

    console.log(`↓ DOM Elem ↓`)
    console.log(e.detail.elem) // DOM form#wizard.wizard.horizontal
});
```
<br>

Events that are part of the wizard
```javascript
let wz_class = ".wizard";
let $wz_doc = document.querySelector(wz_class)
```

When the wizard is locked in a step
```javascript
$wz_doc.addEventListener("wz.lock", function (e) {
	alert("Wizard is locked");
});
```
<br>

When the wizard is unlocked in one step
```javascript
$wz_doc.addEventListener("wz.unlock", function (e) {
	alert("Wizard is unlocked");
});
```
<br>

Moving on to the prev step
```javascript
$wz_doc.addEventListener("wz.btn.prev", function (e) {
	alert("Prev Step");
});
```
<br>

Moving on to the next step
```javascript
$wz_doc.addEventListener("wz.btn.next", function (e) {
	alert("Next Step");
});
```
<br>

Moving steps forward with the navbar
```javascript
$wz_doc.addEventListener("wz.nav.forward", function (e) {
	alert("Forward Nav");
});
```
<br>

Moving steps backward with the navbar
```javascript
$wz_doc.addEventListener("wz.nav.backward", function (e) {
	alert("Backward Nav");
});
```
<br>

Error validating the data of the active form step (CustomEvent)

- id: Error ID
- msg: i18n message

```javascript
$wz_doc.addEventListener("wz.error", function (e) {
    console.log(`↓ ID ↓`)
    console.log(e.detail.id) // form_validaton

    console.log(`↓ Message ↓`)
    console.log(e.detail.msg) //options.i18n.form_validation
});
```
<br>

If it is a form, at the end it will fire the following event
```javascript
$wz_doc.addEventListener("wz.form.submit", function (e) {
	alert("Form Submit");
});
```
<br>

If it is not a form, at the end it will fire the following event
```javascript
$wz_doc.addEventListener("wz.end", function (e) {
	alert("Wizard is finished");
});
```
<br>

When it is restarted it generates the following event
```javascript
$wz_doc.addEventListener("wz.reset", function (e) {
	alert("Wizard has restarted");
});
```
<br>

To identify when the wizard is updated. (CustomEvent)

- target: wz_class
- elem: DOM element

```javascript
$wz_doc.addEventListener("wz.update", function (e) {
    console.log(`↓ Target ↓`)
    console.log(e.detail.target) // .wizard

    console.log(`↓ DOM Elem ↓`)
    console.log(e.detail.elem) // DOM form#wizard.wizard.horizontal
});
```
<br>

# Demo
Try it 

[![Codepen](https://user-images.githubusercontent.com/29653964/116972608-8f6bca80-acbb-11eb-98c1-8a3b19705de1.png)](https://codepen.io/adrianvillamayor/pen/VwWPVME)

<br>

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

<br>

# License
[MIT](https://github.com/AdrianVillamayor/Wizard-JS/blob/main/LICENSE)

### Thanks for your help! 🎉
