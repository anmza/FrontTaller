import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolicitudRevisionComponent } from './crear-solicitud-revision.component';

describe('CrearSolicitudRevisionComponent', () => {
  let component: CrearSolicitudRevisionComponent;
  let fixture: ComponentFixture<CrearSolicitudRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSolicitudRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSolicitudRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
