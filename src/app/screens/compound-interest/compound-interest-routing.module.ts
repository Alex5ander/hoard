import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompoundInterestPage } from './compound-interest.page';

const routes: Routes = [
  {
    path: '',
    component: CompoundInterestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompoundInterestPageRoutingModule {}
