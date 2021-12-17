import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroughputRecordB4Component } from './throughput-record-b4.component';

describe('ThroughputRecordB4Component', () => {
  let component: ThroughputRecordB4Component;
  let fixture: ComponentFixture<ThroughputRecordB4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThroughputRecordB4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThroughputRecordB4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
