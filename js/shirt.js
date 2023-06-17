let shirt1= document.getElementById("shirt-img1")
let shirt2= document.getElementById("shirt-img2")
let shirt3= document.getElementById("shirt-img3")
let shirt4= document.getElementById("shirt-img4")
let shirt5= document.getElementById("shirt-img5")
let shirt6= document.getElementById("shirt-img6")
let shirt7= document.getElementById("shirt-img7")
let shirt8= document.getElementById("shirt-img8")

document.getElementById("avatar-account").addEventListener('click', function(){
    window.location.href = "index8.html";
})

// XỬ LÝ XOAY 
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
// XỬ LÝ MÀU 

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



// COST 
let S = document.getElementById("S")
let M = document.getElementById("M")
let XL = document.getElementById("XL")
let L = document.getElementById("L")
let btn = document.getElementById("enter")
S.value=0
M.value=0
XL.value=0
L.value=0


btn.addEventListener("click", function(e){
    e.preventDefault()
    cost= S.value*150000 + M.value*150000 + XL.value*150000 + L.value*150000
    console.log(cost)
    document.getElementById("price").innerHTML=cost
})



// HIỆN PHÔI 
box = document.getElementById("design-container")
document.getElementById("add-shirt").addEventListener("click", function(){
    box.style.display="flex"
    
})

document.getElementById("off-btn").addEventListener("click", function(){
    box.style.display="none"
})


