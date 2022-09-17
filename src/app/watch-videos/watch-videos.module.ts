import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatchVideosPageRoutingModule } from './watch-videos-routing.module';

import { WatchVideosPage } from './watch-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchVideosPageRoutingModule
  ],
  declarations: [WatchVideosPage]
})
export class WatchVideosPageModule {}
