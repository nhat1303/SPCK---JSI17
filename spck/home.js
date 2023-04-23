const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


let account_avatar = document.getElementById("avatar-account")
let login = document.getElementById("login")
let register = document.getElementById("register")
let arrow_down =document.getElementById("arrow-down")
let account_status = document.getElementById("account-status")
account_avatar.addEventListener("click", function(){
    if ( account_status.style.display=="none"){
        account_status.style.display="flex"
    }else{
        account_status.style.display="none"
    }
    login.innerHTML="Login"
    register.innerHTML="Register"
})

arrow_down.addEventListener("click", function(){
    if ( account_status.style.display=="none"){
        account_status.style.display="flex"
    }else{
        account_status.style.display="none"
    }
    login.innerHTML="Login"
    register.innerHTML="Register"
})