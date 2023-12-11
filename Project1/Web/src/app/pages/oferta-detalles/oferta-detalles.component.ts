import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from '../../services/oferta.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-oferta-detalles',
  templateUrl: './oferta-detalles.component.html',
  styleUrls: ['./oferta-detalles.component.css']
})
export class OfertaDetallesComponent implements OnInit {
  oferta: any;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertaService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.obtenerDetallesOferta();
  }
  
  obtenerDetallesOferta() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.ofertaService.obtenerOfertaPorId(id).subscribe(
        (data: any) => {
          this.oferta = data;
        },
        (error: any) => {
          console.error('Error al obtener los detalles de la oferta:', error);
        }
      );
    }
  }  
}
