//
document.getElementById("open-popup").addEventListener("click", function(){
    document.getElementById("popup").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function(){
    document.getElementById("popup").style.display = "none";
});

//JQUERY-COUNTER-//
const counter = $("#counter");
counter.prop('Counter',0).animate({
    Counter: 10
}, {
    duration: 2000,
    easing: 'swing',
    step: function (now) {
        counter.text(Math.ceil(now));
    }
});

const counter2 = $("#counter2");
counter2.prop('Counter',0).animate({
    Counter: 37
}, {
    duration: 2000,
    easing: 'swing',
    step: function (now) {
        counter2.text(Math.ceil(now));
    }
});

//

//SCROLL UP//
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Initiate the wowjs
new WOW().init();

////
function downloadPDF() {
    const url = './assets/CV-Dayana-es.pdf.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'CV-Dayana-en.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function downloadPDFes() {
    const url = './assets/CV-Ing-David.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'CV-Ing-David.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
////
function cambiarIdioma(idioma) {
    var idiomaSeleccionado = idioma;
    if (idiomaSeleccionado === 'es') {
        window.location.href = 'index.es.html';
    } else {
        window.location.href = 'index.html';
    }
}
