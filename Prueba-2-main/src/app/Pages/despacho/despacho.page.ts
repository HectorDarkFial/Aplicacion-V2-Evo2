import { Component, OnInit } from '@angular/core';
import { MiModalComponent } from 'src/app/components/mi-modal/mi-modal.component';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-despacho',
  templateUrl: './despacho.page.html',
  styleUrls: ['./despacho.page.scss'],
})
export class DespachoPage implements OnInit {
  // Aqui se define los botones que aparecerán en la alerta de confirmación
  public alertButtons = [
    {
      text: 'No', // Texto del botón de cancelar
      cssClass: 'alert-button-cancel', // Clase CSS para estilo del botón cancelar
    },
    {
      text: 'Si', // Texto del botón de confirmar
      cssClass: 'alert-button-confirm',
    },
  ];

// Constructor que inyecta el controlador de modales
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  // Este método asíncrono para abrir un modal
  async openModal() {

    // Aqui se crea una instancia del (modal) usando el componente MiModalComponent
    const modal = await this.modalController.create({
      component: MiModalComponent,
    });
    return await modal.present(); // Muestra el modal y espera a que se cierre

}
}