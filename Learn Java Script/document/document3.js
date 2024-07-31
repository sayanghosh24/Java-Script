function addLanguage (languageName){
    const li = document.createElement ('li')
    li.innerHTML = `${languageName}`
    document.querySelector('.language').appendChild(li)
}

addLanguage("python")
addLanguage("Java")


function addOptiLanguage (languageName){
    const li = document.createElement ('li')
    li.appendChild(document.createTextNode(languageName))
    document.querySelector('.language').appendChild(li)
}

addOptiLanguage('TypeScript')


// How to Edit 
const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "GoLang" // not for best usees  

const newli = document.createElement('li')
newli.textContent = "GoLang" 
secondLang.replaceWith (newli)


//Edit 2 :

const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>TypeScript</li>'


//How to remove
const lastLang = document.querySelector('li:last-child')
lastLang.remove()
