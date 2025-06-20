import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasDetalleComponent } from './plantas-detalle.component';

describe('PlantasDetalleComponent', () => {
  let component: PlantasDetalleComponent;
  let fixture: ComponentFixture<PlantasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantasDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
