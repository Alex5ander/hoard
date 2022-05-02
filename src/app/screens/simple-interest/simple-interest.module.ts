import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimpleInterestPageRoutingModule } from './simple-interest-routing.module';

import { SimpleInterestPage } from './simple-interest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimpleInterestPageRoutingModule
  ],
  declarations: [SimpleInterestPage]
})
export class SimpleInterestPageModule {}
