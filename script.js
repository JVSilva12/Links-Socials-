var data = new Date();
var hora = data.getHours();
var dark = document.querySelector('.body');

if (hora < 6 || hora >= 18){
    dark.classList.toggle('dark');
}