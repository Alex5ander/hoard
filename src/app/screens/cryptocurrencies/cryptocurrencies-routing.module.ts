import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptocurrenciesPage } from './cryptocurrencies.page';

const routes: Routes = [
  {
    path: '',
    component: CryptocurrenciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptocurrenciesPageRoutingModule {}
