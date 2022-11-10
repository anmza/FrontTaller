import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSolicitudRevisionComponent } from './editar-solicitud-revision.component';

describe('EditarSolicitudRevisionComponent', () => {
  let component: EditarSolicitudRevisionComponent;
  let fixture: ComponentFixture<EditarSolicitudRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSolicitudRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSolicitudRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
