let currentFontSize = 16;
let zoomText = document.getElementById("zoomText")
function zoomIn() {
    currentFontSize+=2;
    zoomText.style.fontSize = currentFontSize + "px";
} 
function zoomOut() {
     currentFontSize +=2
     zoomText.style.fontSize =currentFontSize + "px";
}