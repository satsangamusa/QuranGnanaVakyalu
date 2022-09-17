import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LettersPageRoutingModule } from './letters-routing.module';

import { LettersPage } from './letters.page';
import { LettersPipe } from './letters-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LettersPageRoutingModule
  ],
  declarations: [LettersPage,LettersPipe]
})
export class LettersPageModule {}
