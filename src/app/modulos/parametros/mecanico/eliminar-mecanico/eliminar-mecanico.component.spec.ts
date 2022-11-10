import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMecanicoComponent } from './eliminar-mecanico.component';

describe('EliminarMecanicoComponent', () => {
  let component: EliminarMecanicoComponent;
  let fixture: ComponentFixture<EliminarMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMecanicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
