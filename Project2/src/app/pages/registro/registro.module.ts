import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro.component'; 

@NgModule({
  declarations: [RegistroComponent], 
  imports: [CommonModule, FormsModule, ReactiveFormsModule], 
})
export class RegistroModule {}
