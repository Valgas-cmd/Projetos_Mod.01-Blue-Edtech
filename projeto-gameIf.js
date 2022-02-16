console.clear();

function identInventario(item)
{
    let value = jogador.inventario.find(element => element.objeto == item);
    let position = jogador.inventario.indexOf(value);
    return position;
}

const prompt = require('prompt-sync')();
let texto_stage1 = 
[
`Você acorda em sua cama, num beliche acinzentado em um dos cômodos dos aprendizes da Torre. Ao abrir os olhos, você sente dificuldade em
enxergar em meio a escuridão, o sol ainda não raiou. No bolso de suas vestes há uma poção que outrora você preparou, cujas propriedades
luminosas talvez venham a calhar.
`,
`Seus olhos focalizam o cômodo iluminado e logo você sai de sua cama. À sua frente, aos pés do beliche, há um baú com os seus pertences.`,
`Abrindo o baú, você coleta seus materiais e entre eles, há um pedaço de papel com os seus horários. Sua primeira aula será de Alquimia.
Olhando ao redor, você procura pela porta para sair do cômodo e logo encontra a maçaneta de uma porta de carvalho.
`,
`A porta não pode ser aberta, ela é mágica e contém um segredo. Para passar você deve decifrar um enigma que muda diariamente.
Seu enigma diz "O que perde a cabeça pela manhã, mas a recupera a noite?`,
`A porta se abre lhe dando passagem depois de responder-lhe a pergunta. Você se dirige para a sala de alquimia.
A aula é interrompida quando chama a atenção de seu mestre, o feiticeiro Nilrem, que sem muito entusiasmo se aproxima de sua bancada
para falar com você. O mago de aparência aflita se mostra sério ao te encarar e o chama para sua sala para conversarem. (pressione enter para continuar)`,
`Nilrem: “Como bem sabe, estamos passando por problemas, a Torre está fragilizada depois do roubo de meu cajado. Sem ele, estou
enfraquecido e não sou capaz de manter esse lugar seguro. Não bastasse isso, o cajado é um artefato de grande poder mágico,
nas mãos erradas toda a Feldris estará ameaçada. É necessário que nós o recuperemos de imediato. (pressione enter para continuar)”
`,
`Nilrem: “Ogsmar, o nosso ladrão, vive em algum lugar além da Floresta da Caça Sombria, é necessário que nós encontremos o seu
esconderijo que é onde o cajado deve estar. Você vai precisar de equipamento. Mesmo que ainda não tenha despertado sua arcana,
é um bom alquimista, então pode se virar. (pressione enter para continuar)”`,
`Nilrem: "Devemos começar pelo seu equipamento. Como um alquimista você pode encontrar alguns reagentes para o preparo de suas
poções aqui na Torre. Para te auxiliar na sua jornada te darei um cajado básico e esse grimório com feitiços defensivos básicos.
Você também deve levar seu kit de alquimista. Se sentir necessidade de suprimentos, fale com o mestre Irving. Uma última coisa:
lembre-se, a maior arma de um mago é a sua inteligência, para vencer os desafios desta jornada vai precisar pensar antes de agir.(pressione enter para continuar)"`,
`Em seu mapa da Torre foi adicionado o ponto "Sala de suprimentos". Use "ir para" para se locomover dentro da Torre.
Caso queira ir direto para sua aventura, use o ponto "saída".`,
`
Você segue diretamente para a saída da torre. Fechados os portões que o antecediam, você se depara com a imensidão da Floresta da Caça Sombria.
`,
`Ao chegar na sala de suprimentos, você encontra um velho senhor listando itens em um pedaço de papel. Quando nota sua presença,
este o recebe com um sorriso indicando que o conhece. O amigável velho Irving o saúda: "Kristan, até que enfim. Nilrem me avisou que
você poderia aparecer. Separei algumas coisas para sua viagem". Irving tira uma bolsa por debaixo da mesa e a entrega a você.
`
]
let resp_stage1 = [`usar pocao`, `abrir bau`, `abrir porta`, 'travesseiro', '','','','', '', ''];

