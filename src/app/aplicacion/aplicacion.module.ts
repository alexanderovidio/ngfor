import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AplicacionRoutingModule } from './aplicacion-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProductoComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule, AplicacionRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class AplicacionModule { }
