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
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'calculators',
        loadChildren: () => import('../calculators/calculators.module').then(m => m.CalculatorsPageModule)
      },
      {
        path: 'exercises',
        loadChildren: () => import('../exercises/exercises.module').then( m => m.ExercisesPageModule)
      },
      {
        path: 'games',
        loadChildren: () => import('../games/games.module').then( m => m.GamesPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
