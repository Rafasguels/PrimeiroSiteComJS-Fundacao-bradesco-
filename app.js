'use strict' /* modo estrito, que reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros*/

const switcher = document.querySelector('.btn'); /*referencia de botão*/

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')

    var className =  document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    }                               /*if ou else para comando qual cor sera enviado para o site*/
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

