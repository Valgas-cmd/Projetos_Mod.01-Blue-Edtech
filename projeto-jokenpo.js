const prompt = require('prompt-sync')();

function getRandomIntIncluso(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function verificaRespUser(resp)
{
    while(resp < 0 || resp > 2)
    {
        resp = +prompt('Valor informado não está correto. [0 - Pedra], [1 - Papel], [2 - Tesoura]: ');
    }
    return resp;
}

function verificaRespRodada(resp)
{
    while(resp != 'S' && resp != 'N') 
    {
        resp = prompt('Erro. Voce deve informar [S/N]: ')
    }
    return resp;
}

let jogadas = [`
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`]

jogadas.push(`
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)

`)

jogadas.push(`
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`)

console.log('\x1b[35m%s\x1b[0m','Bem vindo(a) ao Jokenpô virtual:\n')
console.log('\x1b[35m%s\x1b[0m','REGRAS:\nPedra ganha da tesoura, mas perde para o papel.\nTesoura ganha do papel, mas perde para a pedra.\nPapel ganha da pedra, mas perde para a tesoura.');
console.log();

let numRodadas;
let resRodada = verificaRespRodada(prompt('Pronto para Começar?[S/N]: '));
let resp_user, resp_pc, contVitoriasUser = 0, contVitoriasPc = 0;

while(resRodada == 'S')
{
    numRodadas = +prompt('Informe a quantidade de rodadas que vc quer fazer: ');
    for(let i = 1; i <= numRodadas; i++)
    {
        console.log(`Rodada ${i}:`);
        resp_user = verificaRespUser(+prompt('Escolha 0 para Pedra, 1 para Papel e 2 para tesoura. Sua escolha: '));
        console.log('\x1b[33m%s\x1b[0m', jogadas[resp_user]);
        resp_pc = getRandomIntIncluso(0,2);
        console.log('Computador escolheu:');
        console.log('\x1b[33m%s\x1b[0m', jogadas[resp_pc]);

        // verificando vencedores:
        if(resp_user == 0 && resp_pc == 2) {console.log('\x1b[32m%s\x1b[0m',`Rodada ${i}: Você ganhou`), contVitoriasUser++;}
        else if(resp_user == 1 && resp_pc == 0) {console.log('\x1b[32m%s\x1b[0m',`Rodada ${i}: Você ganhou`), contVitoriasUser++;}
        else if(resp_user == 2 && resp_pc == 1) {console.log('\x1b[32m%s\x1b[0m',`Rodada ${i}: Você ganhou`), contVitoriasUser++;}
        else if(resp_user == resp_pc) {console.log(`Rodada ${i}: Empate`);}
        else {console.log('\x1b[31m%s\x1b[0m',`Rodada ${i}: Computador ganhou`), contVitoriasPc++}
    }
    
    console.log(`\nO jogador venceu ${contVitoriasUser} rodada(s)`);
    console.log(`O comutador venceu ${contVitoriasPc} rodada(s)`);
    console.log('\nResultado:')
    if(contVitoriasPc < contVitoriasUser) {console.log('\x1b[35m%s\x1b[0m','Jogador foi o grande vencedor')}
    else if(contVitoriasPc > contVitoriasUser) {console.log('\x1b[35m%s\x1b[0m','Computador foi grande vencedor');}
    else {console.log('\x1b[35m%s\x1b[0m','Empate');}
    console.log()
    resRodada = verificaRespRodada(prompt('Deseja jogar novamente[S/N]: '));
}
console.log('Fim');