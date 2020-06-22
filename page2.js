window.onscroll = function showHeader() {
    var header = document.querySelector ('.header');
    if(window.pageYOffset > 230) {
        header.classList.remove('header_static');
        header.classList.add('header_fixed');
    } else {
        header.classList.add('header_static');
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