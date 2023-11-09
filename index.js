const form = document.querySelector('#formulario');
const Numeros = [];
const Contatos = [];
let ContatosSalvos = '';
alert ('Olá, seja muito bem vindo ao I-cell_book. Vim aqui te passar um pequeno detalhe sobre a plataforma, Não é necessario adicionar o (11) no inicio do numero.')
const AlertaDeErro = document.querySelector('.erro-numero')

const Numero = document.querySelector ('.numero-contato');
const Contato = document.querySelector ('.nome-contato');

let salvaNumeru = Numero.value;

form.addEventListener('submit', function (e){
    e.preventDefault();
    
    addContac();
    atualizaTabela()

})
function addContac(){
    const Numero = document.querySelector ('.numero-contato');
    const Contato = document.querySelector ('.nome-contato');
    
    salvaNumeru = parseFloat(Numero.value);

    if (salvaNumeru < 90000000){
        AlertaDeErro.style.display = 'flex';
    }else{
        AlertaDeErro.style.display = 'none';
    Numeros.push(parseFloat(Numero.value));
    Contatos.push(Contato.value);
    
    let SalvaContato = `<tr>`;
    SalvaContato += `<td class="contato-salvo">`;
    SalvaContato += `<img src="./imagens/🦆 icon _profile circled_.png" alt="icone-usuario">`;
    SalvaContato += `<p> ${Contato.value}</p>`;
    SalvaContato += `</td>`;
    SalvaContato += `</tr>`;
    SalvaContato += `<tr>`;
    SalvaContato += `<td class="numero-salvo">`;
    SalvaContato +=  `<img src="./imagens/🦆 icon _phone_.png" alt="telefone">`;
    SalvaContato += `<p>(11) ${Numero.value}</p>`;
    SalvaContato += `</td>`;
    SalvaContato += `</tr>`;
    SalvaContato += `<tr>`;
    SalvaContato += `<td class="confirmaçao">`;
    SalvaContato += `<p>contato valido</p>`;
    SalvaContato += `</td>`;
    SalvaContato += `</tr>`;


    ContatosSalvos += SalvaContato;

    Numero.value = ''
    Contato.value = ''
}
}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = ContatosSalvos
}





