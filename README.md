[![Build and Lint](https://github.com/AdrianVillamayor/Wizard-JS/actions/workflows/main.yml/badge.svg)](https://github.com/AdrianVillamayor/Wizard-JS/actions/workflows/main.yml)
![Badge-glow](https://img.shields.io/badge/WizardJS-v2.0.3-blue?style=flat-square)
[![jsDelivr hits (GitHub)](https://data.jsdelivr.com/v1/package/gh/AdrianVillamayor/Wizard-JS/badge)](https://www.jsdelivr.com/package/gh/AdrianVillamayor/Wizard-JS)
![GitHub repo size](https://img.shields.io/github/repo-size/AdrianVillamayor/Wizard-JS?style=flat-square)

# Wizard-JS

A lightweight wizard UI component that supports accessibility and HTML5 in Vanilla JavaScript.

## Features

- Supports accessibility (ARIA-compliant).
- Fully customizable wizard steps and navigation.
- Works with both ES modules and CommonJS.
- Built-in form validation and control.
- **New Features:**
  - Conditional required fields using `data-require-if` attribute.
  - Dynamic required fields with `on-active-required` class.
  - Customizable validation highlighting.


## Table of Contents

- [Wizard-JS](#wizard-js)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [CommonJS](#commonjs)
    - [ES Modules](#es-modules)
    - [Example HTML for Wizard](#example-html-for-wizard)
    - [Launch the Wizard](#launch-the-wizard)
    - [Restart the Wizard](#restart-the-wizard)
    - [Update the Wizard](#update-the-wizard)
    - [Lock and Unlock the Wizard](#lock-and-unlock-the-wizard)
  - [Form Validation](#form-validation)
    - [Required Fields](#required-fields)
    - [Conditionally Required Fields](#conditionally-required-fields)
    - [Dynamic Required Fields](#dynamic-required-fields)
    - [Custom Validation Highlighting](#custom-validation-highlighting)
  - [HTML Attributes](#html-attributes)
    - [Data Title Attribute `[data-title]`](#data-title-attribute-data-title)
    - [Data Require If Attribute `[data-require-if]`](#data-require-if-attribute-data-require-if)
  - [Config Wizard](#config-wizard)
    - [i18n Options](#i18n-options)
  - [Events Management](#events-management)
    - [Wizard Ready Event](#wizard-ready-event)
    - [Wizard Update Event](#wizard-update-event)
    - [Lock and Unlock Events](#lock-and-unlock-events)
    - [Navigation Events](#navigation-events)
    - [Validation Error Event](#validation-error-event)
    - [Form Submission and Wizard Completion Events](#form-submission-and-wizard-completion-events)
    - [Reset Event](#reset-event)
  - [Demo](#demo)
  - [Contributing](#contributing)
  - [License](#license)
    - [Thanks for your help! 🎉](#thanks-for-your-help-)

## Installation

You can install the package via npm:

```bash
npm install @adrii_/wizard-js
```

For <a href="https://www.jsdelivr.com/package/gh/AdrianVillamayor/Wizard-JS" target="_blank">CDN</a> usage:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AdrianVillamayor/Wizard-JS@2.0.3/dist/main.min.css">

<script src="https://cdn.jsdelivr.net/gh/AdrianVillamayor/Wizard-JS@2.0.3/dist/index.js"></script>
```

## Usage

### CommonJS

```javascript
const Wizard = require('@adrii_/wizard-js');
const myWizard = new Wizard({
  /* your configuration here */
});

myWizard.init();
```

### ES Modules

```javascript
import Wizard from '@adrii_/wizard-js';
const myWizard = new Wizard({
  /* your configuration here */
});

myWizard.init();
```

### Example HTML for Wizard

For content-only wizards:

```html
<div class="wizard">
    <aside class="wizard-content container">
        <div class="wizard-step">
            <!-- Step content -->
        </div>
        <!-- More steps -->
    </aside>
</div>
```

For wizards with form purpose, it manages the required fields and validates them:

```html
<form class="wizard" method="POST">
    <aside class="wizard-content container">
        <div class="wizard-step">
            <input type="text" name="name" class="required" placeholder="Enter a short campaign name">
        </div>
        <!-- More steps -->
    </aside>
</form>
```

### Launch the Wizard

To **launch** the wizard:

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

### Restart the Wizard

To **restart** the wizard:

```javascript
wizard.reset();
```

### Update the Wizard

To **update** the wizard, deleting or adding steps:

```javascript
wizard.update();
```

### Lock and Unlock the Wizard

To **lock** the wizard at a specific step:

```javascript
wizard.lock();
```

To **unlock** the wizard:

```javascript
wizard.unlock();
```

## Form Validation

Wizard-JS includes built-in form validation for required fields.

### Required Fields

To mark an input as required, add the `required` attribute or the `required` class:

```html
<input type="text" name="email" required>
<!-- or -->
<input type="text" name="email" class="required">
```

### Conditionally Required Fields

You can make fields conditionally required based on the value of another field using the `data-require-if` attribute.

The format is `data-require-if="fieldID:requiredValue"`.

```html
<input type="checkbox" id="subscribe" name="subscribe">

<input type="email" name="email" data-require-if="subscribe:true" placeholder="Enter your email">
```

In this example, the email field becomes required if the checkbox with id `subscribe` is checked (`true`).

### Dynamic Required Fields

Use the `on-active-required` class to mark fields that become required only when the step is active.

```html
<input type="text" name="username" class="on-active-required" placeholder="Enter your username">
```

### Custom Validation Highlighting

You can customize the validation highlighting behavior:

- `highlight`: Set to `true` to enable highlighting invalid fields.
- `highlight_time`: Duration (in milliseconds) to display the highlight. Default is `1000`.
- `highlight_type`: An object to define the classes for different highlight types.

Example:

```javascript
let args = {
    /* Other configurations */
    "highlight": true,
    "highlight_time": 1500,
    "highlight_type": { error: "error", warning: "warning", success: "success", info: "info" }
};
```

## HTML Attributes

### Data Title Attribute `[data-title]`

Set the step title for the navigation. If left blank, the system will automatically add `Step + step number` as the title.

```html
<div class="wizard-step" data-title="Configuration">
    <!-- Step content -->
</div>
```

### Data Require If Attribute `[data-require-if]`

Define conditional required fields based on another field's value.

```html
<input type="email" name="email" data-require-if="subscribe:true" placeholder="Enter your email">
```

## Config Wizard

Options allowing you to modify the behavior and actions:

| Parameter         | Type    | Default                                                                    | Definition / Value                                             |
| ----------------- | ------- | -------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `wz_class`        | String  | `.wizard`                                                                  | Wizard main container target                                   |
| `wz_ori`          | String  | `.horizontal`                                                              | Wizard orientation (`.horizontal`, `.vertical`)                |
| `wz_nav`          | String  | `.wizard-nav`                                                              | Navigation container class                                     |
| `wz_nav_style`    | String  | `dots`                                                                     | Style of navigation steps (`dots`, `tabs`, `progress`)         |
| `wz_content`      | String  | `.wizard-content`                                                          | Body container class                                           |
| `wz_buttons`      | String  | `.wizard-buttons`                                                          | Action button container class                                  |
| `wz_button`       | String  | `.wizard-btn`                                                              | Class of Previous, Next, and Finish action buttons             |
| `wz_button_style` | String  | `.btn`                                                                     | Basic button style                                             |
| `wz_step`         | String  | `.wizard-step`                                                             | Class for both nav and body steps                              |
| `wz_form`         | String  | `.wizard-form`                                                             | Class of the form that contains the wizard                     |
| `wz_next`         | String  | `.next`                                                                    | Class of Next action button                                    |
| `wz_prev`         | String  | `.prev`                                                                    | Class of Prev action button                                    |
| `wz_finish`       | String  | `.finish`                                                                  | Class of Finish action button                                  |
| `wz_highlight`    | String  | `.highlight-error`                                                         | Class for highlights when validation errors occur              |
| `current_step`    | Number  | `0`                                                                        | Active wizard step                                             |
| `steps`           | Number  | `0`                                                                        | Number of wizard steps                                         |
| `highlight_time`  | Number  | `1000`                                                                     | Display time for validation highlight (in milliseconds)        |
| `navigation`      | String  | `all`                                                                      | Navigation mode (`buttons`, `nav`, `all`)                      |
| `buttons`         | Boolean | `true`                                                                     | Show or hide the action buttons                                |
| `nav`             | Boolean | `true`                                                                     | Show or hide the header navigation                             |
| `highlight`       | Boolean | `true`                                                                     | Enable or disable field highlighting on validation errors      |
| `next`            | String  | `Next`                                                                     | Text for the Next button                                       |
| `prev`            | String  | `Prev`                                                                     | Text for the Prev button                                       |
| `finish`          | String  | `Submit`                                                                   | Text for the Finish button                                     |
| `bubbles`         | Boolean | `false`                                                                    | Enable or disable event bubbling for custom events             |
| `highlight_type`  | Object  | `{ error: "error", warning: "warning", success: "success", info: "info" }` | Classes for different validation highlight effects             |
| `i18n`            | Object  | Various                                                                    | Internationalization messages for errors, titles, and warnings |

### i18n Options

The `i18n` object allows you to define custom error messages for different wizard actions:

- `empty_wz`: "No item has been found with which to generate the Wizard."
- `empty_nav`: "Nav does not exist or is empty."
- `empty_content`: "Content does not exist or is empty."
- `empty_html`: "Undefined or null content cannot be added."
- `empty_update`: "Nothing to update."
- `no_nav`: "Both the nav and the buttons are disabled, there is no navigation system."
- `form_validation`: "One or more of the form fields are invalid."
- `diff_steps`: "Discordance between the steps of nav and content."
- `random`: "There has been a problem, check the configuration and use of the wizard."
- `already_defined`: "This item is already defined."
- `title`: "Step" (used for default step titles if not specified in the HTML).

## Events Management

Wizard-JS provides several events to help you manage and respond to user interactions.

### Wizard Ready Event

To identify when the wizard is fully generated and loaded.

```javascript
document.addEventListener("wz.ready", function (e) {
    console.log(`Target:`, e.detail.target); // .wizard
    console.log(`DOM Element:`, e.detail.elem); // DOM element
});
```

### Wizard Update Event

Triggered when the wizard is updated.
```javascript
let wz_class = ".wizard";
let $wz_doc = document.querySelector(wz_class)
```

```javascript
$wz_doc.addEventListener("wz.update", function (e) {
    console.log(`Target:`, e.detail.target);
    console.log(`DOM Element:`, e.detail.elem);
});
```

### Lock and Unlock Events

When the wizard is locked:

```javascript
$wz_doc.addEventListener("wz.lock", function (e) {
    alert("Wizard is locked");
});
```

When the wizard is unlocked:

```javascript
$wz_doc.addEventListener("wz.unlock", function (e) {
    alert("Wizard is unlocked");
});
```

### Navigation Events

Moving to the previous step:

```javascript
$wz_doc.addEventListener("wz.btn.prev", function (e) {
    alert("Previous Step");
});
```

Moving to the next step:

```javascript
$wz_doc.addEventListener("wz.btn.next", function (e) {
    alert("Next Step");
});
```

Navigating forward with the navbar:

```javascript
$wz_doc.addEventListener("wz.nav.forward", function (e) {
    alert("Forward Navigation");
});
```

Navigating backward with the navbar:

```javascript
$wz_doc.addEventListener("wz.nav.backward", function (e) {
    alert("Backward Navigation");
});
```

### Validation Error Event

Triggered when there is an error validating the data of the active form step.

```javascript
$wz_doc.addEventListener("wz.error", function (e) {
    console.log(`ID:`, e.detail.id); // form_validation
    console.log(`Message:`, e.detail.msg); // Form validation message
    console.log(`Target:`, e.detail.target); // Array of invalid elements
});
```

### Form Submission and Wizard Completion Events

If it is a form, at the end it will fire the following event:

```javascript
$wz_doc.addEventListener("wz.form.submit", function (e) {
    alert("Form Submitted");
});
```

If it is not a form, at the end it will fire the following event:

```javascript
$wz_doc.addEventListener("wz.end", function (e) {
    alert("Wizard is finished");
});
```

### Reset Event

When the wizard is restarted:

```javascript
$wz_doc.addEventListener("wz.reset", function (e) {
    alert("Wizard has restarted");
});
```

## Demo

Try it on CodePen:

[![Codepen](https://user-images.githubusercontent.com/29653964/116972608-8f6bca80-acbb-11eb-98c1-8a3b19705de1.png)](https://codepen.io/adrianvillamayor/pen/VwWPVME)


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://github.com/AdrianVillamayor/Wizard-JS/blob/main/LICENSE)
### Thanks for your help! 🎉
