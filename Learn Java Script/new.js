import prompt from "prompt";

let a = prompt("Enter your age : ");
let age = parseInt(result.age);


if(a>0){
    console.log("You are a kid ");
}
else if(a>10 && a>=18){
    console.log("You are an adult after 18+");
}
else{
    console.log("You are an adult now");
}
