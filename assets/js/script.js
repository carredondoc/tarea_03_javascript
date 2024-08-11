function pintar(colorFondo, color = 'green') {
  colorFondo.target.style.backgroundColor = color;
}

const ele = document.querySelector("#ele1");

ele.addEventListener("click", function(colorFondo) {
  pintar(colorFondo, 'yellow');
});
