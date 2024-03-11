window.addEventListener('scroll', function() {
    var sobreMim = document.getElementById('sobremim');
    var bonequinho = document.querySelector('.bonequinho');

    // Verifica se a parte "Sobre Mim" está visível na tela
    var sobreMimPosicao = sobreMim.getBoundingClientRect();
    if (sobreMimPosicao.top >= 0 && sobreMimPosicao.bottom <= window.innerHeight) {
        bonequinho.classList.add('aparecer'); // Adiciona classe para tornar o bonequinho visível
    } else {
        bonequinho.classList.remove('aparecer'); // Remove classe para tornar o bonequinho invisível
    }
});

window.addEventListener('scroll', function() {
    var sobreMim = document.getElementById('sobremim');
    var textoSobreMim = document.querySelector('.textosobremim');

    // Verifica se a parte "Sobre Mim" está visível na tela
    var sobreMimPosicao = sobreMim.getBoundingClientRect();
    if (sobreMimPosicao.top >= 0 && sobreMimPosicao.bottom <= window.innerHeight) {
        textoSobreMim.classList.add('aparecer'); // Adiciona classe para tornar o texto visível
    } else {
        textoSobreMim.classList.remove('aparecer'); // Remove classe para tornar o texto invisível
    }
});