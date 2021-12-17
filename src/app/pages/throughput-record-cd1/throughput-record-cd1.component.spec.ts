import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroughputRecordCD1Component } from './throughput-record-cd1.component';

describe('ThroughputRecordCD1Component', () => {
  let component: ThroughputRecordCD1Component;
  let fixture: ComponentFixture<ThroughputRecordCD1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThroughputRecordCD1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThroughputRecordCD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
