import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroughputPlanCD1Component } from './throughput-plan-cd1.component';

describe('ThroughputPlanCD1Component', () => {
  let component: ThroughputPlanCD1Component;
  let fixture: ComponentFixture<ThroughputPlanCD1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThroughputPlanCD1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThroughputPlanCD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