// ADD TEXT 
let input = document.getElementById("box")
            input.value = "Hello"

            let adjust = document.getElementById("adjust")
            document.getElementById("enter").addEventListener("click", function(){
                if ( adjust.value != ""){
                input.value= adjust.value
            }   
            })



            window.addEventListener("load", onLoad, false);
                
            function onLoad(){
                Draggable(document.getElementById('box'));
                Resizeable(document.getElementById('box'));
            }
            
            function Draggable(box){
                var origX, origY, newX, newY = 0;
                box.addEventListener("mousedown", (event)=>{
                    event = event || window.event;
                    event.preventDefault();
                    origX = event.clientX;
                    origY = event.clientY;
                    document.onmousemove = boxMove;
                    document.onmouseup = stopBoxMove;
                });
                function boxMove(event){
                    event = event || window.event;
                    event.preventDefault();
                    newX = event.clientX - origX;
                    newY = event.clientY - origY;
                    origX = event.clientX;
                    origY = event.clientY;
                    box.style.top = (box.offsetTop + newY) + "px";
                    box.style.left = (box.offsetLeft + newX) + "px";
                }
                function stopBoxMove(){
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
            }
            function Resizeable(box){
                box.addEventListener("mousemove", mousemove);
                var boxStyle = window.getComputedStyle(box);
                var origX, origY, newX, newY = 0;
                function mousemove(event){
                    if (event.offsetX <= 0 && event.offsetY <= 0){
                        box.style.cursor = "nwse-resize";
                        document.onmousedown = resize;
                    }
                    else if(event.offsetX >= parseInt(boxStyle.width)
                    && event.offsetY <=0){
                        box.style.cursor = "nesw-resize";
                        document.onmousedown = resize;
                    }
                    else if(event.offsetX <= 0 && event.offsetY >= parseInt(boxStyle.height)){
                        box.style.cursor = "nesw-resize";
                        document.onmousedown = resize;
                    }
                    else if(event.offsetX >= parseInt(boxStyle.width)
                    && event.offsetY >= parseInt(boxStyle.height)){
                        box.style.cursor = "nwse-resize";
                        document.onmousedown = resize;
                    }
                    else if(event.offsetX <= 0){
                        box.style.cursor = "ew-resize";
                        document.onmousedown = resize;
                    }
                    else if(event.offsetX >= parseInt(boxStyle.width)){
                        box.style.cursor ="ew-resize";
                        document.onmousedown = resize;
                    }
                    else if(event.offsetY <= 0){
                        box.style.cursor ="ns-resize";
                        document.onmousedown = resize;
                    }
                    else if(event.offsetY >= parseInt(boxStyle.height)){
                        box.style.cursor ="ns-resize";
                        document.onmousedown = resize;
                    }
                    else if(!document.onmousemove){
                        box.style.cursor = "move";
                        document.onmousedown = null;
                    }
                }
                function resize(event){
                    event = event || window.event;
                    event.preventDefault();
                    origX = event.clientX;
                    origY = event.clientY;
                    if (event.offsetX <= 0 && event.offsetY <= 0){
                        document.onmousemove = resizeTl;
                    }
                    else if(event.offsetX >= parseInt(boxStyle.width)
                    && event.offsetY <=0){
                        document.onmousemove = resizeTr;
                    }
                    else if(event.offsetX <= 0 && event.offsetY >= parseInt(boxStyle.height)){
                        document.onmousemove = resizeBl;
                    }
                    else if(event.offsetX >= parseInt(boxStyle.width)
                    && event.offsetY >= parseInt(boxStyle.height)){
                        document.onmousemove = resizeBr;
                    }
                    else if(event.offsetX <= 0){
                        document.onmousemove = resizeLeft;
                    }
                    else if(event.offsetY <= 0){
                        document.onmousemove = resizeTop;
                    }
                    else if(event.offsetX >= parseInt(boxStyle.width)){
                        document.onmousemove = resizeRight;
                    }
                    else if(event.offsetY >= parseInt(boxStyle.height)){
                        document.onmousemove = resizeBottom;
                    }
                    document.onmouseup = stopResize;
                }
                function resizeTl(event){
                    event = event || window.event;
                    event.preventDefault();
                    event.stopPropagation();
                    newX = event.clientX - origX;
                    newY = event.clientY - origY;
                    origX = event.clientX;
                    origY = event.clientY;
                    topRS();
                    leftRS();        
                }
                function resizeTr(event){
                    event = event || window.event;
                    event.preventDefault();
                    event.stopPropagation();
                    newX = event.clientX - origX;
                    newY = event.clientY - origY;
                    origX = event.clientX;
                    origY = event.clientY;
                    topRS();
                    rightRS();
                }
                function resizeBl(event){
                    event = event || window.event;
                    event.preventDefault();
                    event.stopPropagation();
                    newX = event.clientX - origX;
                    newY = event.clientY - origY;
                    origX = event.clientX;
                    origY = event.clientY;
                    bottomRS();
                    leftRS();
                }
                function resizeBr(event){
                    event = event || window.event;
                    event.preventDefault();
                    event.stopPropagation();
                    newX = event.clientX - origX;
                    newY = event.clientY - origY;
                    origX = event.clientX;
                    origY = event.clientY;
                    bottomRS();
                    rightRS();
                }
                function resizeLeft(event){
                    event = event || window.event;
                    event.preventDefault();
                    event.stopPropagation();
                    newX = event.clientX - origX;
                    origX = event.clientX;
                    leftRS();
            
                }
                function resizeTop(event){
                    event = event || window.event;
                    event.preventDefault();
                    event.stopPropagation();
                    newY = event.clientY - origY;
                    origY = event.clientY;
                    topRS()
                }
                function resizeRight(event){
                    event = event || window.event;
                    event.preventDefault();
                    event.stopPropagation();
                    newX = event.clientX - origX;
                    origX = event.clientX;
                    rightRS();
            
                }
                function resizeBottom(event){
                    event = event || window.event;
                    event.preventDefault();
                    event.stopPropagation();
                    newY = event.clientY - origY;
                    origY = event.clientY;
                    bottomRS();
                }
                function stopResize(event){
                    document.onmousemove = null;
                    document.onmouseup = null;
                    document.documentElement.style.cursor = "";
                }
            
                function leftRS(){
                    //edge case, if box is at minimum specs, we want a certain behaviour
                    if((parseInt(boxStyle.minWidth) == parseInt(boxStyle.width))){
                        if(newX <= 0 && event.clientX < parseInt(boxStyle.left)){
                            box.style.left = parseInt(boxStyle.left) + newX + "px";
                            box.style.width = (parseInt(boxStyle.width) - newX) + "px"
                        }
                    }
                    else{
                        console.log(parseInt(boxStyle.width) + " " + newX + " " + boxStyle.minWidth)
                        if((parseInt(boxStyle.width) - newX) < parseInt(boxStyle.minWidth)){
                            box.style.left = (parseInt(boxStyle.left) + (parseInt(boxStyle.width) - parseInt(boxStyle.minWidth))) + "px";
                            box.style.width = parseInt(boxStyle.minWidth) + "px"            
                        }
                        else{
                            box.style.left = parseInt(boxStyle.left) + newX + "px";
                            box.style.width = (parseInt(boxStyle.width) - newX) + "px"
                        }
                    }
                }
                function topRS(){
                    //edge case, if box is at minimum specs, we want a certain behaviour
                    if((parseInt(boxStyle.minHeight) == parseInt(boxStyle.height))){
                        prevTop = parseInt(boxStyle.top);
                        if(newY <= 0 && event.clientY < parseInt(boxStyle.top)){
                            box.style.top = parseInt(boxStyle.top) + newY + "px";
                            box.style.height = (parseInt(boxStyle.height) - newY) + "px"
                        }
                    }
                    else{
                        if((parseInt(boxStyle.height) - newY) < parseInt(boxStyle.minHeight)){
                            box.style.top = (parseInt(boxStyle.top) + (parseInt(boxStyle.height) - parseInt(boxStyle.minHeight))) + "px";
                            box.style.height = parseInt(boxStyle.minHeight) + "px"            
                        }
                        else{
                            box.style.top = parseInt(boxStyle.top) + newY + "px";
                            box.style.height = (parseInt(boxStyle.height) - newY) + "px"
                        }
                    }
                }
                function rightRS(){
                    //edge case, if box is at minimum specs, we want a certain behaviour
                    if((parseInt(boxStyle.minWidth) == parseInt(boxStyle.width))){
                        if(newX >= 0 && event.clientX > parseInt(boxStyle.left) 
                        + parseInt(boxStyle.width)){
                            box.style.width = (parseInt(boxStyle.width) + newX) + "px"
                        }
                    }
                    else{
                        box.style.width = (parseInt(boxStyle.width) + newX) + "px"
                    }
                }
                function bottomRS(){
                    //edge case, if box is at minimum specs, we want a certain behaviour
                    if((parseInt(boxStyle.minHeight) == parseInt(boxStyle.height))){
                        prevTop = parseInt(boxStyle.top);
                        if(newY >= 0 && event.clientY > parseInt(boxStyle.top) +
                        parseInt(boxStyle.height)){
                            box.style.height = 
                            (parseInt(window.getComputedStyle(box).height) + newY) + "px";
                        }
                    }
                    else{
                        box.style.height = (parseInt(boxStyle.height) + newY) + "px";
                    }
                }
            }


let addword = document.getElementById("add-word")
let addbox = document.getElementById("add-text-box")

// XỬ LÝ AREA TEXT 
addword.addEventListener("click", function(){
    if ( shirt1.style.display!="none"){
        addbox.style.display="block"
        input.style.display="block"
        shirt2.style.zIndex="99"
        
    }
    else if ( shirt2.style.display!= "none"){
        addbox.style.display="block"
        input.style.display="block"
        shirt1.style.zIndex="99"
    }
    else if ( shirt3.style.display!= "none"){
        addbox.style.display="block"
        input.style.display="block"
        shirt4.style.zIndex="99"
    }
    else if ( shirt4.style.display!= "none"){
        addbox.style.display="block"
        input.style.display="block"
        shirt3.style.zIndex="99"
    }
    else if ( shirt5.style.display!= "none"){
        addbox.style.display="block"
        input.style.display="block"
        shirt6.style.zIndex="99"
    }
    else if ( shirt6.style.display!= "none"){
        addbox.style.display="block"
        input.style.display="block"
        shirt5.style.zIndex="99"
    }
    else if ( shirt7.style.display!= "none"){
        addbox.style.display="block"
        input.style.display="block"
        shirt8.style.zIndex="99"
    }
    else if ( shirt8.style.display!= "none"){
        addbox.style.display="block"
        input.style.display="block"
        shirt7.style.zIndex="99"
    }
})


let content = document.getElementById("content")
let fontsize = document.getElementById("font-size")
let colors = document.getElementById("colors")
fontsize.value = 10
document.getElementById("save-changes").addEventListener("click", function(e){
    e.preventDefault()
    
    input.value= content.value
    input.style.fontSize = fontsize.value+"px"
    input.style.color = colors.value

})

document.getElementById("offf-btn").addEventListener("click", function(){
    console.log('asdga')
    addbox.style.display="none"
})


// RESET BTN 

document.getElementById("reset").addEventListener("click", function(){
    confirm("Toàn bộ dữ liệu sẽ bị xoá, bạn chắc chứ ?")
    window.location.reload()
})



// UPLOAD IMG 


// let imgDiv = document.querySelector('.avatar-box')
let file = document.querySelector('#file')
let img = document.querySelector('#img-box')
let uploadBtn = document.querySelector('#uploadAvatar')
let popbox = document.getElementById("pop-box")
file.addEventListener("change", function(){
    const choosedFile = this.files[0]

    if ( choosedFile){
        const reader = new FileReader();

        reader.addEventListener("load", function(){
            img.setAttribute('src', reader.result)
        })

        reader.readAsDataURL(choosedFile)
    }
})
let imgBOX = document.getElementById("img-box")
popbox.style.display="none"
document.getElementById("upload-img").addEventListener("click", function(){
    popbox.style.display="block"
})


window.onload = function() {
    initDragElement();
    initResizeElement();
  };
  
  function initDragElement() {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    var popups = document.getElementsByClassName("popup");
    var elmnt = null;
    var currentZIndex = 100; //TODO reset z index when a threshold is passed
  
    for (var i = 0; i < popups.length; i++) {
      var popup = popups[i];
      var header = getHeader(popup);
  
      popup.onmousedown = function() {
        this.style.zIndex = "" + ++currentZIndex;
      };
  
      if (header) {
        header.parentPopup = popup;
        header.onmousedown = dragMouseDown;
      }
    }
  
    function dragMouseDown(e) {
      elmnt = this.parentPopup;
      elmnt.style.zIndex = "" + ++currentZIndex;
  
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      if (!elmnt) {
        return;
      }
  
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  
    function getHeader(element) {
      var headerItems = element.getElementsByClassName("popup-header");
  
      if (headerItems.length === 1) {
        return headerItems[0];
      }
  
      return null;
    }
  }
  
  function initResizeElement() {
    var popups = document.getElementsByClassName("popup");
    var element = null;
    var startX, startY, startWidth, startHeight;
  
    for (var i = 0; i < popups.length; i++) {
      var p = popups[i];
  
      var right = document.createElement("div");
      right.className = "resizer-right";
      p.appendChild(right);
      right.addEventListener("mousedown", initDrag, false);
      right.parentPopup = p;
  
      var bottom = document.createElement("div");
      bottom.className = "resizer-bottom";
      p.appendChild(bottom);
      bottom.addEventListener("mousedown", initDrag, false);
      bottom.parentPopup = p;
  
      var both = document.createElement("div");
      both.className = "resizer-both";
      p.appendChild(both);
      both.addEventListener("mousedown", initDrag, false);
      both.parentPopup = p;
    }
  
    function initDrag(e) {
      element = this.parentPopup;
  
      startX = e.clientX;
      startY = e.clientY;
      startWidth = parseInt(
        document.defaultView.getComputedStyle(element).width,
        10
      );
      startHeight = parseInt(
        document.defaultView.getComputedStyle(element).height,
        10
      );
      document.documentElement.addEventListener("mousemove", doDrag, false);
      document.documentElement.addEventListener("mouseup", stopDrag, false);
    }
  
    function doDrag(e) {
      element.style.width = startWidth + e.clientX - startX + "px";
      element.style.height = startHeight + e.clientY - startY + "px";
    }
  
    function stopDrag() {
      document.documentElement.removeEventListener("mousemove", doDrag, false);
      document.documentElement.removeEventListener("mouseup", stopDrag, false);
    }
  }
  


  file.addEventListener("click", function(){
    if ( shirt1.style.display!="none"){
        shirt2.style.zIndex="99"
        popbox.style.zIndex="1"
        console.log(shirt2.style.zIndex=="99")
        console.log(popbox.style.zIndex=="1")
    }
    else if ( shirt2.style.display!= "none"){
        popbox.style.display="block"
        shirt1.style.zIndex="99"
    }
    else if ( shirt3.style.display!= "none"){
        popbox.style.display="block"
        shirt4.style.zIndex="99"
    }
    else if ( shirt4.style.display!= "none"){
        popbox.style.display="block"
        shirt3.style.zIndex="99"
    }
    else if ( shirt5.style.display!= "none"){
        popbox.style.display="block"
        shirt6.style.zIndex="99"
    }
    else if ( shirt6.style.display!= "none"){
        popbox.style.display="block"
        shirt5.style.zIndex="99"
    }
    else if ( shirt7.style.display!= "none"){
        popbox.style.display="block"
        shirt8.style.zIndex="99"
    }
    else if ( shirt8.style.display!= "none"){
        popbox.style.display="block"
        shirt7.style.zIndex="99"
    }
})



// TEST 

fuck = document.getElementById("quantity-element")
document.getElementById("buy-btn").addEventListener("click", function(e){
    e.preventDefault()
    if (S.value >0){
        fuck.innerHTML=S.value
    }
})


