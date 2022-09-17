import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KISSPage } from './kiss.page';

const routes: Routes = [
  {
    path: '',
    component: KISSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KISSPageRoutingModule {}
