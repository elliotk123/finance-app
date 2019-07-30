import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBarItemComponent } from './summary-bar-item.component';

describe('SummaryBarItemComponent', () => {
  let component: SummaryBarItemComponent;
  let fixture: ComponentFixture<SummaryBarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryBarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
