import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMecanicoComponent } from './buscar-mecanico.component';

describe('BuscarMecanicoComponent', () => {
  let component: BuscarMecanicoComponent;
  let fixture: ComponentFixture<BuscarMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarMecanicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
