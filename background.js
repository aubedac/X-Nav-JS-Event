var color = document.getElementById('color');
var display = document.getElementById('display');

var handler = function (){
  display.style.backgroundColor = this.value;
}

color.addEventListener('input', handler);
