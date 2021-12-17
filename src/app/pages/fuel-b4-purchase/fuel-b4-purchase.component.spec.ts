import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelB4PurchaseComponent } from './fuel-b4-purchase.component';

describe('FuelB4PurchaseComponent', () => {
  let component: FuelB4PurchaseComponent;
  let fixture: ComponentFixture<FuelB4PurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelB4PurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelB4PurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
