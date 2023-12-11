import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm: FormGroup;
  registroHabilitado: boolean = false; // Boton deshabilitado

  constructor(private router: Router, private fb: FormBuilder, private appService: AppService) {
    this.registroForm = this.fb.group({
      nombreapellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: [''],
      localidad: [''],
      provincia: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      condiciones: [false, Validators.requiredTrue]
    }, {
      validators: this.passwordsMatchValidator // Validador para que las contraseñas sean iguales
    });

    // Escucha los cambios en el formulario para habilitar/deshabilitar el botón
    this.registroForm.valueChanges.subscribe(() => {
      this.registroHabilitado = this.validarCamposObligatorios() && !this.registroForm.hasError('passwordMismatch');
    });
  }

  // Función para validar que las contraseñas coincidan
  passwordsMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    if (password.value === confirmPassword.value) {
      return null;
    }

    return { 'passwordMismatch': true };
  }

  // Función para validar campos obligatorios del formulario
  validarCamposObligatorios(): boolean {
    const camposObligatorios = ['nombreapellidos', 'telefono', 'correo', 'password', 'confirmPassword', 'condiciones'];

    for (const campo of camposObligatorios) {
      if (!this.registroForm.get(campo)?.value) {
        return false;
      }
    }

    return true;
  }

  registrar() {
    if (this.validarCamposObligatorios() && !this.registroForm.hasError('passwordMismatch')) {
      // Si todas las validaciones son exitosas, habilita el botón
      this.registroHabilitado = true;

      // Guarda los datos de registro usando el servicio
      this.appService.guardarRegistro(this.registroForm.value);

      // Redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
    } else {
      // Si las validaciones no son exitosas, deshabilita el botón
      this.registroHabilitado = false;
    }
  }

  volverInicio() {
    this.router.navigate(['/login']);
  }
}
