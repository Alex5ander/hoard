import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuntingWordsPageRoutingModule } from './hunting-words-routing.module';

import { HuntingWordsPage } from './hunting-words.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuntingWordsPageRoutingModule
  ],
  declarations: [HuntingWordsPage]
})
export class HuntingWordsPageModule {}
