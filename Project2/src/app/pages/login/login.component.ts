import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  credencialesIncorrectas: boolean = false; // Variable para rastrear si las credenciales son incorrectas

  constructor(private router: Router, private fb: FormBuilder, private appService: AppService) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  iniciarSesion() {
    const usuario = this.loginForm.get('usuario')?.value;
    const contraseña = this.loginForm.get('contraseña')?.value;

    const registrosGuardados = this.appService.obtenerRegistros();

    // Verifica las credenciales del usuario
    const usuarioValido = registrosGuardados.some((registro) => {
      return registro.correo === usuario && registro.password === contraseña;
    });

    if (usuarioValido) {
      // Redirige al usuario a la página de "Ya has entrado"
      this.router.navigate(['/ya-has-entrado']);
    } else {
      // Las credenciales no son correctas
      this.credencialesIncorrectas = true;
    }
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}
