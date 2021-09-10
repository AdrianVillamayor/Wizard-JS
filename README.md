![Badge-glow](https://img.shields.io/badge/WizardJS-v.1.3-blue?style=flat-square) [![jsDelivr hits (GitHub)](https://data.jsdelivr.com/v1/package/gh/AdrianVillamayor/Wizard-JS/badge)](https://www.jsdelivr.com/package/gh/AdrianVillamayor/Wizard-JS) ![GitHub repo size](https://img.shields.io/github/repo-size/AdrianVillamayor/Wizard-JS?style=flat-square)

# Wizard-JS - Wizard Vanilla JavaScript

A lightweight wizard UI component that supports accessibility and HTML5 in JavaScript Vanilla.


## Demo
Try it 


[![Codepen](https://user-images.githubusercontent.com/29653964/116972608-8f6bca80-acbb-11eb-98c1-8a3b19705de1.png)](https://codepen.io/adrianvillamayor/pen/VwWPVME)


## Installation 
Add this code. [cdn](https://www.jsdelivr.com/package/gh/AdrianVillamayor/Wizard-JS)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AdrianVillamayor/Wizard-JS@1.3/styles/css/main.css">
<script src="https://cdn.jsdelivr.net/gh/AdrianVillamayor/Wizard-JS@1.3/src/wizard.min.js"></script>
```

### Events Management
When any wizard button is used, it will generate an event.
```javascript
document.addEventListener("prevWizard", function (e) {
	alert("Prev Step");
});
document.addEventListener("nextWizard", function (e) {
	alert("Next Step");
});
document.addEventListener("submitWizard", function (e) {
	alert("Form Submit");
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/AdrianVillamayor/Wizard-JS/blob/main/LICENSE)

### Thanks for your help! 🎉
