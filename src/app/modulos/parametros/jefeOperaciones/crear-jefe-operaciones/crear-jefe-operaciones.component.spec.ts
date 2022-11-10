import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearJefeOperacionesComponent } from './crear-jefe-operaciones.component';

describe('CrearJefeOperacionesComponent', () => {
  let component: CrearJefeOperacionesComponent;
  let fixture: ComponentFixture<CrearJefeOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearJefeOperacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearJefeOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