let texto_stage2 = 
[
`Caminhando por entre as copas das árvores você procura pelo paradeiro da caverna de Ogsmar. Olhando em volta você nota, em meio a uma
elevação, um ponto de observação que o ajudará a identificar melhor o terreno. Talvez deva 'olhar'`,
`Após subir, seus olhos focalizam várias estruturas. Velhas ruinas se destacam na paisagem sombria e selvagem da floresta. Mas esse não 
é o maior problema. Ao longe, depois de muitos obstáculos, uma enorme fenda em uma rocha exibe um ar místico. Você sente a energia do 
cajado de seu mestre emanando de dentro do lugar. O objetivo está definido, mas o caminho não.
À sua frente há três rotas para seguir viagem. Deverá escolher um deles.
1 – Labirinto: à noroeste, uma mata densa com muitas ramificações, porém abundante em recursos.
2 – Mina Abandonada: ao norte, uma fenda menor no chão, próxima a sua localização. Um túnel escavado por anões à procura de riquezas,
cujo interesse construiu um caminho que leva direto à Caverna de Ogsmar.
Que tesouros o lugar pode resguardar?
3 – A Montanha: à nordeste, um caminho perigoso, porém prático. Aventurando-se pelas altas colinas e montes você pode evitar as matas e,
com sorte, atingir mais rápido seu objetivo. O que os céus reservam para os que nada temem?
`,

[`
Kristan avança em direção ao labirinto. Próximo a sua entrada, sua passagem é impedida por uma Píton gigante. Ela agressivamente parte em
sua direção.
`,
`Kristan avança em direção a mina abandonada. Próximo a sua entrada, sua passagem é impedida por um Goblin gigante. Ele agressivamente parte
em sua direção.
`,
`Kristan avança em sua subida pela montanha, mas sem se distanciar muito do seu objetivo, um Troll de Gelo aparece. Ele agressivamente parte em 
sua direção`
]
]

let icons = {
    vida: ['', '💖', '💖💖', '💖💖💖', '💖💖💖💖', '💖💖💖💖💖'],
    beef: ['', '🍖', '🍖🍖', '🍖🍖🍖'],
    mana: ['', '⚡', '⚡⚡', '⚡⚡⚡', '⚡⚡⚡⚡', '⚡⚡⚡⚡⚡'],

}

// sistema de cores, usado para personalizar o jogo.
let color = {
    amarelo: '\x1b[33m%s\x1b[0m',
    verde: '\x1b[32m%s\x1b[0m',
    vermelho: '\x1b[31m%s\x1b[0m',
    roxo: '\x1b[35m%s\x1b[0m',

    insereCor: function (string, indice) {
        let color = [
            this.amarelo,
            this.verde,
            this.vermelho,
            this.roxo
        ]
        console.log(color[indice], string)
    }
}

let ambiente = {
    turno: 0,

}

let max_health = 3;
let max_mana = 3;

