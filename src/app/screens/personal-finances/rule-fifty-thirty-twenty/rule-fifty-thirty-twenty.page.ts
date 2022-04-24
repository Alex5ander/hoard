import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rule-fifty-thirty-twenty',
  templateUrl: './rule-fifty-thirty-twenty.page.html',
  styleUrls: ['./rule-fifty-thirty-twenty.page.scss'],
})
export class RuleFiftyThirtyTwentyPage implements OnInit {

  accordions = [
    {
      title: '50% gastos essenciais.',
      name: 'home-outline',
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
      name: 'cart-outline',
      content: [
        'Viagens',
        'Compras de produtos não essenciais',
        'Restaurante',
        'Cinema',
        'Serviços de streaming ou TV por assinatura'
      ]
    },
    {
      title: '20% metas financeiras dividas, investimentos, ou apenas guardar.',
      name: 'cash-outline',
      content: [
        'Imprevistos',
        'Contas em atraso',
        'Financiamentos imobiliários ou automotivos',
        'Pagar empréstimos',
        'Guardar para uma reserva de emergência'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
