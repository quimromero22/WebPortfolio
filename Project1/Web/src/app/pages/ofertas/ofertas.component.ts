import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../../services/oferta.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
  ofertas: any[] = [];

  constructor(private ofertaService: OfertaService,
    public authService: AuthService,
    private router: Router,
    private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerOfertas();
  }

  obtenerOfertas() {
    this.ofertaService.obtenerOfertas().subscribe(
      (data: any[]) => {
        this.ofertas = data;
      },
      (error: any) => {
        console.error('Error al obtener la lista de ofertas:', error);
      }
    );
  }

  eliminarOferta(id: number) {
    let token = this.authService.getIdToken();
  
    if (!token) {
      const localStorageToken = localStorage.getItem('idToken');
  
      if (localStorageToken) {
        token = localStorageToken;
      } else {
        console.error('No se proporcionó un token de autenticación.');
        return;
      }
      window.location.reload();
    }
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    const url = `http://localhost:8080/api/ofertas/${id}`;
  
    this.http.delete(url, { headers }).subscribe(
      (response: any) => {
        console.log('Oferta eliminada con éxito', response);
      },
      (error: any) => {
        if (error.status === 401) {
          console.error('Credenciales incorrectas');
        } else if (error.status === 404) {
          console.error('No existe la oferta');
        } else {
          console.error('Error al eliminar la oferta', error);
        }
      }
    );
  }
  
  cerrarSesion() {
    this.authService.setAuthenticated(false);
    this.router.navigate(['/']);
  }
}
