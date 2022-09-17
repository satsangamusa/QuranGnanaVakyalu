import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductionPageRoutingModule } from './introduction-routing.module';


import { IntroductionPage } from './introduction.page';
import { IntroductionPipe } from 'src/app/introduction/inroduction-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductionPageRoutingModule
  ],
  declarations: [IntroductionPage,IntroductionPipe]
})
export class IntroductionPageModule {}
