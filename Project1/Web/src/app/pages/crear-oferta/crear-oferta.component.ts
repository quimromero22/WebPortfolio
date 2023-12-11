import { Component } from '@angular/core';
import { OfertaService } from '../../services/oferta.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-crear-oferta',
  templateUrl: './crear-oferta.component.html',
  styleUrls: ['./crear-oferta.component.css'],
})
export class CrearOfertaComponent {
  ofertaForm: FormGroup;
  errors: any = {};
  errorMensaje: string = '';

  isAuthenticatedUser(): boolean {
    return this.authService.isAuthenticatedUser();
  }

  constructor(
    private ofertaService: OfertaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.ofertaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      empresa: ['', Validators.required],
      salario: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      ciudad: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  crearOferta() {
    this.errors = {};
    if (this.ofertaForm.valid) {
      const nuevaOferta = {
        titulo: this.ofertaForm.value.titulo,
        descripcion: this.ofertaForm.value.descripcion,
        empresa: this.ofertaForm.value.empresa,
        salario: this.ofertaForm.value.salario,
        ciudad: this.ofertaForm.value.ciudad,
        email: this.ofertaForm.value.email,
      };

      this.ofertaService.insertarOferta(nuevaOferta).subscribe(
        (response: any) => {
          this.router.navigate(['/ofertas']);
          console.log('Oferta creada con éxito:', response);
        },
        (error: any) => {
          if (error.status === 401) {
            this.errorMensaje = 'Credenciales incorrectas';
          } else if (error.status === 400) {
            this.errorMensaje = 'Las ofertas nuevas no pueden tener id';
          } else {
            this.errorMensaje =
              'Error al crear la oferta. Por favor, inténtelo de nuevo más tarde.';
          }
        }
      );
    } else {
      this.markFormGroupTouched(this.ofertaForm);
      this.errorMensaje = 'Por favor, complete todos los campos obligatorios correctamente.';
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
