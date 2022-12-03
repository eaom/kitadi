import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovimentosPage } from './movimentos.page';

const routes: Routes = [
  {
    path: '',
    component: MovimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovimentosPageRoutingModule {}
