let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
const maxTentativas = 10;

const tituloEl = document.getElementById('titulo');
const mensagemEl = document.getElementById('mensagem-inicial');
const inputChute = document.getElementById('input-chute');
const listaTentativasEl = document.getElementById('lista-tentativas');
const recordeEl = document.getElementById('recorde');
const themeToggle = document.querySelector('.theme-toggle');
const progressTentativasEl = document.getElementById('progress-tentativas');

let recorde = localStorage.getItem('recorde') || '—';
recordeEl.textContent = recorde;

// Função exibir texto + voz
function exibirTextoNaTela(tagEl, texto, tipo = 'normal') {
    tagEl.innerHTML = texto;
    if(tipo === 'acerto'){
        tagEl.style.color = 'green';
        tagEl.classList.remove('erro');
    } else if(tipo === 'erro'){
        tagEl.style.color = 'red';
        tagEl.classList.add('erro');
    } else {
        tagEl.style.color = '';
        tagEl.classList.remove('erro');
    }
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

// Atualizar barra de tentativas
function atualizarBarraTentativas() {
    const porcentagem = (tentativas / maxTentativas) * 100;
    progressTentativasEl.style.width = `${porcentagem}%`;
    const vermelho = Math.min(255, Math.floor((tentativas / maxTentativas) * 255));
    const azul = 135 - Math.floor((tentativas / maxTentativas) * 135);
    progressTentativasEl.style.backgroundColor = `rgb(${vermelho}, 117, ${azul})`;
}

// Mensagem inicial
function exibirMensagemInicial() {
    tentativas = 0;
    inputChute.disabled = false;
    atualizarBarraTentativas();
    exibirTextoNaTela(tituloEl, 'Jogo do número secreto');
    exibirTextoNaTela(mensagemEl, `Escolha um número entre 1 e ${numeroLimite}. Você tem ${maxTentativas} tentativas.`);
    listaTentativasEl.innerHTML = '';
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();

// Verificar chute
function verificarChute() {
    let chute = parseInt(inputChute.value.trim(), 10); // corrige problema de string e ponto

    if (isNaN(chute) || chute < 1 || chute > numeroLimite) {
        exibirTextoNaTela(mensagemEl, `Número inválido — digite um inteiro entre 1 e ${numeroLimite}`, 'erro');
        limparCampo();
        return;
    }

    tentativas++;
    listaTentativasEl.innerHTML += `<li>${chute}</li>`;
    atualizarBarraTentativas();

    if (chute === numeroSecreto) {
        exibirTextoNaTela(tituloEl, 'Acertou!', 'acerto');
        exibirTextoNaTela(mensagemEl, `Você descobriu o número secreto com ${tentativas} tentativas!`, 'acerto');
        document.getElementById('reiniciar').removeAttribute('disabled');
        inputChute.disabled = true;

        if(recorde === '—' || tentativas < Number(recorde)){
            recorde = tentativas;
            localStorage.setItem('recorde', recorde);
            recordeEl.textContent = recorde;
        }

    } else if(tentativas >= maxTentativas) {
        exibirTextoNaTela(tituloEl, 'Fim de jogo!', 'erro');
        exibirTextoNaTela(mensagemEl, `Você atingiu o limite de ${maxTentativas} tentativas. O número secreto era ${numeroSecreto}.`, 'erro');
        document.getElementById('reiniciar').removeAttribute('disabled');
        inputChute.disabled = true;

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela(mensagemEl, 'O número secreto é menor', 'erro');
        } else {
            exibirTextoNaTela(mensagemEl, 'O número secreto é maior', 'erro');
        }
        tituloEl.classList.add('erro');
        setTimeout(()=> tituloEl.classList.remove('erro'), 300);
    }

    limparCampo();
}

// Gerar número aleatório
function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * numeroLimite) + 1;

    if (listaDeNumerosSorteados.length == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    inputChute.value = '';
}

// Reiniciar jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagemInicial();
}

// ----------------- Eventos -----------------

// Enter envia chute
inputChute.addEventListener('keypress', function(e){
    if(e.key === 'Enter') verificarChute();
});

// Toggle tema
themeToggle.addEventListener('click', toggleTema);
themeToggle.addEventListener('keypress', function(e){
    if(e.key === 'Enter') toggleTema();
});

function toggleTema(){
    document.body.classList.toggle('light-theme');
}
