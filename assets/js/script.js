// Seleciona os elementos usados na conversao
const mostraResultado = document.querySelector('.section-result');
const formConvert = document.querySelector('.form-convert');
const resultadoDe = document.querySelector('.result-from');
const resultadoPara = document.querySelector('.result-to');
const nomeDaMoeda = document.querySelector('.text-to');
const imagemDaMoeda = document.querySelector('.img-currency');

const moedas = {
    dolar: {
        cotacao: 5.24,
        locale: 'en-US',
        currency: 'USD',
        nome: 'Dolar(USD)',
        imagem: 'assets/img/img-dolar-usa.png',
        alt: 'Imagem da bandeira dos Estados Unidos'
    },
    euro: {
        cotacao: 6.04,
        locale: 'de-DE',
        currency: 'EUR',
        nome: 'Euro(EUR)',
        imagem: 'assets/img/img-euro.png',
        alt: 'Imagem da bandeira da Uniao Europeia'
    },
    libra: {
        cotacao: 6.98,
        locale: 'en-GB',
        currency: 'GBP',
        nome: 'Libra(GBP)',
        imagem: 'assets/img/img-libra.png',
        alt: 'Imagem da bandeira do Reino Unido'
    },
    bitcoin: {
        cotacao: 0.0000048,
        locale: 'en-US',
        currency: 'BTC',
        nome: 'Bitcoin(BTC)',
        imagem: 'assets/img/img-bitcoin.png',
        alt: 'Imagem do simbolo do Bitcoin'
    }
};

function resultadoAnimado() {
    mostraResultado.classList.remove('show-result');
    void mostraResultado.offsetWidth;
    mostraResultado.classList.add('show-result');
}

function conversorDeMoeda(event) {
    // Evita recarregar a pagina ao enviar o formulario
    event.preventDefault();

    const valorEntrada = Number(document.getElementById('convert-value').value);
    const moedaSelecionada = document.getElementById('convert-to').value;
    const dadosMoeda = moedas[moedaSelecionada];

    if (!dadosMoeda || Number.isNaN(valorEntrada)) {
        return;
    }

    resultadoDe.textContent = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorEntrada);

    const valorConvertido = valorEntrada / dadosMoeda.cotacao;

    resultadoPara.textContent = new Intl.NumberFormat(dadosMoeda.locale, {
        style: 'currency',
        currency: dadosMoeda.currency
    }).format(valorConvertido);

    nomeDaMoeda.textContent = dadosMoeda.nome;
    imagemDaMoeda.src = dadosMoeda.imagem;
    imagemDaMoeda.alt = dadosMoeda.alt;

    resultadoAnimado();
}

// Captura click, Enter e mobile de forma consistente
formConvert.addEventListener('submit', conversorDeMoeda);







   
