import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LifeStandardPageRoutingModule } from './life-standard-routing.module';

import { LifeStandardPage } from './life-standard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LifeStandardPageRoutingModule
  ],
  declarations: [LifeStandardPage]
})
export class LifeStandardPageModule {}
