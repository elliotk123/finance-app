import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSpendingComponent } from './track-spending.component';

describe('TrackSpendingComponent', () => {
  let component: TrackSpendingComponent;
  let fixture: ComponentFixture<TrackSpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackSpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
