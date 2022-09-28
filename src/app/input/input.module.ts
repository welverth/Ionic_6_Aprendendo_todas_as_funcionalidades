import { ComponentesModule } from './../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputPageRoutingModule } from './input-routing.module';

import { InputPage } from './input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputPageRoutingModule,
    ComponentesModule
  ],
  declarations: [InputPage]
})
export class InputPageModule {}
