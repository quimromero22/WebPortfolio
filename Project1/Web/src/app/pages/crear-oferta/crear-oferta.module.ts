import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CrearOfertaComponent } from './crear-oferta.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrearOfertaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrearOfertaModule {}
