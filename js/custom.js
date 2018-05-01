


var buttons = document.querySelectorAll(".menuContainer");
var arrows = document.querySelectorAll(".menuButtons");



for (i = 0; i < buttons.length; i ++) {
  buttons[i].onclick = function() {
    
    var content = this.nextElementSibling;
    var arrows = document.querySelectorAll(".menuButtons");
      
    if(content.style.maxHeight){
      content.style.maxHeight = null;  
        
    } else{
        content.style.maxHeight = content.scrollHeight + "px";
    }
  }
};

for (i = 0; i < arrows.length; i ++) {
  arrows[i].onclick = function() {
    
      
    if (arrows.innerHTML="<i class='fas fa-angle-left' id='leftIcon'></i>") {
         arrows = this.innerHTML ="<i class='fas fa-angle-down' id='leftIcon'></i>"; 
     
    } else {
    arrows= this.innerHTML ="<i class='fas fa-angle-left' id='leftIcon'></i>"; 
    }
  }
};

