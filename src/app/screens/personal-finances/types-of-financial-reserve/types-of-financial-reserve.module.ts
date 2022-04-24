import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypesOfFinancialReservePageRoutingModule } from './types-of-financial-reserve-routing.module';

import { TypesOfFinancialReservePage } from './types-of-financial-reserve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypesOfFinancialReservePageRoutingModule
  ],
  declarations: [TypesOfFinancialReservePage]
})
export class TypesOfFinancialReservePageModule {}
