import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteRevisionVehiculoComponent } from './reporte-revision-vehiculo.component';

describe('ReporteRevisionVehiculoComponent', () => {
  let component: ReporteRevisionVehiculoComponent;
  let fixture: ComponentFixture<ReporteRevisionVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteRevisionVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteRevisionVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
