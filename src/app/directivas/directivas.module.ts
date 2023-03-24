import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { DirectivasRoutingModule } from './directivas-routing.module';
import { NgforComponent } from './ngfor/ngfor.component';



@NgModule({
  declarations: [
    NgifComponent,
    NgforComponent
  ],
  imports: [
    CommonModule, DirectivasRoutingModule
  ],
  exports: [NgifComponent, NgforComponent]
})
export class DirectivasModule { }
