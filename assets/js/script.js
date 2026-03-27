//selecionar a section de resultados
const mostraResultado = document.querySelector('.section-result')
//função para mostrar a section de resultados com animação
function resultadoAnimado(){
    
    mostraResultado.classList.remove('show-result');
    void mostraResultado.offsetWidth;
    mostraResultado.classList.add('show-result');
}

//selecionar o botão de conversão
const btnconvert = document.getElementById('convert-button');

//função que faz a conversão
function conversorDeMoeda(event){
    // evente pata previnir da página ser carregada quando o botão for clicado
    event.preventDefault();

    //pegar valores digitado e selecionado pelo usúario
    const converterDe = document.getElementById('convert-value').value;
    const converterPara = document.getElementById('convert-to').value;
    
    const resultadoDe = document.querySelector('.result-from');
    const resultadoPara = document.querySelector('.result-to');

    const nomeDaMoeda = document.querySelector('.text-to');
    const imagemDaMoeda = document.querySelector('.img-currency')

   //Valor digitado formatado
    resultadoDe.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency:'BRL',
    }).format(converterDe);

    

    
    //Valores da moeda selecionada(Valores proximos)
    const cotacaoDolar = 5.24;
    const cotacaoEuro = 6.04;
    const cotacaoLibra = 6.98;
    const cotacaoBitcoin = 0.0000048;

    //Tomar decição baseado na moeda selecionada
    if(converterPara === 'dolar'){
        
        const valorDolarConvertido = converterDe / cotacaoDolar;
        
        const valorDolarFormatado = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(valorDolarConvertido);

        resultadoPara.innerHTML = `${valorDolarFormatado}`;
        nomeDaMoeda.innerHTML = 'Dólar(USD)';
        imagemDaMoeda.src = 'assets/img/img-dolar-usa.png';
    }
    
    else if(converterPara === 'euro'){

        const valorEuroConvertido = converterDe / cotacaoEuro;

        const valorEuroFormatado = new Intl.NumberFormat('de-DE', {
            style:'currency',
            currency:'EUR',
        }).format(valorEuroConvertido);
        
        resultadoPara.innerHTML = `${valorEuroFormatado}`;
        nomeDaMoeda.innerHTML = 'Euro(EUR)';
        imagemDaMoeda.src = 'assets/img/img-euro.png';
    }

    else if(converterPara ===  'libra'){

        const valorLibraConvertido = converterDe / cotacaoLibra;

        const valorLibraFormatado = new Intl.NumberFormat('en-GB', {
            style:'currency',
            currency:'GBP',
        }).format(valorLibraConvertido);

        resultadoPara.innerHTML = `${valorLibraFormatado}`;
        nomeDaMoeda.innerHTML = 'Libra(GBP)';
        imagemDaMoeda.src = 'assets/img/img-libra.png';
    }

    else if(converterPara === 'bitcoin'){
        
        const valorBitcoinConvertido = converterDe / cotacaoBitcoin;

        const valorBitcoinFormatado = new Intl.NumberFormat('en-US', {
            style:'currency',
            currency:'BTC',
        }).format(valorBitcoinConvertido);

        resultadoPara.innerHTML = `${valorBitcoinFormatado}`;
        nomeDaMoeda.innerHTML = 'Bitcoin(BTC)';
        imagemDaMoeda.src = 'assets/img/img-bitcoin.png';
    }

    //chamar a função para mostrar a section
    resultadoAnimado();
}



// evento de clique e touch
btnconvert.addEventListener('click' , conversorDeMoeda);
btnconvert.addEventListener('touchstart' , conversorDeMoeda);







   
