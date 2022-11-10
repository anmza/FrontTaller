import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteRevisionMensualComponent } from './reporte-revision-mensual.component';

describe('ReporteRevisionMensualComponent', () => {
  let component: ReporteRevisionMensualComponent;
  let fixture: ComponentFixture<ReporteRevisionMensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteRevisionMensualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteRevisionMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
