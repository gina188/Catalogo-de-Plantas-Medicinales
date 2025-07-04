import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasEditarComponent } from './plantas-editar.component';

describe('PlantasEditarComponent', () => {
  let component: PlantasEditarComponent;
  let fixture: ComponentFixture<PlantasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantasEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
