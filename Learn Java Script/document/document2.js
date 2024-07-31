const div = document.createElement('div')
console.log(div);
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)

div.setAttribute("title" , "generated title")
div.style.backgroundColor = "blue"
div.style.padding = "20px"
div.style.fontSize = "30px"
// div.innerText = "Hello World"
const addText = document.createTextNode("Now learn JavaScript")
div.appendChild (addText)


document.body.appendChild(div) // attach in my body of web page 
