import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children:[
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          },
          {
            path: 'personal-finances',
            loadChildren: () => import('../personal-finances/personal-finances.module').then(m => m.PersonalFinancesPageModule)
          },
          {
            path: 'exercises',
            loadChildren: () => import('../exercises/exercises.module').then(m => m.ExercisesPageModule)
          },
        ]
      },
      {
        path: 'calculators',
        children: [
          {
            path: '',
            loadChildren: () => import('../calculators/calculators.module').then(m => m.CalculatorsPageModule)
          },
          {
            path: 'simple-interest',
            loadChildren: () => import('../simple-interest/simple-interest.module').then(m => m.SimpleInterestPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
