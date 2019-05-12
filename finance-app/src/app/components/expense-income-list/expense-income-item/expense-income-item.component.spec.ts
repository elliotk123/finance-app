import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseIncomeItemComponent } from './expense-income-item.component';

describe('ExpenseIncomeItemComponent', () => {
  let component: ExpenseIncomeItemComponent;
  let fixture: ComponentFixture<ExpenseIncomeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseIncomeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseIncomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
