import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoPageRoutingModule } from './ingreso-routing.module';

import { IngresoPage } from './ingreso.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsService } from 'src/app/services/products.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoPageRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[ProductsService],
  declarations: [IngresoPage]
})
export class IngresoPageModule {}
