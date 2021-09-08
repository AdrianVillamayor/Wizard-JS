let args = {
    "wz_nav_style": "dots",
    "buttons": true,
    "navigation": 'buttons'
};


const wizard = new Wizard(args);
const ajax = new Fetch("https://httpbin.org/");
wizard.init();