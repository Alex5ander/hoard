import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { CryptocurrenciesPageRoutingModule } from './cryptocurrencies-routing.module';

import { CryptocurrenciesPage } from './cryptocurrencies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptocurrenciesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CryptocurrenciesPage]
})
export class CryptocurrenciesPageModule {}
