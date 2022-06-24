import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  basicContent = [
    {
      title: 'Organização financeira',
      description:
        'Como se organizar de forma simples para reduzir problemas financeiros',
      routerLink: 'financial-organization',
      imageUrl: 'assets/finacial-organization.svg',
    },
    {
      title: 'Regra 50-30-20',
      description:
        'Aqui você você vai conhecer um metódo para organizar seu orçamento',
      routerLink: 'rule-fifty-thirty-twenty',
      imageUrl: 'assets/graph-pie.svg',
    },
    {
      title: 'Tipos de reservas',
      description:
        'Aqui você vai conhecer alguns tipos de reservas financeiras, e para que elas devem ser usadas',
      routerLink: 'types-of-financial-reserve',
      imageUrl: 'assets/finance-saving.svg',
    },
  ];

  advancedContent = [
    {
      title: 'Criptomoedas',
      description: 'O que são criptomoedas?',
      routerLink: 'cryptocurrencies',
      imageUrl: 'assets/images/cryptocurrencies.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // const presentation = localStorage.getItem('presentation');
    // if(!presentation) {
    //   localStorage.setItem('presentation', '1');
    //   this.router.navigateByUrl('/presentation', { replaceUrl: true });
    // }
  }
}
