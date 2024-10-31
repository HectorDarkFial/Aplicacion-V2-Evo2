import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'despacho',
    loadChildren: () => import('./Pages/despacho/despacho.module').then( m => m.DespachoPageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./Pages/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./Pages/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'escaner-qr',
    loadChildren: () => import('./escaner-qr/escaner-qr.module').then( m => m.EscanerQRPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
