
var projectId = document.getElementById("electroPiDivChatBot").getAttribute("projectId");

var backgroundDiv = document.createElement("div");
backgroundDiv.className = "electrPiDiv";


var container = document.createElement("div");
backgroundDiv.className = "electrPiContainer";


var iframe = document.createElement("iframe");
iframe.className = "electrPiDiv_iframe start";
console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
console.log(projectId);
iframe.src = "https://electropi.ai:3100/" + projectId
// iframe.style.display="none"
// iframe.style.height="80%"
// iframe.style.width="30%"

var iframe_msg = document.createElement("div");
iframe_msg.className = "electrPiDiv_iframe_msg";
iframe_msg.innerHTML = " أهلا بك. كيف يمكنني مساعدتك؟";

var close_button = document.createElement("button");
close_button.className="closemsgbutton"
close_button.innerHTML = "X";
close_button.addEventListener("click", function() {
    iframe_msg.style.display = "none";
});

iframe_msg.appendChild(close_button);

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

// buttoncontainer.onclick=function(){
//     var iframee = document.getElementsByClassName("electrPiDiv_iframe ")[0];
//     var frame_styel=getCSS(iframee)
//     if(frame_styel.display!=="block"){

//         iframee.style.display="block"

//     }else{

//         iframee.style.display="none"
//     }
// }

var button = document.createElement("img");
button.classList.add('electrPi_img');
button.addEventListener('click', () => {
    // button.classList.toggle('clicked');
    // button_close.classList.toggle('clicked');
    // iframe.classList.remove("start")
    // iframe.classList.remove("closeiframe")

    button.classList.toggle('clicked');
    button_close.classList.toggle('clicked');
    // setTimeout(function() {
    //     button_close.classList.toggle('clicked');
    // }, 300); 
    iframe.classList.remove("start")
    iframe.classList.remove("closeiframe")
    iframe.classList.toggle("openiframe")
    iframe_msg.classList.toggle("close")


});
button.className = "electrPi_img";
button.setAttribute('src', 'https://cdn.jsdelivr.net/gh/saleh1312/chatbotWidget@1af16ce/speech-bubble-blue.png');
button.setAttribute('width', '85');
button.setAttribute('height', '85');
button.setAttribute('alt', 'electropi_open_button');






var button_close = document.createElement("img");
button_close.classList.add('electrPi_img_close');
button_close.addEventListener('click', () => {
    button.classList.remove('clicked');
    button_close.classList.remove('clicked');
    iframe.classList.remove("openiframe")
    iframe.classList.toggle("closeiframe")
    iframe_msg.classList.remove("close")


    
});
button_close.className = "electrPi_img_close";
button_close.setAttribute('src', 'https://cdn.jsdelivr.net/gh/saleh1312/chatbotWidget@1af16ce/close-removebg-preview.png');
button_close.setAttribute('width', '85');
button_close.setAttribute('height', '85');
button.setAttribute('alt', 'electropi_open_close');

////////////////////////////////////// adding elements
buttoncontainer.appendChild(button);
buttoncontainer.appendChild(button_close);
container.appendChild(iframe);
container.appendChild(iframe_msg);
container.appendChild(buttoncontainer);
backgroundDiv.appendChild(container);
document.body.appendChild(backgroundDiv);
