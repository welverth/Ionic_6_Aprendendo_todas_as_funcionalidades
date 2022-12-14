import { ComponentesModule } from './../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridsPageRoutingModule } from './grids-routing.module';

import { GridsPage } from './grids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridsPageRoutingModule,
    ComponentesModule
  ],
  declarations: [GridsPage]
})
export class GridsPageModule {}
