window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent ("input", {bubbles:true});
var textbox = document.getElementsByClassName("sdpText")[0];

setInterval(()=>{
    textbox.innerHTML = 'pnk e bvc'
    textbox.dispatchEvent(event);
    document.getElementsByClassName("sdpButton")[0].click()
},1000)