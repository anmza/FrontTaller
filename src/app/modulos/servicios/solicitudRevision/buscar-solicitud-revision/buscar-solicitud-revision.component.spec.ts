import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSolicitudRevisionComponent } from './buscar-solicitud-revision.component';

describe('BuscarSolicitudRevisionComponent', () => {
  let component: BuscarSolicitudRevisionComponent;
  let fixture: ComponentFixture<BuscarSolicitudRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarSolicitudRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarSolicitudRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
