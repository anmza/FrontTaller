import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarJefeOperacionesComponent } from './editar-jefe-operaciones.component';

describe('EditarJefeOperacionesComponent', () => {
  let component: EditarJefeOperacionesComponent;
  let fixture: ComponentFixture<EditarJefeOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarJefeOperacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarJefeOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
