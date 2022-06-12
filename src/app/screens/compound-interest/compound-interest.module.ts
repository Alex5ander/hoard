import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompoundInterestPageRoutingModule } from './compound-interest-routing.module';

import { CompoundInterestPage } from './compound-interest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CompoundInterestPageRoutingModule,
  ],
  declarations: [CompoundInterestPage],
})
export class CompoundInterestPageModule {}
