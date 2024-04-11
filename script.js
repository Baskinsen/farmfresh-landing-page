
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.addEventListener('click', ()=> {
    menu.src =
      nav.style.display == "none"
        ? "images/icon-menu-close.svg"
        : "images/menu.png";
    nav.style.display == 'none' ? nav.style.display = 'block' : nav.style.display = 'none';
    
})