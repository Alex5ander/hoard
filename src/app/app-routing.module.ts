import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
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
    path: 'rule-fifty-thirty-twenty',
    loadChildren: () => import('./screens/rule-fifty-thirty-twenty/rule-fifty-thirty-twenty.module').then(e => e.RuleFiftyThirtyTwentyPageModule)
  },
  {
    path: 'financial-organization',
    loadChildren: () => import('./screens/financial-organization/financial-organization.module').then(e => e.FinancialOrganizationPageModule)
  },
  {
    path: 'types-of-financial-reserve',
    loadChildren: () => import('./screens/types-of-financial-reserve/types-of-financial-reserve.module').then(e => e.TypesOfFinancialReservePageModule)
  },
  {
    path: 'memory-game',
    loadChildren: () => import('./screens/memory-game/memory-game.module').then(e => e.MemoryGamePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./screens/presentation/presentation.module').then( m => m.PresentationPageModule)
  },
  {
    path: 'cryptocurrencies',
    loadChildren: () => import('./screens/cryptocurrencies/cryptocurrencies.module').then( m => m.CryptocurrenciesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
