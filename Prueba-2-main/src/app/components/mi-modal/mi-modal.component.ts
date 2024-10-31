import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-mi-modal',
  templateUrl: './mi-modal.component.html',
  styleUrls: ['./mi-modal.component.scss'],
})
export class MiModalComponent  implements OnInit {

  constructor(private modalController: ModalController) { }
  autoCloseModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
    setTimeout(() => {
      this.autoCloseModal();
    }, 1000);
  }

}
