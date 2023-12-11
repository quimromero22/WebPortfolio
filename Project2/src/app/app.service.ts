import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Este servicio está disponible en toda la aplicación
})
export class AppService {
  private registros: any[] = [];

  constructor() { }

  // Método para guardar datos de registro
  guardarRegistro(registro: any) {
    this.registros.push(registro);
  }

  // Método para obtener todos los registros guardados
  obtenerRegistros() {
    return this.registros;
  }
}
  