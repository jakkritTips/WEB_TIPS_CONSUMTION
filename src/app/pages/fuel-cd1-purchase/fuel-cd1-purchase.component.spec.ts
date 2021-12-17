import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelCD1PurchaseComponent } from './fuel-cd1-purchase.component';

describe('FuelCD1PurchaseComponent', () => {
  let component: FuelCD1PurchaseComponent;
  let fixture: ComponentFixture<FuelCD1PurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelCD1PurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelCD1PurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
