import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceMistakesPage } from './finance-mistakes.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceMistakesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceMistakesPageRoutingModule {}
