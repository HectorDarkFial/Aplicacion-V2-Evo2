import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';


@NgModule({
  declarations: [FooterComponent,ToolbarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FooterComponent,ToolbarComponent]
})
export class SharedModule { }
