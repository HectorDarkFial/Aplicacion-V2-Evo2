import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanerQRPageRoutingModule } from './escaner-qr-routing.module';

import { EscanerQRPage } from './escaner-qr.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EscanerQRPageRoutingModule
  ],
  declarations: [EscanerQRPage]
})
export class EscanerQRPageModule {}
