let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    
}


