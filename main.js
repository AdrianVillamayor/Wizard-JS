let args = {
    "wz_nav_style": "dots",
    "buttons": true,
    "navigation": 'buttons'
};


const wizard = new Wizard(args);

wizard.init();


$_.delegate(document, "change", ".banner-info", function (e) {
    updateBanner(e)
});

$_.delegate(document, "input", ".banner-info", function (e) {
    updateBanner(e)
});


function updateBanner(e) {
    let banner = $_.getSelector(".banner-card");
    let b_text = $_.getSelector(".banner-text", banner);
    let bt_title = $_.getSelector(".title", b_text);
    let bt_body = $_.getSelector(".text", b_text);
    let b_img = $_.getSelector(".banner-image", banner);

    switch (e.target.getAttribute("name")) {
        case 'title':
            bt_title.innerHTML = e.target.value;
            break;
        case 'body':
            bt_body.innerHTML = e.target.value;

            break;
        case 'image':
            previewImg(e, b_img)
            break;
    }
}

function previewImg(event, output) {
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
};

