var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverUrl =  "	https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text)
{
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured " + error);
    alert("There is something wrong with the server ! Please Try again later.");
}

function clickhandler(){
    var inputText = txtInput.value;
   fetch(getTranslationUrl(inputText))
   .then (response => response.json())
   .then (json => {outputDiv.innerText = json.contents.translated; })
   .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickhandler)