var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

function clickhandler(){
    console.log("clicked!");
    console.log("input", txtInput.value);
};

btnTranslate.addEventListener("click", clickhandler)