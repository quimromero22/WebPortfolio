import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfertaService } from '../../services/oferta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ofertas: any[] = [];

  constructor(private router: Router, private ofertaService: OfertaService) { }

  ngOnInit() {
    // Obtén la lista de ofertas cuando se cargue la página
    this.ofertaService.obtenerOfertas().subscribe(
      (data: any) => {
        this.ofertas = data;
      },
      (error: any) => {
        console.error('Error al obtener las ofertas: ', error);
      }
    );
  }
}
