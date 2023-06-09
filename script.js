var body = document.getElementsByClassName('navbar')[0];
var button = document.getElementsByClassName('nav-btn')[0];
button.style.backgroundColor = 'black';
body.style.borderBottom = 'none';
body.style.backgroundColor = 'rgb(255,192,0)';

window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll< 300){


        button.style.backgroundColor = 'black';
        body.style.backgroundColor = 'rgb(255,192,0)';
    } else if (scroll>=300 && scroll < 600) {
        button.style.backgroundColor = 'green'
        body.style.backgroundColor = 'white';
        body.style.borderBottom = '1px solid black';
    }
}

