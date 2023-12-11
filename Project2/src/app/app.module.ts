import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroModule } from './pages/registro/registro.module';
import { LoginModule } from './pages/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RegistroModule,
    LoginModule,
    RouterModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
