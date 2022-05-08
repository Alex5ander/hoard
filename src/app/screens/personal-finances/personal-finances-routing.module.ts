import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalFinancesPage } from './personal-finances.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalFinancesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalFinancesPageRoutingModule { }
