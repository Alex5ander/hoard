import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'personal-finances',
    loadChildren: () => import('../personal-finances/personal-finances.module').then(m => m.PersonalFinancesPageModule)
  },
  {
    path: 'exercises',
    loadChildren: () => import('../exercises/exercises.module').then(m => m.ExercisesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
