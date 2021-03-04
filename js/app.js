const hamb = document.querySelector('.menu-burger');
const nav = document.querySelector('nav');
const aside = document.querySelector('aside');

hamb.addEventListener('click', function () {
    hamb.classList.toggle('active');
    if (nav.getAttribute('class') != "visible") {
        nav.setAttribute('class', "visible");
    } else {
        nav.setAttribute('class', "invisible");
    }
});

const allLink = document.querySelectorAll('nav a');


allLink.forEach(function (item) {
    item.addEventListener('click', function () {
        hamb.classList.toggle('active');
        nav.setAttribute('class', "invisible");
    });
});

//TYPED
var typed3 = new Typed('.typed', {
    strings: ["Bonjour, je m'appelle David Guillin et je suis actuellement en reconversion en 2ème année de Bachelor à MY DIGITAL SCHOOL.<br>Passionné par le développement, je travaille avec acharnement dans le seul but d'atteindre mon objectif : <br>DEVENIR DEVELOPPEUR !"],
    typeSpeed: 40,
    backSpeed: 0,
    showCursor: false,
    smartBackspace: true, // this is a default
    loop: false
});


//hide 
const btnLinkCV = document.querySelector('.btnLinkCV');
document.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 350) {
        aside.style.display = 'none';
        btnLinkCV.style.display = 'none';
    }else {
        aside.style.display = 'block';
        btnLinkCV.style.display = 'block';
    }
});










