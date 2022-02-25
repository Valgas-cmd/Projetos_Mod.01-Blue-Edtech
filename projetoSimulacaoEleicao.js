console.clear();
const prompt = require('prompt-sync')();
// Projeto Extra - Simulador de Votacao.

function autorizaVoto(anoNasc){
    let idade = 2022 - anoNasc;
    if (idade < 16) {return 'Negado';}
    else if (idade <= 17) {return 'Opcional';}
    else {return 'Obrigatório';}
}

let conta = [0, 0, 0, 0, 0];

function votacao(autorizacao, voto)
{
    
    if (autorizacao != 'Negado')
    {
        while(voto < 1 || voto > 5) {voto = prompt('Voto inválido. Vc deve informar um numero de 1 a 5: ');}
        conta[voto - 1] += 1;
        console.log('\nVoto contabilizado');
    }
    else {return console.log('\nVocê não pode votar')}
}

function exibirResultados()
{
    console.clear();
    // mostrando votos.
    console.log('\nVotos:');
    for(let i = 0; i < 3; i++) {console.log(`Eleitor ${i+1}: ${conta[i]}`);}
    console.log(`Voto Nulo: ${conta[3]}`);
    console.log(`Voto Branco: ${conta[4]}`);

    // resultado
    console.log('\nResultado:');
    if(conta[0] > conta[1] && conta[0] > conta[2]) {console.log('Candidato 1 venceu');}
    else if(conta[1] > conta[0] && conta[1] > conta[2]) {console.log('Candidato 2 venceu');}
    else if(conta[2] > conta[0] && conta[2] > conta[1]) {console.log('Candidato 3 venceu');}
    else {console.log('Não houve ganhador');}
}

let control = 'y';
let status, i = 1;
while(control == 'y')
{
    console.clear();
    console.log('Candidatos:\n1 - Eleitor 1\n2 - Eleitor 2\n3 - Eleitor 3\n4 - Voto Nulo\n5 - Voto em branco');
    console.log(`\nEleitor ${i}`)
    resp = +prompt('Informe ano de nascimento: ');
    status = autorizaVoto(resp);
    resp = prompt('Escolha um numero para votar: ');
    votacao(status, resp);
    control = prompt("Deseja inserir mais votos? Digite 'y' para sim e 'n' para não: ");
    i++;
}
exibirResultados()