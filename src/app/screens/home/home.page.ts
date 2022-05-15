import { Component } from '@angular/core';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
