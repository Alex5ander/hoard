import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-finances',
  templateUrl: './personal-finances.page.html',
  styleUrls: ['./personal-finances.page.scss'],
})
export class PersonalFinancesPage implements OnInit {

  items = [
    {
      title: 'Como identificar seu padrão de vida',
      description: 'Saber o padrão de vida é um fator muito importante para vida financeira',
      routerLink: 'life-standard',
      imageUrl: 'life-standard.png',
    },
    {
      title: 'Erros de finanças',
      description: 'Conheça os erros mais comuns, ao gerenciar o dinheiro, e como podem ser evitados',
      routerLink: '#',
      imageUrl: 'finance-errors.png'
    },
    {
      title: 'Organização financeira',
      description: 'Como se organizar de forma simples para reduzir problemas financeiros',
      routerLink: 'financial-organization',
      imageUrl: 'financial-organization.png'
    },
    {
      title: 'Regra 50-30-20',
      description: 'Aqui você você vai conhecer um metódo para organizar seu orçamento',
      routerLink: 'rule-fifty-thirty-twenty'
    },
    {
      title: 'Tipos de reservas',
      description: 'Aqui você vai conhecer alguns tipos de reservas financeiras, e para que elas devem ser usadas',
      routerLink: 'types-of-financial-reserve',
      imageUrl: 'types-of-financial-reserve.png'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
