import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { EntradoComponent } from './pages/login/entrado/entrado.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent }, // Ruta para el componente de registro
  { path: 'login', component: LoginComponent }, // Ruta para el componente de inicio de sesión
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'ya-has-entrado', component: EntradoComponent } // Ruta para el componente ya has entrado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa las rutas definidas
  exports: [RouterModule] // Exporta el módulo de enrutamiento
})
export class AppRoutingModule { }
