import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseIncomeListComponent } from './expense-income-list.component';

describe('ExpenseIncomeListComponent', () => {
  let component: ExpenseIncomeListComponent;
  let fixture: ComponentFixture<ExpenseIncomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseIncomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseIncomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
