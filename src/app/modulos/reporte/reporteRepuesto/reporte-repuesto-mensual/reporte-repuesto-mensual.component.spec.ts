import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteRepuestoMensualComponent } from './reporte-repuesto-mensual.component';

describe('ReporteRepuestoMensualComponent', () => {
  let component: ReporteRepuestoMensualComponent;
  let fixture: ComponentFixture<ReporteRepuestoMensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteRepuestoMensualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteRepuestoMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
