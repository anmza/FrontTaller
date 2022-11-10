import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMecanicoComponent } from './editar-mecanico.component';

describe('EditarMecanicoComponent', () => {
  let component: EditarMecanicoComponent;
  let fixture: ComponentFixture<EditarMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMecanicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
