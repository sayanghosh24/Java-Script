// genareted a random color


const randomColor = function () {
    const hex = "012356789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}


// console.log(randomColor());

let intervalId ;

const startChangingColor = function () {
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();

    }
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 100);
    }
}
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)
