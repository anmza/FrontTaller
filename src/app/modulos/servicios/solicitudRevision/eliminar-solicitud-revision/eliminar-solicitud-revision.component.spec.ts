import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSolicitudRevisionComponent } from './eliminar-solicitud-revision.component';

describe('EliminarSolicitudRevisionComponent', () => {
  let component: EliminarSolicitudRevisionComponent;
  let fixture: ComponentFixture<EliminarSolicitudRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarSolicitudRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarSolicitudRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
