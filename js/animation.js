const container = document.getElementById('bd');
let isStop = false;

function hearts(){
    if(isStop){
        return;
    }
    const create = document.createElement("div");
    create.classList.add("hearts");
    create.innerHTML = "💗";
    create.style.left = Math.random() * 100 + 'vw';
    create.style.animationDuration = Math.random() * 2 + 3 + 's';

    container.appendChild(create);
    setTimeout(() => {
        create.remove()
    }, 3000);
    }