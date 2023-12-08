const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})


window.sr = ScrollReveal({reset: true});

sr.reveal('.item-menu' , {duration: 2000});



document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.navigation');
    const menu = document.querySelector('.nav-menu ');

    hamburgerBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
