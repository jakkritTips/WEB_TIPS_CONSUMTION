import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelBudgetPerMonthComponent } from './fuel-budget-per-month.component';

describe('FuelBudgetPerMonthComponent', () => {
  let component: FuelBudgetPerMonthComponent;
  let fixture: ComponentFixture<FuelBudgetPerMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelBudgetPerMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelBudgetPerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
