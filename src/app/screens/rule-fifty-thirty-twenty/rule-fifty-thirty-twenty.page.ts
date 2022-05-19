import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rule-fifty-thirty-twenty',
  templateUrl: './rule-fifty-thirty-twenty.page.html',
  styleUrls: ['./rule-fifty-thirty-twenty.page.scss'],
})
export class RuleFiftyThirtyTwentyPage implements OnInit {

  contents = [
    {
      title:'Regra 50 30 20',
      text: 'Regra 50 30 20 é um metódo para organizar seu orçamento. Dividindo seu dinheiro em três',
      content: []
    },
    {
      title: '50% gastos essenciais.',
      content: [
        'Alimentação',
        'Conta de água',
        'Conta de energia',
        'Aluguel',
        'Gás de cozinha',
        'Saúde',
        'Educação',
        'Transporte'
      ]
    },
    {
      title: '30% lazer e atividades extracurriculares.',
      content: [
        'Viagens',
        'Compras de produtos não essenciais',
        'Restaurante',
        'Cinema',
        'Serviços de streaming',
        ' TV por assinatura'
      ]
    },
    {
      title: '20% metas financeiras dividas, investimentos, ou apenas guardar.',
      content: [
        'Imprevistos',
        'Contas em atraso',
        'Financiamentos imobiliários ou automotivos',
        'Pagar empréstimos',
        'Guardar para uma reserva de emergência'
      ]
    }
  ];

  index = 0;

  constructor() { }

  ngOnInit() {
  }

  next() {
    if(this.index < this.contents.length - 1) {
      this.index += 1;
    }
  }
  previous() {
    if(this.index > 0) {
      this.index -= 1;
    }
  }
}
