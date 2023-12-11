import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OfertaDetallesComponent } from './pages/oferta-detalles/oferta-detalles.component';
import { LoginComponent } from './pages/login/login.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { CrearOfertaComponent } from './pages/crear-oferta/crear-oferta.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'oferta/:id', component: OfertaDetallesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'crear-oferta', component: CrearOfertaComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
