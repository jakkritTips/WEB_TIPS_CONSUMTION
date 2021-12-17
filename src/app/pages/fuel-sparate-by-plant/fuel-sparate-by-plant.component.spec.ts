import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelSparateByPlantComponent } from './fuel-sparate-by-plant.component';

describe('FuelSparateByPlantComponent', () => {
  let component: FuelSparateByPlantComponent;
  let fixture: ComponentFixture<FuelSparateByPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelSparateByPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelSparateByPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
