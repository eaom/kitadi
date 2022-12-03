import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovimentosPageRoutingModule } from './movimentos-routing.module';

import { MovimentosPage } from './movimentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovimentosPageRoutingModule
  ],
  declarations: [MovimentosPage]
})
export class MovimentosPageModule {}
