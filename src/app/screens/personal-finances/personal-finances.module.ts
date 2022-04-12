import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalFinancesPageRoutingModule } from './personal-finances-routing.module';

import { PersonalFinancesPage } from './personal-finances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalFinancesPageRoutingModule
  ],
  declarations: [PersonalFinancesPage]
})
export class PersonalFinancesPageModule {}
