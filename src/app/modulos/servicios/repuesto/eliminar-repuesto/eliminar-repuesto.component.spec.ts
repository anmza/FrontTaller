import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRepuestoComponent } from './eliminar-repuesto.component';

describe('EliminarRepuestoComponent', () => {
  let component: EliminarRepuestoComponent;
  let fixture: ComponentFixture<EliminarRepuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarRepuestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarRepuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
