const heartBtn = document.getElementById("heart_btn");

const box2_1 = document.getElementById("box2_1");
const box2_2 = document.getElementById("box2_2");

var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

let beats = 5;

function fasterBeating(){
    beats -= 0.1;
    if(beats < 0.5){
        root.style.setProperty('--colorH', 'red');
        changeMessage();
        return;
    }
    root.style.setProperty('--timeA', beats + 's');
    var timeA = rootStyles.getPropertyValue('--timeA');
}

function changeMessage(){
    box2_1.style.display = "none";
    box2_2.style.display = "inline";
}

heartBtn.addEventListener("click", fasterBeating);
