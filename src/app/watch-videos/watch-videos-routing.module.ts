import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatchVideosPage } from './watch-videos.page';

const routes: Routes = [
  {
    path: '',
    component: WatchVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatchVideosPageRoutingModule {}
