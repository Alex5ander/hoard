import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-organization',
  templateUrl: './financial-organization.page.html',
  styleUrls: ['./financial-organization.page.scss'],
})
export class FinancialOrganizationPage implements OnInit {

  contents = [
    {
      title: 'Organização Financeira',
      imageUrl: 'financial-organization 1.png',
      text: 'Como é a sua relação com o dinheiro? A resposta a essa pergunta pode dizer muito sobre sua realidade financeira e os seus objetivos. Ter organização financeira faz com que o seu dinheiro renda e sobre no final do mês — tarefa que nem sempre é fácil. Não ter uma vida financeira organizada aumenta os riscos de comprar além do que você pode pagar e, com isso, iniciar uma bola de neve: contas atrasadas, juros e o mal-estar em relacionamentos familiares. Para ter uma boa organização financeira, duas coisas são essenciais: planejamento e organização. Esses dois conceitos darão uma visão aprimorada sobre a origem das suas receitas e para onde esse dinheiro vai, possibilitando que sejam identificados comportamentos que afetam negativamente a sua saúde financeira. O planejamento financeiro consiste em uma série de ações que ajudam a projetar uma situação futura e traçar estratégias comportamentais para que o objetivo traçado seja alcançado — ou seja, é tudo uma questão de educação.',
    },
    {
      title: 'Conheça sua situação financeira:',
      imageUrl: 'financial-organization 2.png',
      text: 'Cada pessoa tem seus hábitos de consumo e a sua maneira de organizar o dinheiro. Algumas têm mais facilidade para poupar, enquanto outras não resistem àquelas comprinhas por impulso e veem o dinheiro sumir antes do fim do mês. Para montar o seu planejamento financeiro pessoal, faça um exercício de reflexão e seja sincero consigo mesmo. Avalie os seus hábitos de consumo, entenda de que maneira você lida com o dinheiro e quais são as suas dificuldades no momento. Quem está com dívidas em atraso, por exemplo, já deve mapear todas elas para entender o tamanho do problema. É importante conhecer o saldo devedor - considerando os juros - e o valor das parcelas atrasadas antes de partir para a renegociação. '
    },
    {
      title: 'Controle de suas finanças pessoais:',
      imageUrl: 'financial-organization 3.png',
      text: 'Uma boa estratégia para controlar suas finanças, como dito antes, é anotar todas as suas receitas e despesas. Anote todos os gastos, até mesmo aquele que parecem insignificantes como a compra de um sorvete. O ideal aqui é fazer anotações diariamente para não deixar nenhum detalhe para trás. Para essa tarefa também é possível usar app e planilhas de planejamento financeiro. Fazer anotações sobre todas as entradas e saídas, além de garantir maior controle, contribui para um diagnóstico mais preciso da situação financeira. Assim é possível perceber quais são os pontos fracos e fortes das finanças, reorganizar gastos e cortar despesas desnecessárias.'
    },
    {
      title: 'Traçe suas metas financeiras:',
      imageUrl: 'financial-organization 4.png',
      text: 'Definir metas é muito importante, porque assim você consegue tornar seus resultados mais palpáveis e verificar se a estratégia está, ou não, gerando os efeitos esperados. Nesse sentido as metas devem ser seguidas e verificadas periodicamente. Em determinados casos alguns ajustes podem ser necessários. Além disso, os objetivos devem ser realistas e os prazos não devem ser muito longos. Você pode, por exemplo, transformar metas de 20 anos em metas de 10 anos e depois em metas de 5 anos.  Assim será mais fácil manter o controle do planejamento.',
    },
    {
      title: 'Começe a poupar:',
      imageUrl: 'financial-organization 5.png',
      text: 'Além de aprender a controlar receitas e despesas, é necessário manter disciplina para a gastar menos do que se ganha e poupar o excedente. Por mais que pareça simples e óbvio esse é um passo que nem todo mundo consegue colocar em prática. Sem conseguir poupar, as finanças podem ficar em risco. Caso ocorra algum imprevisto, como acidentes, desemprego, ou doença, não haverá fundos para arcar com as despesas. Nesse cenário, os empréstimos e cheque especial se tornam comuns. Por outro lado, com uma avaliação correta das contas é possível manter uma boa saúde financeira, assim, não será necessário recorrer a produtos cujos juros podem colocar em xeque todo planejamento.',
    },
    {
      title: 'Crie uma estratégia:',
      imageUrl: 'financial-organization 6.png',
      text: 'Além de poupar é necessário ter uma estratégia para o dinheiro. Defina uma meta que seja realista e comece a montar estratégias para chegar ao seu objetivo. O planejamento é uma ação que deve ser praticada por muito tempo, por isso, considera o tempo. Nesse sentido, ao montar sua estratégia, alguns fatores devem ser levados em consideração, como:\n-Riscos;\n-Inflação;\n-Segurança no futuro. Além disso, outro fator importante é a taxa de juros. Embora a taxa Selic, definida pelo Copom – Comitê de Política Monetária -, tenha caído bastante nos últimos, os juros praticados no Brasil ainda figuram entre os mais altos do mundo o que garante atratividade para ativos de renda fixa. Por fim, os custos dos investimentos, como cobranças de taxas de administração, performance e corretagem, além de impostos, também devem ser avaliados de maneira minuciosa.',
    },
    {
      title: 'Invista:',
      imageUrl: 'financial-organization 7.png',
      text: 'Definido os objetivos, o próximo passo é investir mesmo com pouco o dinheiro, afinal os investimentos devem ser iniciados quanto antes, pois o tempo de investimento tem impacto sobre o resultado. Contudo, antes, é importante, pesquisar e estudar o máximo possível sobre produtos financeiros. Além disso, o investidor deve, ainda, fazer uma avaliação de si próprio para descobrir qual seu perfil de investidor que pode ser: Investidor Conservador – Investidores com esse perfil tem baixa tolerância ao risco e colocam segurança em primeiro lugar; Investidor Moderado – investidores moderados tendem a se arriscar um pouco mais, desde que o investimento tenha possibilidades de ganhos mais elevados; Investidor Arrojado – Esses são os investidores que optam por escolher os ativos que possibilitam o maior ganho possível, mesmo que para isso seja necessário deixar a segurança em segundo plano. A partir desse ponto o investidor pode montar uma carteira de investimento com os produtos que mais se adequem ao seu perfil de risco e estratégias definidas.',
    },
    {
      title: 'Estabeleça um padrão de vida:',
      imageUrl: 'financial-organization 8.png',
      text: 'Viver intensamente é um dos objetivos de muito gente. No entanto, pensar somente no presente pode ser uma prática nociva à saúde da vida financeira. É preciso também pensar no futuro. Nesse contexto é preciso avaliar o percentual da receita destinado a cada tipo de despesa e tentar limitar aquelas sendo menos relevantes. Assim será possível destinar uma quantia para investimento todo mês.',
    }
  ];

  index = 0;
  constructor() { }

  ngOnInit() {
  }

  previous() {
    if(this.index > 0) {
      this.index -= 1;
    }
  }
  next() {
    if(this.index < this.contents.length -1) {
      this.index += 1;
    }
  }
}
