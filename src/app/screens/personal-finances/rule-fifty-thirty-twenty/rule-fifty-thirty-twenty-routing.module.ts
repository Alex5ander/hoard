import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuleFiftyThirtyTwentyPage } from './rule-fifty-thirty-twenty.page';

const routes: Routes = [
  {
    path: '',
    component: RuleFiftyThirtyTwentyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuleFiftyThirtyTwentyPageRoutingModule {}
