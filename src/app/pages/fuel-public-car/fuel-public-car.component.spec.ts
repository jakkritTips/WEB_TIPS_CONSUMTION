import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelPublicCarComponent } from './fuel-public-car.component';

describe('FuelPublicCarComponent', () => {
  let component: FuelPublicCarComponent;
  let fixture: ComponentFixture<FuelPublicCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelPublicCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelPublicCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
