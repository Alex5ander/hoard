import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuleFiftyThirtyTwentyPageRoutingModule } from './rule-fifty-thirty-twenty-routing.module';

import { RuleFiftyThirtyTwentyPage } from './rule-fifty-thirty-twenty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RuleFiftyThirtyTwentyPageRoutingModule
  ],
  declarations: [RuleFiftyThirtyTwentyPage]
})
export class RuleFiftyThirtyTwentyPageModule {}
