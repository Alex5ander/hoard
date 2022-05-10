import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceMistakesPageRoutingModule } from './finance-mistakes-routing.module';

import { FinanceMistakesPage } from './finance-mistakes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanceMistakesPageRoutingModule
  ],
  declarations: [FinanceMistakesPage]
})
export class FinanceMistakesPageModule {}
