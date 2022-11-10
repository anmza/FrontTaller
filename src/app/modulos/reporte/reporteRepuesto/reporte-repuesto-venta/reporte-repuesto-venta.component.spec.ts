import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteRepuestoVentaComponent } from './reporte-repuesto-venta.component';

describe('ReporteRepuestoVentaComponent', () => {
  let component: ReporteRepuestoVentaComponent;
  let fixture: ComponentFixture<ReporteRepuestoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteRepuestoVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteRepuestoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
