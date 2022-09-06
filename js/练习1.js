const content =document.querySelector(".content")
content.innerHTML='hahaa'

console.log(content);
const contents=document.querySelectorAll(".content")
console.log(contents);
contents.forEach((node,index)=> {
    node.innerHTML=`content ${index}`
})


const span=document.createElement('div') //span
span.innerHTML="click me"  // "<h1>click me</h1>"
contents[contents.length-1].append(span)
contents[contents.length-1].appendChild(span)
const domBody=document.querySelector("body")
domBody.appendChild(span)



span.classList.add('active')
span.classList.remove('active')
span.classList.toggle('active')

span.setAttribute('style','cursor:pointer')

span.addEventListener('click',()=>
{
    span.classList.toggle('active')
})