import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { IonRouterOutlet, ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  items = [
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

  constructor(private platform: Platform, private ionRouterOutlet: IonRouterOutlet, public modal: ModalController, private router: Router) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if(this.ionRouterOutlet.activatedView.stackId === 'home' && !this.ionRouterOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }

  ngOnInit(): void {
    const presentation = localStorage.getItem('presentation');
    if(!presentation) {
      localStorage.setItem('presentation', '1');
      this.router.navigateByUrl('/presentation', { replaceUrl: true });
    }
  }
}
