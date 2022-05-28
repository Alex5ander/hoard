import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types-of-financial-reserve',
  templateUrl: './types-of-financial-reserve.page.html',
  styleUrls: ['./types-of-financial-reserve.page.scss'],
})
export class TypesOfFinancialReservePage implements OnInit {
  contents = [
    {
      image: 'assets/images/piggy-bank-ge83ab834a_640.jpg',
      title: 'Reserva de emergência',
      content:
        'É um valor reservado para você usar quando realmente precisar, perídos de desemprego, gastos com saúde, mudança de cidade, estado ou país, viagens não planejadas, ter uma reserva de emergência lhe deixara mais seguro em casos de imprevistos.'
    },
    {
      image: 'assets/images/black-g88ed80db7_640.png',
      title: 'Reserva de oportunidade',
      content:
        'É um valor reservado para aproveitar momentos oportunos que possam aparecer, como black friday, promoções, quedas em preços de ações ou criptomoedas.'
    },
    {
      image: 'assets/images/bitcoin-gc5793497f_640.png',
      title: 'Reserva de valor',
      content:
        'É um meio de proteção contra crises, ou seja seu dinheiro não corre o risco de desvalorizar com o tempo, para isso você precisa criar uma reserva que consiste em ativos, como ouro, criptomoedas e imóveis.'
    },
    {

      image: 'assets/images/staff-g.png',
      title: 'Breve observação',
      content: 'Ter alguma reserva é algo importante, não só em casos de desemprego, mas também em caso de situações que muitas vezes não esperamos, e podemos ser pegos de surpresa, então por isso comece hoje uma reserva, de 1, 2 ou 4 meses dependendo de suas necessidades.',
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
