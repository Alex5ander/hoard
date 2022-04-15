import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalFinancesPage } from './personal-finances.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalFinancesPage
  },
  {
    path: 'life-standard',
    loadChildren: () => import('./life-standard/life-standard.module').then(m => m.LifeStandardPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalFinancesPageRoutingModule { }
