import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { OfertaService } from './services/oferta.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    PagesModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, OfertaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
