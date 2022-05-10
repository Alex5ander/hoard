import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalFinancesPage } from './personal-finances.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalFinancesPage,
  },
  {
    path: 'financial-organization',
    loadChildren: () => import('../financial-organization/financial-organization.module').then(m => m.FinancialOrganizationPageModule)
  },
  {
    path: 'life-standard',
    loadChildren: () => import('../life-standard/life-standard.module').then(m => m.LifeStandardPageModule)
  },
  {
    path: 'rule-fifty-thirty-twenty',
    loadChildren: () => import('../rule-fifty-thirty-twenty/rule-fifty-thirty-twenty.module').then(m => m.RuleFiftyThirtyTwentyPageModule)
  },
  {
    path: 'types-of-financial-reserve',
    loadChildren: () => import('../types-of-financial-reserve/types-of-financial-reserve.module').then(m => m.TypesOfFinancialReservePageModule)
  },
  {
    path: 'finance-mistakes',
    loadChildren: () => import('../finance-mistakes/finance-mistakes-routing.module').then(m => m.FinanceMistakesPageRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalFinancesPageRoutingModule { }
