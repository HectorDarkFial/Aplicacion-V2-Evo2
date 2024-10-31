import { Component, OnInit } from '@angular/core';
import { MiModalComponent } from 'src/app/components/mi-modal/mi-modal.component';
import { ModalController } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  items: any;

  constructor(
    private modalController: ModalController,
    private ProductServicesApi: ProductsService

  ) { }

  ngOnInit(): void {

    // Obtener los productos desde el LocalStorage
    const productos = localStorage.getItem('productos');
    if(productos){
      console.log('Productos desde el LocalStorage')
      this.items = JSON.parse(productos); // Se pasa dentro de un arreglo == ARRAY
    }
    else{
      this.ProductServicesApi.ApiObtenerProductos().subscribe((productos)=>{
        this.items = productos;
        console.log('Productos de la Api');
        // Aqui se esta usando LocalStorage para guardar los productos
        localStorage.setItem('productos', JSON.stringify(this.items))
      });
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: MiModalComponent,
    });

    // Lo que esta haciendo es escuchar el evento cuando se cierra el modal
    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        // Si se agregó un nuevo producto, actualizar la lista
        this.actualizarProductos();
      }
    });

    return await modal.present();
  }

  // Método para actualizar la lista de productos
  private actualizarProductos() {
    this.ProductServicesApi.ApiObtenerProductos().subscribe((productos) => {
      this.items = productos;
      // Actualizar también el localStorage
      localStorage.setItem('productos', JSON.stringify(this.items));
    });
  }
}