let jogador = {

    life: max_health,
    fome: 3,
    mana: max_mana,
    
    restauraAtt: function(){
        if(this.life == 3 && this.fome == 3) {
            console.log('Vida e fome estão cheias');
            return false;
        }
        
        else{
            if(this.life <= 2) {this.life++}
            if(this.fome <= 2) {this.fome++}
            return true;
        }
    },

    perdeVida: function(){
        this.life -= 1;
    },

    perdeMana: function(custoHF){
        this.mana -= custoHF;
    },
    
    senteFome: function(){
        this.fome -= 1;
    },

    mostraAtt: function() {
        console.log(color.roxo,'\n---------------------------------------------')
        console.log(` Vida ${icons.vida[this.life]} / Fome ${icons.beef[this.fome]} / Mana ${icons.mana[this.mana]}`)
        console.log(color.roxo,'---------------------------------------------\n')
    },

    inventario: [],
    addInventario: function(item, qtd){
        let value = this.inventario.find(element => element.objeto == item)
        let position = this.inventario.indexOf(value);
        if(position < 0)
        {
            novoItem = {
                objeto: item,
                quantidade: qtd,
            }
            console.log(color.verde,`${qtd} '${item}' foi adicionado ao inventário.`); 
            return this.inventario.push(novoItem)
        }else{
            console.log(color.verde,`${qtd} '${item}' foi adicionado ao inventário.`);
            this.inventario[position].quantidade+=qtd
        }
    },
    
    removeInventario: function(item){
        let value = this.inventario.find(element => element.objeto == item)
        let position = this.inventario.indexOf(value)
        if(position >= 0) {
            this.inventario.splice(position, 1)
        }
        else {console.log('o item informado não existe no inventário')}
    },

    mostraInventario: function(){
        console.log(color.roxo, '\n------Inventário------')
        if(this.inventario.length == 0)
        {
            color.insereCor('Seu inventário está vazio.', 1);
        }
        else 
        {
            for(let i of this.inventario)
            {
                color.insereCor(`${i.objeto} x ${i.quantidade}`, 1)
            }
        }
        console.log(color.roxo, '----------------------\n')
    },

    usarItem: function (item) {
        let value = this.inventario.find(element => element.objeto == item)
        let position = this.inventario.indexOf(value);
        if(position < 0) {color.insereCor(`'${item}' não existe no seu inventario`, 1)}
        else
        {
            if(item == 'comida')
            {
                if(this.restauraAtt())
                {
                    this.inventario[position].quantidade--;
                    color.insereCor(`${item} foi usado.`, 1);
                }
            
            }else{
                console.log(color.verde, `${item} foi usado`);
                this.inventario[position].quantidade--;
            }

            if (this.inventario[position].quantidade <= 0)
            {
                this.removeInventario(item);
            }
        }
    },
    
    equipamento: [],
    addEquipamento: function(item, resumo){
        novoEquipo = {
            obj: item,
            desc: resumo,
        }
        console.log(color.verde, `'${item}' foi adicionado ao equipamento.`);
        return this.equipamento.push(novoEquipo)
    },
    mostraEquipo: function(){
        console.log(color.roxo, '\n------Equipamento--------');
        if(this.equipamento.length == 0) {console.log(color.verde,'Você não tem equipamentos.');}
        for(let i of this.equipamento)
        {
            console.log(color.verde,`${i.obj}: ${i.desc}`);
        }
        console.log(color.roxo, '-------------------------\n');
    },
    
    criar: function(pocao)
    {
        if(pocao == 'pocao explosiva') {
            ingredientes = ['polvora negra', 'gordura de troll'];
            let cont = 0;
            for(let i of ingredientes)
            {
                if(identInventario(i) >= 0) {
                    this.usarItem(i);
                    cont++;
                }
            }
            if(cont == 2) {this.addInventario(pocao, 1);}
        }
        else if(pocao == 'pocao mana') {}
        else if(pocao == 'pocao veneno') {}
        else {
            console.log(color.verde, `'${pocao}' não existe`);
        }
    },

    combate: 
    {
        piton: function(){
            let vida = 5, acao;
            acao = prompt('começar luta?[s/n]: ');
            if(acao == 's')
            {
                while(vida > 0)
                {
                    console.clear();
                    if(acao == 'fireball')
                    {
                        vida -= 3;
                        if(vida <= 0)
                        {
                            console.log(color.vermelho, 'Piton morreu')
                            break;
                        }
                        else {console.log(color.vermelho, 'Piton foi atacada. Ela ataca de volta.');}
                        jogador.life--;
                        console.log('Voce perdeu 1 coracao');
                    }
                    else if(acao == 'usar comida') {jogador.usarItem('comida');}
                    console.log(`\nPiton ${icons.vida[vida]}`);
                    jogador.mostraAtt();
                    acao = prompt('> ');
                    if(jogador.life <= 0)
                    {
                        console.log('Jogador morreu. Fim de jogo');
                        return 0;
                    }
                }
                console.log('\nApós morrer, o monstro deixou drops.');
                jogador.addInventario('chave de piton', 1);
                jogador.addInventario('erva ardente', 1);
                jogador.addInventario('toxina negra', 1);
            }
        },
        goblin: function(){
            let vida = 5, acao;
            acao = prompt('começar luta?[s/n]: ');
            if(acao = 's')
            {
                while(vida > 0)
                {
                    console.clear();
                    if(acao == 'fireball')
                    {
                        vida -= 3;
                        if(vida <= 0)
                        {
                            console.log(color.vermelho, 'Goblin morreu')
                            break;
                        }
                        else {console.log(color.vermelho, 'Goblin foi atacado. Ele ataca de volta.');}
                        jogador.life--;
                        console.log('Voce perdeu 1 coracao');

                    }
                    else if(acao == 'usar comida') {jogador.usarItem('comida');}
                    console.log(`\Goblin ${icons.vida[vida]}`);
                    jogador.mostraAtt();
                    acao = prompt('> ');
                    if(jogador.life <= 0)
                    {
                        console.log('Jogador morreu. Fim de jogo');
                        return 0;
                    }
                }
                console.log('\nApós morrer, o monstro deixou drops.');
                jogador.addInventario('chave de goblin', 1);
                jogador.addInventario('jinsem', 1);
                jogador.addInventario('erva de gelo', 1);
            }
        },
        troll: function(){
            let vida = 5, acao;
            acao = prompt('começar luta?[s/n]: ');
            if(acao == 's')
            {
                while(vida > 0)
                {
                    console.clear();
                    if(acao == 'fireball')
                    {
                        vida -= 3;
                        if(vida <= 0)
                        {
                            console.log(color.vermelho, 'Troll morreu')
                            break;
                        }
                        else {console.log(color.vermelho, 'Troll foi atacado. Ele ataca de volta.');}
                        jogador.life--;
                        console.log('Voce perdeu 1 coracao');

                    }
                    else if(acao == 'usar comida') {jogador.usarItem('comida');}
                    console.log(`\Troll ${icons.vida[vida]}`);
                    jogador.mostraAtt();
                    acao = prompt('> ');
                    if(jogador.life <= 0)
                    {
                        console.log('Jogador morreu. Fim de jogo');
                        return 0;
                    }
                }
                console.log('\nApós morrer, o monstro deixou drops.');
                jogador.addInventario('gordura de troll', 1);
                jogador.addInventario('polvora negra', 1);
                jogador.addInventario('comida', 5);
            }
        }
    }
}
let tempo = 5;
function stage1(){
    let resp;
    for(let i = 0; i < texto_stage1.length;)
    {
        console.clear();
        if(i == 7)
        {
            jogador.addEquipamento('cajado do aprendiz', '2');
            jogador.addEquipamento('grimorio de feiticos', 'livro');
        }

        if(resp == resp_stage1[i]) {i++, tempo++}
        else if(resp == 'inventario') {jogador.mostraInventario()}
        else if(resp == 'equipo') {jogador.mostraEquipo()}
        else if(resp == 'ir para saida'){
            i++;
            tempo++
            console.log(texto_stage1[i]);
            break;
        }
        else if(resp == 'ir para sala de suprimentos')
        {
            jogador.addInventario('pocao de cura', 1);
            jogador.addInventario('pocao de mana', 1);
            jogador.addInventario('comida', 5);
            i+=2;
            tempo++;
            console.log(texto_stage1[i]);
            break;
        }
        if(tempo <= 11) {console.log(color.amarelo, `${tempo} AM`);}
        else if(tempo > 12) {console.log(color.amarelo, `${tempo % 12} PM`);}
        else {console.log(color.amarelo, '12 PM');}
        jogador.mostraAtt();
        console.log(texto_stage1[i])
        resp = prompt('> ')
    }
}
function stage2()
{
    console.clear();
    let resp;
    let isNotFinal = true; 
    let i = 0;
    while(isNotFinal)
    {
        console.clear();
        if(resp == 'inventario') {jogador.mostraInventario();}
        else if(resp == 'equipo') {jogador.mostraEquipo();}
        else if(resp == 'usar comida') {jogador.usarItem('comida');}
        else if(resp == 'usar pocao mana') {jogador.usarItem('pocao mana');}
        else if(resp == 'usar pocao cura') {jogador.usarItem('pocao cura');}
        else if(resp == 'usar pocao explosiva') {jogador.usarItem('pocao explosiva');}
        else if(resp == 'potion')
        {
            color.insereCor('\n------------------ Potions ----------------------', 3);
            console.log(color.verde, 'pocao explosiva: 1 gordura de troll e 1 polvora negra');
            console.log(color.verde, 'pocao mana: 2 erva de gelo e 1 jinsém');
            console.log(color.verde, 'pocao veneno: 2 erva ardente, 1 toxina negra');
            color.insereCor('--------------------------------------------------\n', 3)
        }
        else if (resp == 'criar pocao explosiva') {jogador.criar('pocao explosiva');}
        else if (resp == 'criar pocao mana') {}
        else if (resp == 'criar pocao veneno') {}
        else if(resp == 'olhar') {i++, tempo++}
        else if(resp >= 1 && resp <= 3) {
            i++;
            tempo++;
            console.log(texto_stage2[i][resp-1]);
            if(resp == '1') {jogador.combate.piton();}
            else if(resp == '2') {jogador.combate.goblin();}
            else {jogador.combate.troll()}
            break;
        }
        // tempo
        if(tempo <= 11) {console.log(color.amarelo, `${tempo} AM`);}
        else if(tempo > 12) {console.log(color.amarelo, `${tempo % 12} PM`);}
        else {console.log(color.amarelo, '12 PM');}
        jogador.mostraAtt()
        
        if (resp <= 3 && resp >= 1){
            console.log(texto_stage2[i][resp-1]);

        }
        else {console.log(texto_stage2[i]);}
        resp = prompt('> ');
        
    }
    console.log('\n\nContinua...');
}

let logo = `
#######                     #     #                                  #####                                 
   #    #    #  ######      ##   ##    ##     ####   #   ####       #     #  #####    ##    ######  ###### 
   #    #    #  #           # # # #   #  #   #    #  #  #    #      #          #     #  #   #       #      
   #    ######  #####       #  #  #  #    #  #       #  #            #####     #    #    #  #####   #####  
   #    #    #  #           #     #  ######  #  ###  #  #                 #    #    ######  #       #      
   #    #    #  #           #     #  #    #  #    #  #  #    #      #     #    #    #    #  #       #      
   #    #    #  ######      #     #  #    #   ####   #   ####        #####     #    #    #  #       #
`

color.insereCor(logo, 1)
console.log('\nBemvindo(a) jogador.');
console.log('O que deseja fazer?:\n1: Jogar\n2: Como jogar\n3: Sair');
let respUser = prompt('> ');
if(respUser == 1)
{
    stage1();
    respUser = prompt('Pronto para continuar?[s/n]: ');
    if (respUser == 's') {stage2()}
    else {return 0;}
}
else if(respUser == 2)
{console.log('regras estão no doc');}
else if(respUser == 3) {return 0;}