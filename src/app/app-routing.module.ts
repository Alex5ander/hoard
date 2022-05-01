import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./screens/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'exercises',
    loadChildren: () => import('./screens/exercises/exercises.module').then(m => m.ExercisesPageModule)
  },
  {
    path: 'personal-finances',
    loadChildren: () => import('./screens/personal-finances/personal-finances.module').then(m => m.PersonalFinancesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
