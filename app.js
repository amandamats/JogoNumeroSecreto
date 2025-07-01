let listaNumerosSorteados = [];
let limiteNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function inserirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    inserirTexto('h1', 'Jogo do Número Secreto');
    inserirTexto('p', 'Escolha um número entre 1 e ' + limiteNumeros);
}

mensagemInicial();


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumeros + 1);
    let quantidadeLista = listaNumerosSorteados.length;

    if (quantidadeLista == limiteNumeros){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
    
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        inserirTexto('h1', 'Acertou. Parabéns!');
        let numeroTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        inserirTexto('p', 'Você descobriu o número secreto: ' + numeroSecreto + ' com ' + tentativas +'\n' + numeroTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            inserirTexto('p', 'O número secreto é menor que ' + chute);
        } else {
            inserirTexto('p', 'O número secreto é maior que ' + chute);

        } 
        tentativas++
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}