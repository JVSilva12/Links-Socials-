var data = new Date();
var hora = data.getHours();
var body = document.querySelector(".body");

if (hora < 6 || hora >= 18) {
  body.classList.toggle("dark");
}
