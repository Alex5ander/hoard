import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-finances',
  templateUrl: './personal-finances.page.html',
  styleUrls: ['./personal-finances.page.scss'],
})
export class PersonalFinancesPage implements OnInit {

  items = [
    {
      title:'Como identificar seu padrão de vida',
      subtitle: 'Conheça os erros mais comuns, ao gerenciar o dinheiro, e como podem ser evitados'
    },
    {
      title:'Erro de finanças',
      subtitle: 'Conheça os erros mais comuns, ao gerenciar o dinheiro, e como podem ser evitados'
    },
    {
      title:'Organização financeira',
      subtitle: 'Como se organizar de forma simples para reduzir problemas financeiros'
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
