import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/authenticate';
  private isAuthenticated: boolean = false;
  private authToken: string | null = null;

  constructor(private http: HttpClient) {}

  // Método para autenticar un usuario y almacenar el token
  autenticarUsuario(credentials: { username: string, password: string }): Observable<any> {
    const body = {
      username: credentials.username,
      password: credentials.password,
      rememberMe: false
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<any>(this.apiUrl, body, httpOptions);
  }

  // Método para establecer el estado de autenticación y guardar el token en sessionStorage
  setAuthenticated(isAuthenticated: boolean, token?: string) {
    this.isAuthenticated = isAuthenticated;
    if (isAuthenticated && token) {
      this.authToken = token;
      this.saveTokenLocally(token);
    } else {
      this.authToken = null;
      this.removeTokenLocally();
    }
  }

  // Método para verificar si un usuario está logueado
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Método para obtener el token
  getIdToken(): string | null {
    return this.authToken || this.getTokenLocally();
  }

  // Método para guardar el token en sessionStorage
  private saveTokenLocally(token: string) {
    sessionStorage.setItem('authToken', token);
  }

  // Método para obtener el token de sessionStorage
  private getTokenLocally(): string | null {
    return sessionStorage.getItem('authToken');
  }

  // Método para eliminar el token de sessionStorage
  private removeTokenLocally() {
    sessionStorage.removeItem('authToken');
  }
}
