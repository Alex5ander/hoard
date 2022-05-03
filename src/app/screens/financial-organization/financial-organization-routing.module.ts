import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialOrganizationPage } from './financial-organization.page';

const routes: Routes = [
  {
    path: '',
    component: FinancialOrganizationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialOrganizationPageRoutingModule {}
