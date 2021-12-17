import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroughputPlanB4Component } from './throughput-plan-b4.component';

describe('ThroughputPlanB4Component', () => {
  let component: ThroughputPlanB4Component;
  let fixture: ComponentFixture<ThroughputPlanB4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThroughputPlanB4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThroughputPlanB4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
