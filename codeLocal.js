
var projectId = document.getElementById("electroPiDivChatBot").getAttribute("projectId");

var backgroundDiv = document.createElement("div");
backgroundDiv.className = "electrPiDiv";


var container = document.createElement("div");
backgroundDiv.className = "electrPiContainer";


var iframe = document.createElement("iframe");
iframe.className = "electrPiDiv_iframe";
console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
console.log(projectId);
iframe.src="http://localhost:3100/"+projectId
iframe.style.height="80%"
iframe.style.width="30%"




var buttoncontainer = document.createElement("div");
buttoncontainer.className = "electrPi_buttoncontainer";


function getCSS(element) {

    var css_obj = getComputedStyle(element);
    var css_result={}

    for (var i = 0; i < css_obj.length; i++) {
        css_result[css_obj[i]]=css_obj.getPropertyValue(css_obj[i])
    }
    // console.log(css_result)
    return css_result;
}

buttoncontainer.onclick=function(){
    var iframee = document.getElementsByClassName("electrPiDiv_iframe")[0];
    var frame_styel=getCSS(iframee)
    if(frame_styel.display!=="block"){

        iframee.style.display="block"

    }else{

        iframee.style.display="none"
    }
}

var button = document.createElement("img");
button.className = "electrPi_img";
button.setAttribute('src','https://cdn.jsdelivr.net/gh/saleh1312/chatbotWidget@9e49896/icon.png');
button.setAttribute('width','85');
button.setAttribute('height','85');


////////////////////////////////////// adding elements
buttoncontainer.appendChild(button);
container.appendChild(iframe);
container.appendChild(buttoncontainer);
backgroundDiv.appendChild(container);
document.body.appendChild(backgroundDiv);
