let shirt1= document.getElementById("shirt-img1")
let shirt2= document.getElementById("shirt-img2")
let shirt3= document.getElementById("shirt-img3")
let shirt4= document.getElementById("shirt-img4")
let shirt5= document.getElementById("shirt-img5")
let shirt6= document.getElementById("shirt-img6")
let shirt7= document.getElementById("shirt-img7")
let shirt8= document.getElementById("shirt-img8")




document.getElementById("change-direction").addEventListener("click",function(){
    if ( shirt1.style.display!="none" && shirt2.style.display=="none" 
    ){
        shirt1.style.display="none"
        shirt2.style.display="block"
        shirt3.style.display="none"
        shirt4.style.display="none"
        shirt5.style.display="none"
        shirt6.style.display="none"
        shirt7.style.display="none"
        shirt8.style.display="none"
    }else if (
        shirt2.style.display!="none"
    ){
        shirt1.style.display="block"
        shirt2.style.display="none"
        shirt3.style.display="none"
        shirt4.style.display="none"
        shirt5.style.display="none"
        shirt6.style.display="none"
        shirt7.style.display="none"
        shirt8.style.display="none" 
    }else if (
        shirt3.style.display!="none"
    ){
        shirt1.style.display="none"
        shirt2.style.display="none"
        shirt3.style.display="none"
        shirt4.style.display="block"
        shirt5.style.display="none"
        shirt6.style.display="none"
        shirt7.style.display="none"
        shirt8.style.display="none" 
    }else if (
        shirt4.style.display!="none"
    ){
        shirt1.style.display="none"
        shirt2.style.display="none"
        shirt3.style.display="block"
        shirt4.style.display="none"
        shirt5.style.display="none"
        shirt6.style.display="none"
        shirt7.style.display="none"
        shirt8.style.display="none" 
    }else if (
        shirt5.style.display!="none"
    ){
        shirt1.style.display="none"
        shirt2.style.display="none"
        shirt3.style.display="none"
        shirt4.style.display="none"
        shirt5.style.display="none"
        shirt6.style.display="block"
        shirt7.style.display="none"
        shirt8.style.display="none" 
    }
    else if (
        shirt6.style.display!="none"
    ){
        shirt1.style.display="none"
        shirt2.style.display="none"
        shirt3.style.display="none"
        shirt4.style.display="none"
        shirt5.style.display="block"
        shirt6.style.display="none"
        shirt7.style.display="none"
        shirt8.style.display="none" 
    }else if (
        shirt7.style.display!="none"
    ){
        shirt1.style.display="none"
        shirt2.style.display="none"
        shirt3.style.display="none"
        shirt4.style.display="none"
        shirt5.style.display="none"
        shirt6.style.display="none"
        shirt7.style.display="none"
        shirt8.style.display="block" 
    }
    else if (
        shirt8.style.display!="none"
    ){
        shirt1.style.display="none"
        shirt2.style.display="none"
        shirt3.style.display="none"
        shirt4.style.display="none"
        shirt5.style.display="none"
        shirt6.style.display="none"
        shirt7.style.display="block"
        shirt8.style.display="none" 
    }
})

if ( shirt1.style.display!="none"){
    console.log('asdg')
}
//

let black = document.getElementById("black")
let red = document.getElementById("red")
let blue = document.getElementById("blue")
let yellow = document.getElementById("amber")



red.addEventListener("click", function(){
    shirt1.style.display="none"
    shirt2.style.display="none"
    shirt4.style.display="none"
    shirt5.style.display="none"
    shirt6.style.display="none"
    shirt7.style.display="none"
    shirt8.style.display="none"
    shirt3.style.display="block"
})

black.addEventListener("click", function(){
    shirt1.style.display="block"
    shirt2.style.display="none"
    shirt3.style.display="none"
    shirt4.style.display="none"
    shirt5.style.display="none"
    shirt6.style.display="none"
    shirt7.style.display="none"
    shirt8.style.display="none"
})

blue.addEventListener("click", function(){
    shirt1.style.display="none"
    shirt2.style.display="none"
    shirt3.style.display="none"
    shirt4.style.display="none"
    shirt5.style.display="none"
    shirt6.style.display="none"
    shirt7.style.display="block"
    shirt8.style.display="none"
})
yellow.addEventListener("click", function(){
    shirt1.style.display="none"
    shirt2.style.display="none"
    shirt3.style.display="none"
    shirt4.style.display="none"
    shirt5.style.display="block"
    shirt6.style.display="none"
    shirt7.style.display="none"
    shirt8.style.display="none"
})
