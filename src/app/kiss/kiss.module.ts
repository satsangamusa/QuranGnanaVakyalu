import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KISSPageRoutingModule } from './kiss-routing.module';

import { KISSPage } from './kiss.page';
import { KissPipe } from './kiss-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KISSPageRoutingModule
  ],
  declarations: [KISSPage,KissPipe]
})
export class KISSPageModule {}
