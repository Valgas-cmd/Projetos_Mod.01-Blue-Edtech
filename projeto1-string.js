const prompt = require('prompt-sync')();

function verificaResp(resp)
{
        while(resp != 'Sim' && resp != 'Nao')
        { 
            resp = prompt("Hum... Isso não está certo. Vc deve informar [Sim ou Nao]: ");
        }
        return resp;
}

let contSim = 0;

console.log('\x1b[33m%s\x1b[0m',`Na tarde de uma vizinhança solitária, um jovem chamado Charlie decide ir ao mercado para comprar comida para o almoço. 
A caminho de seu destino, ele se depara com uma bifurcação próxima a sua casa. Em uma das ruas à sua frente, há um atalho
para chegar mais rápido e no outro o caminho usual que sempre fazia.`);

let resp1 = verificaResp(prompt("Ele tomou o caminho usual? [Sim/Nao]: "))
if(resp1 == 'Sim')
{
    contSim++;
    console.log('\x1b[32m%s\x1b[0m', '[S]: Charlie vai pelo caminho usual e logo chega ao mercado, sem muitos problemas.');

}else{
    console.log('\x1b[31m%s\x1b[0m', `[N]: o que acaba parecendo uma oportunidade, logo se transforma em um erro. O atalho está impedido
    por uma senhorinha carregando algumas sacolas. Seu andar lento, o atrasa em 15 minutos.`);
}


console.log('\x1b[33m%s\x1b[0m',`Ao passar pela porta de entrada do lugar, Charlie pensa em procurar em seu bolso uma lista de compras feita por sua mãe e entregue a ele
para fazer.`);
let resp2 = verificaResp(prompt("Ele a encontra?[Sim/Nao]: "));

if(resp2 == 'Sim')
{
    contSim++;
    console.log('\x1b[32m%s\x1b[0m', '[S]: Ao passar a mão no bolso de sua jaqueta, ele tateia e sente um pedaço de papel com instruções detalhadas do que comprar.');

}else{
    console.log('\x1b[31m%s\x1b[0m', `[N]: Ele procura em todos os bolsos de sua roupa, mas infelizmente não encontra sua lista.
    Por isso ele faz suas compras ao acaso, tentanto se lembrar ao máximo do que lhe haviam pedido para comprar.`);
}


console.log('\x1b[33m%s\x1b[0m',`Depois de terminar de separar suas coisas, Charlie se dirige ao caixa para pagar. Lá, a operadora lhe pergunta qual será a
forma de pagamento. Procurando por sua carteira, ele encontra o cartão de crédito de seu pai.`);

let resp3 = verificaResp(prompt("Charlie sabe a senha do cartão encontrado? [Sim/Nao]: "));

if(resp3 == 'Sim')
{
    contSim++;
    console.log('\x1b[32m%s\x1b[0m', '[S]: o cartão desliza pela máquina e esta retorna que o pagamento foi aprovado.');

}else{
    console.log('\x1b[31m%s\x1b[0m', `[N]: por não saber a senha, ele pega o celular e liga para sua mãe que, impaciente, lhe conta qual é
    a senha.`);
}


console.log('\x1b[33m%s\x1b[0m',`Após pagar, Charlie recolhe suas compras e se prepara para voltar para sua casa. Ao sair do mercado, caminha um
pouco e olha em volta, se perguntando se teria esquecido de algo. Verificando suas sacolas, ele procura por um molho de tomate.`);

let resp4 = verificaResp(prompt("Ele encontra o molho de tomate? [Sim/Nao]: "));

if(resp4 == 'Sim')
{
    contSim++;
    console.log('\x1b[32m%s\x1b[0m', '[S]: Com tudo em ordem ele continua seu caminho.');

}else{
    console.log('\x1b[31m%s\x1b[0m', `[N]: Charlie tende a voltar ao mercado para comprar o que falta e sofre um atraso de 25 min.`);
}


console.log('\x1b[33m%s\x1b[0m',`Por fim, quando estava perto de sua casa, Charlie avista um senhor carregando com esforço uma pilha 
de jornais em um carrinho. Era um conhecido entregador que exercia essa função há muito tempo.`);

let resp5 = verificaResp(prompt("Ao ver o nobre homem de todos os anos, Charlie oferece sua ajuda? [Sim/Nao]: "));

if(resp5 == 'Sim')
{
    contSim++;
    console.log('\x1b[32m%s\x1b[0m', `[S]: O velho entregador finaliza suas últimas entregas com a ajuda do garoto e, 
    agradecido pela contribuição de Charlie, lhe dá uns trocados como recompensa.`);

}else{
    console.log('\x1b[31m%s\x1b[0m', `[N]: Ao demorar seu olhar no idoso, Charlie tropeça e bate seu nariz no chão.`);
}

console.log("\nResultado:");
if(contSim == 0) {console.log('\x1b[35m%s\x1b[0m',"Charlie falhou miseravelmente");}
else if(contSim == 1 || contSim == 2) {console.log('\x1b[35m%s\x1b[0m',"Charlie falha, mas consegue fugir da situação");}
else if(contSim == 3) {console.log('\x1b[35m%s\x1b[0m',"Charlie chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco");}
else if(contSim == 4) {console.log('\x1b[35m%s\x1b[0m',"Depois de muito esforço Charlie conquista seu objetivo, embora não de maneira perfeita.");}
else {console.log('\x1b[35m%s\x1b[0m',"Charlie triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.");}