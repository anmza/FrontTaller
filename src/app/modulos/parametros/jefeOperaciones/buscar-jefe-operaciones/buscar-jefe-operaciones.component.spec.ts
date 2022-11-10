import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarJefeOperacionesComponent } from './buscar-jefe-operaciones.component';

describe('BuscarJefeOperacionesComponent', () => {
  let component: BuscarJefeOperacionesComponent;
  let fixture: ComponentFixture<BuscarJefeOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarJefeOperacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarJefeOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
