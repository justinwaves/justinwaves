//Justin says hello to you, and thinks you are awesome

var buttons = document.querySelectorAll(".menuContainer");


for (i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    
    var content = this.nextElementSibling;
      
    if(content.style.maxHeight){
      content.style.maxHeight = null;
            this.children[1].innerHTML ="<i class='fas fa-angle-left' id='leftIcon'></i>"; 
    } else{
        content.style.maxHeight = content.scrollHeight + "px";
            this.children[1].innerHTML ="<i class='fas fa-angle-down' id='leftIcon'></i>"; 
    }
  }
};




