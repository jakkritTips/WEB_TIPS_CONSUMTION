import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelYearlyComponent } from './fuel-yearly.component';

describe('FuelYearlyComponent', () => {
  let component: FuelYearlyComponent;
  let fixture: ComponentFixture<FuelYearlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelYearlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelYearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
