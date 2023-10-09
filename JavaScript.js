function addToDisplayResult(value){
    document.getElementById('displayResult').value += value;
};
function equalTo(value){
    document.getElementById('displayResult').value = eval(document.getElementById('displayResult').value);
    var valueOfDisplay = document.getElementById('displayResult').value;
    localStorage.setItem("finalValueKey", valueOfDisplay);

};
function clearCalc(){
    document.getElementById('displayResult').value = null;
}
function mathSqrt(){
    let valueOfDisplay = document.getElementById('displayResult').value;
    document.getElementById('displayResult').value = Math.sqrt(valueOfDisplay);
}
function mathSin(){
    let valueOfDisplay = document.getElementById('displayResult').value;
    document.getElementById('displayResult').value = Math.sin(valueOfDisplay * Math.PI / 180);
} 
function logValue() {
    let valueOfDisplay = document.getElementById('displayResult').value;
    console.log(valueOfDisplay);  
}
let readValue = localStorage.getItem("finalValueKey");
let storageData = document.getElementById('displayResult');
window.onload = function(){myFunction()};
function myFunction() {
    storageData.value = readValue;
}