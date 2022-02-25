console.clear();
const prompt = require('prompt-sync')();

let jogadores = [];
function novoObj(nome)
{
    let v = jogadores.find(element => element.player == nome)
    v = jogadores.indexOf(v)
    while(v >= 0)
    {
        nome = prompt('Jogador ja existe. Informe um novo nome: ');
        v = jogadores.find(element => element.player == nome)
        v = jogadores.indexOf(v)
    }      
    cds = {
        player: nome,
        vitoria: 0,
    }
    return jogadores.push(cds);
}

console.log('Simulador de Lancamentos de Dados:');
let numRodadas = +prompt('Quantas rodadas quer fazer?: ');
let numJ = +prompt('Quantos jogadores tem? ');

// cadastrando jogadores.
for(let i = 1; i <= numJ; i++) {
    novoObj(prompt(`Informe nome do jogador ${i}: `));
}

// jogo [PS: COM DADO DE 6 FACES]
let aux, cont;

for(let i = 1; i <= numRodadas; i++)
{
    aux = 0;
    cont = 0;
    console.log(`\nRodada ${i}`)
    for(let element of jogadores)
    {
        element.dado = Math.floor(6 * Math.random() + 1)
        console.log(`${element.player} tirou ${element.dado}`);
        if(aux < element.dado) {aux = element.dado}
    }

    // verficando vencedores
    for(let j of jogadores) {if(j.dado == aux) {cont++}}
    if(cont >= 2) {console.log('\x1b[32m%s\x1b[0m','Empate');}
    else {
        console.log('\nVencedor:')
        let vencedor = jogadores.find(element => element.dado == aux)
        console.log('\x1b[32m%s\x1b[0m', vencedor.player);
        vencedor.vitoria += 1;
    }
}

// Exibindo o grande vencedor:
let contV = [];
cont = 0;
console.log('\nContagem de vitorias')
for(let i of jogadores)
{
    contV.push(i.vitoria);
    console.log(`${i.player}: ${i.vitoria}`);
}
contV.sort((a,b) => b - a)
vencedor = jogadores.find(element => element.vitoria == contV[0])
for(let i of jogadores) {if(vencedor == i.vitoria) {cont++;}}
if(cont >= 2) {console.log('\x1b[32m%s\x1b[0m', 'Empate');}
else {console.log('\x1b[32m%s\x1b[0m',`O vencedor é: ${vencedor.player}`);}