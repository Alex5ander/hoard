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
      routerLink: 'life-standard'
    },
    {
      title: 'Erros de finanças',
      description: 'Conheça os erros mais comuns, ao gerenciar o dinheiro, e como podem ser evitados',
      routerLink: '#'
    },
    {
      title: 'Organização financeira',
      description: 'Como se organizar de forma simples para reduzir problemas financeiros',
      routerLink: 'financial-organization'
    },
    {
      title: 'Regra 50-30-20',
      description: 'Aqui você você vai conhecer um metódo para organizar seu orçamento',
      routerLink: 'rule-fifty-thirty-twenty'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
