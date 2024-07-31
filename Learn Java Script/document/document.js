//Introduction to dom 

const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children[1].innerHtml);

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHtml);  
// }
parent.children[1].style.color = "orange"

// console.log(parent.firstElementChild);

// console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day')
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

console.log("Nodes :",parent.childNodes)
