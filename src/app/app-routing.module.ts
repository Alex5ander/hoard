import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'compound-interest',
    loadChildren: () => import('./screens/compound-interest/compound-interest.module').then(m => m.CompoundInterestPageModule)
  },
  {
    path: 'simple-interest',
    loadChildren: () => import('./screens/simple-interest/simple-interest.module').then(m => m.SimpleInterestPageModule)
  },
  {
    path: 'personal-finances',
    loadChildren: () => import('./screens/personal-finances/personal-finances.module').then(m => m.PersonalFinancesPageModule)
  },
  {
    path: 'memory-game',
    loadChildren: () => import('./screens/memory-game/memory-game.module').then( m => m.MemoryGamePageModule)
  },
  {
    path: 'hunting-words',
    loadChildren: () => import('./screens/hunting-words/hunting-words.module').then( m => m.HuntingWordsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
