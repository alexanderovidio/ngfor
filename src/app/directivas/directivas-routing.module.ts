import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { RouterModule, Routes } from '@angular/router';
import { NgforComponent } from './ngfor/ngfor.component';

const rutas: Routes = [
  {
    path: "",
    children: [
      {path: "ngif", component: NgifComponent},
      {path: "ngfor", component: NgforComponent },
      {path: "**", redirectTo: "home"}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(rutas)
  ]
})
export class DirectivasRoutingModule { }
