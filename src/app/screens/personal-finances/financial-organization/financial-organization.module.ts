import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancialOrganizationPageRoutingModule } from './financial-organization-routing.module';

import { FinancialOrganizationPage } from './financial-organization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinancialOrganizationPageRoutingModule
  ],
  declarations: [FinancialOrganizationPage]
})
export class FinancialOrganizationPageModule {}
