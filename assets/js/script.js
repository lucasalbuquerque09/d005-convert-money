
//selecionar o botão de conversão
const btnconvert = document.getElementById('convert-button');
const valorFormatado = document.querySelector('.value-format')
//função que faz a conversão
function conversorDeMoeda(event){
    // evente pata previnir da página ser carregada quando o botão for clicado
    event.preventDefault();

    //pegar valores digitado e selecionado pelo usúario
    const converterDe = document.getElementById('convert-value').value;
    const converterPara = document.getElementById('convert-to').value;
    const resultadoDe = document.querySelector('.result-from');
    const resultadoPara = document.querySelector('.result-to')
    
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

    //Tomar decição baseado na modeda selecionada
    if(converterPara === 'dolar'){
        
        const valorConvertido = converterDe / cotacaoDolar;
        
        const valorDolarFormatado = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(valorConvertido);

        resultadoPara.innerHTML = `${valorDolarFormatado}`;
    }

}

// evento de clique e touch
btnconvert.addEventListener('click' , conversorDeMoeda);
btnconvert.addEventListener('touchstart' , conversorDeMoeda);








   
