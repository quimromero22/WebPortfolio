import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HomeComponent } from './home/home.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { OfertaDetallesComponent } from './oferta-detalles/oferta-detalles.component';
import { CrearOfertaComponent } from './crear-oferta/crear-oferta.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    OfertasComponent,
    OfertaDetallesComponent,
    CrearOfertaComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule {}
