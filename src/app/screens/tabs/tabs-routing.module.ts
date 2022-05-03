import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'calculators',
        loadChildren: () => import('../calculators/calculators.module').then( m => m.CalculatorsPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ],
  },
  {
    path: 'simple-interest',
    loadChildren: () => import('../simple-interest/simple-interest.module').then( m => m.SimpleInterestPageModule)
  },
  {
    path: 'compound-interest',
    loadChildren: () => import('../compound-interest/compound-interest.module').then( m => m.CompoundInterestPageModule)
  },
  {
    path: 'exercises',
    loadChildren: () => import('../exercises/exercises.module').then(m => m.ExercisesPageModule)
  },
  {
    path: 'personal-finances',
    loadChildren: () => import('../personal-finances/personal-finances.module').then(m => m.PersonalFinancesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
