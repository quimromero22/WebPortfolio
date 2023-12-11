import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = { username: '', password: '', rememberMe: false };
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.autenticarUsuario(this.loginForm.value).subscribe(
        (response: any) => {
          if (response && response.id_token) {
            this.authService.setAuthenticated(true, response.id_token);
            console.log('Token:', response.id_token);
            this.router.navigate(['/ofertas']);
            console.log('Inicio de sesión exitoso');
          } else {
            console.error('Credenciales incorrectas');
          }
        },
        (error) => {
          console.error('Error en inicio de sesión', error);
        }
      );
    } else {
      this.markFormGroupTouched(this.loginForm);
      console.error('Por favor, complete todos los campos obligatorios correctamente.');
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
