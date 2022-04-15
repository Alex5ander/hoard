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
  ];

  constructor() { }

  ngOnInit() {
  }

}
