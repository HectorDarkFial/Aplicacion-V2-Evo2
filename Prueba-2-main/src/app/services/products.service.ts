import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaz que define la estructura de un Producto
interface Productos {
  id: number;          // Identificador único del producto
  title: string;       // Título o nombre del producto
  price: number;       // Precio del producto
  description: string; // Descripción del producto
  category: string;    // Categoría a la que pertenece
  image: string;       // URL de la imagen del producto
  rating: Rating;      // Objeto con la información de valoración
}

// Interfaz que define la estructura de la valoración de un producto
export interface Rating {
  rate: number;  // Puntuación promedio
  count: number; // Número total de valoraciones del producto
}

@Injectable({
  providedIn: 'root'
})

// Clase de servicio para manejar las operaciones con productos
export class ProductsService {
   // URL privada del API que proporciona los datos de productos
  private url = 'https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php?limit=100'
  
  // Constructor que inyecta el cliente HTTP
  constructor(
    private http: HttpClient
  ) { }

   // Método que obtiene la lista de productos del API
   // Retorna un Observable con un array de Productos
  ApiObtenerProductos():Observable <Productos[]>{
    return this.http.get<Productos[]>(this.url);
  }
}