
var projectId = document.getElementById("electroPiDivChatBot").getAttribute("projectId");

var backgroundDiv = document.createElement("div");
backgroundDiv.className = "electrPiDiv";


var container = document.createElement("div");
backgroundDiv.className = "electrPiContainer";


var iframe = document.createElement("iframe");
iframe.className = "electrPiDiv_iframe";
console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
console.log(projectId);
iframe.src = "http://localhost:3100/" + projectId
iframe.style.height = "80%"
iframe.style.width = "30%"




var buttoncontainer = document.createElement("div");
buttoncontainer.className = "electrPi_buttoncontainer";


function getCSS(element) {

    var css_obj = getComputedStyle(element);
    var css_result = {}

    for (var i = 0; i < css_obj.length; i++) {
        css_result[css_obj[i]] = css_obj.getPropertyValue(css_obj[i])
    }
    // console.log(css_result)
    return css_result;
}

buttoncontainer.onclick = function () {
    var iframee = document.getElementsByClassName("electrPiDiv_iframe")[0];
    var frame_styel = getCSS(iframee)
    if (frame_styel.display !== "block") {

        iframee.style.display = "block"

    } else {

        iframee.style.display = "none"
    }
}

var button = document.createElement("img");
button.classList.add('electrPi_img');
button.addEventListener('click', () => {
    button.classList.toggle('clicked');
    button_close.classList.toggle('clicked');
});
button.className = "electrPi_img";
button.setAttribute('src', 'https://cdn.jsdelivr.net/gh/saleh1312/chatbotWidget@d5f9e36/speech-bubble.png');
button.setAttribute('width', '85');
button.setAttribute('height', '85');
button.setAttribute('alt', 'electropi_open_button');

var button_close = document.createElement("img");
button_close.classList.add('electrPi_img_close');
button_close.addEventListener('click', () => {
    button.classList.remove('clicked');
    button_close.classList.remove('clicked');
});
button_close.className = "electrPi_img_close";
button_close.setAttribute('src', 'https://cdn.jsdelivr.net/gh/saleh1312/chatbotWidget@d5f9e36/cross.png');
button_close.setAttribute('width', '85');
button_close.setAttribute('height', '85');
button.setAttribute('alt', 'electropi_close_button');

////////////////////////////////////// adding elements
buttoncontainer.appendChild(button);
buttoncontainer.appendChild(button_close);
container.appendChild(iframe);
container.appendChild(buttoncontainer);
backgroundDiv.appendChild(container);
document.body.appendChild(backgroundDiv);
