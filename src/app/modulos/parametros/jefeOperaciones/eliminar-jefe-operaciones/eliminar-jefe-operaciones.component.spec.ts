import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarJefeOperacionesComponent } from './eliminar-jefe-operaciones.component';

describe('EliminarJefeOperacionesComponent', () => {
  let component: EliminarJefeOperacionesComponent;
  let fixture: ComponentFixture<EliminarJefeOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarJefeOperacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarJefeOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
