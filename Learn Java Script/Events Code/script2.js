const saySayan = function () {
    console.log("Sayan");

}
const changeText = function () {
    document.querySelector('h1').innerHTML = "&nbsp;&nbsp;Sayan is Good Boy"
}

const changeMe = setTimeout(changeText, 2000)
setTimeout(saySayan, 2000)

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe)
    console.log("Stopped");
})
