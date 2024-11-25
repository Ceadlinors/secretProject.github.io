const mainMessage = document.getElementById("mainMessage");

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
box2.style.display = "none"

const messages = ["Hi love!", "I know you weren't feeling the best lately,", "so I figured I'd make something for you.", "Keep in mind that I haven't done this in a while.", "Alright, here it is...", "3", "2", "1"];

let index = 0;

function nextMessage(){
    index++;
    if(index == 8){
        heart();
    }
    mainMessage.innerHTML = messages[index];
}

function previousMessage(){
    index--;
    if(index < 0){
        index = 0;
    }
    mainMessage.innerHTML = messages[index];
}

function heart(){
    box1.style.display = "none";
    box2.style.display = "flex";
}
