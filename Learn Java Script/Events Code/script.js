// // document.getElementById('owl').onclick = function (){
// //     alert('Owl');
// // }  // this is the not best approch

// document.getElementById('owl').addEventListener('click', function(){
//     alert('Owl');
// } , false)  // this is the best approch


// // attachEvent()
// // jQuery - onEventListener ()


// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul");

// }, false) //  event propogetion


// // type , timestamp , defaltPrevented
// // target , toElement , srcElement , currentTarget
// // clientX , clientY , pageX , pageY , screenX , screenY , offsetX
// // altkey , ctrlkey , shiftkey , keyCode



// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("Owl Clicked");
//     e.stopPropagation()
// }, false)  //  event propogetion


// document.getElementById ('google').addEventListener('click', function(e){
//     e.preventDefault()
//     e.stopPropagation()  // stop bubling
//     console.log("Google Clicked");
// }, false)



document.querySelector("#images").addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

    // removeIt.parentNode.removeChild(removeIt)
})
