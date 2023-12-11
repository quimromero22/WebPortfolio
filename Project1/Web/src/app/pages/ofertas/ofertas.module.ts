import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OfertasComponent } from './ofertas.component';

@NgModule({
  declarations: [OfertasComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class OfertasModule {}
