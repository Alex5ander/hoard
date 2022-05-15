import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-mistakes',
  templateUrl: './finance-mistakes.page.html',
  styleUrls: ['./finance-mistakes.page.scss'],
})
export class FinanceMistakesPage implements OnInit {

  contents = [
    {
      title: 'Erro de Finanças',
      text: 'O ser humano sempre estará fadado a erros, isso também se inclui na área financeira, onde diversos erros podem ser cometidos quando não conseguimos administrar bem nosso dinheiro ou não analisamos bem a situação, principalmente na realidade brasileira, onde se tem falta da educação financeira, fazendo com que não tenhamos um bom gerenciamento de nossa renda. Por isso, serão mostrados os diversos erros financeiros que podem ser cometidos nessa área, para que você tenha noção desses problemas e não os cometas.',
      imageUrl: 'finance-mistakes.png',
    },
    {
      title: 'Falta de educação financeira',
      text: 'Por conta da falta de educação financeira no país, muitos dos brasileiros acabam cometendo erros financeiros na vida, principalmente sobre não procurar aprender sobre educação financeira, seja por não conhecer direito a área ou achar que isso não fará diferença na sua vida, porém a falta dessa matéria acaba trazendo prejuízos para vida das pessoas, pelo simples fato delas não serem ensinadas sobre as formas de gerenciar e economizar o dinheiro, às fazendo a cometer os erros financeiros. Contudo, existem outras formas de se entender e aprender sobre o assunto, seja em livros, vídeos ou em nosso aplicativo, que ajudam o usuário a compreender sobre a área, é só saber procurar.',
      imageUrl: 'finance-mistakes-2.png',
    },
    {
      title: 'Gastar mais do que sua renda permite:',
      text: 'Como dito na parte “Como identificar seu padrão de vida” um dos maiores problemas que muitas pessoas passam é gastar mais do que se ganha, por conta do grande desejo de muitos por querer viver uma vida de classe alta, acabam gastando em serviços e produtos mais caros, o que faz com que em algum momento o indivíduo não consiga mais ter renda para sustentar seu modo de vida, caindo em endividamentos e problemas de finanças. Mas para que isso não ocorra e possa ter um modo de vida mais alto é necessário planejar e investir para o longo prazo, vivendo de acordo com sua renda, só assim poderá alcançar o modo de vida desejado e não terá problemas de renda.',
      imageUrl: 'finance-mistakes-3.png',
    },
    {
      title: 'Não ter um planejamento e organização financeira:',
      text: 'Uns dos principais aliados para ter um bom rendimento é o planejamento e a organização financeira, coisas que muitos deixam de fazer, e por isso acabam tendo problemas na manutenção do dinheiro e não percebem seu gasto mensal, ambos possuem uma grande importância para quem pretende se estabilizar e ter uma boa segurança financeira (principalmente para aqueles que tem uma renda baixa). A organização financeira ajuda a ter noção de seus gastos do dia a dia, além de saber no que precisa utilizar seu dinheiro para estabilizar sua renda mensal, enquanto o planejamento consiste em planejar melhor seus gastos para ter um melhor rendimento a cada mês, mas para isso é necessário que bote seus gastos e contas em dia para que consiga manusear bem seu dinheiro e ter bons resultados.',
      imageUrl: 'finance-mistakes-4.png',
    },
    {
      title: 'Usar o cartão de crédito em excesso:',
      text: 'O cartão de crédito é um dos que mais traz prejuízos para aqueles que não o usam de forma correta, principalmente quando extrapolam o limite do cartão, que faz a operadora passar a cobrar taxas extra a cada transação feita, outro problema se dá na fatura do cartão que pode ter um preço muito alto, isso se dá pela facilidade de usar o cartão e de parecer ser uma extensão de nosso rendimento, porém, o certo é que se utilize o cartão o menos possível para que esse tipo de problema não ocorra e acabe ficando endividado.',
      imageUrl: 'finance-mistakes-5.png',
    },
    {
      title: 'Pensar a curto prazo:',
      text: 'Muitas pessoas não tem o costume de planejar para o longo prazo, seja por não parecer tão importante ou por achar que o presente é mais importante, apesar do foco no presente ser importante, focar no futuro também é muito importante para um progresso financeiro, principalmente quando queremos realizar algum projeto (como uma viagem, uma festa, uma construção, etc.…) e não temos o dinheiro necessário no momento, assim estabelecemos objetivos futuros e ver o que podemos fazer para alcançar esses objetivos. Outro ponto é pensar em decisões que podem comprometer no futuro, como comprar algum produto que não é necessário no momento, fazendo não ter o dinheiro em momentos de necessidade, para isso é necessário refletir se o produto que deseja é de extrema importância ou pode ser comprado em outro momento.',
      imageUrl: 'finance-mistakes-6.png',
    },
    {
      title: 'Não fazer um fundo de emergência:',
      text: 'O fundo de emergência consiste em uma reserva de dinheiro que é montado a partir do dinheiro que sobra no final do mês, sendo de extrema importância em casos de imprevisto, como perder o emprego, problemas de saúde, etc.., casos inesperados onde podemos utilizar o fundo de emergência caso não tenhamos dinheiro suficiente, mantendo nosso padrão de vida atual. A falta de um fundo pode ser um grande problema caso ocorra um imprevisto que possa prejudica nosso padrão de vida, além do planejamento e objetivos para o futuro, atrapalhando nossa vida financeira.',
      imageUrl: 'finance-mistakes-7.png',
    },
    {
      title: 'Atraso nos pagamentos:',
      text: 'Quando recebemos nosso salário a principal prioridade é acerta as contas e dividas (caso tenha) para depois resolver o que fazer com o dinheiro, porém, em certos casos o pagamento das contas pode acabar atrasando, e não conseguindo pagar as contas no momento, isso pode fazer uma bola de neve, fazendo com que mais contas tenham que ser pagas e trazendo diversas dividas para o indivíduo, por isso, sempre foque em pagar as contas mensais e dívidas para que não traga uma dor de cabeça no futuro.',
      imageUrl: 'finance-mistakes-8.png',
    },
    {
      title: 'Não se organizar junto com a família:',
      text: 'Caso você mora com a família, seja pai, mãe, filhos, marido, esposa ou algum colega que divide a moradia, é importante compartilha sobre seus orçamentos e gastos do dia a dia (o mesmo para o outro indivíduo da casa), para que possam ter noção sobre a situação financeira atual, principalmente caso tenha algum problema financeiro e precise cortar gastos ou ter mais renda, assim eles poderão ajudar para organizar mais os gastos e contribui para alcançar a estabilidade da renda, mesmo que você queira resolver sozinho ou não quer envolver os outros em questões financeiras, é muito importante essa ação para ajudar no seu desenvolvimento sobre financiamento e até dos outros hóspedes da casa.',
      imageUrl: 'finance-mistakes-9.png',
    },
    {
      title: 'Excesso de consumo:',
      text: 'Com certeza um dos problemas que mais ocorre no Brasil (sinceramente até em diversos outros países), o grande consumo que as pessoas acabam tendo, principalmente na sociedade em que vivemos que favorece em muito esse consumo, fazendo que sejamos pegos em promoções, desejo por um determinado produto ou para nos destacamos nas redes sociais com alguma marca de produto, alimentando nosso consumo ainda mais, entretanto, esse consumo em excesso pode acabar cegando nossos gastos e quando percebemos estamos com a nossa renda em falta ou até no vermelho. Para que isso seja evitado é necessário se pergunta se esse produto é necessário no momento ou se você realmente quer esse produto, se caso for, é importante pesquisar pelo melhor preço possível e verificar se não pode ser algum tipo de golpe.',
      imageUrl: 'finance-mistakes-10.png',
    },
    {
      title: 'Falta de investimento:',
      text: 'A questão de muitos não quererem investir pode se dar por vários fatores, por parecer ser uma área muito complexa, precisar ter muito dinheiro, ser algo que depende da sorte, etc.., mas na verdade para quem quer aumentar sua renda e ter uma boa gestão financeira, é essencial investir para que consiga esses objetivos. Mas se engana quem acha que é uma área muito complexa, já que com um tempo de estudo você pode ter uma noção básica para começar a investir, e não precisa ter muito dinheiro para começar a investir, até porque, com pouco dinheiro já pode investir em alguns ativos (mas é importante ter uma renda para investir a cada mês), entretanto, se engana quem acha que é só começar a investir que já vai ficar rico, pois vai depender de muito tempo e investimentos para que comece a aumentar sua renda, e por isso, o importante é que fique acumulando e investimento em ativos para que com isso vá fazer efeito no futuro.',
      imageUrl: 'finance-mistakes-11.png',
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
