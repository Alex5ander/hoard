import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleInterestPage } from './simple-interest.page';

const routes: Routes = [
  {
    path: '',
    component: SimpleInterestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimpleInterestPageRoutingModule {}
