import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  private apiUrl = 'http://localhost:8080/api/ofertas';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthorizationHeaders(): HttpHeaders {
    const id_token = this.authService.getIdToken();
    if (id_token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${id_token}`,
        'Content-Type': 'application/json'
      });
    }
    throw new Error('Usuario no autenticado. Por favor, inicie sesión.');
  }

  obtenerOfertas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obtenerOfertaPorId(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  eliminarOferta(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const httpOptions = { headers: this.getAuthorizationHeaders() };
    return this.http.delete<any>(url, httpOptions);
  }

  insertarOferta(oferta: any): Observable<any> {
    const httpOptions = { headers: this.getAuthorizationHeaders() };
    return this.http.post<any>(this.apiUrl, oferta, httpOptions);
  }
}
