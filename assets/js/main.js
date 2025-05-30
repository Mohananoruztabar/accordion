
let myh = document.querySelectorAll('ul>li>h3')
// myh.setAttribute('data-status', 'close')
myul = document.querySelectorAll('ul>li>ul')
for(let i=0 ; i<myul.length ; i++){
    myul[i].previousElementSibling.setAttribute('data-status', 'close')
}

function myacc(s,i){
    for(let x=1; x<=myul.length ;x++){
    if(x != i){
        myul[x-1].style.height = '0px'
        myul[x-1].previousElementSibling.setAttribute('data-status', 'close')
    }else{
        if(s.getAttribute('data-status') == 'close'){
        s.nextElementSibling.style.height = '200px'
        s.setAttribute('data-status', 'open')
    }else{
       s.setAttribute('data-status' , 'close') 
       s.nextElementSibling.style.height = '0px'
    }
 }
}
}
