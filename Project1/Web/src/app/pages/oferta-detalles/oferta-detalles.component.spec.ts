import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaDetallesComponent } from './oferta-detalles.component';

describe('OfertaDetallesComponent', () => {
  let component: OfertaDetallesComponent;
  let fixture: ComponentFixture<OfertaDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfertaDetallesComponent]
    });
    fixture = TestBed.createComponent(OfertaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
