const requestUrl = 'https://api.github.com/users/sayanghosh24'
const xhr = new XMLHttpRequest();
xhr.open ('GET' , requestUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)   // use parse string convert to 'JSON'
        console.log(typeof data);
        
        console.log(data.followers);
        
    }
}
xhr.send()