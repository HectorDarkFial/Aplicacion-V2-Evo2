import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscanerQRPage } from './escaner-qr.page';

const routes: Routes = [
  {
    path: '',
    component: EscanerQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscanerQRPageRoutingModule {}
