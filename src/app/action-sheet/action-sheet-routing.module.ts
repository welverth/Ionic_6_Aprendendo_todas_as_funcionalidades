import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetPage } from './action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetPage,
    children: [
      {
        path: 'alert',
        loadChildren: () => import('../alert/alert.module').then( m => m.AlertPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetPageRoutingModule {}
