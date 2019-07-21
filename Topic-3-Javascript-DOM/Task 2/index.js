function showSection() {
  const element = document.getElementById('hiddenSec');
  element.style.transition = 'opacity 5s';
  element.style.MozTransition = 'opacity 5s';
  element.style.webkitTransition = 'opacity 5s';
  element.style.opacity = '1';
}

function callAlert(msg) {
  alert(msg)
}