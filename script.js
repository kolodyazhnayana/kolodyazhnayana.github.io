window.onscroll = function showHeader() {
    var header = document.querySelector ('.header');
    if(window.pageYOffset > window.innerHeight) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
};

document.getElementById("menu_burger").onclick = function() {
    open()
};

function open() {
    document.getElementById("menu").classList.toggle("active");
    document.getElementById("menu_burger").classList.toggle("active");
};