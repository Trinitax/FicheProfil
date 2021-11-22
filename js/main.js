function OpenInNewTabWinBrowser(url) {
    var win = window.open(url, '_blank');
    win.focus();
}






var boxes = document.querySelectorAll(".box");


for (let i = 0; i < 17; i++) {

    function r() { 
        return Math.floor(Math.random() * 255)
    }
    
    var color = 'rgb(' + r() + "," + r() + "," + r() + ')';

    boxes[i].style.color = color

  }
  


window.onload = function() {
    console.log("Pret")
}