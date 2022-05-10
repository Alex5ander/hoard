import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/tabs/tabs.module').then( m => m.TabsPageModule)
  },  {
    path: 'finance-mistakes',
    loadChildren: () => import('./screens/finance-mistakes/finance-mistakes.module').then( m => m.FinanceMistakesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
