import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifeStandardPage } from './life-standard.page';

const routes: Routes = [
  {
    path: '',
    component: LifeStandardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifeStandardPageRoutingModule {}
