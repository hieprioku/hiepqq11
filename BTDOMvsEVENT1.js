let colors= ["blue", "black", "red"];
let button = document.getElementById('button');
button.addEventListener('click',function () {
    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    let container = document.getElementById('container');
    container.style.background = randomColor;
})