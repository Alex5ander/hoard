import { Component } from '@angular/core';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [
    {
      title: 'Como identificar seu padrão de vida',
      description: 'Saber o padrão de vida é um fator muito importante para vida financeira',
      routerLink: 'life-standard',
      imageUrl: 'life-standard.png',
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
      routerLink: 'rule-fifty-thirty-twenty',
      imageUrl: 'rule-fifty-thirty-twenty.png',
    },
    {
      title: 'Tipos de reservas',
      description: 'Aqui você vai conhecer alguns tipos de reservas financeiras, e para que elas devem ser usadas',
      routerLink: 'types-of-financial-reserve',
      imageUrl: 'types-of-financial-reserve.png'
    },
  ];

  constructor(private platform: Platform, private ionRouterOutlet: IonRouterOutlet) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if(this.ionRouterOutlet.activatedView.stackId === 'home' && !this.ionRouterOutlet.canGoBack()) {
        const closeApp = confirm('Deseja sair do aplicativo?');
        if(closeApp) {
          App.exitApp();
        }
      }
    });
  }

}
