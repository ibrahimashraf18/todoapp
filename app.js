var showInput = document.getElementById("showdisplay");

function getButtonValue(num){
    showInput.value += num;
}

function calculateValue(){
    var answer = eval(showInput.value);
    showInput.value = answer;
}

function clearAll(){
    showInput.value = ""
}

